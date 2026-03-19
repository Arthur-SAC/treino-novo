# Spec: Integração Rotina Amazona no App PWA Treino-Novo

**Data:** 2026-03-19
**Objetivo:** Mesclar o conteúdo do `rotina_amazona.html` no app PWA existente (`treino-novo`) de forma fluida, criando uma experiência unificada que guia Arthur do zero ao corpo amazona sexy.

---

## Contexto do Usuário

- Arthur, mulher trans, 26 anos, 96kg, 173cm, sedentária partindo do zero
- Pele parda (subtom quente), cabelo cacheado 2c/3a, mora em Aracaju/SE
- Treina em academia de prédio: leg press, adutora, abdutora, caneleiras, halteres, esteira, bike, banco com rack, elásticos
- Rotina: trabalho 7h-16h, cuida do pai, treina 17:40-19h, passeia cães, dorme ~23h
- Sem hormônios por enquanto (quer ter filhos antes de TH)
- Objetivo: corpo feminino volumoso (thick fit), bunda grande, coxas grossas, cintura marcada, macio+firme
- Glúteo esquerdo mais dormente que o direito

## Arquitetura Existente

- PWA em HTML/CSS/JS puro (sem frameworks, sem bundler)
- CSS inline no `index.html`, lógica em `app.js`, dados em `data.js`
- Managers singleton: Router, StorageManager, Dashboard, WorkoutManager, NutritionManager, CareManager, ProgressManager, SettingsManager
- 5 abas: Início, Treino, Nutrição, Cuidados, Progresso
- Event delegation, hash-based routing, localStorage com Firebase sync opcional

---

## Design por Aba

### 1. Início (Dashboard) — Timeline do Dia

**Mudança principal:** Transformar o dashboard de checklist simples em timeline cronológica do dia inteiro.

**Blocos (na ordem temporal):**

| Horário | Bloco | Conteúdo |
|---------|-------|----------|
| 6:00 | Acordar | Kegel matinal (timer), 1a garrafinha de água |
| 7:00 | Café da manhã | 3 opções de refeição com macros, tag 🌿feminização, suplementos manhã |
| 10:00 | Lanche manhã | 3 opções + chá de spearmint (1a xícara) |
| 12:00 | Almoço | 3 opções com macros + lembrete Ômega-3 com a refeição |
| 16:00 | Pré-treino | 3 opções + chá de spearmint (2a xícara) |
| 17:40 | Treino | Ativação glúteo esq → aquecimento → treino do dia → alongamento |
| 19:00 | Pós-treino | Passeio cães (cardio leve ~25min) |
| 20:00 | Jantar | 3 opções com macros |
| 22:00 | Noturno | Skincare noite, kegel noturno, lanche opcional, lembrete largar celular |

**Mecânica:**
- Cada bloco tem checkbox — ao completar, visual "feito" (opacidade reduzida, check verde)
- Bloco de treino linka direto pra aba Treino com o treino do dia
- Dia da semana define o treino (Seg=Lower A, Ter=Yoga/Dança, Qua=Upper, Qui=Ativo leve, Sex=Lower B, Sáb=Glúteo+Yoga, Dom=Descanso)
- Dias de descanso mostram rotina leve
- Streak: dias consecutivos completando >70% dos blocos

**Água em garrafinhas:**
- Tracker visual com ícones de garrafinha de 700ml
- Meta: 4-5 garrafinhas/dia (~3L)
- Toque no ícone para marcar/desmarcar

**Macros do dia:**
- Barra fixa ou card resumo no topo: kcal / meta, proteína / meta
- Atualiza conforme refeições são marcadas

**Dados (data.js):**
- Novo objeto `DAILY_TIMELINE` com definição dos blocos por tipo de dia (treino vs descanso)
- Novo objeto `MEAL_OPTIONS` com 3 opções por refeição, macros, ingredientes, preparo, flag feminização
- Novo objeto `WEEK_SCHEDULE` mapeando dia da semana → tipo de treino

**Storage:**
- `timeline_{YYYY-MM-DD}` — blocos completados do dia
- `water_{YYYY-MM-DD}` — garrafinhas consumidas (número inteiro 0-8)
- `mealChoice_{refeicao}_{YYYY-MM-DD}` — qual opção escolheu em cada refeição

### 2. Treino (aprimorada)

**Mudanças principais:**
- 4 fases de treino com pesos sugeridos em kg
- Protocolo glúteo esquerdo integrado
- Yoga de quadril e rebolar como sub-seções
- Técnica + alertas por exercício
- Aquecimento/alongamento específicos (lower vs upper)
- Substituições automáticas pra academia de prédio

**Fases:**
- Fase 1 (Meses 1-2): Fundação, 3x/sem, full body, 0-15kg
- Fase 2 (Meses 3-5): Construção, 4x/sem, upper/lower split, 10-50kg
- Fase 3 (Meses 6-10): Amazona, 4-5x/sem, volume alto, 30-90kg
- Fase 4 (Mês 11+): Manutenção, 3-4x/sem, manter carga da fase 3

**Sub-seções na aba Treino:**
1. **Plano de Treino** — fases expansíveis com exercícios, séries, reps, pesos
2. **Glúteo Esquerdo** — protocolo de ativação (5 exercícios, 10min diários)
3. **Aquecimento/Alongamento** — rotinas lower e upper
4. **Yoga de Quadril** — 3 níveis progressivos (iniciante/intermediário/avançado)
5. **Rebolar** — progressão em 3 fases (isolamento → ritmo → expressão)
6. **Técnica** — dicas + alertas por exercício principal (hip thrust, agachamento, RDL, elevação lateral, búlgaro)
7. **Cardio** — tipos recomendados e quando usar

**Adaptações academia do prédio:**
- Kickback polia → caneleira (4 apoios)
- Face pull cabo → band pull-apart elástico
- Cable pull-through → RDL halteres
- Puxada frontal → remada curvada halteres
- Leg curl → stiff halteres
- Cadeira extensora → búlgaro halteres

**Dados (data.js):**
- Reescrever `WORKOUTS` com as 4 fases do Rotina Amazona adaptadas
- Novo objeto `GLUTE_FIX_PROTOCOL` com exercícios de ativação
- Novos objetos `WARMUP_LOWER`, `WARMUP_UPPER`, `COOLDOWN_LOWER`, `COOLDOWN_UPPER`
- Novo objeto `YOGA_LEVELS` com 3 níveis
- Novo objeto `REBOLAR_STEPS` com 3 fases
- Novo objeto `EXERCISE_TECHNIQUE` com dicas + alertas por exercício
- Novo objeto `CARDIO_GUIDE` com tipos e recomendações

**Storage:**
- `currentPhase` — fase atual (1-4) (já existe)
- `exerciseWeight_{exerciseId}` — peso usado por exercício (pra tracking de progressão)

### 3. Nutrição (aprimorada)

**Mudanças principais:**
- 3 opções por refeição (hoje tem 2)
- Feminização integrada nas opções
- Painel de suplementos com timing
- Lista de compras semanal com quantidades e botão "Copiar"

**Sub-abas:**
1. **Plano** — refeições do dia com opções, macros, preparo
2. **Suplementos** — card com cada suplemento, dose, quando, por quê, segurança íntima
3. **Receitas** — receitas detalhadas (já existe)
4. **Compras** — lista semanal automática com quantidades pra 7 dias

**Suplementos listados:**
- Whey (já toma), Creatina (já toma), Ômega-3 (mover pro almoço), Multivitamínico (já toma)
- Novos sugeridos: Vitamina D3+K2, DIM (100-200mg/dia)
- Fitoterapia: Chá de spearmint (2x/dia), Linhaça moída (2 col/dia)
- Alimentos funcionais: Soja/tofu/edamame (1-2 porções/dia)
- Cada um com nota de impacto no desempenho íntimo (todos seguros)

**Lista de compras:**
- Gerada a partir das refeições padrão
- Categorias: proteínas, carboidratos, verduras/legumes, frutas, laticínios, temperos, suplementos/chás
- Quantidades pra 7 dias
- Checkboxes
- Botão "Copiar lista" → texto formatado pro WhatsApp/clipboard
- Botão "Resetar" pra desmarcar tudo

**Dados (data.js):**
- Reescrever `MEALS` com 3 opções por refeição, macros, ingredientes, preparo, flag feminização
- Novo objeto `SUPPLEMENTS` com todos os suplementos e info
- Reescrever `SHOPPING_LIST` com quantidades semanais calculadas

### 4. Cuidados (aprimorada)

**Sub-abas:**
1. **Skincare** — rosto manhã, rosto noite, corpo (produtos com preço estimado, notas pra pele parda)
2. **Cabelo** — rotina de lavagem 7 passos, produtos recomendados, bonnet/fronha cetim
3. **Depilação** — epilador elétrico, esfoliação, pós-depilação, anti-foliculite
4. **Kegel** — 3 tipos com timer (rápida, longa, elevador), 3x/dia
5. **Cores de Roupa** (NOVA) — 3 categorias com swatches visuais

**Cores de Roupa:**
- Parte de cima: terracota, mostarda, vinho, verde floresta, roxo ameixa, azul marinho, chocolate, caramelo
- Parte de baixo: preto, azul marinho, verde floresta, chocolate escuro, roxo ameixa, vinho, terracota, oliva
- Roupa íntima/lingerie: preto, nude caramelo, vermelho cereja, roxo profundo, vinho, dourado/bronze, oliva, roxo ameixa
- Evitar: azul bebê, rosa bebê, branco puro, lavanda pálida
- Combinações prontas com swatches visuais (blocos de cor)
- Nota lingerie: "nude caramelo é o nude certo pra pele parda, não o rosado europeu"

**Dados (data.js):**
- Manter/aprimorar `SKINCARE_ROUTINE` com produtos e preços
- Manter/aprimorar `HAIR_CARE` com rotina de lavagem
- Novo objeto `COLOR_GUIDE` com cores por categoria, combinações, swatches hex

### 5. Progresso (aprimorada)

**Sub-abas:**
1. **Fotos** — upload frente/lado/costas, comparação (já existe)
2. **Medidas** — registro com histórico + razão cintura/quadril (já existe)
3. **Gráficos** — Chart.js com tendências (já existe)
4. **Conquistas** — badges (já existe)
5. **Projeção** (NOVA) — calculadora de corpo futuro

**Projeção Corporal:**
- Formulário: peso, altura, cintura, quadril, coxa, busto (com dicas de como medir)
- Botão "Projetar resultado"
- Comparação Hoje vs 12 meses (cada medida com delta)
- Silhueta SVG lado a lado (proporções baseadas nas medidas)
- Timeline com marcos: 3, 6, 12, 18 meses
- Calculadora "Quando chego na amazona?" (critério: C/Q < 0.75 + quadril > 105cm)
- Dicas de como acelerar

**Dados (data.js):**
- Novo objeto `PROJECTION_RATES` com taxas de mudança por mês
- Silhueta SVG gerada via função JavaScript (já existe no rotina_amazona.html, adaptar)

**Storage:**
- `projection_baseline` — medidas base pra projeção

---

## Decisões Técnicas

### Estrutura de arquivos (mantém a mesma)
- `index.html` — markup + CSS (adicionar novos estilos)
- `app.js` — managers (modificar Dashboard, WorkoutManager, NutritionManager, CareManager, ProgressManager)
- `data.js` — dados (reescrever/adicionar objetos)
- `sw.js` — incrementar cache version
- Sem novos arquivos, sem frameworks, sem bundler

### Padrões a seguir
- JavaScript puro (ES5/ES6 misto)
- CSS inline no index.html com variáveis CSS existentes
- Event delegation nos managers
- StorageManager pra persistência
- Commits em português com prefixo feat:/fix:/refactor:
- Sem acentos em IDs, kebab-case

### Tamanho dos arquivos
- data.js vai crescer significativamente (~250-300KB estimado) com todos os novos objetos
- app.js vai crescer (~180-200KB estimado) com novas funcionalidades nos managers
- index.html vai crescer (~80-90KB estimado) com novos estilos

### Migração
- StorageManager mantém compatibilidade (mesmos métodos, mesmas keys existentes)
- Novos dados são aditivos (não quebram dados existentes)
- `currentPhase` continua funcionando (1-4)

---

## Fora de escopo
- Firebase real (mantém placeholder)
- Push notifications reais
- Backend/API
- Frameworks/bundlers
- Testes automatizados
- Refatoração de código existente que não é afetado pela integração

---

## Critérios de sucesso
1. App abre e mostra timeline do dia com todos os blocos
2. Cada refeição tem 3 opções com macros e flag de feminização
3. Treino mostra fase atual com pesos sugeridos adaptados pra academia do prédio
4. Protocolo glúteo esquerdo aparece antes do treino nos dias de perna
5. Yoga e rebolar acessíveis na aba Treino
6. Projeção corporal funciona com silhueta SVG
7. Cores de roupa com swatches visuais na aba Cuidados
8. Água trackada em garrafinhas de 700ml
9. Lista de compras com botão "Copiar"
10. Suplementos com timing e nota de segurança íntima
11. App continua funcionando offline (PWA)
12. Dados existentes não são perdidos na migração
