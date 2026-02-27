// =============================================
// FIREBASE CONFIG — Firebase configuration & sync
// =============================================
// Uses Firebase v10 compat SDK (loaded via CDN in index.html).
// If the config below has placeholder values, the app works
// fully offline — Firebase features are simply skipped.

// USER SETUP: Replace this config with your Firebase project config
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// =============================================
// FIREBASE MANAGER
// =============================================

const FirebaseManager = {
  app: null,
  auth: null,
  db: null,
  user: null,
  initialized: false,
  syncEnabled: false,

  /**
   * Initialize Firebase if the SDK is loaded and config is valid.
   * Gracefully degrades — if config has placeholders, skip init.
   */
  init() {
    // If config is not set up, skip entirely (offline-only mode)
    if (!this.isConfigured()) {
      console.info('Firebase: config not set — running in offline mode.');
      return;
    }

    // Check that the Firebase SDK is actually available
    if (typeof firebase === 'undefined') {
      console.warn('Firebase: SDK not loaded — running in offline mode.');
      return;
    }

    try {
      // Initialize the Firebase app
      this.app = firebase.initializeApp(FIREBASE_CONFIG);
      this.auth = firebase.auth();
      this.db = firebase.firestore();

      // Enable offline persistence so Firestore caches locally
      this.db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if (err.code === 'failed-precondition') {
          // Multiple tabs open — persistence can only be enabled in one
          console.warn('Firebase: persistence failed (multiple tabs open).');
        } else if (err.code === 'unimplemented') {
          // Browser doesn't support persistence
          console.warn('Firebase: persistence not supported in this browser.');
        }
      });

      // Listen for auth state changes
      this.auth.onAuthStateChanged((user) => {
        this.user = user || null;
        this.syncEnabled = !!user;
      });

      this.initialized = true;
      console.info('Firebase: initialized successfully.');
    } catch (err) {
      console.error('Firebase: initialization failed —', err);
    }
  },

  /**
   * Sign in with Google popup.
   * Returns the authenticated user or null on failure.
   */
  async loginWithGoogle() {
    if (!this.initialized || !this.auth) return null;

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.auth.signInWithPopup(provider);
      return result.user;
    } catch (err) {
      console.error('Firebase: Google login failed —', err);
      return null;
    }
  },

  /**
   * Sign out the current user.
   */
  async logout() {
    if (!this.auth) return;

    try {
      await this.auth.signOut();
      this.user = null;
      this.syncEnabled = false;
    } catch (err) {
      console.error('Firebase: logout failed —', err);
    }
  },

  /**
   * Save data to Firestore under users/{userId}/{key}.
   * Adds a serverTimestamp for merge resolution.
   * Errors are swallowed so they never break the app.
   */
  async saveToCloud(key, data) {
    if (!this.initialized || !this.user || !this.db) return;

    try {
      const docRef = this.db
        .collection('users')
        .doc(this.user.uid)
        .collection('data')
        .doc(key);

      await docRef.set({
        ...data,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (err) {
      // Fail silently — the app keeps working with localStorage
      console.warn('Firebase: saveToCloud failed for key "' + key + '" —', err);
    }
  },

  /**
   * Load data from Firestore for users/{userId}/{key}.
   * Returns the document data or null.
   */
  async loadFromCloud(key) {
    if (!this.initialized || !this.user || !this.db) return null;

    try {
      const docRef = this.db
        .collection('users')
        .doc(this.user.uid)
        .collection('data')
        .doc(key);

      const doc = await docRef.get();
      return doc.exists ? doc.data() : null;
    } catch (err) {
      console.warn('Firebase: loadFromCloud failed for key "' + key + '" —', err);
      return null;
    }
  },

  /**
   * Sync all data keys between localStorage and Firestore.
   * Compares timestamps — most recent version wins.
   */
  async syncAll() {
    if (!this.initialized || !this.user || !this.db) return;

    const keysToSync = [
      'checklist',
      'waterTracker',
      'streak',
      'workoutProgress',
      'measurements',
      'photos',
      'badges',
      'settings',
      'nutritionLog',
      'shoppingList'
    ];

    for (const key of keysToSync) {
      try {
        // Load local data
        const localRaw = localStorage.getItem('arthur_' + key);
        const localData = localRaw ? JSON.parse(localRaw) : null;
        const localTimestamp = (localData && localData.timestamp) ? localData.timestamp : 0;

        // Load cloud data
        const cloudData = await this.loadFromCloud(key);
        const cloudTimestamp = (cloudData && cloudData.timestamp) ? cloudData.timestamp : 0;

        if (cloudTimestamp > localTimestamp && cloudData) {
          // Cloud is newer — update local
          localStorage.setItem('arthur_' + key, JSON.stringify(cloudData));
        } else if (localTimestamp > cloudTimestamp && localData) {
          // Local is newer — update cloud
          await this.saveToCloud(key, localData);
        }
        // If timestamps are equal, no action needed
      } catch (err) {
        console.warn('Firebase: sync failed for key "' + key + '" —', err);
      }
    }

    console.info('Firebase: syncAll completed.');
  },

  /**
   * Check whether the Firebase config has been filled in
   * (i.e., it no longer has the placeholder API key).
   */
  isConfigured() {
    return FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";
  },

  /**
   * Register a callback for auth state changes.
   */
  onAuthStateChanged(callback) {
    if (this.auth) {
      this.auth.onAuthStateChanged(callback);
    }
  }
};
