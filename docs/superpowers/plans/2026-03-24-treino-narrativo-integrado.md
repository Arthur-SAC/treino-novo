# Treino Narrativo Integrado — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the Treino tab to use narrative cards (matching Meu Dia style), remove all sub-tabs, structure Tuesday/Thursday as real workouts, add sensual bonus card, and tie yoga/rebolar/sensual progression to strength phases.

**Architecture:** Add `narrative` and `why` fields to all exercises in WORKOUTS, warmups, and cooldowns in data.js. Add new data objects (SENSUAL_BONUS, phase maps, milestones). Rewrite WorkoutManager in app.js to render a single narrative flow without sub-tabs. Add bonus_sensual card to DayManager. Add flexibility milestones to ProgressManager.

**Tech Stack:** Vanilla HTML/CSS/JS (ES5/ES6 mix), no frameworks, inline CSS in index.html

**Spec:** `docs/superpowers/specs/2026-03-24-treino-narrativo-integrado-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `data.js` | Modify | Add narrative/why to ~61 exercises + warmups + cooldowns. Add SENSUAL_BONUS, YOGA_PHASE_MAP, REBOLAR_PHASE_MAP, FLEXIBILITY_MILESTONES. Add 4th REBOLAR_STEPS entry. Add bonus_sensual to DAILY_CARDS + DAY_CARD_LAYOUTS. Remove DANCA_SENSUAL, EXERCISE_TECHNIQUE, CARDIO_GUIDE |
| `app.js` | Modify | Rewrite WorkoutManager (lines 1598-2799). Add sensual bonus rendering to DayManager. Add milestones to ProgressManager |
| `index.html` | Modify | Add CSS for exercise cards (series, weight, timer, gif button, mistakes, monthly check) |

---

### Task 1: Add narrative/why to WORKOUTS Fase 1 exercises

**Files:** Modify `data.js` — WORKOUTS.fase1.lowerA.exercises (lines ~2054-2066)

- [ ] **Step 1: Add narrative and why to all 8 Fase 1 exercises**

For each exercise in `WORKOUTS.fase1.lowerA.exercises`, add two new fields: `narrative` (how to execute, 2-3 sentences in Portuguese) and `why` (purpose for amazona goals, 1-2 sentences).

The 8 exercises are: glute bridge, sumo squat, abducao deitada com caneleira, wall sit, stiff com halteres, vacuum, prancha, dead bug.

Example for glute bridge:
```js
narrative: "Deite de costas, joelhos dobrados, pés apoiados no chão na largura do quadril. Empurre o quadril pra cima apertando forte o glúteo no topo — segure 2-3 segundos. Desça devagar controlando.",
why: "O exercício mais importante pra acordar o glúteo. Se ele não ativa aqui, não ativa em nenhum outro exercício. Foque em APERTAR no topo, não em subir alto."
```

Write narratives focused on Arthur's amazona goals: glute growth, hourglass silhouette, thigh development, confidence. Use clear, instructional Portuguese. Each narrative must describe the MOVEMENT (not just the muscle), and each why must connect to her specific goals.

- [ ] **Step 2: Verify syntax**

Run: `node -c data.js` (or equivalent JS syntax check)
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add data.js
git commit -m "feat: narrativas Fase 1 — 8 exercícios com descrição e propósito"
```

---

### Task 2: Add narrative/why to WORKOUTS Fase 2 exercises

**Files:** Modify `data.js` — WORKOUTS.fase2 (lines ~2068-2362)

- [ ] **Step 1: Add narrative and why to all Fase 2 exercises**

Fase 2 has 4 days: Lower A (~8 exercises), Upper (~8 exercises), Lower B (~8 exercises), Gluteo Isolado (~8 exercises). Add `narrative` and `why` fields to every exercise object.

Focus narratives on progressive overload intent — Fase 2 is "Construção" where weight gets heavier and compound movements appear. Connect why to intermediate amazona goals (building glute volume, thigh thickness, upper body proportions for hourglass).

- [ ] **Step 2: Verify syntax**

- [ ] **Step 3: Commit**

```bash
git add data.js
git commit -m "feat: narrativas Fase 2 — ~20 exercícios Lower A/Upper/Lower B/Glúteo Isolado"
```

---

### Task 3: Add narrative/why to WORKOUTS Fase 3 and Fase 4 exercises

**Files:** Modify `data.js` — WORKOUTS.fase3 and WORKOUTS.fase4

- [ ] **Step 1: Add narrative and why to all Fase 3 exercises (~20)**

Fase 3 is "Amazona" — heavier weights, more complex movements. Narratives should reflect confidence and mastery.

- [ ] **Step 2: Add narrative and why to all Fase 4 exercises (~13)**

Fase 4 is "Manutenção" — peak performance. Narratives reflect ownership and personal style.

- [ ] **Step 3: Verify syntax**

- [ ] **Step 4: Commit**

```bash
git add data.js
git commit -m "feat: narrativas Fase 3-4 — ~33 exercícios com descrição e propósito"
```

---

### Task 4: Add narrative/why to warmups and cooldowns

**Files:** Modify `data.js` — WARMUP_LOWER (line ~2902), WARMUP_UPPER (line ~2917), COOLDOWN_LOWER (line ~2929), COOLDOWN_UPPER (line ~2939)

- [ ] **Step 1: Add narrative and why to WARMUP_LOWER items (11 items)**

Each warmup item currently has `name`, `desc`, `time`. Add `narrative` (detailed how-to) and `why` (purpose for the body/training).

Example:
```js
{ name: "Alongamento hip flexor ajoelhado", desc: "30seg cada lado", time: "30seg cada lado",
  narrative: "Ajoelhe com o pé direito à frente, joelho a 90°. Empurre o quadril levemente pra frente até sentir o alongamento na frente da coxa de trás. Segure 30 segundos. Troque de lado.",
  why: "O hip flexor encurtado DESLIGA o glúteo. Se você fica sentada o dia todo, esse alongamento é obrigatório antes de treinar pernas."
}
```

- [ ] **Step 2: Add narrative and why to WARMUP_UPPER items (8 items)**

- [ ] **Step 3: Add narrative and why to COOLDOWN_LOWER items (6 items)**

- [ ] **Step 4: Add narrative and why to COOLDOWN_UPPER items (5 items)**

- [ ] **Step 5: Verify syntax and commit**

```bash
git add data.js
git commit -m "feat: narrativas aquecimento e cooldown — 30 movimentos detalhados"
```

---

### Task 5: Add new data objects (phase maps, SENSUAL_BONUS, milestones, REBOLAR update)

**Files:** Modify `data.js`

- [ ] **Step 1: Add YOGA_PHASE_MAP and REBOLAR_PHASE_MAP after REBOLAR_STEPS**

```js
const YOGA_PHASE_MAP = {
  1: "iniciante",
  2: "intermediario",
  3: "avancado",
  4: "avancado"
};

const REBOLAR_PHASE_MAP = {
  1: 0,
  2: 1,
  3: 2,
  4: 3
};
```

- [ ] **Step 2: Add 4th entry to REBOLAR_STEPS**

Add after the existing 3 entries:
```js
{ fase: "Mês 6+ · Livre", steps: [
  "Agora você tem controle e ritmo. Bota a música e deixa o corpo guiar.",
  "Misture tudo: círculos, figura 8, ondulação, body wave, braços.",
  "Grave e compare com os primeiros vídeos — a evolução vai te impressionar.",
  "Dance sem espelho — sinta ao invés de ver. Confiança vem de dentro."
]}
```

- [ ] **Step 3: Add SENSUAL_BONUS (4 phases, complete content from spec)**

Add the full SENSUAL_BONUS object with all 4 phases as specified in the design spec Section 3. Each phase has: title, duration, intro, steps[] with name/description/duration/why.

- [ ] **Step 4: Add FLEXIBILITY_MILESTONES**

```js
const FLEXIBILITY_MILESTONES = [
  { id: "pombo-sem-dor", label: "Pombo sem dor (ambos os lados)", fase: 1 },
  { id: "agachamento-profundo", label: "Agachamento profundo com calcanhar no chão", fase: 1 },
  { id: "borboleta-joelhos-chao", label: "Borboleta com joelhos perto do chão", fase: 2 },
  { id: "splits-50", label: "Splits 50% do caminho", fase: 2 },
  { id: "frog-pose-confortavel", label: "Frog Pose confortável por 2min", fase: 2 },
  { id: "splits-75", label: "Splits 75% do caminho", fase: 3 },
  { id: "pancake-peito-chao", label: "Pancake com peito próximo ao chão", fase: 3 },
  { id: "splits-completo", label: "Splits completo!", fase: 4 }
];
```

- [ ] **Step 5: Add bonus_sensual to DAILY_CARDS and update DAY_CARD_LAYOUTS**

In DAILY_CARDS, add:
```js
bonus_sensual: {
  icon: "💃",
  time: "19:30",
  title: "Bônus: Movimento Sensual (opcional)",
  content: {
    intro: "dynamic:sensual_intro",
    steps: "dynamic:sensual_steps"
  }
}
```

In DAY_CARD_LAYOUTS, insert `"bonus_sensual"` before `"jantar"` in ALL 4 layouts.

- [ ] **Step 6: Remove DANCA_SENSUAL, EXERCISE_TECHNIQUE, CARDIO_GUIDE**

Delete these 3 objects entirely. Their content has been migrated (DANCA_SENSUAL → SENSUAL_BONUS, EXERCISE_TECHNIQUE → exercise narratives, CARDIO_GUIDE → exercise narratives for cardio-type exercises).

- [ ] **Step 7: Verify syntax and commit**

```bash
git add data.js
git commit -m "feat: SENSUAL_BONUS, phase maps, milestones, REBOLAR fase 4, bonus_sensual card"
```

---

### Task 6: Add exercise card CSS

**Files:** Modify `index.html` — add CSS before closing `</style>` tag

- [ ] **Step 1: Add exercise card CSS classes**

Add CSS for the functional elements inside exercise cards (building on existing `.day-card-*` classes):

```css
/* Exercise card functional elements */
.exercise-card-series {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
  margin-bottom: 8px;
}
.exercise-card-series label {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  font-size: 0.78rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  user-select: none;
}
.exercise-card-series label.checked {
  background: var(--success);
  color: #fff;
  border-color: var(--success);
}
.exercise-card-series input[type="checkbox"] {
  display: none;
}
.exercise-card-weight-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.exercise-card-weight {
  width: 80px;
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
  background: rgba(255,255,255,0.05);
  color: var(--text);
  font-size: 0.82rem;
  font-family: var(--font-body);
  text-align: center;
}
.exercise-card-weight:focus {
  border-color: var(--primary);
  outline: none;
}
.exercise-card-timer-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  font-size: 0.78rem;
  cursor: pointer;
  font-family: var(--font-body);
  transition: all var(--transition-fast);
}
.exercise-card-timer-btn:active {
  background: var(--accent);
  color: #fff;
}
.exercise-card-gif-btn {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid var(--info);
  background: transparent;
  color: var(--info);
  font-size: 0.78rem;
  cursor: pointer;
  font-family: var(--font-body);
}
.exercise-card-mistakes {
  font-size: 0.78rem;
  color: var(--danger);
  line-height: 1.5;
  padding: 6px 10px;
  background: rgba(232, 113, 113, 0.08);
  border-radius: var(--radius-sm);
  margin-top: 8px;
}
.exercise-card-mistakes::before {
  content: "⚠️ Erros comuns: ";
  font-weight: 600;
}
.exercise-card-sets-reps {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
}
.exercise-card-monthly-check {
  padding: 14px;
  background: rgba(196, 149, 106, 0.1);
  border-radius: var(--radius-sm);
  margin-top: 12px;
  text-align: center;
}
.exercise-card-monthly-check p {
  font-size: 0.85rem;
  margin-bottom: 10px;
}
.exercise-card-monthly-check button {
  padding: 8px 14px;
  margin: 4px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text);
  font-size: 0.78rem;
  cursor: pointer;
  font-family: var(--font-body);
}
.exercise-card-monthly-check button:active,
.exercise-card-monthly-check button.selected {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: CSS exercise cards — séries, peso, timer, GIF, erros, check mensal"
```

---

### Task 7: Rewrite WorkoutManager — core rendering

**Files:** Modify `app.js` — replace WorkoutManager (lines 1598-2799)

This is the largest task. The new WorkoutManager renders a single flow of narrative cards without sub-tabs.

- [ ] **Step 1: Rewrite WorkoutManager init() and render()**

Replace the WorkoutManager object. The new version:
- Removes SUB_TABS, currentSubTab, renderSubTabBar()
- render() checks getDayType() and routes to: renderNarrativeWorkout() (training days), renderTuesdayWorkout() (descanso-ativo), renderThursdayWorkout() (ativacao-leve), renderRestDayMessage() (descanso-total)
- Keeps: phase selector, day selector for Fase 2+, event delegation for series checkboxes, weight inputs, timer buttons, GIF buttons, card collapse/expand
- Keeps: existing timer logic (TimerEngine integration), VideoModal integration, weight tracking via StorageManager

Key methods to implement:
- `render()` — main router
- `renderPhaseSelector()` — phase buttons (reuse existing)
- `renderGluteoActivation()` — narrative card for glute fix protocol
- `renderMonthlyGluteCheck()` — monthly questionnaire (30 days from last check)
- `renderWarmupCards(type)` — warmup items as narrative cards
- `renderExerciseCard(exercise, index, totalExercises)` — single exercise with narrative + checkboxes + weight + timer + GIF + mistakes
- `renderCooldownCards(type)` — cooldown items as narrative cards
- `renderTuesdayWorkout()` — yoga poses + rebolar steps based on current phase
- `renderThursdayWorkout()` — glute activation + light activity options
- `renderRestDayMessage()` — simple rest day card

Exercise cards: first card expanded, rest collapsed. When all series of an exercise are checked, next card auto-expands.

For Fase 1: all training days render the same workout (fase1.lowerA). For Fase 2+: render the workout matching the day from WEEK_SCHEDULE.

- [ ] **Step 2: Update init() event delegation**

The init() method needs to handle clicks on:
- Phase selector buttons (existing)
- Card header collapse/expand (reuse .day-card-header pattern)
- Series checkboxes (new: `.exercise-series-cb`)
- Weight inputs (new: `.exercise-card-weight` change event)
- Timer buttons (new: `.exercise-card-timer-btn`)
- GIF buttons (new: `.exercise-card-gif-btn`)
- Monthly glute check buttons (new: `.glute-check-btn`)

Remove: sub-tab click handlers, yoga level tabs, day tab handlers for sub-tabs.

- [ ] **Step 3: Verify app loads without errors**

Open app in browser, navigate to Treino tab. Should see narrative cards for today's workout.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: WorkoutManager narrativo — fluxo único sem sub-abas, cards com séries/peso/timer"
```

---

### Task 8: Add sensual bonus rendering to DayManager

**Files:** Modify `app.js` — DayManager section

- [ ] **Step 1: Add dynamic sensual bonus rendering**

In DayManager's `renderCard()` or `renderSteps()`, handle the dynamic markers:
- `"dynamic:sensual_intro"` → read `SENSUAL_BONUS[currentPhase].intro`
- `"dynamic:sensual_steps"` → read `SENSUAL_BONUS[currentPhase].steps` and render as narrative steps

Add to the existing dynamic content handling (near `dynamic:skincare_morning`, `dynamic:workout`, etc.):

```js
// In renderCard or renderSteps:
if (intro === 'dynamic:sensual_intro') {
  var phase = StorageManager.getValue('currentPhase', 1);
  var sensual = SENSUAL_BONUS[phase];
  intro = sensual ? sensual.intro : '';
}

// For steps:
if (cardData.content.steps === 'dynamic:sensual_steps') {
  var phase = StorageManager.getValue('currentPhase', 1);
  var sensual = SENSUAL_BONUS[phase];
  if (sensual && sensual.steps) {
    html += this.renderSteps(sensual.steps);
  }
}
```

- [ ] **Step 2: Verify bonus_sensual card appears in Meu Dia**

Open app, check Meu Dia tab. The "Bônus: Movimento Sensual" card should appear before Jantar with phase-appropriate content.

- [ ] **Step 3: Commit**

```bash
git add app.js
git commit -m "feat: card bônus sensual no Meu Dia — conteúdo dinâmico por fase"
```

---

### Task 9: Add flexibility milestones to ProgressManager

**Files:** Modify `app.js` — ProgressManager section

- [ ] **Step 1: Add flexibility milestones rendering in Conquistas sub-tab**

In ProgressManager's `renderBadges()` method, after the existing badges grid, add a new section "Marcos de Flexibilidade":

```js
// After existing badges
html += '<h3 style="margin-top:20px;">Marcos de Flexibilidade</h3>';
var flexState = StorageManager.getValue('flexibilityMilestones', {});
for (var i = 0; i < FLEXIBILITY_MILESTONES.length; i++) {
  var m = FLEXIBILITY_MILESTONES[i];
  var checked = !!flexState[m.id];
  html += '<label class="flex-milestone' + (checked ? ' achieved' : '') + '" data-milestone-id="' + m.id + '">';
  html += '<input type="checkbox"' + (checked ? ' checked' : '') + '> ';
  html += m.label + ' <span style="color:var(--text-muted);font-size:0.75rem;">(Fase ' + m.fase + ')</span>';
  html += '</label>';
}
```

- [ ] **Step 2: Add click handler for milestone checkboxes**

In ProgressManager's init() event delegation, handle milestone checkbox clicks:
```js
var milestone = e.target.closest('.flex-milestone');
if (milestone) {
  var mid = milestone.dataset.milestoneId;
  var state = StorageManager.getValue('flexibilityMilestones', {});
  state[mid] = !state[mid];
  StorageManager.setValue('flexibilityMilestones', state);
  self.render();
  return;
}
```

- [ ] **Step 3: Add CSS for milestones**

```css
.flex-milestone {
  display: block;
  padding: 10px 14px;
  margin-bottom: 6px;
  border-radius: var(--radius-sm);
  background: var(--bg-card);
  border: 1px solid var(--border);
  font-size: 0.85rem;
  cursor: pointer;
}
.flex-milestone.achieved {
  border-color: var(--success);
  background: rgba(110, 203, 139, 0.08);
}
```

- [ ] **Step 4: Commit**

```bash
git add app.js index.html
git commit -m "feat: marcos de flexibilidade na aba Conquistas"
```

---

### Task 10: Cleanup and integration test

**Files:** Possibly `data.js`, `app.js`, `index.html` (minor fixes)

- [ ] **Step 1: Remove any remaining references to removed objects**

Grep for `DANCA_SENSUAL`, `EXERCISE_TECHNIQUE`, `CARDIO_GUIDE` in app.js. Remove any render calls or references.

Grep for `renderSubTabBar`, `currentSubTab`, `SUB_TABS` in app.js. Should only exist in old code that was replaced.

- [ ] **Step 2: Verify JS syntax**

```bash
node -c data.js && node -c app.js
```

- [ ] **Step 3: Test all 4 day types**

Temporarily modify getDayType() or test on actual days:
- Training day (Mon/Wed/Fri/Sat): narrative exercise cards with series/weight/timer
- Tuesday: yoga + rebolar cards matching current phase
- Thursday: glute activation + light activity options
- Sunday: rest day message

- [ ] **Step 4: Test Meu Dia bonus sensual card**

Check all 4 day layouts show the bonus_sensual card. Test changing phase to verify content updates.

- [ ] **Step 5: Test flexibility milestones**

Go to Progresso > Conquistas. Check/uncheck milestones. Verify persistence.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "fix: cleanup e ajustes finais treino narrativo integrado"
```
