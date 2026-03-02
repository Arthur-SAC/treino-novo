# Melhorias Completas App Arthur — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implementar todas as melhorias identificadas na auditoria — conteúdo, badges, UX, personalização — organizadas por camadas (dados → lógica → visual).

**Architecture:** App vanilla JS single-page (SPA) com hash routing. Dados hardcoded em `data.js`, lógica em `app.js`, estrutura+CSS em `index.html`. Sem framework, sem bundler. Teste manual no browser.

**Tech Stack:** Vanilla JS, HTML/CSS inline, Chart.js CDN, Firebase Firestore, Service Worker

---

### Task 1: Adicionar `commonMistakes` a todos os EXERCISE_VIDEOS

**Files:**
- Modify: `data.js:65-101` (EXERCISE_VIDEOS object)

**Step 1: Add commonMistakes field to each exercise video entry**

Add a `commonMistakes` string to each of the exercise video entries in `EXERCISE_VIDEOS`. The field contains the most common form errors for that exercise.

```javascript
// data.js — EXERCISE_VIDEOS — add commonMistakes to each entry
// Example for first few:
"glute-bridge": { youtubeId: "Z-dSAVAkC-8", title: "Glute Bridge — Como fazer corretamente", tips: "Empurre o quadril pro teto, aperte forte no topo 2-3seg", commonMistakes: "Hiperextender a lombar no topo. Empurrar com as costas em vez do glúteo. Pés muito longe do corpo." },
"sumo-squat": { youtubeId: "mOtY705EJYg", title: "Agachamento Sumo com Halter", tips: "Pés bem abertos, dedos pra fora, desça devagar", commonMistakes: "Joelhos caindo pra dentro. Inclinar o tronco pra frente. Não descer o suficiente." },
"leg-press": { youtubeId: "bfHuhQPc4lc", title: "Leg Press pés altos", tips: "Pés no TOPO da plataforma = mais glúteo", commonMistakes: "Pés baixos na plataforma (tira ênfase do glúteo). Travar os joelhos no topo. Tirar a lombar do apoio." },
// ... continue for ALL entries
```

**Full list of commonMistakes for every entry:**

| Key | commonMistakes |
|-----|---------------|
| glute-bridge | Hiperextender a lombar no topo. Empurrar com as costas em vez do glúteo. Pés muito longe do corpo. |
| sumo-squat | Joelhos caindo pra dentro. Inclinar o tronco pra frente. Não descer o suficiente. |
| leg-press | Pés baixos na plataforma (tira ênfase do glúteo). Travar os joelhos no topo. Tirar a lombar do apoio. |
| abdutora | Usar impulso em vez de força. Não segurar na abertura máxima. Inclinar o tronco. |
| adutora | Usar impulso. Não controlar a volta. Sentar torta na máquina. |
| pullover | Dobrar demais os cotovelos. Usar peso excessivo. Arquear a lombar. |
| vacuum | Não soltar todo o ar antes. Prender a respiração errado. Forçar o abdômen pra fora. |
| clamshell | Girar o quadril junto (só o joelho abre). Fazer rápido demais. Não manter os pés juntos. |
| abducao-pe | Inclinar o tronco pro lado oposto. Usar impulso. Não manter o core ativado. |
| lateral-walk | Passos muito largos. Arrastar os pés. Perder a tensão do elástico. |
| stiff | Arredondar as costas. Dobrar os joelhos demais. Não empurrar o quadril pra trás. |
| prancha | Quadril subindo (montanha). Quadril descendo (banana). Não ativar o core. |
| prancha-lateral | Quadril caindo. Ombro não alinhado com o pulso. Não ativar o oblíquo. |
| hip-thrust | Hiperextender a lombar. Posição errada das costas no banco. Pés muito perto ou longe. |
| bulgarian-split-squat | Joelho passando do pé. Tronco inclinado demais. Pé traseiro muito tenso. |
| step-up | Empurrar com o pé de baixo. Não subir pelo calcanhar. Tronco inclinado. |
| good-morning | Arredondar as costas. Dobrar os joelhos demais. Descer rápido demais. |
| kickback-polia | Arquear a lombar. Usar impulso. Não controlar a volta. |
| elevacao-pelvica | Não subir o quadril o suficiente. Pés escorregando. Lombar compensando. |
| dead-bug | Lombar saindo do chão. Movimentos rápidos sem controle. Prender a respiração. |
| cable-pull-through | Puxar com os braços. Não flexionar no quadril. Arredondar as costas. |
| glute-ham-raise | Cair sem controle. Usar as mãos pra ajudar. Não ativar o posterior. |
| kegel | Contrair o abdômen em vez do assoalho pélvico. Prender a respiração. Fazer rápido demais. |
| alongamento-flexor | Joelho passando do pé. Não empurrar o quadril pra frente. Arquear a lombar. |
| worlds-greatest-stretch | Pular etapas da sequência. Não segurar tempo suficiente. Respiração presa. |
| cardio-esteira | Segurar nas barras laterais. Inclinação muito baixa. Velocidade alta demais. |

For warmup/cooldown entries (circulos-quadril, balanco-perna, etc.), add empty string `commonMistakes: ""` since they are simpler movements.

**Step 2: Verify no syntax errors**

Open `data.js` in browser console or run: Open `index.html` in browser and check console for errors.

**Step 3: Commit**

```bash
git add data.js
git commit -m "feat: add commonMistakes to all EXERCISE_VIDEOS entries"
```

---

### Task 2: Add EDUCATIONAL_CONTENT and NIGHT_ROUTINE to data.js

**Files:**
- Modify: `data.js` — add before the closing of the file (after line 2532)

**Step 1: Add EDUCATIONAL_CONTENT object**

Insert before the end of `data.js`:

```javascript
// ─── 18. EDUCATIONAL_CONTENT ────────────────────────────────
const EDUCATIONAL_CONTENT = {
  anteriorPelvic: {
    title: "Anteriorização Pélvica",
    emoji: "🦴",
    content: "A anteriorização pélvica é quando a pelve inclina pra frente, causando hiperlordose (curvatura exagerada na lombar). Isso enfraquece o glúteo e encurta o flexor do quadril. Corrigir isso é ESSENCIAL pro glúteo crescer.",
    howToFix: [
      "Alongar o flexor do quadril diariamente (60seg cada lado)",
      "Fortalecer o glúteo (glute bridge, hip thrust)",
      "Fortalecer o abdômen (prancha, dead bug)",
      "Consciência postural: imaginar 'enfiar o rabo' levemente"
    ]
  },
  tmbTdee: {
    title: "TMB e TDEE — Por que 2.300-2.500 kcal?",
    emoji: "🔢",
    content: "TMB (Taxa Metabólica Basal) é o que seu corpo gasta em repouso. TDEE (Gasto Energético Diário Total) inclui atividade física. Pra Arthur: TMB ~1.600kcal + atividade = TDEE ~2.100kcal. Comemos 2.300-2.500 nos dias de treino pra ter superávit leve (ganhar músculo) e 2.000-2.200 no descanso pra manutenção.",
    macroSplit: "Proteína: 160-170g (1.8g/kg) | Carboidrato: 45-50% | Gordura: 25-30%"
  },
  mindMuscle: {
    title: "Conexão Mente-Músculo",
    emoji: "🧠",
    content: "Pensar no músculo que está trabalhando aumenta a ativação em até 20%. Antes de cada série, toque o músculo com a mão (especialmente o glúteo esquerdo), visualize ele contraindo, e durante o exercício mantenha o foco nele.",
    leftGlute: "O glúteo esquerdo é tipicamente mais fraco (dominância do lado direito). Por isso SEMPRE começamos exercícios unilaterais pelo ESQUERDO — quando está mais descansada e focada."
  },
  hydration: {
    title: "Hidratação — Por que 2.5L?",
    emoji: "💧",
    content: "Água é essencial pra síntese proteica (construção muscular), pra pele saudável, e pra performance no treino. 2.5L é o mínimo pra quem treina. Desidratação de 2% já reduz força em 10%.",
    tips: "Beba 500ml ao acordar. Tenha sempre uma garrafa por perto. Coloque alarme a cada 2h."
  }
};
```

**Step 2: Add NIGHT_ROUTINE object**

```javascript
// ─── 19. NIGHT_ROUTINE ──────────────────────────────────────
const NIGHT_ROUTINE = {
  name: "Rotina Noturna",
  emoji: "🌙",
  steps: [
    {
      name: "Skincare Noturno",
      emoji: "✨",
      items: [
        "Limpar o rosto com sabonete facial",
        "Aplicar Niacinamida (uniformizar tom)",
        "Aplicar Retinol (renovação celular) — 2-3x por semana",
        "Hidratante facial"
      ],
      videoKey: "retinol",
      videoSource: "skincare"
    },
    {
      name: "Clareamento de Regiões",
      emoji: "🧴",
      items: [
        "Aplicar creme clareador nas axilas",
        "Aplicar nas virilhas",
        "Aplicar nos cotovelos e joelhos"
      ]
    },
    {
      name: "Kegel",
      emoji: "💪",
      items: [
        "10 contrações de 5 segundos",
        "10 contrações rápidas (1seg)",
        "Descansar 30seg entre séries"
      ],
      videoKey: "kegel",
      videoSource: "exercise"
    },
    {
      name: "Alongamento Noturno",
      emoji: "🧘",
      items: [
        "Flexor do quadril: 60seg cada lado",
        "Borboleta: 30seg",
        "Cat-cow: 10 repetições lentas"
      ],
      videoKey: "alongamento-flexor",
      videoSource: "exercise"
    },
    {
      name: "Preparar pra Dormir",
      emoji: "😴",
      items: [
        "Touca de cetim no cabelo",
        "Sem tela 30min antes de dormir",
        "Quarto escuro e fresco",
        "Meta: 7-8 horas de sono"
      ]
    }
  ]
};
```

**Step 3: Verify no syntax errors**

Open browser, check console for errors.

**Step 4: Commit**

```bash
git add data.js
git commit -m "feat: add EDUCATIONAL_CONTENT and NIGHT_ROUTINE to data.js"
```

---

### Task 3: Fix all Portuguese accent issues in app.js

**Files:**
- Modify: `app.js` — multiple locations

**Step 1: Fix all unaccented strings**

Find and replace these exact strings:

| Line | Old | New |
|------|-----|-----|
| 45 | `title="Configuracoes"` | `title="Configurações"` |
| 87 | `title="Configuracoes"` | `title="Configurações"` |
| 537 | `'Video nao encontrado'` | `'Vídeo não encontrado'` |
| 963 | `exercicios` | `exercícios` |
| 979 | `Refeicoes de Hoje` | `Refeições de Hoje` |
| 1310 | `hidratacao` | `hidratação` |
| 1553 | `<span>Concluido</span>` | `<span>Concluído</span>` |
| 1702 | `Vacuum concluido!` | `Vacuum concluído!` |
| 3645 | `'Firebase nao configurado'` | `'Firebase não configurado'` |
| 3671 | `<h2>Configuracoes</h2>` | `<h2>Configurações</h2>` |
| 3799 | `'Notificacoes nao suportadas'` | `'Notificações não suportadas'` |

**Step 2: Search for any remaining unaccented strings**

Use Grep to search for common patterns: `nao `, `cao `, `coes`, `ido ` without accents.

**Step 3: Commit**

```bash
git add app.js
git commit -m "fix: corrigir acentos em todas as strings portuguesas"
```

---

### Task 4: VideoModal — show commonMistakes + index.html update

**Files:**
- Modify: `index.html:2848-2859` (video modal HTML)
- Modify: `app.js:525-558` (VideoModal.open method)

**Step 1: Add mistakes element to video modal HTML**

In `index.html`, find the video modal and add after the `video-tips` paragraph (after line 2856):

```html
<p id="video-mistakes" class="video-mistakes"></p>
```

**Step 2: Add CSS for video-mistakes**

In `index.html`, add CSS in the video modal styles section (near line 750):

```css
.video-mistakes {
  color: var(--warning);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(232, 201, 110, 0.1);
  border-left: 3px solid var(--warning);
  border-radius: var(--radius-sm);
  display: none;
}
.video-mistakes.visible {
  display: block;
}
```

**Step 3: Update VideoModal.open() to show commonMistakes**

In `app.js`, modify `VideoModal.open()` (line 553-554 area). After setting video-tips:

```javascript
// After line 554: document.getElementById('video-tips').textContent = video.tips || '';
var mistakesEl = document.getElementById('video-mistakes');
if (mistakesEl) {
  if (video.commonMistakes) {
    mistakesEl.textContent = '\u26a0\ufe0f Erros comuns: ' + video.commonMistakes;
    mistakesEl.classList.add('visible');
  } else {
    mistakesEl.textContent = '';
    mistakesEl.classList.remove('visible');
  }
}
```

**Step 4: Update VideoModal.close() to reset mistakes**

In `app.js`, in the `close()` method (line 560-564), add:

```javascript
var mistakesEl = document.getElementById('video-mistakes');
if (mistakesEl) { mistakesEl.textContent = ''; mistakesEl.classList.remove('visible'); }
```

**Step 5: Test manually**

Open app → Treino → click any exercise video icon → verify tips AND erros comuns appear.

**Step 6: Commit**

```bash
git add app.js index.html
git commit -m "feat: exibir erros comuns no modal de vídeo"
```

---

### Task 5: Implement all 12 badges

**Files:**
- Modify: `app.js` — BadgeManager (line 469), Dashboard.updateStreak (line 1087), SettingsManager phase change (line 3751), CareManager

**Step 1: Add tracking helpers to BadgeManager**

Expand BadgeManager (after line 490) to include helper methods:

```javascript
// Add inside BadgeManager object, before the closing }:

  /**
   * Check all badge conditions. Called on checklist change, phase change, etc.
   */
  checkAll() {
    var streak = StorageManager.getValue('streak', 0);
    if (streak >= 7) this.unlock('streak-7');
    if (streak >= 30) this.unlock('streak-30');

    // Phase badges
    var phase = StorageManager.getValue('currentPhase', 1);
    if (phase >= 2) this.unlock('phase-2');
    if (phase >= 3) this.unlock('phase-3');
    if (phase >= 4) this.unlock('phase-4');

    // Glute awakened: 14 days with workout completed
    var gluteDays = this.countDaysWithChecklist('treino', 365);
    if (gluteDays >= 14) this.unlock('glute-awakened');

    // Hydrated: 7 consecutive days with water checked
    var waterStreak = this.countConsecutiveDays('agua');
    if (waterStreak >= 7) this.unlock('hydrated-7');

    // Skin-30: 30 consecutive days with both skincare items
    var skinStreak = this.countConsecutiveSkincareDays();
    if (skinStreak >= 30) this.unlock('skin-30');

    // First workout
    if (gluteDays >= 1) this.unlock('first-workout');
  },

  /**
   * Count total days a checklist item was checked (looking back N days).
   */
  countDaysWithChecklist(itemId, lookbackDays) {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < lookbackDays; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data[itemId]) count++;
    }
    return count;
  },

  /**
   * Count consecutive days (backwards from today) a checklist item was checked.
   */
  countConsecutiveDays(itemId) {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data[itemId]) {
        count++;
      } else {
        break;
      }
    }
    return count;
  },

  /**
   * Count consecutive days both skincare-manha AND skincare-noite were checked.
   */
  countConsecutiveSkincareDays() {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data['skincare-manha'] && data['skincare-noite']) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
```

**Step 2: Call BadgeManager.checkAll() from Dashboard.updateStreak()**

In `app.js` line 1087-1094, replace the existing badge checks with:

```javascript
updateStreak() {
  var streak = this.calculateStreak();
  StorageManager.setValue('streak', streak);
  BadgeManager.checkAll();
},
```

**Step 3: Call BadgeManager.checkAll() on phase change**

In `app.js` line 3751-3757 (SettingsManager phase change handler), add after the phase is saved:

```javascript
BadgeManager.checkAll();
```

Also in WorkoutManager phase tab handler (lines 1614-1617), add:

```javascript
BadgeManager.checkAll();
```

**Step 4: Remove duplicate badge checks**

Remove the standalone badge checks that were at:
- Line 1092-1093 (streak badges in updateStreak — now handled by checkAll)
- Line 1858-1860 (first-workout in WorkoutManager — now handled by checkAll)

**Step 5: Also call checkAll on photo save and weight save**

In ProgressManager, find where photos and weights are saved and add `BadgeManager.checkAll();` calls. The first-comparison and minus-5/10/20kg badges are already checked in ProgressManager (lines 3383-3387 and 3449-3454), so those can stay as-is.

**Step 6: Test**

Open app → Check skincare-manha and skincare-noite in checklist → verify badges section updates.

**Step 7: Commit**

```bash
git add app.js
git commit -m "feat: implementar todos os 12 badges com verificação automática"
```

---

### Task 6: Contextual greeting

**Files:**
- Modify: `app.js:427-432` (Utils.getGreeting)
- Modify: `app.js:888` (Dashboard greeting)
- Modify: `app.js:37-39` (header greeting)

**Step 1: Expand Utils.getGreeting() to accept context**

Replace the existing `getGreeting()` (lines 427-432) with:

```javascript
getGreeting() {
  var hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
},

getContextGreeting() {
  var base = this.getGreeting();
  var streak = StorageManager.getValue('streak', 0);
  var phase = StorageManager.getValue('currentPhase', 1);

  // Get today's workout name
  var days = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  var today = days[new Date().getDay()];
  var phaseKey = 'fase' + phase;
  var dayData = WORKOUTS[phaseKey] && WORKOUTS[phaseKey].days[today];
  var workoutName = dayData && !dayData.restDay ? dayData.name : null;

  var parts = [base + ', Arthur!'];

  if (workoutName) {
    parts.push('Hoje: ' + workoutName + ' \uD83D\uDCAA');
  } else if (dayData && dayData.restDay) {
    parts.push('Dia de descanso \uD83D\uDE0C');
  }

  if (streak >= 7) {
    parts.push(streak + ' dias de streak \uD83D\uDD25');
  }

  if (phase >= 4) {
    parts.push('Modo Amazona \uD83D\uDC51');
  }

  return parts.join(' | ');
},
```

**Step 2: Update Dashboard render to use contextual greeting**

In `app.js` line 888, change `${Utils.getGreeting()}, Arthur!` to `${Utils.getContextGreeting()}`.

**Step 3: Update header greeting**

In `app.js` line 39, change `Utils.getGreeting() + ', Arthur!'` to `Utils.getContextGreeting()`.

**Step 4: Test**

Open app at different times of day. Verify greeting shows workout name, streak, and Amazona mode.

**Step 5: Commit**

```bash
git add app.js
git commit -m "feat: saudação contextual com treino do dia, streak e fase"
```

---

### Task 7: Meal option toggle

**Files:**
- Modify: `app.js` — NutritionManager section (lines 1890-2288)

**Step 1: Add meal toggle state management**

Find the NutritionManager render method and add option toggling. Each meal card should show a toggle button between optionA and optionB.

In NutritionManager, add a helper to get/save meal preferences:

```javascript
getMealPrefs() {
  var dateStr = new Date().toISOString().slice(0, 10);
  return StorageManager.getValue('mealPrefs_' + dateStr, {});
},

setMealPref(mealIndex, option) {
  var dateStr = new Date().toISOString().slice(0, 10);
  var prefs = this.getMealPrefs();
  prefs[mealIndex] = option;
  StorageManager.setValue('mealPrefs_' + dateStr, prefs);
},
```

**Step 2: Modify meal card rendering**

Find where meal cards are rendered (inside NutritionManager.render or similar method). For each meal that has both optionA and optionB, add:

```javascript
// Determine which option to show
var prefs = self.getMealPrefs();
var selectedOption = prefs[mealIndex] || 'A';
var meal = selectedOption === 'B' ? mealData.optionB : mealData.optionA;
var otherLabel = selectedOption === 'B' ? 'Opção A' : 'Opção B';

// Add toggle button after meal description
html += '<button class="btn btn-sm btn-ghost meal-toggle-btn" data-meal-index="' + mealIndex + '" data-current="' + selectedOption + '">&#128260; ' + otherLabel + '</button>';
```

**Step 3: Add event listener for toggle**

In NutritionManager's event attachment section, add:

```javascript
document.querySelectorAll('.meal-toggle-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var idx = btn.dataset.mealIndex;
    var current = btn.dataset.current;
    var next = current === 'A' ? 'B' : 'A';
    self.setMealPref(idx, next);
    self.render();
  });
});
```

**Step 4: Test**

Open app → Nutrição → click toggle button → verify meal switches between A/B.

**Step 5: Commit**

```bash
git add app.js
git commit -m "feat: toggle entre opção A/B nas refeições"
```

---

### Task 8: Nutritional info card

**Files:**
- Modify: `app.js` — NutritionManager render (lines 1901-1920)
- Modify: `index.html` — add CSS

**Step 1: Add nutrition info card at top of Nutrição tab**

In NutritionManager's render method, add at the beginning of the HTML output:

```javascript
// Add at the top of the nutrition tab content
var infoHtml = '<div class="card glass nutrition-info-card">';
infoHtml += '<h3>\uD83D\uDD22 Suas Metas Nutricionais</h3>';
infoHtml += '<div class="nutrition-macros">';
infoHtml += '<div class="macro-item"><span class="macro-value">2.300-2.500</span><span class="macro-label">kcal treino</span></div>';
infoHtml += '<div class="macro-item"><span class="macro-value">2.000-2.200</span><span class="macro-label">kcal descanso</span></div>';
infoHtml += '<div class="macro-item"><span class="macro-value">160-170g</span><span class="macro-label">proteína</span></div>';
infoHtml += '<div class="macro-item"><span class="macro-value">2.5L</span><span class="macro-label">água</span></div>';
infoHtml += '</div>';
infoHtml += '<p style="font-size:0.8rem; opacity:0.7; margin-top:0.5rem;">TMB ~1.600kcal + atividade = superávit leve pra ganho muscular</p>';
infoHtml += '</div>';
```

**Step 2: Add CSS for nutrition card**

In `index.html`, add:

```css
.nutrition-info-card {
  text-align: center;
  margin-bottom: 1rem;
}
.nutrition-macros {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.macro-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.macro-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary);
  font-family: var(--font-title);
}
.macro-label {
  font-size: 0.75rem;
  opacity: 0.7;
}
```

**Step 3: Test**

Open app → Nutrição → verify info card appears at top.

**Step 4: Commit**

```bash
git add app.js index.html
git commit -m "feat: card de metas nutricionais no topo da aba Nutrição"
```

---

### Task 9: Render Night Routine in Cuidados tab

**Files:**
- Modify: `app.js` — CareManager (lines 2296-2866)

**Step 1: Add Night Routine rendering**

In CareManager's render method, find where the existing care sections are rendered and add a new section for NIGHT_ROUTINE. Add a new method:

```javascript
renderNightRoutine() {
  if (typeof NIGHT_ROUTINE === 'undefined') return '';
  var html = '<div class="card glass night-routine-card">';
  html += '<h3>' + NIGHT_ROUTINE.emoji + ' ' + NIGHT_ROUTINE.name + '</h3>';

  NIGHT_ROUTINE.steps.forEach(function(step) {
    html += '<div class="night-routine-step">';
    html += '<h4 style="color: var(--primary); margin:0.5rem 0 0.25rem;">' + step.emoji + ' ' + step.name + '</h4>';
    html += '<ul style="margin:0; padding-left:1.2rem;">';
    step.items.forEach(function(item) {
      html += '<li style="font-size:0.85rem; margin:0.2rem 0; opacity:0.9;">' + item + '</li>';
    });
    html += '</ul>';
    if (step.videoKey) {
      html += '<button class="btn btn-sm btn-ghost" onclick="VideoModal.open(\'' + step.videoKey + '\', \'' + (step.videoSource || 'exercise') + '\')">\uD83C\uDFAC Ver como fazer</button>';
    }
    html += '</div>';
  });

  html += '</div>';
  return html;
},
```

**Step 2: Call renderNightRoutine() in the Cuidados render**

Find where CareManager.render() builds its HTML and add the night routine section at the end:

```javascript
html += this.renderNightRoutine();
```

**Step 3: Add CSS**

In `index.html`:

```css
.night-routine-card {
  border-left: 3px solid var(--primary);
}
.night-routine-step {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.night-routine-step:last-child {
  border-bottom: none;
}
```

**Step 4: Test**

Open app → Cuidados → scroll down → verify Night Routine card appears with all steps.

**Step 5: Commit**

```bash
git add app.js index.html
git commit -m "feat: rotina noturna integrada na aba Cuidados"
```

---

### Task 10: Enhanced left-side indicator for unilateral exercises

**Files:**
- Modify: `app.js:1417-1420` (startLeft warning in renderExerciseCard)
- Modify: `index.html` — add CSS

**Step 1: Improve the startLeft indicator**

In `app.js`, find the current `startLeft` rendering (line 1417-1420) and replace with:

```javascript
// Start left warning — prominent indicator
if (exercise.startLeft) {
  html += '<div class="start-left-indicator">';
  html += '<span class="side-dot"></span>';
  html += '\uD83D\uDD34 COMECE PELO LADO ESQUERDO';
  html += '</div>';
}
```

**Step 2: Add prominent CSS**

In `index.html`, replace the existing `.start-left-warning` styles (if any) or add:

```css
.start-left-indicator {
  background: linear-gradient(135deg, rgba(232, 113, 113, 0.2), rgba(232, 113, 113, 0.05));
  border: 1px solid var(--danger);
  border-radius: var(--radius-sm);
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--danger);
  animation: pulse-left 2s infinite;
}
@keyframes pulse-left {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

**Step 3: Test**

Open app → Treino → find a unilateral exercise (e.g. Clamshell) → verify the prominent red indicator appears.

**Step 4: Commit**

```bash
git add app.js index.html
git commit -m "feat: indicador visual proeminente para exercícios unilaterais (lado esquerdo)"
```

---

### Task 11: Amazona theme consistency

**Files:**
- Modify: `app.js` — App.init() toast (line 64), SettingsManager notifications

**Step 1: Update welcome toast based on phase**

In `app.js` line 64, replace the generic toast:

```javascript
// Replace: Toast.show('Bem-vinda de volta!', 'success');
var phase = StorageManager.getValue('currentPhase', 1);
var welcomeMsgs = {
  1: 'Bora construir a fundação! \uD83D\uDCAA',
  2: 'Fase de construção — cada série conta! \uD83D\uDD25',
  3: 'Definição ativada — brilha, Arthur! \u2728',
  4: 'Amazona mode ON! Você é imparável! \uD83D\uDC51'
};
Toast.show(welcomeMsgs[phase] || 'Bem-vinda de volta!', 'success');
```

**Step 2: Update notification messages to use Amazona theme**

In SettingsManager, find the notification scheduling (around line 3785+) and update notification titles to include phase-aware messaging.

**Step 3: Commit**

```bash
git add app.js
git commit -m "feat: tema Amazona consistente em toasts e notificações"
```

---

### Task 12: Biweekly photo reminder

**Files:**
- Modify: `app.js` — Dashboard.render() (lines 858-1006)

**Step 1: Add photo reminder check**

In Dashboard.render(), add a photo reminder card. After the greeting section:

```javascript
// Photo reminder — check if > 14 days since last photo
var photoReminder = '';
var lastPhotoDate = StorageManager.getValue('lastPhotoDate', null);
if (lastPhotoDate) {
  var daysSince = Math.floor((Date.now() - new Date(lastPhotoDate).getTime()) / 86400000);
  if (daysSince >= 14) {
    photoReminder = '<div class="card glass photo-reminder" style="border-left:3px solid var(--accent); cursor:pointer;" onclick="Router.navigate(\'progresso\')">';
    photoReminder += '<p style="margin:0;">\uD83D\uDCF8 <strong>Hora de tirar fotos de progresso!</strong></p>';
    photoReminder += '<p style="margin:0.25rem 0 0; font-size:0.85rem; opacity:0.7;">Última foto: ' + Utils.formatDateBR(lastPhotoDate) + ' (' + daysSince + ' dias atrás)</p>';
    photoReminder += '</div>';
  }
} else {
  // Never took a photo
  photoReminder = '<div class="card glass photo-reminder" style="border-left:3px solid var(--accent); cursor:pointer;" onclick="Router.navigate(\'progresso\')">';
  photoReminder += '<p style="margin:0;">\uD83D\uDCF8 <strong>Tire sua primeira foto de progresso!</strong></p>';
  photoReminder += '<p style="margin:0.25rem 0 0; font-size:0.85rem; opacity:0.7;">Fotos a cada 15 dias mostram a transformação</p>';
  photoReminder += '</div>';
}
```

**Step 2: Ensure ProgressManager saves lastPhotoDate**

In ProgressManager, find where photos are saved and add:

```javascript
StorageManager.setValue('lastPhotoDate', new Date().toISOString().slice(0, 10));
```

**Step 3: Commit**

```bash
git add app.js
git commit -m "feat: lembrete de foto quinzenal no dashboard"
```

---

### Task 13: Swipe navigation between tabs

**Files:**
- Modify: `app.js` — Router section (line 99+)

**Step 1: Add swipe detection to Router**

After `Router.init()`, add touch event listeners:

```javascript
// Add inside Router.init() or as a new method Router.initSwipe():
initSwipe() {
  var startX = 0;
  var startY = 0;
  var container = document.getElementById('app-content');
  if (!container) return;

  container.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  container.addEventListener('touchend', function(e) {
    var endX = e.changedTouches[0].clientX;
    var endY = e.changedTouches[0].clientY;
    var diffX = endX - startX;
    var diffY = endY - startY;

    // Only trigger if horizontal swipe > 50px and more horizontal than vertical
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      var currentIdx = Router.pages.indexOf(Router.currentPage);
      if (diffX < 0 && currentIdx < Router.pages.length - 1) {
        // Swipe left = next tab
        Router.navigate(Router.pages[currentIdx + 1]);
      } else if (diffX > 0 && currentIdx > 0) {
        // Swipe right = previous tab
        Router.navigate(Router.pages[currentIdx - 1]);
      }
    }
  }, { passive: true });
},
```

**Step 2: Call initSwipe() from Router.init()**

In Router.init(), add at the end: `this.initSwipe();`

Note: `Router.pages` is `['inicio', 'treino', 'nutricao', 'cuidados', 'progresso']` (line 100). `Router.currentPage` holds the active page. `Router.navigate()` handles page transitions.

**Step 3: Test**

Open app on mobile → swipe left/right → verify tabs change.

**Step 4: Commit**

```bash
git add app.js
git commit -m "feat: navegação por swipe entre abas"
```

---

### Task 14: Final CSS additions + push

**Files:**
- Modify: `index.html` — add any remaining CSS needed
- Push to GitHub

**Step 1: Review and add any missing CSS**

Check that all new elements have proper styling. Add to `index.html`:

```css
/* Photo reminder card */
.photo-reminder {
  animation: pulse-reminder 3s ease-in-out infinite;
}
@keyframes pulse-reminder {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.01); }
}
```

**Step 2: Final commit**

```bash
git add index.html
git commit -m "style: CSS para novos elementos (foto reminder, indicadores)"
```

**Step 3: Push to GitHub**

```bash
git push origin main
```

**Step 4: Test on GitHub Pages**

Open https://arthur-sac.github.io/treino-novo/ and verify all features work.
