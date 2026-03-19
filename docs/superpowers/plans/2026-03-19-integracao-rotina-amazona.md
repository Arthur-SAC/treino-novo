# Integração Rotina Amazona — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mesclar o conteúdo do `rotina_amazona.html` no app PWA existente, criando uma experiência de timeline diária fluida com treino em 4 fases, nutrição com feminização, projeção corporal, cores de roupa e yoga/rebolar.

**Architecture:** Mesma stack (HTML/CSS/JS puro, singleton managers, event delegation, StorageManager). Dados novos em `data.js`, lógica nos managers existentes em `app.js`, estilos CSS inline em `index.html`. Conteúdo do `rotina_amazona.html` (React) traduzido pra vanilla JS.

**Tech Stack:** JavaScript ES5/ES6, CSS3 com variáveis, HTML5, localStorage, Service Worker, Chart.js (já existente)

**Spec:** `docs/superpowers/specs/2026-03-19-integracao-rotina-amazona-design.md`
**Fonte de dados:** `rotina_amazona.html` (React app com todos os dados de refeições, treinos, skincare, cores, projeção)

---

## File Map

| File | Ação | Responsabilidade |
|------|------|-----------------|
| `data.js` (172KB, 3504 lines) | Reescrever/adicionar | Novos objetos de dados: MEAL_OPTIONS, DAILY_TIMELINE, WEEK_SCHEDULE, WORKOUTS (rewrite), GLUTE_FIX_PROTOCOL, WARMUP_LOWER/UPPER, COOLDOWN_LOWER/UPPER, YOGA_LEVELS, REBOLAR_STEPS, EXERCISE_TECHNIQUE, CARDIO_GUIDE, SUPPLEMENTS, COLOR_GUIDE, PROJECTION_RATES, SHOPPING_LIST (rewrite). Remover: WEIGHT_GUIDE, DAILY_ROUTINE, NIGHT_ROUTINE |
| `app.js` (161KB, 4404 lines) | Modificar managers | Dashboard (rewrite timeline), NutritionManager (3 opções, suplementos, copiar lista), WorkoutManager (glúteo esq, yoga, rebolar, técnica), CareManager (cores sub-tab), ProgressManager (projeção SVG) |
| `index.html` (76KB, 3215 lines) | Adicionar CSS | Novos estilos pra timeline, garrafinhas, color swatches, projeção SVG, cards de feminização |
| `sw.js` (3.9KB) | Incrementar | Cache version v8 → v9 |

---

## REGRA CRÍTICA: Não remover objetos antigos nas Tasks 1-5

As Tasks 1-5 ADICIONAM novos objetos em data.js. Os objetos antigos (MEALS, WEIGHT_GUIDE, WORKOUTS, WARMUP, COOLDOWN, CHECKLIST_ITEMS, DAILY_ROUTINE, NIGHT_ROUTINE, SHOPPING_LIST) NÃO são removidos até a Task 11 (cleanup). Isso evita que o app quebre entre as tasks de dados (1-5) e as tasks de managers (6-10).

---

## Task 1: Dados de Nutrição (MEAL_OPTIONS + SUPPLEMENTS)

**Files:**
- Modify: `data.js` (adicionar MEAL_OPTIONS após MEALS, NÃO remover MEALS)
- Source: `rotina_amazona.html:294-383` (meals data) e `rotina_amazona.html:378-383,952-1007` (supps data)

- [ ] **Step 1: Adicionar MEAL_OPTIONS após o objeto MEALS existente (linha ~2175)**

NÃO remover MEALS — ele fica até a Task 11. Inserir `MEAL_OPTIONS` logo após: Portar TODOS os dados de refeições do `rotina_amazona.html` (linhas 294-376), traduzindo de React data pra objeto JS puro:

```javascript
const MEAL_OPTIONS = {
  cafe: {
    id: "cafe", label: "Café da manhã", time: "7h-8h",
    feminizacao: "Chá de spearmint: tomar junto com o café. 1 xícara aqui + 1 à tarde.",
    options: [
      {
        name: "Shake de Whey + Linhaça",
        kcal: 565, prot: 39, carb: 58, fat: 16,
        fem: true,
        ingredients: [
          ["Whey Protein", "1 dose (30g)"],
          ["Aveia em flocos finos", "50g"],
          ["Banana média", "1 un."],
          ["Pasta de amendoim", "1 col. sopa"],
          ["Linhaça dourada moída 🌿", "2 col. sopa"],
          ["Água ou leite de soja 🌿", "200ml"],
          ["Creatina", "5g"]
        ],
        prep: [
          "Coloque a aveia e a linhaça moída primeiro no liquidificador",
          "Adicione whey, creatina, banana e a pasta de amendoim",
          "Leite de soja no lugar da água: mais proteína E isoflavonas",
          "Bata 30-40s. A linhaça some no sabor completamente",
          "Linhaça deve ser MOÍDA — inteira o corpo não absorve os lignanas"
        ]
      },
      // ... portar as outras 2 opções do rotina_amazona.html
    ]
  },
  lanche1: { /* portar do rotina_amazona.html linhas 311-324 */ },
  almoco:   { /* portar do rotina_amazona.html linhas 325-338 */ },
  pretreino: { /* portar do rotina_amazona.html linhas 339-350 */ },
  jantar:   { /* portar do rotina_amazona.html linhas 351-363 */ },
  noturno:  { /* portar do rotina_amazona.html linhas 364-376 */ },
};
```

Cada refeição (cafe, lanche1, almoco, pretreino, jantar, noturno) tem exatamente 3 options com: name, kcal, prot, carb, fat, fem (boolean), ingredients (array de [nome, qtd]), prep (array de strings).

- [ ] **Step 2: Adicionar SUPPLEMENTS**

Inserir após MEAL_OPTIONS:

```javascript
const SUPPLEMENTS = [
  {
    name: "Whey Protein", dose: "1 dose (30g)", when: "Café ✅",
    note: "Correto. Shake da manhã está ótimo.",
    intimate: "Sem impacto", evidence: "Alta"
  },
  {
    name: "Creatina", dose: "5g", when: "Qualquer hora ✅",
    note: "Timing não importa — o que importa é tomar todo dia. No shake está perfeito.",
    intimate: "Sem impacto", evidence: "Alta"
  },
  {
    name: "Ômega-3", dose: "2-3 cápsulas", when: "Almoço ou jantar ⚠️",
    note: "Mova pra junto da refeição. Gordura da comida aumenta absorção em até 50%.",
    intimate: "Melhora circulação — efeito positivo", evidence: "Alta"
  },
  {
    name: "Multivitamínico", dose: "dose do produto", when: "Café ✅",
    note: "Correto. A pasta de amendoim do shake tem gordura pras vitaminas A, D, E, K.",
    intimate: "Sem impacto", evidence: "Alta"
  },
  {
    name: "Vitamina D3 + K2", dose: "D3: 2.000-4.000 UI/dia · K2: 100mcg/dia",
    when: "Café ou almoço",
    note: "Suporte hormonal geral, resultado de treino, humor. Deficiência quase universal no Brasil.",
    intimate: "Nenhum impacto negativo", evidence: "Alta"
  },
  {
    name: "Chá de Spearmint", dose: "2 xícaras/dia", when: "Manhã + tarde",
    note: "Leve efeito anti-androgênico — reduz testosterona livre modestamente. Efeito acumulativo.",
    intimate: "Não afeta desempenho nas doses de chá", evidence: "Moderada"
  },
  {
    name: "Linhaça dourada moída", dose: "2 col. sopa/dia", when: "No shake ou iogurte",
    note: "Fitoestrógenos (lignanas) — efeito estrogênico suave e acumulativo.",
    intimate: "Zero impacto", evidence: "Moderada"
  },
  {
    name: "DIM (Diindolylmethane)", dose: "100-200mg/dia com refeição",
    when: "Almoço ou jantar",
    note: "Modula metabolismo de estrogênio. Melhora pele também. Encontrado em brócolis naturalmente.",
    intimate: "Não afeta testosterona diretamente", evidence: "Moderada"
  },
  {
    name: "Soja / Tofu / Edamame", dose: "1-2 porções/dia (alimento, não suplemento)",
    when: "Almoço ou jantar",
    note: "Isoflavonas — fitoestrógenos com ligação fraca nos receptores de estrogênio. Efeito acumulativo.",
    intimate: "Em doses alimentares: zero impacto", evidence: "Moderada"
  },
];
```

- [ ] **Step 3: Verificar sintaxe**

Abrir `data.js` num editor e verificar que não há erros de sintaxe (vírgulas, colchetes, chaves). Carregar o app no browser e checar que não dá erro no console.

- [ ] **Step 4: Commit**

```bash
git add data.js
git commit -m "feat: MEAL_OPTIONS com 3 opcoes por refeicao + SUPPLEMENTS com timing"
```

---

## Task 2: Timeline e Agenda Semanal (DAILY_TIMELINE + WEEK_SCHEDULE)

**Files:**
- Modify: `data.js` (adicionar DAILY_TIMELINE e WEEK_SCHEDULE ao final, NÃO remover CHECKLIST_ITEMS, DAILY_ROUTINE, NIGHT_ROUTINE)
- Source: `rotina_amazona.html:138-146` (weekSchedule)
- Source: `rotina_amazona.html:445-449` (kegelProtocol)

- [ ] **Step 1: Adicionar DAILY_TIMELINE, WEEK_SCHEDULE e KEGEL_PROTOCOL_TYPES ao final de data.js**

NÃO remover os objetos antigos. Adicionar os novos ao final:

```javascript
const DAILY_TIMELINE = {
  treino: [
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️",
      items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)"] },
    { id: "cafe", time: "7:00", label: "☕ Café da manhã", icon: "☕",
      type: "meal", mealId: "cafe",
      items: ["Suplementos: multivitamínico + (creatina e whey no shake)"] },
    { id: "lanche1", time: "10:00", label: "🍎 Lanche manhã", icon: "🍎",
      type: "meal", mealId: "lanche1",
      items: ["Chá de spearmint — 1ª xícara 🌿"] },
    { id: "almoco", time: "12:00", label: "🍽️ Almoço", icon: "🍽️",
      type: "meal", mealId: "almoco",
      items: ["Ômega-3 com a refeição (absorção melhor com gordura)"] },
    { id: "pretreino", time: "16:00", label: "⚡ Pré-treino", icon: "⚡",
      type: "meal", mealId: "pretreino",
      items: ["Chá de spearmint — 2ª xícara 🌿", "Comer 45-60min antes do treino"] },
    { id: "treino", time: "17:40", label: "💪 Treino", icon: "💪",
      type: "workout",
      items: ["Ativação glúteo esq (10min)", "Aquecimento", "Treino do dia", "Alongamento"] },
    { id: "postreino", time: "19:00", label: "🐕 Pós-treino", icon: "🐕",
      items: ["Passeio com os cães (~25min — cardio leve)"] },
    { id: "jantar", time: "20:00", label: "🌙 Jantar", icon: "🌙",
      type: "meal", mealId: "jantar",
      items: ["Vitamina D3+K2 com a refeição"] },
    { id: "noturno", time: "22:00", label: "🌛 Noturno", icon: "🌛",
      type: "meal", mealId: "noturno",
      items: ["Skincare noite (passo a passo)", "Kegel noturno", "Meta: largar celular 22h, dormir 22:30",
              "Lembrete: luz azul + estímulo = sono ruim = cortisol alto"] },
  ],
  descanso: [
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️",
      items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)"] },
    { id: "cafe", time: "7:00", label: "☕ Café da manhã", icon: "☕",
      type: "meal", mealId: "cafe",
      items: ["Suplementos: multivitamínico"] },
    { id: "lanche1", time: "10:00", label: "🍎 Lanche manhã", icon: "🍎",
      type: "meal", mealId: "lanche1",
      items: ["Chá de spearmint — 1ª xícara 🌿"] },
    { id: "almoco", time: "12:00", label: "🍽️ Almoço", icon: "🍽️",
      type: "meal", mealId: "almoco",
      items: ["Ômega-3 com a refeição"] },
    { id: "lanche2", time: "16:00", label: "🍎 Lanche tarde", icon: "🍎",
      type: "meal", mealId: "pretreino",
      items: ["Chá de spearmint — 2ª xícara 🌿"] },
    { id: "atividade", time: "17:40", label: "🚶 Atividade leve", icon: "🚶",
      items: ["Caminhada 25-30min ou protocolo ativação glúteo esq (10min)", "Yoga de quadril (20min)"] },
    { id: "postreino", time: "19:00", label: "🐕 Passeio cães", icon: "🐕",
      items: ["Passeio com os cães (~25min)"] },
    { id: "jantar", time: "20:00", label: "🌙 Jantar", icon: "🌙",
      type: "meal", mealId: "jantar",
      items: ["Vitamina D3+K2 com a refeição"] },
    { id: "noturno", time: "22:00", label: "🌛 Noturno", icon: "🌛",
      type: "meal", mealId: "noturno",
      items: ["Skincare caprichado (rosto + corpo)", "Kegel noturno", "Ritual de corpo",
              "Meta: largar celular 22h, dormir 22:30"] },
  ]
};

const WEEK_SCHEDULE = {
  1: { type: "treino", workout: "Lower A", label: "💪 Lower A (Glúteo heavy)", warmup: "lower", cooldown: "lower" },
  2: { type: "descanso", workout: null, label: "🧘 Yoga + Rebolar", warmup: null, cooldown: null },
  3: { type: "treino", workout: "Upper", label: "💪 Upper Body", warmup: "upper", cooldown: "upper" },
  4: { type: "descanso", workout: null, label: "🟡 Ativação + Caminhada", warmup: null, cooldown: null },
  5: { type: "treino", workout: "Lower B", label: "💪 Lower B (Coxas + Quadril)", warmup: "lower", cooldown: "lower" },
  6: { type: "treino", workout: "Gluteo Isolado", label: "💪 Glúteo Isolado + Core", warmup: "lower", cooldown: "lower" },
  0: { type: "descanso", workout: null, label: "😴 Descanso total", warmup: null, cooldown: null },
};
```

Nota: As keys em WEEK_SCHEDULE são `getDay()` do JavaScript (0=Domingo, 1=Segunda, ..., 6=Sábado).

Adicionar também o protocolo Kegel com 3 tipos (portar do rotina_amazona.html linhas 445-449):

```javascript
const KEGEL_PROTOCOL_TYPES = [
  { tipo: "Rápida", desc: "Contrair e soltar rápido x10. Descansar 10s. Repetir 3x.", quando: "3x ao dia" },
  { tipo: "Longa", desc: "Contrair 10s, soltar 10s. Repetir 5x.", quando: "3x ao dia" },
  { tipo: "Elevador", desc: "Contrair progressivamente 'andares', relaxar andares. Repetir 3x.", quando: "1x ao dia" },
];
```

- [ ] **Step 2: Verificar sintaxe — objetos antigos continuam intactos, novos adicionados ao lado**

- [ ] **Step 3: Commit**

```bash
git add data.js app.js
git commit -m "feat: DAILY_TIMELINE com blocos cronologicos + WEEK_SCHEDULE"
```

---

## Task 3: Treinos Reescritos (WORKOUTS_NEW)

**Files:**
- Modify: `data.js` (adicionar WORKOUTS_NEW ao final, NÃO remover WORKOUTS)
- Source: `rotina_amazona.html:148-245` (treinoPhases)

- [ ] **Step 1: Adicionar WORKOUTS_NEW com 4 fases do Rotina Amazona**

Adicionar ao final de data.js (NÃO substituir o WORKOUTS existente ainda). Usar a key `WORKOUTS_NEW` (renomeada pra `WORKOUTS` na Task 11). Estrutura alinhada ao Rotina Amazona, adaptada pro equipamento do prédio. Cada exercício tem peso sugerido e flag de lado esquerdo primeiro quando unilateral:

```javascript
const WORKOUTS_NEW = {
  fase1: {
    name: "Fase 1 — Fundação",
    period: "Meses 1-2",
    frequency: "3x/semana",
    objective: "Ativar glúteos dormentes, aprender os movimentos, criar o hábito",
    note: "Pode fazer no prédio: elástico + halteres + peso corporal. Glúteo esq mais dormido: 5 reps extras de ativação unilateral esquerda ANTES de cada exercício bilateral.",
    days: {
      "Lower A": {
        name: "Treino A · Full Body (Seg/Qua/Sex)",
        exercises: [
          {
            id: "f1-hip-thrust",
            name: "Hip Thrust (peso corporal ou haltere)",
            sets: 3, reps: "20", rest: "60seg",
            weight: "0-15 kg",
            tip: "Squeeze consciente dos dois lados. Sentir os dois trabalhando.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-agachamento",
            name: "Agachamento (peso corporal)",
            sets: 3, reps: "15", rest: "60seg",
            weight: "0 kg",
            tip: "Descer devagar em 3s, subir normal.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-elevacao-unilateral-esq",
            name: "Elevação Pélvica Unilateral ESQUERDA",
            sets: 3, reps: "15", rest: "45seg",
            weight: "0 kg",
            tip: "Esquerdo primeiro, sempre.",
            videoKey: "elevacao-pelvica",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-elevacao-unilateral-dir",
            name: "Elevação Pélvica Unilateral DIREITA",
            sets: 3, reps: "15", rest: "45seg",
            weight: "0 kg",
            tip: "Só depois do esquerdo. Mesmo número de reps.",
            videoKey: "elevacao-pelvica",
            unilateral: true, startLeft: false
          },
          {
            id: "f1-abducao-elastico",
            name: "Abdução lateral com elástico",
            sets: 3, reps: "20", rest: "45seg",
            weight: "elástico leve/médio",
            tip: "Apertar o elástico para fora consciente.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-rdl",
            name: "RDL (halteres leves)",
            sets: 3, reps: "12", rest: "60seg",
            weight: "5-10 kg cada",
            tip: "Sentir o posterior da coxa. Dobrar quadril, não coluna.",
            videoKey: "stiff",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-prancha",
            name: "Prancha",
            sets: 3, reps: "30seg", rest: "30seg",
            weight: "0 kg",
            tip: "Core estabilizado. Corpo reto.",
            videoKey: "prancha",
            unilateral: false, startLeft: false,
            type: "plank"
          },
        ]
      }
    }
  },
  fase2: {
    name: "Fase 2 — Construção",
    period: "Meses 3-5",
    frequency: "4x/semana",
    objective: "Construir volume em glúteos e coxas, iniciar a silhueta amazona",
    days: {
      "Lower A": {
        name: "Lower A · Glúteo + Posterior",
        exercises: [
          /* Portar do rotina_amazona.html linhas 169-176:
             Hip thrust pesado 4x10-12 (20-50kg),
             Hip thrust UNILATERAL esquerdo 3x12 (10-20kg),
             Hip thrust unilateral direito 3x12 (10-20kg),
             RDL halteres 3x12 (10-18kg cada),
             Stiff 3x12 (10-18kg cada),
             Abdução máquina 4x20 (10-30kg) */
        ]
      },
      "Upper": {
        name: "Upper · Peito + Costas + Ombros",
        exercises: [
          /* Portar do rotina_amazona.html linhas 177-183:
             Supino inclinado halteres 3x12 (8-14kg cada),
             Remada curvada halteres 3x12 (10-16kg cada) — substitui remada com barra,
             Elevação lateral 4x15 (4-8kg cada),
             Band pull-apart elástico 3x20 — substitui face pull,
             Rosca direta + Tríceps 3x15 (8-12kg cada) */
        ]
      },
      "Lower B": {
        name: "Lower B · Coxa + Quadril",
        exercises: [
          /* Portar do rotina_amazona.html linhas 184-191:
             Búlgaro halteres (esq primeiro) 3x10 cada (8-16kg cada),
             Agachamento barra 4x10 (30-50kg),
             Sumo agachamento 3x15 (20-40kg),
             Leg press pés altos 4x12 (40-80kg),
             Adução interna máquina 4x15 (15-35kg),
             Panturrilha em pé 4x20 (20-40kg) */
        ]
      },
      "Gluteo Isolado": {
        name: "Glúteo Isolado + Core",
        exercises: [
          /* Portar do rotina_amazona.html linhas 192-198:
             Kickback caneleira (esq primeiro) 4x15 cada (caneleira pesada) — substitui cabo,
             Hip thrust unilateral 3x12 cada (10-20kg),
             Abdução deitada lateral 4x20 (elástico/caneleira 3-8kg),
             Prancha variações 3x45s,
             Crunch bicicleta 3x20 */
        ]
      }
    }
  },
  fase3: {
    name: "Fase 3 — Amazona 🔥",
    period: "Meses 6-10",
    frequency: "4-5x/semana",
    objective: "Maximizar volume nos lugares certos — a forma amazona acontece aqui",
    days: {
      /* Portar do rotina_amazona.html linhas 204-233:
         Lower A (Hip thrust 5x8-10 50-90kg, RDL barra 4x10, Stiff pesado, Abdução drop set),
         Upper Curvilíneo (Supino 4x10, Remada curvada 4x10 — substitui puxada, Elevação lateral 4x15, Band pull-apart 3x20, Crucifixo 3x12),
         Lower B (Agachamento barra 4x8-10, Búlgaro, Adução, Sumo pesado, Búlgaro halteres — substitui extensora),
         Full Glúteo + Posterior (Deadlift 4x8, Hip thrust pausa 2s 4x10, Stiff 4x12 — substitui leg curl, Abdução band em pé 3x20) */
    }
  },
  fase4: {
    name: "Fase 4 — Manutenção",
    period: "Mês 11+",
    frequency: "3-4x/semana",
    objective: "Manter, refinar, continuar crescendo devagar",
    note: "Mantenha intensidade mas pode reduzir volume. Progressão de carga quando possível.",
    days: {
      /* Portar do rotina_amazona.html linhas 238-244:
         2x Lower Body foco glúteo, 1x Upper Body, 1x Misto ou cardio + core,
         Kegel manter 2x/dia */
    }
  }
};
```

Cada exercício DEVE ter: id, name, sets, reps, rest, weight (string com range em kg), tip, videoKey, unilateral, startLeft. Opcionalmente: type ("plank", "cardio", "vacuum").

Adaptar todos os exercícios que usam polia/cabo/extensora pros equivalentes com halteres/caneleiras/elástico conforme a seção "Adaptações pro Equipamento" no spec.

- [ ] **Step 2: Adicionar novas entries em EXERCISE_VIDEOS**

Em `data.js` linha 72-109, adicionar entries pra exercícios novos que vieram do Rotina Amazona e não existem no app:

```javascript
// Adicionar dentro de EXERCISE_VIDEOS:
"deadlift": { youtubeId: "ytGaGIn3SjE", gifUrl: null, title: "Levantamento Terra (Deadlift)", tips: "Quadril pra trás, barra rente ao corpo", commonMistakes: "Arredondar as costas. Subir com a lombar. Barra longe do corpo." },
"remada-curvada": { youtubeId: "kBraFNjSJWQ", gifUrl: null, title: "Remada Curvada com Halteres", tips: "Retração escapular completa", commonMistakes: "Usar impulso. Costas arredondadas. Cotovelos muito abertos." },
"supino-inclinado": { youtubeId: "8iPEnn-ltC8", gifUrl: null, title: "Supino Inclinado com Halteres", tips: "Peito alto, cotovelos 45 graus", commonMistakes: "Banco muito inclinado. Peso caindo rápido. Ombros subindo." },
"elevacao-lateral": { youtubeId: "3VcKaXpzqRo", gifUrl: null, title: "Elevação Lateral", tips: "Peso leve, cotovelo levemente dobrado, até altura do ombro", commonMistakes: "Peso pesado demais. Usar trapézio. Elevar acima do ombro." },
"crucifixo": { youtubeId: "eozdVDA78K0", gifUrl: null, title: "Crucifixo com Halteres", tips: "Braços levemente dobrados, abrir lento", commonMistakes: "Braços retos. Peso pesado demais. Perder controle na descida." },
"rosca-direta": { youtubeId: "ykJmrZ5v0Oo", gifUrl: null, title: "Rosca Direta", tips: "Cotovelos fixos, sem balanço", commonMistakes: "Usar impulso do corpo. Cotovelos subindo. Não controlar a descida." },
"triceps-testa": { youtubeId: "d_KZxkY_0cM", gifUrl: null, title: "Tríceps Testa", tips: "Cotovelos apontando pro teto, fixos", commonMistakes: "Cotovelos abrindo. Descer rápido demais. Lombar arqueando." },
"panturrilha": { youtubeId: "gwLzBJYoWlI", gifUrl: null, title: "Panturrilha em Pé", tips: "Extensão máxima, pausa 1s no topo", commonMistakes: "Amplitude curta. Velocidade rápida. Não pausar no topo." },
"crunch-bicicleta": { youtubeId: "9FGilxCbdz8", gifUrl: null, title: "Crunch Bicicleta", tips: "Cotovelo toca joelho oposto, devagar", commonMistakes: "Puxar o pescoço. Fazer rápido demais. Não ativar o oblíquo." },
"band-pull-apart": { youtubeId: "JObYtU7Y7ag", gifUrl: null, title: "Band Pull-Apart (Elástico)", tips: "Escápulas juntas, braços estendidos", commonMistakes: "Braços dobrados. Usar impulso. Não controlar a volta." },
```

- [ ] **Step 3: Verificar sintaxe e que app carrega sem erros**

- [ ] **Step 4: Commit**

```bash
git add data.js
git commit -m "feat: WORKOUTS reescritos com 4 fases Rotina Amazona + novos EXERCISE_VIDEOS"
```

---

## Task 4: Dados de Suporte ao Treino

**Files:**
- Modify: `data.js:1906-1976` (substituir WARMUP e COOLDOWN)
- Source: `rotina_amazona.html:385-443` (warmups, cooldowns, yoga, rebolar, kegel)
- Source: `rotina_amazona.html:247-292` (gluteFixProtocol)
- Source: `rotina_amazona.html:868-949` (eficienciaData)
- Source: `rotina_amazona.html:1009-1014` (cardioData)

- [ ] **Step 1: Adicionar warmups e cooldowns lower/upper (NÃO remover WARMUP e COOLDOWN existentes)**

Adicionar ao final de data.js. Os antigos ficam até Task 11:

```javascript
const WARMUP_LOWER = [
  { name: "Marcha elevando joelho", desc: "Ativa circulação e aquece quadril", time: "2 min" },
  { name: "Círculos de quadril", desc: "Mãos na cintura, círculos amplos", time: "1 min cada sentido" },
  { name: "Leg swing frente/trás", desc: "Pêndulo solto — não forçar", time: "15x cada perna" },
  { name: "Leg swing lateral", desc: "Plano lateral — abre o quadril", time: "15x cada perna" },
  { name: "Agachamento com pausa no fundo", desc: "3s no fundo, mobilidade de tornozelo e quadril", time: "10 reps" },
  { name: "Clamshell esquerdo com elástico ⭐", desc: "Ativa o glúteo esq antes do treino — crítico", time: "2x15" },
  { name: "Clamshell bilateral com elástico", desc: "Dois lados, ativa glúteo médio", time: "2x20" },
  { name: "Cat-cow no quadrupede", desc: "Mobilidade lombar — arquear e curvar devagar", time: "10 lentos" },
];

const WARMUP_UPPER = [
  { name: "Jumping jack ou pular corda", desc: "Elevar frequência cardíaca base", time: "2 min" },
  { name: "Círculos de ombro", desc: "Braços estendidos, amplos — frente e trás", time: "15x cada direção" },
  { name: "T-spine rotation", desc: "Deitado de lado, joelhos dobrados: abrir o braço pra trás", time: "10x cada lado" },
  { name: "Band pull-apart (ou toalha)", desc: "Elástico na frente, abrir até tocar o peito por trás", time: "2x15" },
  { name: "Supino com peso leve (50%)", desc: "Aquecimento específico do padrão de empurrar", time: "2x15" },
];

const COOLDOWN_LOWER = [
  { name: "Pigeon Pose", desc: "Joelho dobrado na frente, perna de trás estendida", time: "2 min cada lado" },
  { name: "Lizard Pose (Lagarto)", desc: "Avanço fundo com antebraço no chão", time: "90s cada lado" },
  { name: "Figura 4 (piriformes)", desc: "Deitado, cruzar tornozelo sobre joelho e puxar", time: "1 min cada lado" },
  { name: "Isquiotibial deitado", desc: "Perna esticada puxada com as mãos ou toalha", time: "1 min cada perna" },
  { name: "Borboleta sentada", desc: "Pés juntos, joelhos pra fora, inclinar devagar", time: "2 min" },
  { name: "Happy Baby", desc: "Deitado, segurar plantas dos pés, joelhos abertos", time: "2 min" },
];

const COOLDOWN_UPPER = [
  { name: "Peitoral na porta", desc: "Braço dobrado 90° na porta, girar suavemente", time: "1 min cada lado" },
  { name: "Ombro cruzado", desc: "Puxar o braço estendido pro outro lado", time: "45s cada lado" },
  { name: "Torção espinhal sentada", desc: "Perna cruzada, torcer o tronco devagar", time: "1 min cada lado" },
  { name: "Tríceps acima da cabeça", desc: "Braço dobrado, puxar o cotovelo", time: "45s cada lado" },
  { name: "Child's Pose", desc: "Joelhos, braços à frente, testa no chão", time: "2 min" },
];
```

- [ ] **Step 2: Adicionar GLUTE_FIX_PROTOCOL**

Portar do `rotina_amazona.html` linhas 247-292 (gluteFixProtocol). Simplificar a estrutura pra vanilla JS:

```javascript
const GLUTE_FIX_PROTOCOL = {
  explanation: "Desequilíbrio de glúteo é quase universal em sedentários. O lado dominante assume o trabalho. O esquerdo vai ficando dormido. É um problema de conexão nervo-músculo, não de tamanho.",
  daily_exercises: [
    { name: "Clamshell com elástico — ESQUERDO", sets: "3x20 lentos", desc: "Deitado de lado, elástico nos joelhos. Abrir e fechar como concha. Só o esquerdo neste bloco." },
    { name: "Glute bridge unilateral — ESQUERDO", sets: "3x15 com pausa 3s", desc: "Pé esquerdo no chão, direito suspenso. Elevar quadril, SEGURAR 3s no topo." },
    { name: "Donkey kick — ESQUERDO", sets: "3x20", desc: "Quadrupede, chutar o pé esquerdo para cima e trás. Joelho dobrado 90°." },
    { name: "Side-lying abduction — ESQUERDO", sets: "3x20 lentos", desc: "Deitado de lado, elevar a perna esquerda estendida. Segurar 1s no topo." },
    { name: "Isométrico de parede — ESQUERDO", sets: "3x30s", desc: "De pé, pressionar pé esquerdo contra parede. Sentir glúteo esq contrair. Zero movimento." },
  ],
  rules: [
    { name: "Regra do líder", rule: "SEMPRE", desc: "Unilaterais: começa pelo ESQUERDO. Reps do esquerdo definem o máximo do direito." },
    { name: "Pausa isométrica nos bilaterais", rule: "Cada rep", desc: "Hip thrust e agachamento: squeeze consciente no topo, imaginar apertar moeda com glúteo esquerdo. 1-2s de pausa." },
    { name: "Mão de feedback", rule: "Opcional", desc: "Nos primeiros meses: colocar a mão no glúteo esquerdo durante exercícios pra sentir se está contraindo." },
    { name: "Não compensar na lombar", rule: "Crítico", desc: "Glúteo dormido = lombar faz o trabalho → lesão. Se sentir tensão na lombar, parar e fazer 10 glute bridges unilaterais esq." },
  ],
  timeline: [
    ["Semanas 1-4", "Melhora de ativação — vai começar a SENTIR o esquerdo queimar"],
    ["Meses 2-3", "Simetria de força — os dois lados produzem força similar"],
    ["Meses 4-8", "Resultado visual — esquerdo começa a acompanhar o direito"],
    ["Mês 8+", "Com consistência, diferença mínima ou imperceptível"],
  ]
};
```

- [ ] **Step 3: Adicionar YOGA_LEVELS e REBOLAR_STEPS**

```javascript
const YOGA_LEVELS = {
  iniciante: [
    ["Pigeon Pose", "2 min cada lado"],
    ["Happy Baby", "2 min"],
    ["Borboleta", "2 min"],
    ["Cat-Cow", "2 min"],
    ["Torção sentada", "1 min cada lado"]
  ],
  intermediario: [
    ["Lizard Pose", "2 min cada lado"],
    ["Malasana (agachamento profundo)", "2 min"],
    ["Frog Pose", "2 min"],
    ["Forward Fold sentado", "2 min"],
    ["Low Lunge com abertura", "2 min cada lado"]
  ],
  avancado: [
    ["Dragon Pose", "3 min cada lado"],
    ["Splits progressivos", "trabalhar devagar"],
    ["Standing Split", "1 min cada lado"],
    ["Pancake Stretch", "3 min"]
  ]
};

const REBOLAR_STEPS = [
  {
    fase: "Semanas 1-2 · Isolamento Base",
    steps: [
      "Pé paralelo, mãos na cintura — mover SÓ o quadril frente/trás sem mover o tronco. 3x30 reps.",
      "Quadril esquerda/direita isolado: 3x30 reps.",
      "Círculos lentos: 3x20 em cada sentido.",
      "Objetivo real: o tronco não mexe. Só o quadril."
    ]
  },
  {
    fase: "Semanas 3-4 · Ritmo",
    steps: [
      "Mesmos movimentos com música — funk, pagode, baile funk.",
      "Adicionar leve balanço nos joelhos enquanto move o quadril.",
      "Figura de 8 / infinito com o quadril: 3x20.",
      "Praticar frente ao espelho — feedback visual acelera muito."
    ]
  },
  {
    fase: "Mês 2+ · Expressão",
    steps: [
      "Adicionar movimento dos braços e expressão corporal.",
      "YouTube: 'aprenda a rebolar do zero' — boas aulas gratuitas.",
      "Bachata para iniciantes no YouTube — ensina isolamento naturalmente.",
      "Gravar e comparar com semanas anteriores."
    ]
  }
];
```

- [ ] **Step 4: Adicionar EXERCISE_TECHNIQUE e CARDIO_GUIDE**

Portar do `rotina_amazona.html` linhas 868-949 (eficienciaData) e 1009-1014 (cardioData):

```javascript
const EXERCISE_TECHNIQUE = [
  {
    exercise: "Hip Thrust", subtitle: "Glúteo — base de tudo",
    tips: [
      "Banco atrás das escápulas, não da nuca",
      "Pés paralelos ou levemente abertos, largura de quadril",
      "No topo: quadril paralelo ao chão — não hiperextender a lombar",
      "Pausa de 1-2s no topo com squeeze consciente",
      "Descer controlado em 2s",
      "Joelhos seguindo a linha dos pés"
    ],
    alerts: [
      { signal: "Dor ou tensão na lombar baixa", fix: "Glúteo não ativou. Parar, fazer 10 glute bridges unilaterais esq, recomeçar." },
      { signal: "Tensão no quadríceps", fix: "Pés muito à frente ou banco muito baixo." },
      { signal: "Pontada no joelho", fix: "Joelho caindo pra dentro. Usar elástico." },
      { signal: "Pescoço tenso", fix: "Banco na posição errada — deve estar nas escápulas." }
    ]
  },
  /* Portar os outros 4: Agachamento, RDL/Stiff, Elevação Lateral, Búlgaro
     do rotina_amazona.html linhas 886-949 */
];

const CARDIO_GUIDE = [
  { title: "Caminhada plana", ideal: "Recuperação ativa, dias de descanso", kcal: "~200-280 kcal/h", impact: "Zero impacto no músculo", when: "Terça e Quinta" },
  { title: "Caminhada inclinada (10-15%)", ideal: "Máximo resultado com mínimo desgaste", kcal: "~350-450 kcal/h", impact: "Ativa glúteo durante o cardio", when: "Substituir caminhada plana após mês 2" },
  { title: "Bike de baixa intensidade", ideal: "Cardio leve sem impacto articular", kcal: "~250-350 kcal/h", impact: "Muito baixo", when: "Opcional em qualquer dia" },
  { title: "Corrida (EVITAR primeiros 6 meses)", ideal: "Não recomendado no início", kcal: "—", impact: "Consome músculo junto com gordura", when: "Só após base muscular estabelecida" },
];
```

- [ ] **Step 5: Verificar sintaxe, app carrega sem erros**

- [ ] **Step 6: Commit**

```bash
git add data.js
git commit -m "feat: warmups lower/upper, protocolo gluteo esq, yoga, rebolar, tecnica, cardio"
```

---

## Task 5: Cores de Roupa, Projeção e Lista de Compras

**Files:**
- Modify: `data.js` (adicionar ao final, antes do EDUCATIONAL_CONTENT)
- Modify: `data.js:2999-3080` (reescrever SHOPPING_LIST)
- Source: `rotina_amazona.html:1302-1381` (coresData)
- Source: `rotina_amazona.html:1098` (RATES)

- [ ] **Step 1: Adicionar COLOR_GUIDE**

Portar o objeto `coresData` do `rotina_amazona.html` linhas 1302-1381:

```javascript
const COLOR_GUIDE = {
  cima: {
    label: "Parte de cima",
    subtitle: "Blusinhas, croppeds, tops, camisas, bodysuit",
    tip: "A parte de cima fica perto do rosto — cores aqui afetam como a pele aparece. Tons quentes fazem a pele brilhar; tons frios apagam.",
    best: [
      { hex: "#8B3A2A", name: "Terracota", why: "Harmonia total com a pele, faz o rosto iluminar" },
      { hex: "#C6882A", name: "Mostarda / Âmbar", why: "Tom dourado faz a pele parecer mais luminosa" },
      { hex: "#7D2B4E", name: "Vinho / Borgonha", why: "Contraste elegante que valoriza pele morena" },
      { hex: "#1B5E3C", name: "Verde floresta", why: "Contraste profundo — muito flattering em tons pardos" },
      { hex: "#3D1A5A", name: "Roxo ameixa", why: "Intenso e feminino, cria profundidade" },
      { hex: "#1C2C5B", name: "Azul marinho", why: "Versátil, contraste marcante sem agredir" },
      { hex: "#5A3E28", name: "Chocolate", why: "Monocromático com a pele — efeito luxuoso" },
      { hex: "#C4956A", name: "Caramelo", why: "Tom próximo da pele — efeito sensual" },
    ],
    avoid: [
      { hex: "#E8F4F8", name: "Azul bebê", why: "Lava o rosto" },
      { hex: "#FFE4E1", name: "Rosa bebê", why: "Desbota o tom da pele" },
      { hex: "#FFFFFF", name: "Branco puro", why: "Use creme/off-white no lugar" },
      { hex: "#E8E0F0", name: "Lavanda pálida", why: "Apaga o brilho" },
    ],
    combos: [
      { swatches: ["#8B3A2A", "#C6882A", "#F5E6C8"], name: "Terra quente", desc: "Terracota + mostarda + creme" },
      { swatches: ["#7D2B4E", "#1A1A1A", "#B8860B"], name: "Noite e dourado", desc: "Vinho + preto + dourado" },
      { swatches: ["#1B5E3C", "#C4956A", "#F5E6C8"], name: "Floresta e mel", desc: "Verde escuro + caramelo" },
    ]
  },
  baixo: {
    /* Portar completo do rotina_amazona.html linhas 1329-1354 */
  },
  intima: {
    /* Portar completo do rotina_amazona.html linhas 1355-1381 */
  }
};
```

- [ ] **Step 2: Adicionar PROJECTION_RATES**

```javascript
const PROJECTION_RATES = {
  quadril: 0.7,
  cintura: -0.35,
  coxa: 0.5,
  peso: -0.38,
  busto: 0.25
};
```

- [ ] **Step 3: Adicionar SHOPPING_LIST_NEW (NÃO remover SHOPPING_LIST existente)**

Adicionar ao final de data.js:

```javascript
const SHOPPING_LIST_NEW = {
  proteinas: [
    { item: "Peito de frango ou sobrecoxa s/ pele", qty: "1.2 kg", checked: false },
    { item: "Carne moída patinho", qty: "600g", checked: false },
    { item: "Ovos", qty: "2 dúzias", checked: false },
    { item: "Whey Protein", qty: "1 pote (mensal)", checked: false },
    { item: "Tofu firme 🌿", qty: "2 blocos (600g)", checked: false },
    { item: "Filé de peixe", qty: "400g", checked: false },
    { item: "Queijo cottage", qty: "300g", checked: false },
    { item: "Iogurte grego natural integral", qty: "6 potes (170g)", checked: false },
  ],
  carboidratos: [
    { item: "Arroz branco ou integral", qty: "1 kg", checked: false },
    { item: "Feijão (carioca ou preto)", qty: "500g", checked: false },
    { item: "Batata-doce", qty: "1.5 kg", checked: false },
    { item: "Aveia em flocos finos", qty: "500g", checked: false },
    { item: "Pão integral", qty: "1 pacote", checked: false },
    { item: "Goma de tapioca", qty: "500g", checked: false },
    { item: "Granola sem açúcar", qty: "300g", checked: false },
  ],
  verduras_legumes: [
    { item: "Brócolis ou couve-flor 🌿", qty: "1 kg", checked: false },
    { item: "Abobrinha", qty: "800g", checked: false },
    { item: "Cenoura", qty: "500g", checked: false },
    { item: "Alface, tomate, pepino", qty: "livre", checked: false },
    { item: "Couve ou espinafre 🌿", qty: "2 maços", checked: false },
    { item: "Pimentão", qty: "3 un.", checked: false },
    { item: "Cebola e alho", qty: "500g + 1 cabeça", checked: false },
  ],
  frutas: [
    { item: "Banana", qty: "1 cacho (~12)", checked: false },
    { item: "Fruta da época", qty: "7 un.", checked: false },
    { item: "Abacate", qty: "2 un.", checked: false },
    { item: "Limão", qty: "6 un.", checked: false },
    { item: "Morangos ou kiwi", qty: "300g", checked: false },
  ],
  gorduras: [
    { item: "Pasta de amendoim", qty: "1 pote (500g)", checked: false },
    { item: "Azeite extra virgem", qty: "500ml", checked: false },
    { item: "Linhaça dourada moída 🌿", qty: "300g", checked: false },
  ],
  laticinios: [
    { item: "Leite de soja 🌿 ou leite semidesnatado", qty: "2L", checked: false },
    { item: "Requeijão light ou cottage", qty: "1 pote", checked: false },
  ],
  temperos_outros: [
    { item: "Shoyu / molho de soja", qty: "200ml", checked: false },
    { item: "Sal, pimenta, cominho, ervas", qty: "conforme falta", checked: false },
    { item: "Gergelim", qty: "100g", checked: false },
    { item: "Canela em pó", qty: "1 pote", checked: false },
    { item: "Extrato de tomate", qty: "2 latas", checked: false },
  ],
  suplementos_chas: [
    { item: "Creatina", qty: "1 pote (mensal)", checked: false },
    { item: "Ômega-3 cápsulas", qty: "1 pote (mensal)", checked: false },
    { item: "Multivitamínico", qty: "1 pote (mensal)", checked: false },
    { item: "Chá de spearmint (hortelã) 🌿", qty: "2 caixas", checked: false },
    { item: "Edamame congelado 🌿", qty: "2 pacotes", checked: false },
    { item: "Vitamina D3 + K2", qty: "1 pote (mensal)", checked: false },
  ],
};
```

- [ ] **Step 4: Adicionar SKINCARE_PRODUCTS e HAIR_WASH_ROUTINE**

Portar do `rotina_amazona.html` linhas 451-479 (skincare e hair products com preços):

```javascript
const SKINCARE_PRODUCTS = {
  rostoManha: [
    { name: "Gel de Limpeza Facial suave", brand: "Neutrogena ou CeraVe", price: "~R$25-40" },
    { name: "Sérum Vitamina C 10%", brand: "Yes! Vitamins ou Simple Organic", price: "~R$40-80" },
    { name: "Hidratante Gel-Creme leve", brand: "Neutrogena Hydro Boost", price: "~R$45-60" },
    { name: "Protetor Solar FPS 60 ★ ESSENCIAL", brand: "Episol Sec ou Anthelios Airlicium", price: "~R$35-85" },
  ],
  rostoNoite: [
    { name: "Gel de Limpeza (mesmo da manhã)", brand: "", price: "" },
    { name: "Sérum Niacinamida 10%", brand: "Skala (~R$20), Yes! Vitamins ou Dermage", price: "~R$20-50" },
    { name: "Retinol 0.3% (2-3x/sem inicialmente)", brand: "Episkin ou La Roche-Posay Redermic", price: "~R$50-120" },
    { name: "Hidratante Noturno mais rico", brand: "CeraVe Loção ou Aquaphor", price: "~R$40-80" },
  ],
  corpo: [
    { name: "Hidratante Corporal rico", brand: "Muriel Karité ou Nívea Luminous 630", price: "~R$20-55" },
    { name: "Protetor Solar Corporal FPS 50+", brand: "Episol corpo ou Nívea Sun", price: "~R$30-45" },
    { name: "Esfoliante corporal (1-2x/semana)", brand: "Océane Body Scrub ou sal grosso + azeite", price: "~R$0-25" },
    { name: "Nívea Luminous 630 (axilas + virilha)", brand: "Niacinamida + hexyl resorcinol", price: "~R$50-60" },
    { name: "Desodorante sem álcool e perfume", brand: "Nívea Sensitive ou Dove Sensitive", price: "~R$12-20" },
    { name: "Loção pós-depilação (anti-foliculite)", brand: "Com ác. salicílico — Nívea ou Avon Naturals", price: "~R$20-30" },
  ]
};

const HAIR_WASH_ROUTINE = [
  "Shampoo sem sulfato só no couro cabeludo — não esfregar as pontas",
  "Condicionador do meio pra baixo, 3-5 min. Enxaguar deixando um pouquinho",
  "Leave-in no fio ainda molhado espalhando bem",
  "Creme de pentear com squish (apertar cachos de baixo pra cima)",
  "Gel por cima — não tocar até secar completamente",
  "Secar com difusor (melhor que ar natural em clima úmido como Aracaju)",
  "Seco: quebrar o cast do gel batendo com as palmas levemente"
];

const HAIR_PRODUCTS = [
  { name: "Shampoo sem sulfato", brand: "Salon Line S.O.S Cachos ou Skala Expert", price: "~R$15-22" },
  { name: "Condicionador hidratante", brand: "Salon Line S.O.S ou Novex Embelleze", price: "~R$15-22" },
  { name: "Leave-in para cachos", brand: "Salon Line S.O.S ou Lola Minha Vida", price: "~R$20-35" },
  { name: "Creme de pentear", brand: "Lola Dream Cream ou Salon Line", price: "~R$22-38" },
  { name: "Gel fixador anti-frizz", brand: "Salon Line (versão pra cachos)", price: "~R$12-18" },
  { name: "Touca/Bonnet de cetim", brand: "Shopee — 'touca cetim cachos'", price: "~R$15-25" },
  { name: "Fronha de cetim", brand: "Shopee", price: "~R$20-40" },
];
```

- [ ] **Step 5: Verificar sintaxe**

- [ ] **Step 6: Commit**

```bash
git add data.js
git commit -m "feat: COLOR_GUIDE, PROJECTION_RATES, SHOPPING_LIST_NEW, SKINCARE_PRODUCTS, HAIR_WASH_ROUTINE"
```

---

## Task 6: Dashboard Timeline (app.js + index.html)

**Files:**
- Modify: `app.js:1122-1384` (reescrever Dashboard)
- Modify: `index.html` (adicionar CSS da timeline)

Esta é a task mais complexa. Reescrever o Dashboard.render() pra gerar a timeline do dia.

- [ ] **Step 1: Adicionar CSS da timeline em index.html**

Antes do fechamento `</style>`, adicionar:

```css
/* Timeline Dashboard */
.timeline-macros {
  display: flex;
  justify-content: space-around;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 12px;
  margin-bottom: 16px;
}
.timeline-macro-item { text-align: center; }
.timeline-macro-value { color: var(--accent); font-size: 1.1rem; font-weight: 700; display: block; }
.timeline-macro-label { color: var(--text-muted); font-size: 0.68rem; text-transform: uppercase; letter-spacing: 1px; }

.timeline-water {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  margin-bottom: 16px;
}
.timeline-bottle {
  width: 32px;
  height: 44px;
  border: 2px solid rgba(100, 180, 255, 0.3);
  border-radius: 4px 4px 8px 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  background: transparent;
}
.timeline-bottle.filled {
  background: rgba(100, 180, 255, 0.3);
  border-color: rgba(100, 180, 255, 0.6);
}
.timeline-bottle::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 6px;
  border: 2px solid rgba(100, 180, 255, 0.3);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.timeline-bottle.filled::before {
  border-color: rgba(100, 180, 255, 0.6);
}
.timeline-water-label {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-left: 8px;
}

.timeline-block {
  display: flex;
  gap: 12px;
  padding: 14px;
  margin-bottom: 8px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  transition: all 0.2s;
  cursor: pointer;
}
.timeline-block.completed {
  opacity: 0.5;
  border-left: 3px solid var(--success);
}
.timeline-block-time {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 44px;
  padding-top: 2px;
}
.timeline-block-content { flex: 1; }
.timeline-block-title {
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.timeline-block-items {
  color: var(--text-muted);
  font-size: 0.8rem;
  line-height: 1.6;
}
.timeline-block-items .fem-tag {
  background: rgba(120, 200, 140, 0.12);
  color: #78c88c;
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 10px;
  display: inline-block;
  margin-left: 4px;
}
.timeline-block-check {
  width: 24px;
  height: 24px;
  border: 2px solid var(--glass-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.2s;
}
.timeline-block.completed .timeline-block-check {
  background: var(--success);
  border-color: var(--success);
  color: white;
  font-size: 0.7rem;
}
.timeline-meal-options {
  display: flex;
  gap: 4px;
  margin-top: 6px;
}
.timeline-meal-opt {
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.72rem;
  border: 1px solid var(--glass-border);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-family: inherit;
}
.timeline-meal-opt.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg-dark);
  font-weight: 600;
}
```

- [ ] **Step 2: Reescrever Dashboard.init() e Dashboard.render()**

Em `app.js`, substituir o Dashboard (linhas 1122-1384). O novo Dashboard lê de DAILY_TIMELINE e WEEK_SCHEDULE:

```javascript
var Dashboard = {
  init: function() {
    var self = this;
    var container = document.getElementById('dashboard-content');
    if (!container) return;

    container.addEventListener('click', function(e) {
      // Toggle timeline block
      var block = e.target.closest('.timeline-block');
      if (block && !e.target.closest('.timeline-meal-opt')) {
        var blockId = block.getAttribute('data-block-id');
        self.toggleBlock(blockId);
        return;
      }

      // Meal option selection
      var mealOpt = e.target.closest('.timeline-meal-opt');
      if (mealOpt) {
        var mealId = mealOpt.getAttribute('data-meal-id');
        var optIdx = parseInt(mealOpt.getAttribute('data-opt-idx'));
        StorageManager.setValue('mealChoice_' + mealId, optIdx);
        self.render();
        return;
      }

      // Water bottle toggle
      var bottle = e.target.closest('.timeline-bottle');
      if (bottle) {
        var idx = parseInt(bottle.getAttribute('data-idx'));
        var current = StorageManager.getForDate('garrafas') || 0;
        var newVal = (idx + 1 === current) ? idx : idx + 1;
        StorageManager.setForDate('garrafas', newVal);
        self.render();
        return;
      }
    });

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'inicio') self.render();
    });

    // Render inicial
    this.render();
  },

  getTimelineType: function() {
    var dow = new Date().getDay();
    var schedule = WEEK_SCHEDULE[dow];
    return schedule ? schedule.type : 'descanso';
  },

  getTodayWorkoutLabel: function() {
    var dow = new Date().getDay();
    var schedule = WEEK_SCHEDULE[dow];
    return schedule ? schedule.label : 'Descanso';
  },

  getCompletedBlocks: function() {
    return StorageManager.getForDate('timeline') || {};
  },

  toggleBlock: function(blockId) {
    var completed = this.getCompletedBlocks();
    completed[blockId] = !completed[blockId];
    StorageManager.setForDate('timeline', completed);
    this.updateStreak();
    this.render();
  },

  getMealChoice: function(mealId) {
    return StorageManager.getValue('mealChoice_' + mealId, 0);
  },

  calculateDayMacros: function(timeline) {
    var totals = { kcal: 0, prot: 0, carb: 0, fat: 0 };
    for (var i = 0; i < timeline.length; i++) {
      var block = timeline[i];
      if (block.type === 'meal' && block.mealId && MEAL_OPTIONS[block.mealId]) {
        var choice = this.getMealChoice(block.mealId);
        var opts = MEAL_OPTIONS[block.mealId].options;
        if (opts && opts[choice]) {
          totals.kcal += opts[choice].kcal || 0;
          totals.prot += opts[choice].prot || 0;
          totals.carb += opts[choice].carb || 0;
          totals.fat += opts[choice].fat || 0;
        }
      }
    }
    return totals;
  },

  updateStreak: function() {
    // Recalculate streak with >70% blocks
    var streak = 0;
    var today = new Date();
    for (var d = 1; d <= 365; d++) {
      var date = new Date(today);
      date.setDate(date.getDate() - d);
      var dateStr = date.toISOString().split('T')[0];
      var completed = StorageManager.getForDate('timeline', date);
      if (!completed) break;
      var keys = Object.keys(completed);
      var doneCount = 0;
      for (var k = 0; k < keys.length; k++) {
        if (completed[keys[k]]) doneCount++;
      }
      // Need to know total blocks for that day — use timeline length
      var dow = date.getDay();
      var type = WEEK_SCHEDULE[dow] ? WEEK_SCHEDULE[dow].type : 'descanso';
      var total = DAILY_TIMELINE[type] ? DAILY_TIMELINE[type].length : 9;
      if (doneCount / total >= 0.7) {
        streak++;
      } else {
        break;
      }
    }
    StorageManager.setValue('streak', streak);
  },

  render: function() {
    var container = document.getElementById('dashboard-content');
    if (!container) return;

    var type = this.getTimelineType();
    var timeline = DAILY_TIMELINE[type] || DAILY_TIMELINE.treino;
    var completed = this.getCompletedBlocks();
    var macros = this.calculateDayMacros(timeline);
    var streak = StorageManager.getValue('streak', 0);
    var garrafas = StorageManager.getForDate('garrafas') || 0;
    var greeting = Utils.getContextGreeting();
    var quote = Utils.randomFrom(MOTIVATIONAL_QUOTES);
    var workoutLabel = this.getTodayWorkoutLabel();

    var html = '';

    // Greeting
    html += '<div class="card" style="text-align:center;margin-bottom:12px;padding:16px;">';
    html += '<div style="font-family:var(--font-title);font-size:1.4rem;color:var(--primary);">' + greeting + '</div>';
    html += '<div style="color:var(--text-muted);font-size:0.82rem;margin-top:6px;">' + quote + '</div>';
    html += '<div style="margin-top:8px;display:flex;gap:12px;justify-content:center;">';
    html += '<span style="color:var(--accent);font-size:0.82rem;">🔥 ' + streak + ' dias</span>';
    html += '<span style="color:var(--text-muted);font-size:0.82rem;">Hoje: ' + workoutLabel + '</span>';
    html += '</div></div>';

    // Macros do dia
    html += '<div class="timeline-macros">';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">~' + macros.kcal + '</span><span class="timeline-macro-label">kcal</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.prot + 'g</span><span class="timeline-macro-label">proteína</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.carb + 'g</span><span class="timeline-macro-label">carb</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.fat + 'g</span><span class="timeline-macro-label">gordura</span></div>';
    html += '</div>';

    // Água em garrafinhas
    html += '<div class="timeline-water">';
    for (var b = 0; b < 5; b++) {
      var filled = b < garrafas ? ' filled' : '';
      html += '<div class="timeline-bottle' + filled + '" data-idx="' + b + '"></div>';
    }
    html += '<span class="timeline-water-label">' + garrafas + '/5 garrafinhas (700ml)</span>';
    html += '</div>';

    // Timeline blocks
    for (var i = 0; i < timeline.length; i++) {
      var block = timeline[i];
      var isDone = completed[block.id] ? true : false;
      var doneClass = isDone ? ' completed' : '';

      html += '<div class="timeline-block' + doneClass + '" data-block-id="' + block.id + '">';
      html += '<div class="timeline-block-time">' + block.time + '</div>';
      html += '<div class="timeline-block-content">';
      html += '<div class="timeline-block-title">' + block.label + '</div>';

      // Items
      html += '<div class="timeline-block-items">';
      for (var j = 0; j < block.items.length; j++) {
        var item = block.items[j];
        var femTag = item.indexOf('🌿') >= 0 ? '<span class="fem-tag">🌿 fem</span>' : '';
        html += '<div>' + item + femTag + '</div>';
      }

      // Meal options (if meal block)
      if (block.type === 'meal' && block.mealId && MEAL_OPTIONS[block.mealId]) {
        var meal = MEAL_OPTIONS[block.mealId];
        var choice = this.getMealChoice(block.mealId);
        var opts = meal.options;
        if (opts && opts.length > 0) {
          html += '<div class="timeline-meal-options">';
          for (var o = 0; o < opts.length; o++) {
            var activeClass = o === choice ? ' active' : '';
            var femLabel = opts[o].fem ? '🌿 ' : '';
            html += '<button class="timeline-meal-opt' + activeClass + '" data-meal-id="' + block.mealId + '" data-opt-idx="' + o + '">' + femLabel + 'Opção ' + (o + 1) + '</button>';
          }
          html += '</div>';
          // Show selected meal macros
          var sel = opts[choice];
          if (sel) {
            html += '<div style="font-size:0.75rem;color:var(--accent);margin-top:4px;">' + sel.name + ' · ' + sel.kcal + 'kcal · ' + sel.prot + 'g prot</div>';
          }
        }
      }

      html += '</div>'; // items
      html += '</div>'; // content
      html += '<div class="timeline-block-check">' + (isDone ? '✓' : '') + '</div>';
      html += '</div>'; // block
    }

    container.innerHTML = html;
  }
};
```

- [ ] **Step 3: Atualizar referências ao antigo Dashboard no app.js**

Buscar por `calculateStreak`, `CHECKLIST_ITEMS`, `DAILY_ROUTINE`, `NIGHT_ROUTINE` em app.js e remover/atualizar todas as referências antigas. O `BadgeManager.checkAll()` pode precisar de ajuste pra funcionar com o novo formato de timeline.

- [ ] **Step 4: Verificar que o Dashboard carrega e funciona**

Abrir o app, verificar:
- Timeline aparece com todos os blocos
- Clicar em bloco marca como feito (check verde, opacidade reduzida)
- Garrafinhas clicáveis
- Opções de refeição trocam e macros atualizam
- Streak mostra (pode ser 0 pra dados novos)

- [ ] **Step 5: Commit**

```bash
git add app.js index.html
git commit -m "feat: Dashboard Timeline com blocos cronologicos, garrafinhas e macros"
```

---

## Task 7: NutritionManager Atualizado

**Files:**
- Modify: `app.js:2294-2672` (NutritionManager)

- [ ] **Step 1: Reescrever NutritionManager.render() pra 4 sub-abas**

Atualizar pra ter: Plano (3 opções por refeição), Suplementos (novo), Receitas (mantém), Compras (com copiar).

O render do Plano agora lê de `MEAL_OPTIONS` (3 opções com macros numéricos). `extractProtein()` simplifica pra ler `.prot` direto. Adicionar `renderSupplements()` que gera cards do objeto `SUPPLEMENTS`. Atualizar `renderShoppingList()` pra incluir botão "Copiar lista" que usa `navigator.clipboard.writeText()` com texto formatado.

Ajustes-chave:
- Sub-tab array: `['plano', 'suplementos', 'receitas', 'compras']`
- `extractProtein(meal)` → retorna `meal.prot` direto (era regex)
- Opções: seletor de 3 botões em vez de toggle A/B
- Shopping list: cada item com checkbox, botão copiar no topo

- [ ] **Step 2: Implementar botão "Copiar lista"**

```javascript
// Dentro do event listener do NutritionManager:
var copyBtn = e.target.closest('.copy-shopping-btn');
if (copyBtn) {
  var text = '🛒 Lista de Compras Semanal\n\n';
  var categories = Object.keys(SHOPPING_LIST_NEW);
  for (var c = 0; c < categories.length; c++) {
    var cat = categories[c];
    text += cat.replace(/_/g, ' ').toUpperCase() + ':\n';
    var items = SHOPPING_LIST_NEW[cat];
    for (var i = 0; i < items.length; i++) {
      text += '  □ ' + items[i].item + ' — ' + items[i].qty + '\n';
    }
    text += '\n';
  }
  navigator.clipboard.writeText(text).then(function() {
    Toast.show('Lista copiada! Cola no WhatsApp 📋', 'success');
  });
  return;
}
```

- [ ] **Step 3: Verificar as 4 sub-abas funcionam**

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: NutritionManager com 3 opcoes, suplementos, copiar lista de compras"
```

---

## Task 8: WorkoutManager Atualizado

**Files:**
- Modify: `app.js:1386-2279` (WorkoutManager)

- [ ] **Step 1: Reescrever WorkoutManager pra ler de WORKOUTS_NEW e WEEK_SCHEDULE**

Mudança fundamental: o WorkoutManager antigo selecionava o treino por `WORKOUTS[faseKey].days[dayName]` onde `dayName` era o nome do dia da semana (Segunda, Terça...). O novo sistema seleciona o treino via `WEEK_SCHEDULE`:

```javascript
// Lógica de seleção do treino do dia:
var dow = new Date().getDay(); // 0=Dom, 1=Seg, ...
var schedule = WEEK_SCHEDULE[dow];
var phase = StorageManager.getValue('currentPhase', 1);
var phaseKey = 'fase' + phase;
var phaseData = WORKOUTS_NEW[phaseKey];

if (schedule.workout) {
  // Dia de treino — buscar pelo nome do treino (ex: "Lower A", "Upper")
  var dayData = phaseData.days[schedule.workout];
  // Renderizar exercícios de dayData.exercises
} else {
  // Dia de descanso — mostrar opções leves (yoga, rebolar, ativação)
}
```

Adicionar tabs internas: Treino do Dia, Glúteo Esq, Yoga, Rebolar, Técnica, Cardio.

Cada exercício mostra: nome, séries x reps, peso sugerido (badge verde), tip, botão de vídeo, tag "Esq primeiro" (badge azul) quando `startLeft: true`.

Antes do treino, se for dia de lower (`WEEK_SCHEDULE[dow].warmup === 'lower'`), mostrar protocolo de ativação do glúteo esq (de `GLUTE_FIX_PROTOCOL.daily_exercises`) e aquecimento lower (de `WARMUP_LOWER`). Se upper, mostrar `WARMUP_UPPER`.

Após o treino, mostrar alongamento correspondente (`COOLDOWN_LOWER` ou `COOLDOWN_UPPER`).

As sub-abas Yoga, Rebolar, Técnica e Cardio renderizam respectivamente `YOGA_LEVELS`, `REBOLAR_STEPS`, `EXERCISE_TECHNIQUE` e `CARDIO_GUIDE`.

O bloco de treino na timeline do Dashboard deve navegar pra aba Treino ao clicar (além de marcar como feito):
```javascript
// No Dashboard, ao clicar no bloco de treino:
if (blockId === 'treino') {
  Router.navigate('treino');
}
```

- [ ] **Step 2: Adicionar CSS pra peso sugerido e alertas**

```css
/* Em index.html */
.exercise-weight-badge {
  background: rgba(120, 200, 140, 0.12);
  border: 1px solid rgba(120, 200, 140, 0.25);
  color: #78c88c;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
  white-space: nowrap;
}
.exercise-left-badge {
  background: rgba(168, 212, 240, 0.12);
  border: 1px solid rgba(168, 212, 240, 0.25);
  color: #a8d4f0;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}
.technique-alert {
  background: rgba(220, 80, 80, 0.08);
  border: 1px solid rgba(220, 80, 80, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 7px;
}
.technique-alert-signal {
  color: #e08080;
  font-size: 0.83rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.technique-alert-fix {
  color: var(--text-muted);
  font-size: 0.81rem;
  line-height: 1.55;
}
```

- [ ] **Step 3: Verificar que treino do dia funciona com as novas fases**

- [ ] **Step 4: Commit**

```bash
git add app.js index.html
git commit -m "feat: WorkoutManager com gluteo esq, yoga, rebolar, tecnica, cardio, pesos"
```

---

## Task 9: CareManager — Cores, Kegel 3 tipos, Skincare com preços, Hair 7 passos

**Files:**
- Modify: `app.js:2750-3403` (CareManager)
- Modify: `index.html` (CSS swatches)

- [ ] **Step 0: Atualizar sub-abas Skincare, Cabelo e Kegel**

- **Skincare**: Atualizar `renderSkincare()` pra ler de `SKINCARE_PRODUCTS` (com preços) em vez do `SKINCARE_ROUTINE` antigo. Manter notas pra pele parda.
- **Cabelo**: Atualizar `renderHair()` pra incluir `HAIR_WASH_ROUTINE` (7 passos) e `HAIR_PRODUCTS` (com preços). Adicionar nota sobre bonnet/fronha de cetim.
- **Kegel**: Atualizar `renderKegel()` pra ler de `KEGEL_PROTOCOL_TYPES` (3 tipos: rápida, longa, elevador) com timer integrado pra cada tipo.

- [ ] **Step 1: Adicionar sub-aba "Cores" ao CareManager**

Adicionar `'cores'` ao array de sub-tabs. Implementar `renderColors()` que:
- Mostra 3 sub-categorias (cima, baixo, intima) como botões
- Renderiza cores com swatches visuais (quadrado com a cor hex)
- Mostra combinações prontas com blocos de cor lado a lado
- Mostra cores a evitar com visual de "riscado"

```css
/* CSS para color swatches */
.color-swatch {
  width: 100%;
  height: 48px;
  border-radius: 8px 8px 0 0;
}
.color-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 8px;
}
.color-card-info {
  padding: 8px 10px;
}
.color-card-name { color: var(--text); font-size: 0.86rem; font-weight: 500; }
.color-card-why { color: var(--text-muted); font-size: 0.75rem; line-height: 1.4; margin-top: 2px; }
.color-combo {
  display: flex;
  height: 36px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}
.color-combo > div { flex: 1; }
.color-avoid { opacity: 0.6; }
.color-avoid .color-swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
```

- [ ] **Step 2: Verificar que a sub-aba Cores aparece e funciona**

- [ ] **Step 3: Commit**

```bash
git add app.js index.html
git commit -m "feat: CareManager com guia de cores de roupa pra pele parda"
```

---

## Task 10: ProgressManager — Projeção Corporal

**Files:**
- Modify: `app.js:3405+` (ProgressManager)
- Modify: `index.html` (CSS projeção)

- [ ] **Step 1: Adicionar sub-aba "Projeção" ao ProgressManager**

Adicionar `'projecao'` ao array de sub-tabs. Implementar `renderProjection()` que:
1. Mostra formulário com 6 campos numéricos (peso, altura, cintura, quadril, coxa, busto)
2. Botão "Projetar resultado"
3. Ao clicar, calcula projeções usando `PROJECTION_RATES`
4. Renderiza comparação Hoje vs 12 meses
5. Renderiza silhueta SVG lado a lado
6. Mostra timeline com marcos (3, 6, 12, 18 meses)
7. Calcula "Quando chego na amazona?" (C/Q < 0.75 + quadril > 105cm)

- [ ] **Step 2: Portar a função silPath do rotina_amazona.html**

A função `silPath` (linhas 1115-1136 do rotina_amazona.html) gera o path SVG de uma silhueta baseada nas medidas. Portar como função utilitária dentro do ProgressManager:

```javascript
generateSilhouettePath: function(measurements, cx) {
  var s = 0.62;
  var hw = (measurements.quadril / 2) * s;
  var ww = (measurements.cintura / 2) * s * 0.98;
  var sw = hw * 0.84;
  var tw = (measurements.coxa / 2) * s * 0.88;
  var bw = (measurements.busto / 2) * s * 0.87;
  var y0=22,y1=58,y2=98,y3=132,y4=172,y5=212,y6=278;
  return 'M' + cx + ' ' + y0 +
    'C' + (cx+sw*0.5) + ' ' + y0 + ' ' + (cx+sw) + ' ' + (y0+14) + ' ' + (cx+sw) + ' ' + (y0+20) +
    'C' + (cx+sw+2) + ' ' + (y0+30) + ' ' + (cx+bw) + ' ' + (y1-4) + ' ' + (cx+bw) + ' ' + (y1+5) +
    'C' + (cx+bw) + ' ' + (y1+22) + ' ' + (cx+ww+4) + ' ' + (y2-14) + ' ' + (cx+ww) + ' ' + y2 +
    'C' + (cx+ww-2) + ' ' + (y2+22) + ' ' + (cx+hw) + ' ' + (y3-18) + ' ' + (cx+hw) + ' ' + y3 +
    'C' + (cx+hw) + ' ' + (y3+26) + ' ' + (cx+tw+4) + ' ' + (y4-14) + ' ' + (cx+tw) + ' ' + y4 +
    'C' + (cx+tw) + ' ' + (y4+20) + ' ' + (cx+tw*0.72) + ' ' + (y5-10) + ' ' + (cx+tw*0.68) + ' ' + y5 +
    'C' + (cx+tw*0.62) + ' ' + (y5+22) + ' ' + (cx+tw*0.4) + ' ' + (y6-22) + ' ' + (cx+tw*0.38) + ' ' + y6 +
    'L' + (cx-tw*0.38) + ' ' + y6 +
    'C' + (cx-tw*0.4) + ' ' + (y6-22) + ' ' + (cx-tw*0.62) + ' ' + (y5+22) + ' ' + (cx-tw*0.68) + ' ' + y5 +
    'C' + (cx-tw*0.72) + ' ' + (y5-10) + ' ' + (cx-tw) + ' ' + (y4+20) + ' ' + (cx-tw) + ' ' + y4 +
    'C' + (cx-tw-4) + ' ' + (y4-14) + ' ' + (cx-hw) + ' ' + (y3+26) + ' ' + (cx-hw) + ' ' + y3 +
    'C' + (cx-hw) + ' ' + (y3-18) + ' ' + (cx-ww+2) + ' ' + (y2+22) + ' ' + (cx-ww) + ' ' + y2 +
    'C' + (cx-ww-4) + ' ' + (y2-14) + ' ' + (cx-bw) + ' ' + (y1+22) + ' ' + (cx-bw) + ' ' + (y1+5) +
    'C' + (cx-bw) + ' ' + (y1-4) + ' ' + (cx-sw-2) + ' ' + (y0+30) + ' ' + (cx-sw) + ' ' + (y0+20) +
    'C' + (cx-sw) + ' ' + (y0+14) + ' ' + (cx-sw*0.5) + ' ' + y0 + ' ' + cx + ' ' + y0 + 'Z';
},
```

- [ ] **Step 3: Implementar cálculos de projeção**

```javascript
projectMeasurements: function(baseline, months) {
  return {
    peso: Math.round((baseline.peso + PROJECTION_RATES.peso * months) * 10) / 10,
    cintura: Math.round((baseline.cintura + PROJECTION_RATES.cintura * months) * 10) / 10,
    quadril: Math.round((baseline.quadril + PROJECTION_RATES.quadril * months) * 10) / 10,
    coxa: Math.round((baseline.coxa + PROJECTION_RATES.coxa * months) * 10) / 10,
    busto: Math.round((baseline.busto + PROJECTION_RATES.busto * months) * 10) / 10,
  };
},

calculateGoalMonths: function(baseline) {
  var targetWHR = 0.75;
  var curWHR = baseline.cintura / baseline.quadril;
  var moWHR = curWHR <= targetWHR ? 0 : Math.ceil((baseline.cintura - targetWHR * baseline.quadril) / (Math.abs(PROJECTION_RATES.cintura) + targetWHR * PROJECTION_RATES.quadril));
  var moHip = baseline.quadril >= 105 ? 0 : Math.ceil((105 - baseline.quadril) / PROJECTION_RATES.quadril);
  return Math.max(moWHR, moHip, 6);
},
```

- [ ] **Step 4: Verificar que a projeção funciona**

Abrir Progresso → Projeção, inserir medidas (peso: 96, cintura: 90, quadril: 105, coxa: 62, busto: 100), clicar "Projetar resultado". Verificar que:
- Comparação mostra deltas
- Silhueta SVG renderiza duas figuras
- Timeline com marcos aparece
- "Quando chego na amazona?" calcula e mostra

- [ ] **Step 5: Commit**

```bash
git add app.js index.html
git commit -m "feat: projecao corporal com silhueta SVG e calculadora amazona"
```

---

## Task 11: Cleanup e Service Worker

**Files:**
- Modify: `data.js` (remover objetos orfanados)
- Modify: `sw.js` (incrementar cache version)
- Modify: `app.js` (limpar referências antigas)

- [ ] **Step 1: Renomear objetos _NEW e remover orfanados de data.js**

Renomear:
- `WORKOUTS_NEW` → `WORKOUTS` (apagar o WORKOUTS antigo primeiro)
- `SHOPPING_LIST_NEW` → `SHOPPING_LIST` (apagar o antigo primeiro)

Remover objetos orfanados:
- `WEIGHT_GUIDE` — pesos agora inline nos WORKOUTS
- `DAILY_ROUTINE` — substituído por DAILY_TIMELINE
- `NIGHT_ROUTINE` — coberto pelo bloco noturno da timeline
- `CHECKLIST_ITEMS` — substituído por timeline blocks
- `MEALS` (antigo) — substituído por MEAL_OPTIONS
- `WARMUP` (antigo) — substituído por WARMUP_LOWER/UPPER
- `COOLDOWN` (antigo) — substituído por COOLDOWN_LOWER/UPPER

- [ ] **Step 2: Limpar referências antigas em app.js**

Buscar por `WEIGHT_GUIDE`, `DAILY_ROUTINE`, `NIGHT_ROUTINE`, `CHECKLIST_ITEMS`, `MEALS[`, `WARMUP[`, `COOLDOWN[` em app.js. Remover qualquer referência remanescente.

Atualizar `BadgeManager.checkAll()` pra funcionar com os novos dados:
- Onde lia `StorageManager.getForDate('checklist')` → ler `StorageManager.getForDate('timeline')`
- Adaptar condições de badge que dependiam do formato antigo

Atualizar referências em WorkoutManager e NutritionManager:
- `WORKOUTS_NEW` → `WORKOUTS` (após o rename)
- `SHOPPING_LIST_NEW` → `SHOPPING_LIST` (após o rename)

- [ ] **Step 3: Incrementar cache version no sw.js**

```javascript
// Em sw.js, trocar:
var CACHE_VERSION = 'arthur-app-v8';
// Por:
var CACHE_VERSION = 'arthur-app-v9';
```

- [ ] **Step 4: Teste final completo**

Abrir o app e verificar todas as abas:
1. Início: timeline do dia, garrafinhas, macros, streak, blocos completáveis
2. Treino: fases com pesos, glúteo esq, yoga, rebolar, técnica, cardio
3. Nutrição: 3 opções, suplementos, receitas, lista com copiar
4. Cuidados: skincare, cabelo, depilação, kegel, cores
5. Progresso: fotos, medidas, gráficos, conquistas, projeção

Verificar console pra erros JS.

- [ ] **Step 5: Commit final**

```bash
git add data.js app.js sw.js index.html
git commit -m "refactor: cleanup objetos orfanados + cache version v9"
```

---

## Resumo de Tasks

| # | Task | Arquivos | Estimativa |
|---|------|----------|-----------|
| 1 | Dados nutrição (MEAL_OPTIONS + SUPPLEMENTS) | data.js | Médio |
| 2 | Timeline + agenda semanal | data.js, app.js | Médio |
| 3 | WORKOUTS reescritos (4 fases) | data.js | Grande |
| 4 | Dados suporte treino (warmups, glúteo, yoga, rebolar, técnica) | data.js | Grande |
| 5 | Cores, projeção, compras | data.js | Médio |
| 6 | Dashboard Timeline (UI) | app.js, index.html | Grande |
| 7 | NutritionManager (3 opções, suplementos, copiar) | app.js | Grande |
| 8 | WorkoutManager (sub-abas, pesos, alertas) | app.js, index.html | Grande |
| 9 | CareManager cores de roupa | app.js, index.html | Médio |
| 10 | ProgressManager projeção SVG | app.js, index.html | Grande |
| 11 | Cleanup + SW | data.js, app.js, sw.js | Pequeno |
