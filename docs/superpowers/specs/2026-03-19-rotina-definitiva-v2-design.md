# Spec v2: Rotina Definitiva Calibrada — Forja da Amazona

**Data:** 2026-03-19
**Objetivo:** Corrigir e recalibrar o app existente pro caso real de Arthur — 96kg sedentária, joelhos sensíveis, lombar tensa, ombros travados, alimentação inconsistente, sono ruim, estresse alto. Adicionar vacuum, mobilidade, cardio obrigatório, micro-momentos sensuais, sub-aba intimidade, e sistema de nutrição por fases (déficit → construção).

---

## Contexto (revisado)

- 96kg, 173cm, ~30% gordura corporal estimada, gordura concentrada no tronco/barriga
- Pernas um pouco mais grossas, braços mais finos
- Joelhos: dor leve ocasional. Lombar: tensa. Ombros/pescoço: sempre tensos (8h sentada)
- Glúteo esquerdo mais dormente que direito
- Desempenho sexual: problema de ereção + fôlego (sedentarismo)
- Alimentação: só o shake da manhã é consistente, resto improvisado, não faz compras regularmente
- Sono: 7h mas qualidade ruim, celular até 23h
- Motivação: ver corpo mudando > se sentir feminina > reação da namorada
- Tentativas anteriores falharam porque treinava pra corpo masculino (contra o próprio objetivo)
- Treina 17:40-19h (1h-1h15 disponível)
- Academia do prédio: leg press, adutora/abdutora, halteres, barra+rack, esteira, bike, caneleiras, elásticos, 8 andares de escada

---

## 1. Nutrição — Sistema de Fases

### Fase de déficit (Meses 1-5) — 96kg → ~86kg

| | Dia de treino | Dia de descanso |
|---|---|---|
| Calorias | ~2300 kcal | ~2100 kcal |
| Proteína | 150g+ | 140g+ |
| Carboidrato | ~230g | ~190g |
| Gordura | ~65g | ~65g |

### Fase de construção (Meses 6-10) — ~86kg recomp

| | Dia de treino | Dia de descanso |
|---|---|---|
| Calorias | ~2550 kcal | ~2300 kcal |
| Proteína | 155g+ | 145g+ |
| Carboidrato | ~280g | ~230g |
| Gordura | ~70g | ~65g |

### Implementação no app

- `NUTRITION_PHASES` — novo objeto em data.js com as metas por fase
- Dashboard mostra metas da fase ATUAL (baseado em `currentPhase`)
- Fase 1-2 = déficit, Fase 3-4 = construção
- As 3 opções de refeição em MEAL_OPTIONS devem ter os macros ajustados pra fechar nos targets de déficit (~2200 kcal médio)

### Sistema de compras simplificado

Substituir a lista semanal complexa por sistema "sempre ter em casa":

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

Botão "Copiar mensal" e "Copiar semanal" separados.

---

## 2. Treino — Recalibrado pra Corpo Real

### Fase 1 — "Despertar" (Meses 1-2) · 3x/semana · ~55min

Estrutura de cada sessão:
1. **Mobilidade desk-worker (5min)**
   - Alongamento hip flexor ajoelhado (30seg cada lado) — "destravar o quadril de 8h sentada"
   - Torção torácica deitada (5x cada lado) — "soltar ombros e costas"
   - Rotação de pescoço + elevação/depressão de ombros (10x) — "soltar tensão"
   - Dica: "Se sentir que tá estalando, é bom. Se sentir dor, parar."
   - Alerta: "Nunca forçar amplitude. Ir até onde vai naturalmente."

2. **Ativação glúteo esquerdo (5min)**
   - Clamshell esquerdo com elástico (2x15)
   - Glute bridge unilateral esquerdo com pausa 3seg (2x10)
   - Dica: "Colocar a mão no glúteo esq pra sentir se tá contraindo"
   - Alerta: "Se sentir lombar trabalhando em vez do glúteo, parar e reposicionar"

3. **Treino principal (30min)** — descanso 90seg entre séries
   - Glute bridge no chão 3x15 (peso corporal → haltere no quadril)
   - Glute bridge unilateral ESQ 3x12 (sem peso)
   - Glute bridge unilateral DIR 3x12 (mesmo reps que esq)
   - Abdução deitada com elástico 3x20
   - Wall sit (agachamento na parede) 3x20-30seg — protege joelho
   - RDL halteres leves 3x12 (5-8kg cada)
   - Prancha 3x20-30seg

4. **Vacuum (3min)**
   - 3x20seg — soltar TODO o ar, puxar umbigo pra dentro e pra cima, segurar
   - Dica: "Pode fazer de pé, sentada ou de quatro apoios. Quatro apoios é mais fácil no início."
   - Alerta: "Se sentir tontura, está prendendo a respiração errado. Soltar o ar PRIMEIRO, depois puxar."

5. **Cardio (12-15min)**
   - Esteira inclinada 8-10% velocidade 4-5km/h OU escada do prédio (mês 1: 2-3 andares, mês 2: 4-5)
   - Dica: "Não segurar nas barras da esteira. Inclinação ativa glúteo."
   - Alerta: "Se joelho doer na escada, voltar pra esteira. Sem heroísmo."

6. **Flex & Flow (5min)** — alongamento + movimentos de quadril
   - Borboleta sentada (1min)
   - Pigeon Pose (1min cada lado)
   - Círculos de quadril em pé, lentos (30seg cada sentido)
   - Isolamento quadril frente/trás (30seg)

### Fase 2 — "Construção" (Meses 3-5) · 4x/semana · ~60min

Mesma estrutura de sessão, treino principal muda:

**Lower A — Glúteo + Posterior (Seg/Sex):**
- Hip thrust no banco com haltere → barra (3x12, 15-40kg, descanso 90seg)
- Hip thrust unilateral ESQ (3x10, 10-15kg)
- Hip thrust unilateral DIR (3x10, mesmo peso)
- RDL halteres (3x12, 10-15kg cada)
- Abdução máquina (3x20, 10-25kg)
- Stiff halteres (3x12, 10-15kg cada)
- Vacuum 3x25seg

**Upper — Curvilíneo (Qua):**
- Supino inclinado halteres (3x12, 8-14kg cada)
- Remada curvada halteres (3x12, 10-14kg cada)
- Elevação lateral (4x15, 4-7kg cada)
- Band pull-apart elástico (3x20)
- Rosca direta + tríceps (3x15, 6-10kg)
- Vacuum 3x25seg

**Lower B — Coxa + Quadril (Sáb):**
- Agachamento com barra (3x12, 20-40kg) — só paralelo, sem forçar profundidade
- Búlgaro halteres ESQ primeiro (3x10 cada, 8-14kg cada)
- Leg press pés altos (3x12, 30-60kg)
- Adutora máquina (3x15, 15-30kg)
- Panturrilha em pé (3x20, halteres)
- Vacuum 3x25seg

Cardio 12-15min pós-treino. Escada: progride pra 4-5 andares.

### Fase 3 — "Amazona" (Meses 6-10) · 4-5x/semana · ~70min

Corpo em ~86kg. Articulações saudáveis. Agora carga pesada:

**Lower A — Glúteo Heavy:**
- Hip thrust barra pesada (4x10, 40-80kg, pausa 2seg no topo)
- Hip thrust unilateral ESQ (3x10, 15-25kg)
- RDL barra (4x10, 30-50kg)
- Stiff pesado (3x10, 25-40kg)
- Abdução máquina drop set (4x12 + drop)
- Vacuum 3x30seg

**Upper — Curvilíneo:**
- Supino inclinado halteres (4x10, 14-20kg cada)
- Remada curvada halteres (4x10, 14-20kg cada)
- Elevação lateral (4x15, 7-10kg cada)
- Band pull-apart (3x20)
- Crucifixo halteres (3x12, 8-14kg cada)
- Vacuum 3x30seg

**Lower B — Coxa + Quadril:**
- Agachamento barra (4x10, 40-70kg)
- Búlgaro halteres ESQ (3x10, 14-20kg cada)
- Adutora máquina (4x15, 25-45kg)
- Sumo agachamento haltere (4x10, 20-40kg)
- Leg press pés altos (4x12, 50-80kg)
- Vacuum 3x30seg

**Full Glúteo + Posterior:**
- Deadlift (4x8, 40-70kg)
- Hip thrust com pausa 2seg (4x10, 40-70kg)
- Stiff pesado (3x12, 25-40kg)
- Abdução com elástico em pé (3x20)
- Vacuum 3x30seg

Cardio reduzido: 10min, 2-3x/semana.

### Fase 4 — Manutenção (Mês 11+) · 3-4x/semana

Manter carga da fase 3, reduzir volume (3 séries em vez de 4-5). Kegel e vacuum permanecem pra sempre.

### Mobilidade desk-worker — DIÁRIA (não só treino)

5 minutos ao acordar (incluir na timeline bloco "Acordar"):
- Alongamento hip flexor (30seg cada lado)
- Torção torácica (5x cada lado)
- Rotação pescoço + ombros (10x)

Cada exercício tem: como fazer, dica de resultado, alerta de erro.

---

## 3. Flex & Flow — Alongamento + Movimento Integrado

Substitui o alongamento pós-treino genérico por sessão que treina flexibilidade E movimentos femininos:

### Pós Lower (15min):
1. Pigeon Pose (2min cada lado) — Como: joelho dobrado na frente, perna trás estendida. Dica: relaxar o quadril pro chão. Alerta: se doer no joelho da frente, afastar mais o pé.
2. Lizard Pose (90seg cada lado) — Como: avanço fundo, antebraço no chão. Dica: respirar fundo, afundar mais a cada expiração. Alerta: não forçar se lombar reclamar.
3. Borboleta sentada (2min) — Como: pés juntos, joelhos abertos, inclinar. Dica: puxar pés mais perto = mais intenso. Alerta: dor no joelho = soltar um pouco.
4. Happy Baby (2min) — Como: deitada, segurar plantas dos pés. Dica: balançar suave lado a lado. Alerta: pescoço no chão, não levantar cabeça.
5. Círculos de quadril em pé (1min) — Como: mãos na cintura, círculos amplos e lentos. Dica: tronco PARADO, só quadril se move. Alerta: se o tronco mexer junto, o círculo tá grande demais.
6. Isolamento quadril frente/trás (1min) — Como: pés paralelos, empurrar quadril frente e trás sem mover tronco. Dica: imaginar que tem uma parede na frente e atrás. Alerta: se os joelhos trancarem, flexionar levemente.

### Pós Upper (10min):
1. Peitoral na porta (1min cada lado)
2. Torção espinhal sentada (1min cada lado)
3. Child's Pose (2min)
4. Ondulação de coluna em pé (1min) — Como: da cintura pra cima, ondular como uma cobra. Dica: começar pela pélvis, passar pela lombar, torácica, pescoço. Alerta: se sentir tensão no pescoço, parar antes.
5. Rotação de ombros fluida (1min)

---

## 4. Micro-Momentos — "Power Moves"

Lista fixa no app organizada por situação. Cada item com: como fazer, dica, alerta quando relevante.

### No banho
- Círculos de quadril lentos (10x cada sentido) — treina isolamento
- Figure-8 com quadril — desenhar infinito com o quadril
- Ondulação de coluna (cobra) — flexibilidade + sensualidade
- Squeeze de glúteo isométrico (apertar 10seg x5) — ativação

### Esperando comida / microondas / café
- Elevação de panturrilha (15x) — pernas alongadas
- Postura feminina: ombros trás, peito aberto, queixo nivelado, peso num pé só
- Kegel discreto (qualquer tipo)
- Balanço sutil de quadril lado a lado — gingado natural

### No trabalho (sentada, 100% invisível)
- Kegel (todos os 3 tipos, ninguém vê)
- Squeeze de glúteo na cadeira (10x)
- Postura check: ombros baixos, coluna longa
- Rotação de tornozelo (10x cada, circulação)
- Vacuum discreto (puxar umbigo, segurar 10seg)

### Antes de dormir (na cama)
- Borboleta deitada (2min, no colchão)
- Alongamento hip flexor na cama (1min cada lado)
- Respiração diafragmática (5 respirações profundas — acalma sistema nervoso)

### Card no Dashboard
- Um "Power Move" aleatório aparece no Dashboard como sugestão do dia
- Toda a lista acessível na aba Treino → Rebolar (renomear pra "Movimento")

---

## 5. Sub-aba Intimidade (dentro de Cuidados)

Nova sub-aba entre Kegel e Cores. Conteúdo em texto, sem imagens.

### Bloco 1 — Feminina no comando
- Linguagem corporal: ondulação do quadril durante, mãos no próprio corpo, contato visual
- Posições que permitem ser ativa E feminina: como usar os quadris (isolamento do treino se aplica aqui)
- Lingerie como ferramenta: o que manter durante, o que tirar devagar
- Conexão com treino: flexibilidade = mais posições, kegel = controle e intensidade, fôlego = durar mais

### Bloco 2 — Confiança íntima
- Técnica > tamanho: ângulos que maximizam sensação, ritmo, variação de velocidade
- Preliminares longas: onde a maior parte da satisfação acontece
- Mãos e boca: complementam e amplificam
- Kegel forte = sensação melhor pra ambos
- Posições que favorecem profundidade sem precisar de comprimento

### Bloco 3 — Evolução com o treino
- Mês 1-2: fôlego melhora, kegel começa a fazer efeito
- Mês 3-5: flexibilidade de quadril abre novas posições, resistência sobe
- Mês 6+: corpo transformado = confiança = melhor desempenho

### Dados
Novo objeto `INTIMACY_GUIDE` em data.js com os 3 blocos estruturados como arrays de dicas.

---

## 6. Vacuum — De volta ao app

Integrar em 2 lugares:

### No treino (dentro de cada sessão)
- Fase 1: 3x20seg (entre prancha e cardio)
- Fase 2: 3x25seg
- Fase 3: 3x30seg
- Fase 4: 3x30seg
- Cada fase com: como fazer, dica, alerta
- videoKey: "vacuum" (já existe em EXERCISE_VIDEOS)

### Na timeline diária
- Adicionar ao bloco "Acordar": "Vacuum matinal (3x20seg)" — pode fazer antes do café

---

## 7. Desempenho Sexual — Integrado (não separado)

Não é uma feature separada. Os componentes que melhoram desempenho já estão no plano:

- **Kegel 3 tipos 3x/dia** → melhora ereção e controle
- **Cardio regular** (escada + esteira) → melhora circulação pélvica e fôlego
- **Perda de gordura abdominal** (déficit meses 1-5) → menos aromatase, melhor função hormonal
- **Alongamento hip flexor diário** → destravar circulação pélvica
- **Ômega-3 no almoço + Vitamina D3** → suporte circulatório e hormonal
- **Sono melhor** (rotina noturna) → recuperação hormonal

O que muda no app: na descrição de cada exercício/hábito, incluir a conexão com desempenho sexual quando relevante (ex: no kegel, mostrar "melhora ereção e controle em 4-8 semanas").

---

## 8. Mudanças Técnicas no App

### data.js — Objetos a modificar/adicionar:
- `MEAL_OPTIONS` — recalcular macros das opções pra fechar em ~2200kcal/dia médio (déficit)
- `NUTRITION_PHASES` — novo, metas por fase
- `SHOPPING_SYSTEM` — substitui SHOPPING_LIST, dividido em mensal/semanal
- `WORKOUTS` — reescrever Fase 1 (mais conservadora), ajustar Fase 2 (descanso 90seg), adicionar vacuum em todas as fases
- `DAILY_TIMELINE` — adicionar mobilidade desk-worker e vacuum no bloco "Acordar", power move do dia
- `WARMUP_LOWER` / `WARMUP_UPPER` — adicionar mobilidade desk-worker no início
- `FLEX_FLOW_LOWER` / `FLEX_FLOW_UPPER` — substituir COOLDOWN_LOWER/UPPER com versão expandida incluindo movimentos de quadril
- `POWER_MOVES` — novo, lista fixa de micro-momentos por situação
- `INTIMACY_GUIDE` — novo, 3 blocos de conteúdo
- `EXERCISE_TECHNIQUE` — adicionar dica/alerta/tutorial em cada exercício que não tem
- `REBOLAR_STEPS` — manter mas renomear no app pra "Movimento" e incluir os power moves

### app.js — Managers a modificar:
- `Dashboard` — adicionar card Power Move do dia, ajustar macros pra fase atual
- `WorkoutManager` — vacuum integrado em cada sessão, mobilidade desk-worker no aquecimento, Flex & Flow no alongamento
- `NutritionManager` — macros ajustados por fase, SHOPPING_SYSTEM com copiar mensal/semanal separados
- `CareManager` — nova sub-aba Intimidade entre Kegel e Cores

### Sem mudanças em:
- index.html (CSS já atualizado pelo redesign RPG)
- sw.js (já em v9)
- ProgressManager (projeção já funciona)

---

## Critérios de sucesso

1. Fase 1 do treino é segura pra 96kg com joelhos sensíveis (sem hip thrust/agachamento livre)
2. Vacuum presente em todo treino e na timeline
3. Mobilidade desk-worker no aquecimento E na timeline matinal
4. Macros do dashboard refletem fase atual (déficit ou construção)
5. Cardio obrigatório no pós-treino (não opcional)
6. Flex & Flow com movimentos de quadril integrados no alongamento
7. Power Moves acessíveis como lista fixa + card aleatório no dashboard
8. Sub-aba Intimidade funcional com 3 blocos
9. Lista de compras simplificada (mensal + semanal) com botão copiar
10. Cada exercício tem: como fazer, dica, alerta
11. Receitas com ingredientes e passo a passo em cada opção de refeição
