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
| 0 | Seletor de Fase | Botoes pra trocar fase (1-4). Mantido do atual |
| 1 | 🍑 Ativacao Gluteo Esquerdo | SEMPRE primeiro. Protocolo de ativacao unilateral. Narrativo + checkboxes |
| 2 | 🔥 Aquecimento | Warmup lower/upper do dia. Cada movimento em card narrativo |
| 3-N | 💪 Exercicios do Dia | Cada exercicio em card narrativo com funcionalidade |
| N+1 | 🧘 Cooldown / Alongamento | Cada alongamento em card narrativo detalhado |

Nota: Cardio nao eh um card separado. Exercicios com `type: 'cardio'` sao renderizados no fluxo normal de exercicios com o mesmo formato de card narrativo.

**Estado de collapse dos cards:** Primeiro exercicio comeca expandido, demais comecam colapsados. Ao completar todas as series de um exercicio, o proximo expande automaticamente.

#### Fase 1 — Tratamento especial

`WORKOUTS.fase1` atualmente so define `lowerA`. Como Fase 1 eh "Fundacao" (3x/semana, meses 1-2), o treino eh o MESMO pra todos os dias de treino. Quando a fase selecionada eh 1, todos os dias de treino (seg, qua, sex, sab) renderizam `WORKOUTS.fase1.lowerA`. A partir da Fase 2, cada dia renderiza seu workout especifico (Lower A, Upper, Lower B, Gluteo Isolado).

#### Dia de Yoga + Rebolar (terca)

| Ordem | Card | Conteudo |
|-------|------|----------|
| 0 | Seletor de Fase | Mesmo seletor — muda o nivel de yoga/rebolar (pode testar niveis diferentes) |
| 1 | 🍑 Ativacao Gluteo Esquerdo | SEMPRE primeiro |
| 2 | 🧘 Mobilidade de Quadril | Aquecimento especifico (circulos, cat-cow, hip flexor) |
| 3-N | 🧘 Poses de Yoga | Cada pose do nivel atual, com descricao + tempo + "por que" + timer |
| N+1-M | 💃 Rebolar | Cada exercicio da fase atual, narrativo |
| M+1 | 🧘 Alongamento Final | Cooldown suave |

#### Dia de Ativacao Leve (quinta)

| Ordem | Card | Conteudo |
|-------|------|----------|
| 0 | Seletor de Fase | Indicador da fase atual (read-only, sem botoes — nao faz sentido trocar fase pra ativacao leve) |
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

**Fonte dos textos narrativos:** Ao inves de criar um objeto separado `EXERCISE_NARRATIVES`, adicionar campo `narrative` e `why` diretamente em cada exercicio dentro de `WORKOUTS`. O `tips` e `commonMistakes` do `EXERCISE_VIDEOS` ja existem e serao reutilizados. Isso evita duplicacao e mantem os dados junto dos exercicios.

Exemplo (3 exercicios de referencia):

```js
// Em WORKOUTS.fase1.lowerA.exercises[0]:
{
  id: "f1-glute-bridge",
  name: "Glute Bridge",
  sets: 3, reps: "15", rest: "60seg",
  weight: "peso corporal → halter 5-10 kg",
  narrative: "Deite de costas, joelhos dobrados, pes apoiados no chao na largura do quadril. Empurre o quadril pra cima apertando forte o gluteo no topo — segure 2-3 segundos. Desce devagar controlando.",
  why: "O exercicio mais importante pra acordar o gluteo. Se ele nao ativa aqui, nao ativa em nenhum outro exercicio. Foque em APERTAR no topo, nao em subir alto.",
  tip: "Empurre o quadril pro teto, aperte forte no topo 2-3seg",
  videoKey: "glute-bridge"
}

// Em WORKOUTS.fase2.lowerA.exercises[1]:
{
  id: "f2-hip-thrust",
  name: "Hip Thrust",
  sets: 4, reps: "12", rest: "90seg",
  weight: "20-50 kg barra",
  narrative: "Costas apoiadas no banco (na altura da escapula), barra sobre o quadril com protetor. Pes na largura do quadril, empurre o quadril pro teto. No topo, suas costas ficam paralelas ao chao. Aperte o gluteo 2seg. Desce devagar.",
  why: "O REI do gluteo. Nenhum exercicio ativa tanto o gluteo maximo quanto o hip thrust. E o exercicio que mais vai crescer sua bunda.",
  tip: "Apoie costas no banco, empurre quadril pro teto",
  videoKey: "hip-thrust"
}

// Em WORKOUTS.fase2.upper.exercises[0]:
{
  id: "f2-pullover",
  name: "Pullover com Halter",
  sets: 3, reps: "15", rest: "60seg",
  weight: "5-12 kg halter",
  narrative: "Deitada no banco, segure UM halter com as duas maos acima do peito, bracos quase esticados. Leve o halter pra tras da cabeca abrindo bem o peito. Volte devagar ate a posicao inicial.",
  why: "Abre a caixa toracica e marca a cintura por contraste. Eh o exercicio que cria a ilusao de silhueta ampulheta — peito mais largo, cintura mais fina.",
  tip: "Abre a caixa toracica, silhueta ampulheta",
  videoKey: "pullover"
}
```

Todos os exercicios de todas as fases receberao `narrative` e `why`. Sao ~50 exercicios unicos no total. O implementador deve escrever narrativas focadas no OBJETIVO AMAZONA da Arthur (gluteo, silhueta ampulheta, feminilidade, confianca corporal).

### Cards de Aquecimento e Cooldown

Mesmo formato narrativo. Cada movimento do warmup/cooldown vira um card com:
- Nome + duracao
- Descricao detalhada de como fazer
- "Por que" esse aquecimento/alongamento
- Timer (quando aplicavel)

Dados: adicionar `narrative` e `why` em cada item de `WARMUP_LOWER`, `WARMUP_UPPER`, `COOLDOWN_LOWER`, `COOLDOWN_UPPER`.

### Ativacao Gluteo Esquerdo — Card Fixo

Aparece SEMPRE como primeiro card, em TODOS os dias (exceto domingo). Conteudo do `GLUTE_FIX_PROTOCOL`, renderizado como cards narrativos.

**Check mensal:** 30 dias a partir do ultimo check (nao do primeiro uso). Se o usuario nao abriu o app por 35 dias, aparece na proxima visita. Storage key: `gluteCheckHistory` — array de `{ date: "YYYY-MM-DD", response: "muita|pouca|quase|igual" }`.

---

## 2. Progressao Amarrada

### Tabela de Progressao

| Fase Forca | Meses | Yoga | Rebolar | Bonus Sensual |
|-----------|-------|------|---------|---------------|
| Fase 1 — Fundacao | 1-2 | Iniciante (5 poses basicas, 2min cada) | Isolamento Base (quadril frente/tras, esq/dir, circulos) | Basico (circulo quadril, ondulacao simples) |
| Fase 2 — Construcao | 3-5 | Intermediario (5 poses, 2min cada) | Ritmo (com musica, figura 8, espelho) | Com ritmo (body wave, rebolar com musica) |
| Fase 3 — Amazona | 6-10 | Avancado (4 poses, 3min cada) | Expressao (bracos, expressao corporal) | Coreografia (movimentos combinados, confianca) |
| Fase 4 — Manutencao | 11+ | Avancado + splits | Livre (estilo proprio, improvisar) | Livre (expressao pessoal, sensualidade natural) |

### Implementacao

O `currentPhase` ja existe no StorageManager. Yoga, rebolar e sensual usam esse mesmo valor pra determinar qual conteudo mostrar.

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
  4: 3   // index 3 (Livre)
};
```

**REBOLAR_STEPS precisa de 4a entrada:** Adicionar fase "Livre" ao array:
```js
{ fase: "Mes 6+ · Livre", steps: [
  "Agora voce tem controle e ritmo. Bota a musica e deixa o corpo guiar.",
  "Misture tudo: circulos, figura 8, ondulacao, body wave, bracos.",
  "Grave e compare com os primeiros videos — a evolucao vai te impressionar.",
  "Danca sem espelho — sinta ao inves de ver. Confianca vem de dentro."
]}
```

---

## 3. Card Bonus Sensual — Aba Meu Dia

### Posicao

Aparece em TODOS os dias (treino e descanso), como card antes do Jantar na aba Meu Dia. Colapsavel como os outros.

### No DAY_CARD_LAYOUTS (arrays completos)

```js
const DAY_CARD_LAYOUTS = {
  "treino": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "pre_treino", "treino", "pos_treino", "bonus_sensual", "jantar", "rotina_noturna"],
  "descanso-ativo": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "yoga_rebolar", "pos_atividade", "bonus_sensual", "jantar", "rotina_noturna"],
  "ativacao-leve": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "ativacao_leve", "bonus_sensual", "jantar", "rotina_noturna"],
  "descanso-total": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "descanso", "bonus_sensual", "jantar", "rotina_noturna"]
};
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

DayManager le `currentPhase` e renderiza conteudo de `SENSUAL_BONUS[phase]`.

### Conteudo completo por Fase

```js
const SENSUAL_BONUS = {
  1: {
    title: "Movimento Sensual — Basico",
    duration: "10min",
    intro: "Coloque uma musica que te faca sentir poderosa. Esses exercicios constroem controle de quadril e consciencia corporal. Sem julgamento — eh so voce e a musica.",
    steps: [
      { name: "Circulos de quadril", description: "De pe, maos na cintura, pes na largura do quadril. Faca circulos amplos e lentos com o quadril — como se estivesse desenhando um circulo grande no chao. 10 pra cada lado.", duration: "2min", why: "Ensina o quadril a se mover independente do tronco. Base de todo movimento sensual." },
      { name: "Ondulacao frente/tras", description: "Mesma posicao. Empurre o quadril pra frente (contraia o gluteo) e depois pra tras (empine). Devagar, sentindo cada posicao. 20 repeticoes.", duration: "2min", why: "Isola o movimento pelvico. Melhora conexao mente-corpo na regiao do quadril." },
      { name: "Ondulacao lateral", description: "Agora mova o quadril pro lado direito e depois pro esquerdo. Joelhos levemente flexionados. O tronco fica parado. 20 repeticoes.", duration: "2min", why: "Completa os 4 eixos de movimento do quadril. Prepara pra movimentos mais complexos." },
      { name: "Movimento livre", description: "Bota a musica no volume e mexe como sentir vontade. Nao tem certo ou errado. Misture os movimentos que aprendeu. Se olhe no espelho se tiver.", duration: "4min", why: "Aqui voce sai do modo 'exercicio' pro modo 'expressao'. A confianca corporal se constroi fazendo, nao pensando." }
    ]
  },
  2: {
    title: "Movimento Sensual — Com Ritmo",
    duration: "12min",
    intro: "Voce ja sabe isolar o quadril. Agora vamos adicionar ritmo e novos movimentos. Coloque funk, pagode, reggaeton — o que te fizer mexer.",
    steps: [
      { name: "Body wave", description: "De pe, comece pelo peito empurrando pra frente, depois deixe a 'onda' descer pelo abdomen e quadril. Como uma onda do mar passando pelo corpo. Devagar primeiro, depois no ritmo da musica. 10 repeticoes.", duration: "3min", why: "O body wave eh o movimento mais sensual que existe. Trabalha fluidez corporal e consciencia de cada segmento do corpo." },
      { name: "Figura de 8 com quadril", description: "Imagine um 8 deitado (infinito) no chao. Desenhe esse 8 com o quadril. Pra frente-direita, pra tras-esquerda, e volta. Mantenha o tronco parado. 10 pra cada direcao.", duration: "3min", why: "A figura de 8 eh a base do rebolar. Quando esse movimento ficar natural, todo o resto fica facil." },
      { name: "Rebolar com musica", description: "Junte tudo: circulos, ondulacao, body wave, figura 8. Deixe a musica guiar. Foque em mover o quadril no ritmo. Nao precisa ser rapido — sensual eh devagar e controlado.", duration: "4min", why: "Treina ritmo e expressao. O segredo nao eh velocidade, eh controle e intencao em cada movimento." },
      { name: "Passada sensual", description: "Caminhe devagar pelo quarto com postura ereta, quadril balancando naturalmente a cada passo. Ombros pra tras, queixo levemente erguido. Imagina que esta numa passarela.", duration: "2min", why: "A forma como voce anda comunica confianca. Treinar a passada muda a postura no dia a dia." }
    ]
  },
  3: {
    title: "Movimento Sensual — Coreografia",
    duration: "15min",
    intro: "Voce ja tem controle e ritmo. Agora vamos combinar movimentos em sequencias e adicionar bracos e expressao corporal. A meta eh se sentir poderosa.",
    steps: [
      { name: "Sequencia: wave + rebolar + pose", description: "Faca um body wave completo, emende com 4 circulos de quadril, termine numa pose com as maos no cabelo ou na cintura. Segure a pose 3 segundos. Repita 5 vezes variando as poses.", duration: "4min", why: "Combinar movimentos cria fluidez. As poses constroem confianca — voce aprende a 'parar' em posicoes que te valorizam." },
      { name: "Movimentos de bracos", description: "Enquanto o quadril se move, adicione: maos subindo pelo corpo, dedos passando pelo cabelo, bracos abrindo pro lado. O braco acompanha o quadril — quando o quadril vai pra direita, o braco oposto sobe.", duration: "3min", why: "Bracos transformam um exercicio em danca. Sem bracos, parece treino. Com bracos, parece arte." },
      { name: "Danca no chao (floorwork)", description: "De joelhos, ondule o tronco pra frente e pra tras. Sente nos calcanhares e volte. Se sentir segura, deite de costas e faca ondulacao deitada. Tudo devagar.", duration: "4min", why: "Floorwork trabalha musculos que nao sao ativados de pe. Tambem desenvolve sensualidade e confianca com o chao." },
      { name: "Freestyle completo", description: "Musica favorita, quarto fechado, voce e o espelho. Misture TUDO: wave, rebolar, chao, bracos, passada. Grave se quiser comparar depois.", duration: "4min", why: "Esse eh o momento de ser voce. Sem regras, sem coreografia. Confianca se constroi repetindo ate se sentir natural." }
    ]
  },
  4: {
    title: "Movimento Sensual — Expressao Livre",
    duration: "15min",
    intro: "Voce ja sabe se mover. Agora eh sobre expressao pessoal e sensualidade natural. Nao existe mais 'exercicio' — existe voce dancando.",
    steps: [
      { name: "Aquecimento sensual", description: "Coloque uma musica lenta. Feche os olhos. Mova o corpo como ele quiser. Sem pensar em tecnica — sinta a musica no corpo. 3 minutos de olhos fechados.", duration: "3min", why: "Desconectar a visao conecta voce com as sensacoes. Sensualidade real vem de sentir, nao de parecer." },
      { name: "Sua coreografia", description: "Escolha uma musica que voce ama. Crie sua propria sequencia de movimentos. Use tudo que aprendeu. Repita ate decorar. Essa eh SUA danca.", duration: "5min", why: "Criar sua propria coreografia eh o nivel maximo de confianca corporal. Ninguem danca como voce." },
      { name: "Performance", description: "Faca sua coreografia como se estivesse se apresentando. Com expressao facial, com intencao, com atitude. Grave se quiser. Dance pra sua namorada se sentir confiante.", duration: "4min", why: "A diferenca entre mover o corpo e dancar eh a intencao. Aqui voce pratica a intencao." },
      { name: "Cool down sensual", description: "Musica lenta de novo. Movimentos suaves, alongamento com ondulacao. Agradeca seu corpo por tudo que ele faz por voce.", duration: "3min", why: "Fechar com gratidao pelo corpo muda a relacao com ele. Voce nao treina PRA mudar — treina PORQUE se ama." }
    ]
  }
};
```

---

## 4. Marcos de Flexibilidade

### No ProgressManager

Adicionar secao de marcos na sub-aba "Conquistas" (junto com os badges existentes):

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

Renderizados como checkboxes. Storage key: `flexibilityMilestones` — objeto `{ "pombo-sem-dor": true, ... }`. Persistido via StorageManager, sync com Firebase.

### Check Mensal Gluteo Esquerdo

A cada 30 dias desde o ultimo check, no card de ativacao gluteo esq na aba Treino, aparece um mini-questionario:
- "Aperte o gluteo esquerdo e o direito separadamente. Ainda sente diferenca?"
- Opcoes: "Muita diferenca" / "Um pouco" / "Quase igual" / "Igual!"
- Storage key: `gluteCheckHistory` — array de `{ date: "YYYY-MM-DD", response: "muita|pouca|quase|igual" }`
- Se o usuario nao abriu o app por >30 dias, aparece na proxima visita
- Sync com Firebase

---

## 5. Dados — Mudancas em data.js

### Novos objetos

| Objeto | Conteudo |
|--------|----------|
| `SENSUAL_BONUS` | Conteudo do card bonus sensual por fase (1-4). Ver secao 3 |
| `YOGA_PHASE_MAP` | Mapeia fase de forca → nivel yoga |
| `REBOLAR_PHASE_MAP` | Mapeia fase de forca → indice rebolar |
| `FLEXIBILITY_MILESTONES` | Marcos de flexibilidade |

### Objetos modificados

| Objeto | Mudanca |
|--------|---------|
| `WORKOUTS` | Adicionar `narrative` e `why` em cada exercicio (~50 exercicios) |
| `WARMUP_LOWER/UPPER` | Adicionar `narrative` e `why` em cada item |
| `COOLDOWN_LOWER/UPPER` | Adicionar `narrative` e `why` em cada item |
| `REBOLAR_STEPS` | Adicionar 4a entrada (Fase Livre) |
| `DAILY_CARDS` | Adicionar entry `bonus_sensual` |
| `DAY_CARD_LAYOUTS` | Inserir `bonus_sensual` antes de `jantar` em todos os layouts |

### Objetos removidos

| Objeto | Razao |
|--------|-------|
| `DANCA_SENSUAL` | Conteudo migra pro `SENSUAL_BONUS` |
| `EXERCISE_TECHNIQUE` | Conteudo (dicas de tecnica) ja existe em `EXERCISE_VIDEOS.tips` e `commonMistakes`, e agora tambem nos novos campos `narrative` de cada exercicio. Objeto separado nao eh mais necessario |
| `CARDIO_GUIDE` | Conteudo integrado como `narrative` nos exercicios de tipo cardio dentro de `WORKOUTS` |

### Objetos mantidos sem mudanca

`YOGA_LEVELS`, `EXERCISE_VIDEOS`, `GLUTE_FIX_PROTOCOL`, `KEGEL_PROTOCOL_TYPES`, `MEAL_OPTIONS`, `SKINCARE_ROUTINE`, `WEEK_SCHEDULE`, `DAILY_CARDS` (exceto adicao bonus_sensual), `POWER_MOVES`

### POWER_MOVES

Continua existindo e sendo renderizado no mini-dashboard da aba Meu Dia (ja funciona assim hoje). Nao precisa de mudanca — era renderizado dentro da sub-aba Rebolar tambem, mas essa referencia sera removida junto com as sub-abas.

---

## 6. Logica — WorkoutManager Reescrito

### O que muda

- **Remove**: todas as sub-abas, `renderSubTabBar()`, `renderYoga()`, `renderRebolar()`, `renderTechnique()`, `renderCardioGuide()`, `renderGluteProtocol()` como sub-abas separadas
- **Adiciona**: `renderNarrativeWorkout()` — fluxo unico de cards
- **Adiciona**: `renderExerciseCard()` — card narrativo por exercicio com checkboxes/peso/timer
- **Adiciona**: `renderTuesdayWorkout()` — treino de yoga + rebolar narrativo
- **Adiciona**: `renderThursdayWorkout()` — treino leve narrativo
- **Adiciona**: `renderGluteoActivation()` — card fixo de ativacao gluteo esq
- **Adiciona**: `renderMonthlyGluteCheck()` — questionario mensal
- **Mantem**: logica de timer, GIF modal, peso tracking, serie checkboxes

### Fluxo de renderizacao

```
render()
├─ getDayType() via WEEK_SCHEDULE
├─ if descanso-total → renderRestDayMessage()
├─ if treino → renderNarrativeWorkout()
│   ├─ renderPhaseSelector()
│   ├─ renderGluteoActivation() + renderMonthlyGluteCheck()
│   ├─ renderWarmupCards(warmupType)
│   ├─ renderExerciseCards(exercises) ← cada exercicio com narrativa + funcionalidade
│   └─ renderCooldownCards(cooldownType)
├─ if descanso-ativo → renderTuesdayWorkout()
│   ├─ renderPhaseSelector()
│   ├─ renderGluteoActivation()
│   ├─ renderYogaCards(yogaLevel) ← poses do nivel da fase atual
│   └─ renderRebolarCards(rebolarPhase) ← exercicios da fase atual
├─ if ativacao-leve → renderThursdayWorkout()
│   ├─ renderPhaseIndicator() ← read-only, sem botoes
│   ├─ renderGluteoActivation()
│   └─ renderLightActivityOptions()
```

---

## 7. Visual — CSS

Reutiliza as classes `.day-card-*` ja criadas para a aba Meu Dia. Adiciona:

- `.exercise-card-series` — container dos checkboxes de serie
- `.exercise-card-weight` — input de peso
- `.exercise-card-timer` — botao de timer de descanso
- `.exercise-card-gif-btn` — botao de ver GIF/video
- `.exercise-card-mistakes` — secao de erros comuns (colapsavel)
- `.exercise-card-monthly-check` — mini questionario mensal

---

## 8. Impacto nas Outras Areas

- **Aba Meu Dia**: adicionar card `bonus_sensual` no `DAY_CARD_LAYOUTS` + `DAILY_CARDS`. DayManager renderiza conteudo dinamico baseado na fase
- **Aba Treino**: reescrita completa do WorkoutManager (renderizacao). Dados existentes mantidos, enriquecidos com `narrative`/`why`
- **Aba Progresso**: adicionar marcos de flexibilidade na sub-aba Conquistas
- **data.js**: novos objetos + campos `narrative`/`why` nos exercicios
- **Removidos**: `DANCA_SENSUAL`, `EXERCISE_TECHNIQUE`, `CARDIO_GUIDE`, sub-abas do Treino
- **Mantidos**: `YOGA_LEVELS`, `REBOLAR_STEPS` (+1 entrada), `WORKOUTS`, `EXERCISE_VIDEOS`, `GLUTE_FIX_PROTOCOL`, `WARMUP/COOLDOWN`, `POWER_MOVES`

---

## 9. Fora do Escopo

- Tracker de sono
- Lista de compras WhatsApp
- Aba Cuidados narrativa (futuro)
- Aba Nutricao narrativa (futuro)
