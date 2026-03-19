# Rotina Definitiva v2 — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir e calibrar o app existente: treino fase 1 mais conservador, vacuum de volta, mobilidade desk-worker, cardio obrigatório, nutrição por fases, Flex & Flow, Power Moves, sub-aba Intimidade, compras simplificadas.

**Architecture:** Modificações em data.js (dados) e app.js (managers). Sem novos arquivos. Segue padrões existentes (singleton managers, event delegation, StorageManager).

**Tech Stack:** JavaScript ES5/ES6, CSS3, HTML5, localStorage

**Spec:** `docs/superpowers/specs/2026-03-19-rotina-definitiva-v2-design.md`

---

## File Map

| File | Ação | O que muda |
|------|------|-----------|
| `data.js` (3052 lines) | Modificar | Recalibrar WORKOUTS fase 1, adicionar vacuum em todas as fases, adicionar mobilidade desk-worker em warmups, substituir cooldowns por Flex & Flow, adicionar NUTRITION_PHASES, SHOPPING_SYSTEM, POWER_MOVES, INTIMACY_GUIDE, FLEX_FLOW_LOWER/UPPER |
| `app.js` (5206 lines) | Modificar | Dashboard (power move card, macros por fase), WorkoutManager (vacuum nos treinos), NutritionManager (macros por fase, shopping system), CareManager (sub-aba Intimidade) |

---

## Task 1: Recalibrar WORKOUTS Fase 1 + Vacuum em todas as fases

**Files:**
- Modify: `data.js` — WORKOUTS object (line 1783)

- [ ] **Step 1: Reescrever Fase 1 do WORKOUTS**

Ler o WORKOUTS em data.js (linha 1783). Encontrar `fase1` e reescrever seus exercícios. A fase 1 atual provavelmente tem hip thrust e agachamento — substituir por versão conservadora:

```javascript
// Dentro de WORKOUTS.fase1.days["Lower A"].exercises, substituir por:
exercises: [
  { id: "f1-glute-bridge", name: "Glute Bridge no chão", sets: 3, reps: "15", rest: "90seg", weight: "0 kg → haltere leve no quadril", tip: "Empurre o quadril pro teto, squeeze 2-3seg no topo. Começar sem peso.", videoKey: "glute-bridge", unilateral: false, startLeft: false },
  { id: "f1-bridge-uni-esq", name: "Glute Bridge Unilateral ESQUERDO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Pé esquerdo no chão, direito suspenso. Segurar 3seg no topo.", videoKey: "glute-bridge", unilateral: true, startLeft: true },
  { id: "f1-bridge-uni-dir", name: "Glute Bridge Unilateral DIREITO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Mesmo número de reps que o esquerdo. Nunca mais.", videoKey: "glute-bridge", unilateral: true, startLeft: false },
  { id: "f1-abducao-elastico", name: "Abdução deitada com elástico", sets: 3, reps: "20", rest: "60seg", weight: "elástico leve/médio", tip: "Deitada de lado, elevar perna. Sentir queimar no glúteo.", videoKey: "abducao-deitada", unilateral: false, startLeft: false },
  { id: "f1-wall-sit", name: "Wall Sit (agachamento na parede)", sets: 3, reps: "20-30seg", rest: "60seg", weight: "0 kg", tip: "Costas na parede, coxas paralelas ao chão. Protege joelhos.", videoKey: "agachamento", unilateral: false, startLeft: false, type: "plank" },
  { id: "f1-rdl", name: "RDL com halteres leves", sets: 3, reps: "12", rest: "90seg", weight: "5-8 kg cada", tip: "Dobrar no quadril, NÃO na coluna. Sentir posterior da coxa.", videoKey: "stiff", unilateral: false, startLeft: false },
  { id: "f1-prancha", name: "Prancha", sets: 3, reps: "20-30seg", rest: "45seg", weight: "0 kg", tip: "Corpo reto. Apertar glúteo e abdômen.", videoKey: "prancha", unilateral: false, startLeft: false, type: "plank" },
  { id: "f1-vacuum", name: "Vacuum Abdominal", sets: 3, reps: "20seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e pra cima, segurar.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" },
]
```

- [ ] **Step 2: Adicionar Vacuum nas fases 2, 3 e 4**

Em cada day de cada fase (2, 3, 4), adicionar como último exercício antes do fim do array:

Fase 2: `{ id: "f2-vacuum", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }`

Fase 3: `{ id: "f3-vacuum", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "30seg é avançado. Se não aguentar, voltar pra 20seg.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }`

Fase 4: mesmo que fase 3 com id "f4-vacuum"

Usar IDs únicos por fase (f2-vacuum, f3-vacuum, f4-vacuum). Adicionar em CADA day de cada fase.

- [ ] **Step 3: Verificar sintaxe**

- [ ] **Step 4: Commit**

```bash
git add data.js
git commit -m "feat: fase 1 conservadora (glute bridge, wall sit) + vacuum em todas as fases"
```

---

## Task 2: Mobilidade Desk-Worker + Flex & Flow

**Files:**
- Modify: `data.js` — WARMUP_LOWER (line 2717), WARMUP_UPPER, COOLDOWN_LOWER (line 2738), COOLDOWN_UPPER, DAILY_TIMELINE (line 1741)

- [ ] **Step 1: Adicionar mobilidade desk-worker no início dos warmups**

No WARMUP_LOWER (linha 2717), adicionar como PRIMEIROS 3 itens do array (antes dos existentes):

```javascript
{ name: "Alongamento hip flexor ajoelhado", desc: "Ajoelhar, uma perna à frente. Empurrar quadril pra frente. Destravar 8h sentada.", time: "30seg cada lado" },
{ name: "Torção torácica deitada", desc: "Deitada de lado, joelhos dobrados. Abrir braço de cima pra trás. Soltar ombros e costas.", time: "5x cada lado" },
{ name: "Rotação pescoço + elevação ombros", desc: "Girar pescoço devagar. Depois subir ombros até as orelhas e soltar. Soltar tensão.", time: "10x" },
```

No WARMUP_UPPER, adicionar os mesmos 3 como primeiros itens.

- [ ] **Step 2: Substituir COOLDOWN_LOWER e COOLDOWN_UPPER por Flex & Flow**

Substituir o conteúdo de COOLDOWN_LOWER (renomear variável pra FLEX_FLOW_LOWER não é necessário — manter nome COOLDOWN_LOWER mas trocar o conteúdo):

```javascript
const COOLDOWN_LOWER = [
  { name: "Pigeon Pose", desc: "Joelho dobrado na frente, perna trás estendida. Relaxar quadril pro chão. Se doer no joelho: afastar o pé.", time: "2 min cada lado" },
  { name: "Lizard Pose", desc: "Avanço fundo, antebraço no chão. Respirar fundo, afundar mais a cada expiração. Não forçar se lombar reclamar.", time: "90seg cada lado" },
  { name: "Borboleta sentada", desc: "Pés juntos, joelhos abertos, inclinar. Puxar pés mais perto = mais intenso. Dor no joelho = soltar.", time: "2 min" },
  { name: "Happy Baby", desc: "Deitada, segurar plantas dos pés, joelhos abertos. Balançar suave. Pescoço no chão.", time: "2 min" },
  { name: "Círculos de quadril em pé", desc: "Mãos na cintura, círculos amplos e lentos. Tronco PARADO, só quadril move. Se tronco mexer, círculo menor.", time: "1 min (30seg cada sentido)" },
  { name: "Isolamento quadril frente/trás", desc: "Pés paralelos, empurrar quadril frente e trás sem mover tronco. Imaginar parede na frente e atrás. Joelhos levemente flexionados.", time: "1 min" },
];
```

Substituir COOLDOWN_UPPER:

```javascript
const COOLDOWN_UPPER = [
  { name: "Peitoral na porta", desc: "Braço dobrado 90° na porta, girar suavemente. Sentir abertura no peito.", time: "1 min cada lado" },
  { name: "Torção espinhal sentada", desc: "Perna cruzada, torcer o tronco devagar. Olhar por cima do ombro.", time: "1 min cada lado" },
  { name: "Child's Pose", desc: "Joelhos abertos, braços à frente, testa no chão. Respirar profundo.", time: "2 min" },
  { name: "Ondulação de coluna em pé", desc: "Da cintura pra cima, ondular como cobra. Começar pela pélvis, passar por lombar, torácica, pescoço. Tensão no pescoço = parar antes.", time: "1 min" },
  { name: "Rotação de ombros fluida", desc: "Círculos amplos com os ombros, devagar, sentir soltar.", time: "1 min" },
];
```

- [ ] **Step 3: Adicionar mobilidade e vacuum na DAILY_TIMELINE bloco "Acordar"**

No DAILY_TIMELINE (linha 1741), encontrar o bloco com `id: "acordar"` em AMBAS as versões (treino e descanso). Adicionar aos items:

```javascript
// No bloco acordar, adicionar aos items existentes:
"Mobilidade desk-worker (5min): hip flexor + torção torácica + pescoço",
"Vacuum matinal (3x20seg)"
```

- [ ] **Step 4: Verificar sintaxe, commit**

```bash
git add data.js
git commit -m "feat: mobilidade desk-worker nos warmups, Flex & Flow com movimentos de quadril, vacuum na timeline"
```

---

## Task 3: NUTRITION_PHASES + SHOPPING_SYSTEM + Power Moves + Intimidade

**Files:**
- Modify: `data.js` — adicionar novos objetos ao final

- [ ] **Step 1: Adicionar NUTRITION_PHASES**

```javascript
const NUTRITION_PHASES = {
  deficit: {
    label: "Fase de Déficit (Meses 1-5)",
    description: "Perder gordura abdominal preservando músculo. 96kg → ~86kg.",
    treino: { kcal: 2300, prot: 150, carb: 230, fat: 65 },
    descanso: { kcal: 2100, prot: 140, carb: 190, fat: 65 },
  },
  construcao: {
    label: "Fase de Construção (Meses 6-10)",
    description: "Corpo mais leve, articulações saudáveis. Agora hipertrofia máxima.",
    treino: { kcal: 2550, prot: 155, carb: 280, fat: 70 },
    descanso: { kcal: 2300, prot: 145, carb: 230, fat: 65 },
  }
};
```

- [ ] **Step 2: Adicionar SHOPPING_SYSTEM**

```javascript
const SHOPPING_SYSTEM = {
  mensal: {
    label: "Compra mensal (delivery ou mercado grande)",
    items: [
      { item: "Frango (peito ou sobrecoxa)", qty: "3 kg", category: "freezer" },
      { item: "Carne moída patinho", qty: "1 kg", category: "freezer" },
      { item: "Edamame congelado 🌿", qty: "2 pacotes", category: "freezer" },
      { item: "Mix legumes congelados (brócolis, couve-flor) 🌿", qty: "2 pacotes", category: "freezer" },
      { item: "Arroz", qty: "2 kg", category: "despensa" },
      { item: "Feijão", qty: "1 kg", category: "despensa" },
      { item: "Aveia flocos finos", qty: "500g", category: "despensa" },
      { item: "Pasta de amendoim", qty: "1 pote 500g", category: "despensa" },
      { item: "Azeite extra virgem", qty: "500ml", category: "despensa" },
      { item: "Linhaça dourada moída 🌿", qty: "300g", category: "despensa" },
      { item: "Whey Protein", qty: "1 pote", category: "suplemento" },
      { item: "Creatina", qty: "1 pote", category: "suplemento" },
      { item: "Ômega-3", qty: "1 pote", category: "suplemento" },
      { item: "Chá spearmint 🌿", qty: "2 caixas", category: "suplemento" },
      { item: "Vitamina D3 + K2", qty: "1 pote", category: "suplemento" },
    ]
  },
  semanal: {
    label: "Compra semanal (~10 itens, rápida)",
    items: [
      { item: "Ovos", qty: "2 dúzias", category: "geladeira" },
      { item: "Iogurte grego natural", qty: "6 potes", category: "geladeira" },
      { item: "Tofu firme 🌿", qty: "2 blocos", category: "geladeira" },
      { item: "Banana", qty: "1 cacho (~12)", category: "fruta" },
      { item: "Fruta da época", qty: "7 un.", category: "fruta" },
      { item: "Batata-doce", qty: "1.5 kg", category: "geladeira" },
      { item: "Alface + tomate + pepino", qty: "livre", category: "geladeira" },
      { item: "Queijo cottage", qty: "300g", category: "geladeira" },
      { item: "Pão integral", qty: "1 pacote", category: "geladeira" },
      { item: "Leite de soja 🌿", qty: "2L", category: "geladeira" },
    ]
  }
};
```

- [ ] **Step 3: Adicionar POWER_MOVES**

```javascript
const POWER_MOVES = {
  banho: {
    label: "No banho",
    icon: "🚿",
    moves: [
      { name: "Círculos de quadril lentos", how: "Mãos na cintura, 10x cada sentido. Água batendo nas costas.", result: "Treina isolamento de quadril — base do rebolar.", alert: "Se o tronco mexer junto, diminuir o círculo." },
      { name: "Figure-8 com quadril", how: "Desenhar um infinito (∞) com o quadril. Devagar, sentir cada parte.", result: "Fluidez de movimento. A Luiza Sonza faz isso naturalmente.", alert: null },
      { name: "Ondulação de coluna (cobra)", how: "Da pélvis até o pescoço, ondular pra frente e pra trás.", result: "Flexibilidade de coluna + movimento sensual.", alert: "Tensão no pescoço = parar antes de chegar lá." },
      { name: "Squeeze de glúteo isométrico", how: "Apertar os dois glúteos com força, segurar 10seg, soltar. 5x.", result: "Ativação sem esforço. Acorda o glúteo esquerdo.", alert: null },
    ]
  },
  cozinha: {
    label: "Esperando comida / café",
    icon: "☕",
    moves: [
      { name: "Elevação de panturrilha", how: "Na ponta dos pés, subir e descer. 15x devagar.", result: "Pernas mais alongadas e definidas.", alert: "Segurar em algo se perder equilíbrio." },
      { name: "Postura feminina", how: "Ombros pra trás e pra baixo. Peito aberto. Queixo nivelado. Peso num pé só, quadril levemente de lado.", result: "Treinar a stance feminina até virar natural.", alert: null },
      { name: "Kegel discreto", how: "Qualquer dos 3 tipos (rápida, longa, elevador). Ninguém vê.", result: "Melhora ereção, controle e intensidade em 4-8 semanas.", alert: null },
      { name: "Balanço sutil de quadril", how: "Peso alternando entre os pés, quadril balançando suave lado a lado.", result: "Gingado natural. Fica automático com o tempo.", alert: null },
    ]
  },
  trabalho: {
    label: "No trabalho (sentada, invisível)",
    icon: "💼",
    moves: [
      { name: "Kegel (todos os 3 tipos)", how: "Contrair assoalho pélvico. 100% invisível.", result: "Acumula sessões ao longo do dia. Resultado em semanas.", alert: null },
      { name: "Squeeze de glúteo na cadeira", how: "Apertar glúteos 5seg, soltar. 10x.", result: "Ativação constante, especialmente o esquerdo dormido.", alert: null },
      { name: "Postura check", how: "Ombros baixos, coluna longa, pés no chão.", result: "Reduz tensão no pescoço/ombros. Cintura parece mais fina com postura boa.", alert: null },
      { name: "Rotação de tornozelo", how: "10 círculos cada pé, sob a mesa.", result: "Circulação pras pernas — 8h sentada trava tudo.", alert: null },
      { name: "Vacuum discreto", how: "Puxar umbigo pra dentro, segurar 10seg. Ninguém percebe.", result: "Marca cintura ao longo do tempo.", alert: null },
    ]
  },
  cama: {
    label: "Antes de dormir (na cama)",
    icon: "🛏️",
    moves: [
      { name: "Borboleta deitada", how: "De costas, plantas dos pés juntas, joelhos abertos pro lado. 2min.", result: "Abre quadril enquanto relaxa. Prepara pro sono.", alert: "Se doer na virilha, afastar os pés do corpo." },
      { name: "Hip flexor na cama", how: "Uma perna pendurada pra fora da cama, outra joelho ao peito. 1min cada.", result: "Destravar hip flexor = melhor circulação pélvica = melhor ereção.", alert: "Não forçar. Gravidade faz o trabalho." },
      { name: "Respiração diafragmática", how: "Mão na barriga. Inspirar pelo nariz (barriga sobe), expirar pela boca (barriga desce). 5x devagar.", result: "Acalma sistema nervoso. Sono mais profundo.", alert: null },
    ]
  }
};
```

- [ ] **Step 4: Adicionar INTIMACY_GUIDE**

```javascript
const INTIMACY_GUIDE = {
  feminina: {
    title: "Feminina no comando",
    items: [
      { topic: "Ondulação do quadril", desc: "O treino de isolamento de quadril (círculos, figure-8) se aplica diretamente. Em vez de movimentos retos, ondular — transforma qualquer posição.", how: "Praticar os círculos e ondulações nos micro-momentos até ficar natural. Na hora, o corpo já sabe." },
      { topic: "Mãos no próprio corpo", desc: "Tocar a si mesma durante — cintura, coxas, cabelo. Mostra confiança e feminilidade sem perder o controle.", how: "Começar com uma mão enquanto a outra apoia. Com o tempo fica natural." },
      { topic: "Contato visual", desc: "Olhar nos olhos da parceira durante, especialmente nos momentos intensos. Cria conexão e mostra presença.", how: "Se sentir vergonha, alternar: olhar → fechar os olhos → olhar de novo." },
      { topic: "Lingerie como ferramenta", desc: "Não precisa tirar tudo. Manter peças durante é visual e tátil — especialmente renda e cetim.", how: "Peças que dão acesso sem tirar: body com abertura, calcinha de lado. Cores escuras e nude caramelo." },
      { topic: "Quadril liderando", desc: "Em vez de usar só força de braço/perna, deixar o quadril liderar o ritmo. O treino de rebolar ensina exatamente isso.", how: "Ritmo vem do quadril, não das coxas empurrando. Mais lento e ondulado." },
      { topic: "Posições femininas sendo ativa", desc: "Cowgirl reversa (de costas) permite controle total com visual feminino. De lado (spooning) permite ondulação suave. De quatro com ondulação de coluna.", how: "A flexibilidade de quadril que você está construindo abre essas posições." },
    ]
  },
  confianca: {
    title: "Confiança íntima",
    items: [
      { topic: "Técnica supera tamanho", desc: "Ângulo faz mais diferença que comprimento. Posições com as pernas da parceira mais fechadas aumentam a sensação pra ambos.", how: "Experimentar ângulos: pernas juntas (missionário com pernas fechadas), travesseiro embaixo do quadril dela." },
      { topic: "Ritmo e variação", desc: "Alternar lento/profundo com rápido/superficial. Previsibilidade é o oposto de prazer.", how: "Regra 3-1: 3 movimentos lentos, 1 rápido. Repetir. Depois inverter." },
      { topic: "Preliminares longas", desc: "80% da satisfação feminina acontece nas preliminares. Mais tempo aqui = menos pressão na penetração.", how: "Mínimo 15-20min. Sem pressa. O corpo da parceira precisa de tempo pra responder." },
      { topic: "Mãos e boca", desc: "Complementam e amplificam. Usar durante a penetração, não só antes.", how: "Uma mão livre sempre pode estar fazendo algo — na cintura, no cabelo, estimulando." },
      { topic: "Kegel forte", desc: "Kegel fortalecido = controle de quando gozar + sensação melhor pra parceira. Independe completamente de tamanho.", how: "O treino de kegel que você já faz 3x/dia é o caminho. Resultado em 4-8 semanas." },
      { topic: "Profundidade sem comprimento", desc: "Posições que maximizam profundidade: pernas dela no peito (missionário profundo), travesseiro elevando quadril dela, cowgirl onde ela controla o ângulo.", how: "O ângulo do quadril muda tudo. Experimentar com travesseiro é o hack mais simples." },
    ]
  },
  evolucao: {
    title: "Evolução com o treino",
    items: [
      { topic: "Meses 1-2", desc: "Fôlego melhora — não cansa tão rápido. Kegel começa a dar resultado — mais controle. Hip flexor mais solto — menos dor de quadril durante." },
      { topic: "Meses 3-5", desc: "Flexibilidade de quadril abre novas posições. Resistência sobe — consegue manter ritmo por mais tempo. Corpo começando a mudar — confiança sobe." },
      { topic: "Meses 6+", desc: "Corpo visivelmente diferente — lingerie fica bem. Kegel forte — controle total. Fôlego de atleta. Ondulação de quadril é natural. A namorada vai notar." },
    ]
  }
};
```

- [ ] **Step 5: Verificar sintaxe, commit**

```bash
git add data.js
git commit -m "feat: NUTRITION_PHASES, SHOPPING_SYSTEM, POWER_MOVES e INTIMACY_GUIDE"
```

---

## Task 4: Dashboard — Power Move card + macros por fase

**Files:**
- Modify: `app.js` — Dashboard (line ~1120)

- [ ] **Step 1: Adicionar card Power Move no Dashboard.render()**

Encontrar o método render() do Dashboard. Após o card de greeting/streak e antes da timeline, adicionar um card "Power Move do dia" que mostra um micro-momento aleatório de POWER_MOVES:

```javascript
// Dentro de render(), após greeting card e antes de macros:
// Power Move do dia
if (typeof POWER_MOVES !== 'undefined') {
  var categories = Object.keys(POWER_MOVES);
  var randCat = categories[Math.floor(Math.random() * categories.length)];
  var cat = POWER_MOVES[randCat];
  var randMove = cat.moves[Math.floor(Math.random() * cat.moves.length)];
  html += '<div class="card glass" style="border-left:3px solid var(--accent);margin-bottom:12px;padding:12px 14px;">';
  html += '<div style="font-size:0.7rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">' + cat.icon + ' Power Move · ' + cat.label + '</div>';
  html += '<div style="color:var(--text);font-size:0.88rem;font-weight:600;margin-bottom:4px;">' + randMove.name + '</div>';
  html += '<div style="color:var(--text-muted);font-size:0.8rem;line-height:1.5;">' + randMove.how + '</div>';
  if (randMove.result) {
    html += '<div style="color:var(--success);font-size:0.75rem;margin-top:4px;">' + randMove.result + '</div>';
  }
  html += '</div>';
}
```

- [ ] **Step 2: Ajustar macros do Dashboard pra fase atual**

No método `calculateDayMacros` ou onde os macros são exibidos, usar NUTRITION_PHASES pra mostrar as metas corretas:

```javascript
// Determinar fase nutricional baseado na fase de treino
var phase = StorageManager.getValue('currentPhase', 1);
var nutritionPhase = (phase <= 2) ? NUTRITION_PHASES.deficit : NUTRITION_PHASES.construcao;
var dayType = this.getTimelineType(); // 'treino' ou 'descanso'
var targets = nutritionPhase[dayType];
// Mostrar: "kcal consumidas / meta", ex: "~1200 / 2300 kcal"
```

Atualizar o HTML dos macros no render() pra mostrar tanto o consumido (soma das refeições marcadas) quanto a meta da fase.

- [ ] **Step 3: Verificar, commit**

```bash
git add app.js
git commit -m "feat: Dashboard Power Move do dia + macros calibrados por fase nutricional"
```

---

## Task 5: NutritionManager — Compras simplificadas (mensal + semanal)

**Files:**
- Modify: `app.js` — NutritionManager (line ~2575)

- [ ] **Step 1: Reescrever renderShoppingList() pra usar SHOPPING_SYSTEM**

Encontrar renderShoppingList() (linha ~3039). Reescrever pra mostrar duas seções (Mensal e Semanal) com botão "Copiar" em cada:

```javascript
renderShoppingList: function() {
  var html = '';
  var types = ['mensal', 'semanal'];
  for (var t = 0; t < types.length; t++) {
    var key = types[t];
    var data = SHOPPING_SYSTEM[key];
    html += '<div class="card glass" style="margin-bottom:12px;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">';
    html += '<h3 style="margin:0;font-family:var(--font-title);font-size:1rem;">' + data.label + '</h3>';
    html += '<button class="copy-shopping-btn" data-type="' + key + '" style="background:var(--primary);border:none;color:white;padding:6px 12px;border-radius:12px;font-size:0.75rem;cursor:pointer;">Copiar</button>';
    html += '</div>';
    // Group by category
    var categories = {};
    for (var i = 0; i < data.items.length; i++) {
      var item = data.items[i];
      if (!categories[item.category]) categories[item.category] = [];
      categories[item.category].push(item);
    }
    var catKeys = Object.keys(categories);
    for (var c = 0; c < catKeys.length; c++) {
      var catName = catKeys[c];
      html += '<div style="font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin:8px 0 4px;">' + catName + '</div>';
      var items = categories[catName];
      for (var j = 0; j < items.length; j++) {
        html += '<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:0.84rem;">';
        html += '<span style="color:var(--text);">' + items[j].item + '</span>';
        html += '<span style="color:var(--gold);font-weight:600;font-size:0.8rem;white-space:nowrap;">' + items[j].qty + '</span>';
        html += '</div>';
      }
    }
    html += '</div>';
  }
  return html;
},
```

- [ ] **Step 2: Atualizar event handler do botão Copiar**

Atualizar o handler de `.copy-shopping-btn` pra ler de SHOPPING_SYSTEM usando o `data-type`:

```javascript
var copyBtn = e.target.closest('.copy-shopping-btn');
if (copyBtn) {
  var type = copyBtn.dataset.type;
  var data = SHOPPING_SYSTEM[type];
  var text = '🛒 ' + data.label + '\n\n';
  for (var i = 0; i < data.items.length; i++) {
    text += '□ ' + data.items[i].item + ' — ' + data.items[i].qty + '\n';
  }
  navigator.clipboard.writeText(text).then(function() {
    Toast.show('Lista copiada! Cola no WhatsApp 📋', 'success');
  });
  return;
}
```

- [ ] **Step 3: Verificar, commit**

```bash
git add app.js
git commit -m "feat: lista de compras simplificada mensal + semanal com copiar separado"
```

---

## Task 6: CareManager — Sub-aba Intimidade

**Files:**
- Modify: `app.js` — CareManager (line ~3116)

- [ ] **Step 1: Adicionar 'intimidade' ao array de sub-tabs**

Encontrar renderSubTabs() do CareManager (linha ~3202). Adicionar entre kegel e cores:

```javascript
// Trocar de:
{ id: 'kegel', label: 'Kegel' },
{ id: 'cores', label: 'Cores' }
// Para:
{ id: 'kegel', label: 'Kegel' },
{ id: 'intimidade', label: 'Intimidade' },
{ id: 'cores', label: 'Cores' }
```

- [ ] **Step 2: Adicionar case 'intimidade' no render e criar renderIntimidade()**

No switch/if do render, adicionar o case. Criar o método:

```javascript
renderIntimidade: function() {
  if (typeof INTIMACY_GUIDE === 'undefined') return '';
  var html = '';
  var sections = ['feminina', 'confianca', 'evolucao'];
  for (var s = 0; s < sections.length; s++) {
    var section = INTIMACY_GUIDE[sections[s]];
    html += '<div class="card glass" style="margin-bottom:12px;">';
    html += '<h3 style="font-family:var(--font-title);margin:0 0 10px;">' + section.title + '</h3>';
    for (var i = 0; i < section.items.length; i++) {
      var item = section.items[i];
      html += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">';
      html += '<div style="color:var(--primary);font-weight:600;font-size:0.86rem;margin-bottom:3px;">' + item.topic + '</div>';
      html += '<div style="color:var(--text-muted);font-size:0.82rem;line-height:1.55;">' + item.desc + '</div>';
      if (item.how) {
        html += '<div style="color:var(--gold);font-size:0.78rem;margin-top:4px;">Como: ' + item.how + '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
  }
  return html;
},
```

- [ ] **Step 3: Verificar, commit**

```bash
git add app.js
git commit -m "feat: sub-aba Intimidade no CareManager com 3 blocos"
```

---

## Task 7: WorkoutManager — Rebolar renomear + Power Moves lista

**Files:**
- Modify: `app.js` — WorkoutManager (line ~1415)

- [ ] **Step 1: Renomear sub-tab "Rebolar" pra "Movimento"**

Encontrar SUB_TABS (linha ~1423). Trocar:

```javascript
// De:
{ key: 'rebolar', label: 'Rebolar' },
// Para:
{ key: 'rebolar', label: 'Movimento' },
```

- [ ] **Step 2: Adicionar Power Moves na renderRebolar()**

Encontrar renderRebolar(). Após o conteúdo existente de REBOLAR_STEPS, adicionar a lista completa de Power Moves:

```javascript
// Após o bloco de REBOLAR_STEPS, adicionar:
if (typeof POWER_MOVES !== 'undefined') {
  html += '<h3 style="font-family:var(--font-title);margin:20px 0 10px;">Power Moves — Micro-Momentos</h3>';
  html += '<div style="color:var(--text-muted);font-size:0.82rem;margin-bottom:12px;line-height:1.5;">Movimentos rápidos pra fazer em momentos mortos do dia. Não é treino formal — é construir o gingado natural.</div>';
  var cats = Object.keys(POWER_MOVES);
  for (var c = 0; c < cats.length; c++) {
    var cat = POWER_MOVES[cats[c]];
    html += '<div class="card glass" style="margin-bottom:10px;">';
    html += '<div style="font-size:0.72rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">' + cat.icon + ' ' + cat.label + '</div>';
    for (var m = 0; m < cat.moves.length; m++) {
      var move = cat.moves[m];
      html += '<div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.05);">';
      html += '<div style="color:var(--text);font-weight:600;font-size:0.86rem;">' + move.name + '</div>';
      html += '<div style="color:var(--text-muted);font-size:0.8rem;margin-top:2px;">' + move.how + '</div>';
      if (move.result) {
        html += '<div style="color:var(--success);font-size:0.75rem;margin-top:2px;">' + move.result + '</div>';
      }
      if (move.alert) {
        html += '<div style="color:var(--danger);font-size:0.75rem;margin-top:2px;">⚠ ' + move.alert + '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
  }
}
```

- [ ] **Step 3: Verificar, commit**

```bash
git add app.js
git commit -m "feat: sub-tab Movimento com Power Moves lista completa por situacao"
```

---

## Resumo de Tasks

| # | Task | Arquivo | Complexidade |
|---|------|---------|-------------|
| 1 | Fase 1 conservadora + vacuum em todas as fases | data.js | Grande |
| 2 | Mobilidade desk-worker + Flex & Flow | data.js | Médio |
| 3 | NUTRITION_PHASES + SHOPPING_SYSTEM + POWER_MOVES + INTIMACY_GUIDE | data.js | Grande |
| 4 | Dashboard Power Move + macros por fase | app.js | Médio |
| 5 | Compras simplificadas mensal/semanal | app.js | Médio |
| 6 | Sub-aba Intimidade | app.js | Médio |
| 7 | Rebolar → Movimento + Power Moves lista | app.js | Pequeno |
