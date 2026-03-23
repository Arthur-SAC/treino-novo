# Design: Aba "Meu Dia"

## Resumo

Substituir a aba "Inicio" por uma aba "Meu Dia" que funciona como guia completo do dia. Conteudo organizado em cards narrativos por periodo, com explicacoes detalhadas de cada atividade. Cards comecam abertos e podem ser colapsados pelo usuario conforme vai completando.

## Motivacao

- A aba Inicio atual mistura dashboard com timeline superficial
- Alongamentos e mobilidade nao sao bem explicados (so lista nomes)
- Usuario quer um guia passo-a-passo que explique O QUE fazer e POR QUE
- Outras abas (Treino, Nutricao, Cuidados, Progresso) servem como referencia detalhada

## Estrutura

### Topo — Mini Dashboard

Antes dos cards, header compacto com:
- Saudacao dinamica (Bom dia/Boa tarde/Boa noite) + nome + dia da semana
- Streak de dias consecutivos
- Label do treino de hoje (ex: "Lower A — Gluteo Heavy") ou "Descanso"
- Barra de progresso de macros do dia (kcal/proteina consumidos vs meta)
- Water tracker (5 garrafas de 700ml) — migrado do Dashboard atual
- Power Move do dia — mantido do Dashboard atual

### Cards — Comportamento

- Cada card tem **header clicavel** (icone + horario + titulo)
- Clicar no header **colapsa/expande** o corpo do card
- Todos comecam **abertos** ao abrir o app
- Estado colapsado persiste usando `StorageManager.getForDate()` (auto-reset diario)
- Card colapsado mostra so o header com seta indicando que pode expandir

### Cards — HTML Skeleton

```html
<div class="day-card" data-card-id="acordar">
  <div class="day-card-header" onclick="DayManager.toggleCard('acordar')">
    <span class="day-card-icon">☀️</span>
    <span class="day-card-time">06:00</span>
    <span class="day-card-title">Ao Acordar</span>
    <span class="day-card-arrow">▼</span>
  </div>
  <div class="day-card-body">
    <!-- conteudo narrativo -->
  </div>
</div>
```

### Cards — Lista por Tipo de Dia

#### Dia de Treino (seg, qua, sex, sab)

| # | Icone | Horario | Titulo | Conteudo |
|---|-------|---------|--------|----------|
| 1 | ☀️ | 06:00 | Ao Acordar | Agua 700ml em jejum (explicar por que: metabolismo, hidratacao pos-sono, rins). Kegel rapido: passo-a-passo com tempo de contracao/repouso. Vacuum abdominal: posicao, respiracao, 3x20s. Mobilidade matinal: cada movimento com descricao detalhada, musculos trabalhados, 5min total |
| 2 | 🧴 | 06:15 | Skincare Manha | Leitura direta de `SKINCARE_ROUTINE.morning.steps[]` — cada produto em ordem: lavar rosto, vitamina C (esperar 2min), hidratante, protetor solar. Explicar por que a ordem importa |
| 3 | ☕ | 07:00 | Cafe da Manha | Renderiza opcoes de `MEAL_OPTIONS.cafe` com macros. Cha de hortela |
| 4 | 🍎 | 10:00 | Lanche da Manha | Renderiza `MEAL_OPTIONS.lanche1` + por que comer nesse horario |
| 5 | 🍽️ | 12:00 | Almoco | Renderiza `MEAL_OPTIONS.almoco` com macros |
| 6 | ⚡ | 16:00 | Pre-Treino | Renderiza `MEAL_OPTIONS.pre_treino` com macros. Timing ideal. Cafe/creatina |
| 7 | 💪 | 17:40 | Treino do Dia | Le `WORKOUTS[fase][workout]` para o treino do dia. Aquecimento, exercicios com series/reps/descanso, cooldown |
| 8 | 🐕 | 19:00 | Pos-Treino | Shake pos-treino. Caminhada com dogs ~25min. Alongamento detalhado |
| 9 | 🌙 | 20:00 | Jantar | Renderiza `MEAL_OPTIONS.jantar` com macros |
| 10 | 🌛 | 22:00 | Rotina Noturna | Le `SKINCARE_ROUTINE.night.steps[]`. Kegel longo. Melatonina. Dicas de sono |

#### Dia de Descanso Ativo (terca — yoga + rebolar)

Cards compartilhados: 1 (acordar), 2 (skincare manha), 3 (cafe), 4 (lanche manha), 5 (almoco), 9 (jantar), 10 (rotina noturna).

Card 6 vira:
- 🍌 **16:00 — Lanche da Tarde** — Snack leve (renderiza `MEAL_OPTIONS.lanche2`)

Card 7 vira:
- 🧘 **17:00 — Yoga + Rebolar** — Sequencia de yoga do dia + exercicios de movimento/quadril. Le dados de yoga/rebolar do `WORKOUTS`

Card 8 vira:
- 🚶 **18:30 — Pos-Atividade** — Caminhada leve com dogs, alongamento suave

#### Dia de Ativacao Leve (quinta)

Cards compartilhados: 1, 2, 3, 4, 5, 9, 10.

Card 6 vira:
- 🍌 **16:00 — Lanche da Tarde** — Snack leve

Card 7 vira:
- 🟡 **17:00 — Ativacao + Caminhada** — Ativacao glutea obrigatoria (gluteo esq) + caminhada

Card 8 **nao aparece** (nao ha pos-treino em dia de ativacao leve).

#### Dia de Descanso Total (domingo)

Cards compartilhados: 1, 2, 3, 4, 5, 9, 10.

Cards 6, 7, 8 **nao aparecem**. Em seu lugar, um unico card:
- 😴 **15:00 — Descanso** — Importancia do descanso pra recuperacao muscular, sugestoes leves (alongamento opcional, leitura, passeio)

## Dados

### Migracao de `WEEK_SCHEDULE`

Atualizar `WEEK_SCHEDULE` no `data.js` para usar 4 tipos de dia ao inves de 2:

```js
const WEEK_SCHEDULE = {
  0: { type: "descanso-total", label: "😴 Descanso total", ... },
  1: { type: "treino", workout: "Lower A", label: "💪 Lower A (Glúteo heavy)", ... },
  2: { type: "descanso-ativo", label: "🧘 Yoga + Rebolar", ... },
  3: { type: "treino", workout: "Upper Body", label: "💪 Upper Body", ... },
  4: { type: "ativacao-leve", label: "🟡 Ativação + Caminhada", ... },
  5: { type: "treino", workout: "Lower B", label: "💪 Lower B (Coxas + Quadril)", ... },
  6: { type: "treino", workout: "Glúteo Isolado + Core", label: "💪 Glúteo Isolado + Core", ... },
};
```

### Novo objeto `DAILY_CARDS`

Conteudo narrativo em `data.js`. Cards compartilhados sao definidos uma vez e compostos pelo `DayManager` conforme o tipo de dia.

```js
const DAILY_CARDS = {
  // Cards compartilhados (usados em todos os tipos de dia)
  acordar: { icon: "☀️", time: "06:00", title: "Ao Acordar", content: { ... } },
  skincare_manha: { icon: "🧴", time: "06:15", title: "Skincare Manhã", content: { ... } },
  cafe: { icon: "☕", time: "07:00", title: "Café da Manhã", content: { ... } },
  lanche_manha: { icon: "🍎", time: "10:00", title: "Lanche da Manhã", content: { ... } },
  almoco: { icon: "🍽️", time: "12:00", title: "Almoço", content: { ... } },
  jantar: { icon: "🌙", time: "20:00", title: "Jantar", content: { ... } },
  rotina_noturna: { icon: "🌛", time: "22:00", title: "Rotina Noturna", content: { ... } },

  // Cards especificos por tipo de dia
  pre_treino: { icon: "⚡", time: "16:00", title: "Pré-Treino", content: { ... } },
  treino: { icon: "💪", time: "17:40", title: "Treino do Dia", content: { ... } },
  pos_treino: { icon: "🐕", time: "19:00", title: "Pós-Treino", content: { ... } },
  lanche_tarde: { icon: "🍌", time: "16:00", title: "Lanche da Tarde", content: { ... } },
  yoga_rebolar: { icon: "🧘", time: "17:00", title: "Yoga + Rebolar", content: { ... } },
  pos_atividade: { icon: "🚶", time: "18:30", title: "Pós-Atividade", content: { ... } },
  ativacao_leve: { icon: "🟡", time: "17:00", title: "Ativação + Caminhada", content: { ... } },
  descanso: { icon: "😴", time: "15:00", title: "Descanso", content: { ... } },
};

// Composicao de cards por tipo de dia
const DAY_CARD_LAYOUTS = {
  "treino": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "pre_treino", "treino", "pos_treino", "jantar", "rotina_noturna"],
  "descanso-ativo": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "yoga_rebolar", "pos_atividade", "jantar", "rotina_noturna"],
  "ativacao-leve": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "ativacao_leve", "jantar", "rotina_noturna"],
  "descanso-total": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "descanso", "jantar", "rotina_noturna"],
};
```

Cada card tem `content` com estrutura:
```js
content: {
  intro: "Texto introdutorio opcional",
  steps: [
    { name: "Nome", description: "Texto detalhado...", why: "Explicacao...", duration: "5min" }
  ]
}
```

Cards de refeicao: `content.steps` eh gerado dinamicamente a partir de `MEAL_OPTIONS`.
Card de treino: `content` eh gerado dinamicamente a partir de `WORKOUTS[fase][workout]`.
Cards de skincare: `content.steps` eh gerado a partir de `SKINCARE_ROUTINE.morning/night`.

### Remocao de `DAILY_TIMELINE`

O objeto `DAILY_TIMELINE` sera removido. Seu conteudo esta inteiramente coberto por `DAILY_CARDS` + `DAY_CARD_LAYOUTS`.

## Logica — DayManager (app.js)

### Substituicao do Dashboard

`DayManager` **substitui** o objeto `Dashboard` atual. Responsabilidades migradas:
- Streak: calculo e exibicao (mini-dashboard)
- Water tracker: exibicao e interacao (mini-dashboard)
- Macros: barra de progresso (mini-dashboard)
- Power Move do dia: exibicao (mini-dashboard)
- Timeline: **removida**, substituida pelos cards

Em `App.init()`, trocar `Dashboard.init()` por `DayManager.init()`. Remover o objeto `Dashboard`.

### Tab ID

O ID interno da aba permanece `"inicio"` (HTML `id="page-inicio"`, `data-page="inicio"`, Router pages). Apenas o label visivel na barra de navegacao muda de "Início" para "Meu Dia". Isso evita quebrar localStorage keys, hash URLs, e event handlers existentes.

### Funcionalidades do DayManager

1. `init()` — setup de event listeners
2. `render()` — detecta dia, monta cards, renderiza mini-dashboard + cards
3. `getCardsForToday()` — usa `WEEK_SCHEDULE[day].type` + `DAY_CARD_LAYOUTS` pra montar a lista
4. `renderCard(cardId)` — renderiza um card individual com conteudo narrativo ou dinamico
5. `toggleCard(cardId)` — colapsa/expande, salva estado via `StorageManager.getForDate()`
6. `renderMiniDashboard()` — saudacao, streak, macros, water, power move

## Visual — CSS

- Cards com bordas arredondadas (12px), sombra leve, fundo com leve transparencia sobre o tema dark
- Header do card: fundo com gradiente suave (roxo/azul alinhado ao tema RPG), icone grande, horario e titulo
- Seta de colapsar/expandir (▼/▶) no canto direito do header, rotaciona com transicao
- Transicao suave ao colapsar: `max-height` + `overflow: hidden` + `transition: 0.3s ease`
- Texto narrativo com `line-height: 1.6`, paragrafos com margem
- Steps com visual de lista numerada elegante (circulos coloridos com numero)
- Tags "por que?" em destaque (cor accent, italico) para as explicacoes
- Responsivo: cards ocupam largura total no mobile (ja eh mobile-first)
- Classes CSS: `.day-card`, `.day-card-header`, `.day-card-body`, `.day-card-icon`, `.day-card-time`, `.day-card-title`, `.day-card-arrow`, `.day-card-collapsed`, `.day-card-step`, `.day-card-why`

## Impacto nas Outras Abas

- **Treino**: continua igual, serve como referencia detalhada de exercicios, fases, tecnicas
- **Nutricao**: continua igual, referencia pra ver receitas de outros dias, macros gerais
- **Cuidados**: continua igual, referencia pra rotinas completas (cabelo, depilacao, etc.)
- **Progresso**: continua igual
- **Dashboard (removido)**: objeto `Dashboard` removido do app.js. Conteudo migra — streak, water tracker, macros e power move vao pro mini-dashboard do DayManager. DAILY_TIMELINE removido do data.js

## Fora do Escopo

- Notificacoes/alarmes por horario
- Integracao com calendario externo
- Gamificacao alem do streak existente
- Dica do Dia e Citacao Motivacional (removidos na migracao — conteudo motivacional fica nos cards)
