# Design: Treino Narrativo Integrado

## Resumo

Reescrever a aba Treino para usar cards narrativos (mesmo padrao da aba Meu Dia), eliminar todas as sub-abas, integrar tecnica/gluteo fix/cardio no fluxo do treino, estruturar terca (yoga+rebolar) e quinta como treinos reais, adicionar card bonus sensual na aba Meu Dia, e amarrar progressao de yoga/rebolar/sensual nas fases de forca.

## Motivacao

- Aba Treino atual tem 6 sub-abas (Treino, Gluteo Fix, Yoga, Movimento, Tecnica, Cardio) — fragmenta a experiencia
- Exercicios nao sao explicados (so nome + sets/reps), usuario nao sabe como executar direito
- Terca mostra "Dia de Descanso Ativo" ao inves de um treino montado
- Yoga e rebolar nao tem progressao amarrada com as fases de forca
- Nao existe treino de sensualidade/movimento como opcao

## Escopo

### Dentro do escopo
- Reescrever renderizacao da aba Treino (WorkoutManager)
- Remover todas as sub-abas (Treino, Gluteo Fix, Yoga, Movimento, Tecnica, Cardio)
- Cards narrativos para exercicios com funcionalidade (checkboxes, peso, timer, GIF)
- Treino estruturado para terca (yoga + rebolar) e quinta (ativacao + leve)
- Progressao de yoga/rebolar/sensual amarrada nas fases
- Card bonus sensual na aba Meu Dia (todos os dias, opcional)
- Marcos de flexibilidade
- Check mensal gluteo esquerdo

### Fora do escopo
- Aba Cuidados (fica como esta)
- Aba Progresso (fica como esta, exceto adicao de marcos flexibilidade)
- Aba Nutricao (fica como esta)
- Tracker de sono (futuro)
- Lista de compras WhatsApp (futuro)

---

## 1. Aba Treino — Fluxo Unico Sem Sub-Abas

### Estrutura por tipo de dia

#### Dia de Treino (seg, qua, sex, sab)

Fluxo unico de cards de cima pra baixo:

| Ordem | Card | Conteudo |
|-------|------|----------|
| 0 | Seletor de Fase | Dropdown/botoes pra trocar fase (1-4). Mantido do atual |
| 1 | 🍑 Ativacao Gluteo Esquerdo | SEMPRE primeiro. Protocolo de ativacao unilateral. Narrativo + checkboxes |
| 2 | 🔥 Aquecimento | Warmup lower/upper do dia. Cada movimento em card narrativo |
| 3-N | 💪 Exercicios do Dia | Cada exercicio em card narrativo com funcionalidade (ver secao abaixo) |
| N+1 | 🏃 Cardio (se aplicavel) | Caminhada/esteira pos-treino, integrado no fluxo |
| N+2 | 🧘 Cooldown / Alongamento | Cada alongamento em card narrativo detalhado |

#### Dia de Yoga + Rebolar (terca)

| Ordem | Card | Conteudo |
|-------|------|----------|
| 0 | Fase atual | Indica nivel de yoga/rebolar baseado na fase |
| 1 | 🍑 Ativacao Gluteo Esquerdo | SEMPRE primeiro |
| 2 | 🧘 Mobilidade de Quadril | Aquecimento especifico (circulos, cat-cow) |
| 3-N | 🧘 Poses de Yoga | Cada pose do nivel atual, com descricao + tempo + "por que" + timer |
| N+1-M | 💃 Rebolar | Cada exercicio da fase atual, narrativo |
| M+1 | 🧘 Alongamento Final | Cooldown suave |

#### Dia de Ativacao Leve (quinta)

| Ordem | Card | Conteudo |
|-------|------|----------|
| 1 | 🍑 Ativacao Gluteo Esquerdo | OBRIGATORIO |
| 2 | 🟡 Escolha sua atividade | Card com opcoes: caminhada 25min / yoga leve / escada do predio |

#### Dia de Descanso Total (domingo)

Aba Treino mostra um card unico: "Hoje eh dia de descanso. Seu corpo esta recuperando e crescendo."

### Card de Exercicio — Estrutura

Cada exercicio eh um card colapsavel (mesmo CSS dos day-cards do Meu Dia):

```
Header: [emoji] Nome do Exercicio          [3x15] [▼]
Body:
  [Descricao narrativa de como executar — 2-3 frases claras]

  [Por que? Explicacao do proposito pro objetivo amazona]

  [⚠️ Erros comuns: lista do EXERCISE_VIDEOS.commonMistakes]

  [▶ Ver GIF] — abre o GIF do ExerciseDB ou video YouTube

  [✓] Serie 1  [✓] Serie 2  [ ] Serie 3
  Peso: [__ kg]    ⏱️ Descanso: 60s [Iniciar Timer]
```

Dados para descricao narrativa de cada exercicio: novo campo `narrative` no objeto de cada exercicio em WORKOUTS, com texto explicativo de como executar + por que + dicas. O `tips` e `commonMistakes` do EXERCISE_VIDEOS ja existem e serao reutilizados.

### Cards de Aquecimento e Cooldown

Mesmo formato narrativo. Cada movimento do warmup/cooldown vira um card com:
- Nome + duracao
- Descricao detalhada de como fazer
- "Por que" esse aquecimento/alongamento
- Timer (quando aplicavel)

### Ativacao Gluteo Esquerdo — Card Fixo

Aparece SEMPRE como primeiro card, em TODOS os dias (exceto domingo). Conteudo:
- Titulo: "🍑 Ativacao Gluteo Esquerdo — OBRIGATORIO"
- Descricao narrativa do protocolo (clamshell + abducao + fire hydrant lado esq)
- Por que: assimetria, correcao, importancia
- Checkboxes pra cada serie
- Check mensal: a cada 30 dias, aparece uma pergunta "Aperte o gluteo esq e o dir — ainda sente diferenca? (sim/nao/melhorou)" — salva no storage

---

## 2. Progressao Amarrada

### Tabela de Progressao

| Fase Forca | Meses | Yoga | Rebolar | Bonus Sensual |
|-----------|-------|------|---------|---------------|
| Fase 1 — Fundacao | 1-2 | Iniciante (5 poses basicas, 2min cada) | Isolamento Base (quadril frente/tras, esq/dir, circulos) | Basico (circulo quadril, ondulacao simples) |
| Fase 2 — Construcao | 3-5 | Intermediario (5 poses, 2min cada) | Ritmo (com musica, figura 8, espelho) | Com ritmo (body wave, rebolar com musica) |
| Fase 3 — Amazona | 6-10 | Avancado (4 poses, 3min cada) | Expressao (bracos, expressao corporal) | Coreografia (movimentos combinados, confianca) |
| Fase 4 — Manutencao | 11+ | Avancado + splits | Livre (estilo proprio) | Livre (expressao pessoal, improvisar) |

### Implementacao

O `currentPhase` ja existe no StorageManager. Yoga, rebolar e sensual usam esse mesmo valor pra determinar qual conteudo mostrar. Dados ficam em `data.js`:

```js
const YOGA_PHASE_MAP = {
  1: "iniciante",
  2: "intermediario",
  3: "avancado",
  4: "avancado"
};

const REBOLAR_PHASE_MAP = {
  1: 0,  // index 0 de REBOLAR_STEPS (Isolamento Base)
  2: 1,  // index 1 (Ritmo)
  3: 2,  // index 2 (Expressao)
  4: 2   // mesma fase, estilo livre
};
```

---

## 3. Card Bonus Sensual — Aba Meu Dia

### Posicao

Aparece em TODOS os dias (treino e descanso), como card antes do Jantar na aba Meu Dia. Colapsavel como os outros.

### Conteudo por Fase

Novo objeto `SENSUAL_BONUS` em data.js:

```js
const SENSUAL_BONUS = {
  1: {
    title: "Movimento Sensual — Basico",
    duration: "10min",
    intro: "Coloque uma musica que te faca sentir poderosa. Esses exercicios constroem controle de quadril e consciencia corporal.",
    steps: [
      { name: "Circulos de quadril", description: "De pe, maos na cintura...", duration: "2min", why: "..." },
      { name: "Ondulacao frente/tras", description: "...", duration: "2min", why: "..." },
      { name: "Ondulacao lateral", description: "...", duration: "2min", why: "..." },
      { name: "Movimento livre", description: "Bota a musica e mexe como sentir vontade...", duration: "4min", why: "..." }
    ]
  },
  2: { ... },  // Com ritmo, body wave, figura 8
  3: { ... },  // Coreografia, combinacoes
  4: { ... }   // Livre, improvisacao, expressao pessoal
};
```

### No DAY_CARD_LAYOUTS

Adicionar "bonus_sensual" em todos os layouts, antes de "jantar":

```js
"treino": [..., "pos_treino", "bonus_sensual", "jantar", "rotina_noturna"],
"descanso-ativo": [..., "pos_atividade", "bonus_sensual", "jantar", "rotina_noturna"],
"ativacao-leve": [..., "ativacao_leve", "bonus_sensual", "jantar", "rotina_noturna"],
"descanso-total": [..., "descanso", "bonus_sensual", "jantar", "rotina_noturna"]
```

### No DAILY_CARDS

```js
bonus_sensual: {
  icon: "💃",
  time: "19:30",
  title: "Bonus: Movimento Sensual (opcional)",
  content: {
    intro: "dynamic:sensual_intro",
    steps: "dynamic:sensual_steps"
  }
}
```

DayManager le o `currentPhase` e renderiza o conteudo de `SENSUAL_BONUS[phase]`.

---

## 4. Marcos de Flexibilidade

### No ProgressManager

Adicionar secao de marcos de flexibilidade no progresso (pode ser dentro da sub-aba "Conquistas" ou "Medidas"):

```js
const FLEXIBILITY_MILESTONES = [
  { id: "pombo-sem-dor", label: "Pombo sem dor (ambos os lados)", fase: 1 },
  { id: "agachamento-profundo", label: "Agachamento profundo com calcanhar no chao", fase: 1 },
  { id: "borboleta-joelhos-chao", label: "Borboleta com joelhos perto do chao", fase: 2 },
  { id: "splits-50", label: "Splits 50% do caminho", fase: 2 },
  { id: "frog-pose-confortavel", label: "Frog Pose confortavel por 2min", fase: 2 },
  { id: "splits-75", label: "Splits 75% do caminho", fase: 3 },
  { id: "pancake-peito-chao", label: "Pancake com peito proximo ao chao", fase: 3 },
  { id: "splits-completo", label: "Splits completo!", fase: 4 }
];
```

Renderizados como checkboxes que o usuario marca quando alcancar. Persistidos no StorageManager.

### Check Mensal Gluteo Esquerdo

A cada 30 dias, no card de ativacao gluteo esq na aba Treino, aparece um mini-questionario:
- "Aperte o gluteo esquerdo e o direito separadamente. Ainda sente diferenca?"
- Opcoes: "Muita diferenca" / "Um pouco" / "Quase igual" / "Igual!"
- Salva historico no StorageManager pra ver evolucao

---

## 5. Dados — Novos Objetos em data.js

| Objeto | Conteudo |
|--------|----------|
| `EXERCISE_NARRATIVES` | Texto narrativo de cada exercicio (descricao + por que + dicas). Chave = exercicio ID |
| `SENSUAL_BONUS` | Conteudo do card bonus sensual por fase (1-4) |
| `YOGA_PHASE_MAP` | Mapeia fase de forca → nivel yoga |
| `REBOLAR_PHASE_MAP` | Mapeia fase de forca → indice rebolar |
| `FLEXIBILITY_MILESTONES` | Marcos de flexibilidade |

Objetos existentes reutilizados:
- `WORKOUTS` — exercicios por fase/dia (ja existe)
- `EXERCISE_VIDEOS` — tips e commonMistakes (ja existe)
- `YOGA_LEVELS` — poses por nivel (ja existe)
- `REBOLAR_STEPS` — fases de rebolar (ja existe)
- `WARMUP_LOWER/UPPER` — aquecimento (ja existe)
- `COOLDOWN_LOWER/UPPER` — alongamento (ja existe)
- `GLUTE_FIX_PROTOCOL` — protocolo gluteo (ja existe)

---

## 6. Logica — WorkoutManager Reescrito

### O que muda

- **Remove**: todas as sub-abas e renderSubTabBar()
- **Remove**: renderYoga(), renderRebolar(), renderTechnique(), renderCardioGuide(), renderGluteProtocol() como sub-abas separadas
- **Adiciona**: renderNarrativeWorkout() — fluxo unico de cards
- **Adiciona**: renderExerciseCard() — card narrativo por exercicio com checkboxes/peso/timer
- **Adiciona**: renderYogaWorkout() — treino de yoga narrativo (terca)
- **Adiciona**: renderRebolarWorkout() — treino de rebolar narrativo (terca)
- **Adiciona**: renderAtivacaoWorkout() — treino leve narrativo (quinta)
- **Mantém**: logica de timer, GIF modal, peso tracking, serie checkboxes

### Fluxo de renderizacao

```
render()
├─ getDayType()
├─ if domingo → renderRestDayMessage()
├─ if treino → renderNarrativeWorkout()
│   ├─ renderPhaseSelector()
│   ├─ renderGluteoActivation()
│   ├─ renderWarmupCards()
│   ├─ renderExerciseCards() ← cada exercicio com narrativa + funcionalidade
│   └─ renderCooldownCards()
├─ if descanso-ativo → renderTuesdayWorkout()
│   ├─ renderGluteoActivation()
│   ├─ renderYogaCards() ← poses do nivel da fase atual
│   └─ renderRebolarCards() ← exercicios da fase atual
├─ if ativacao-leve → renderThursdayWorkout()
│   ├─ renderGluteoActivation()
│   └─ renderLightActivityOptions()
```

---

## 7. Visual — CSS

Reutiliza as classes `.day-card-*` ja criadas para a aba Meu Dia. Adiciona:

- `.exercise-card-series` — container dos checkboxes de serie
- `.exercise-card-weight` — input de peso
- `.exercise-card-timer` — botao de timer
- `.exercise-card-gif-btn` — botao de ver GIF
- `.exercise-card-mistakes` — secao de erros comuns
- `.exercise-card-monthly-check` — mini questionario mensal

---

## 8. Impacto nas Outras Areas

- **Aba Meu Dia**: adicionar card `bonus_sensual` no DAY_CARD_LAYOUTS + DAILY_CARDS
- **DayManager**: renderizar conteudo dinamico do bonus sensual baseado na fase
- **Aba Treino**: reescrita completa do WorkoutManager (renderizacao, nao dados)
- **Aba Progresso**: adicionar marcos de flexibilidade (secao pequena)
- **data.js**: novos objetos (EXERCISE_NARRATIVES, SENSUAL_BONUS, phase maps, milestones)
- **Removidos**: DANCA_SENSUAL (conteudo migra pro SENSUAL_BONUS), sub-abas do Treino
- **Mantidos**: YOGA_LEVELS, REBOLAR_STEPS, WORKOUTS, EXERCISE_VIDEOS, GLUTE_FIX_PROTOCOL, WARMUP/COOLDOWN

---

## 9. Fora do Escopo

- Tracker de sono
- Lista de compras WhatsApp
- Aba Cuidados narrativa (futuro)
- Aba Nutricao narrativa (futuro)
