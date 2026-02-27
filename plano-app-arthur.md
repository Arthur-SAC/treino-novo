# ESPECIFICAÇÃO COMPLETA — App de Transformação Corporal Arthur

## 📋 BRIEFING PARA CLAUDE CODE

Crie um app web (single HTML file com CSS e JS inline) para acompanhamento completo de transformação corporal. O app deve ser **bonito, feminino, funcional e mobile-first** (90% do uso será no celular).

---

## 🎨 DIREÇÃO VISUAL

- **Tema:** Feminino, elegante, motivacional
- **Paleta:** Tons de rosa/lilás/dourado com fundo escuro (dark mode padrão)
- **Tipografia:** Google Fonts — algo elegante (ex: Playfair Display para títulos + Nunito para corpo)
- **Estilo:** Cards arredondados, glassmorphism sutil, ícones emoji, micro-animações
- **Layout:** Mobile-first, bottom navigation, swipe entre seções
- **Vibe:** App premium de fitness feminino, não genérico

---

## 🏗️ ESTRUTURA DO APP

### ⏰ ROTINA DIÁRIA DE ARTHUR (referência pra todo o app):
```
06:00 — Acordar
06:15 — Skincare manhã
06:30 — Café da manhã
10:00 — Lanche da manhã
12:30 — Almoço
16:00 — Pré-treino (lanche)
18:00 — TREINO (academia)
19:30 — Banho → Skincare noite → Cuidados corpo
20:00 — Jantar (pós-treino)
22:00 — Kegel + rotina de dormir
22:30 — Dormir
```
**Sono:** 22:30 - 06:00 = 7h30 ✅ (dentro da meta de 7-8h)

### Navegação inferior (5 abas):
1. 🏠 **Início** — Dashboard do dia
2. 🏋️ **Treino** — Plano de treino com fases
3. 🍽️ **Nutrição** — Plano alimentar + receitas
4. ✨ **Cuidados** — Skincare, cabelo, depilação
5. 📊 **Progresso** — Fotos, medidas, gráficos

---

## 📱 ABA 1: INÍCIO (Dashboard)

Mostrar para o dia atual:
- **Saudação** com nome e frase motivacional aleatória
- **Checklist do dia** (checkboxes persistentes via localStorage, ordenados por horário):
  - [ ] ☀️ Skincare manhã (06:15)
  - [ ] Vacuum (5x20-30seg) — pode fazer de manhã ou antes do treino
  - [ ] Alongar flexor (60seg cada lado) — pode fazer de manhã ou pós-treino
  - [ ] 💧 Beber 2.5L água (contador visual tipo progress bar — ao longo do dia)
  - [ ] 🏋️ Treino do dia — 18:00 (link pra aba treino)
  - [ ] 🌙 Skincare noite (pós-academia, pós-banho ~19:30)
  - [ ] Kegel (10 reps) — pode fazer a qualquer hora, lembrete às 22:00
  - [ ] 🪒 Depilação (só aparece Terça e Sábado)
- **Card "Treino de Hoje"** — resumo do treino do dia da semana
- **Card "Refeições de Hoje"** — resumo das refeições
- **Streak** — dias consecutivos completando >80% do checklist
- **Card "Dica do Dia"** — dica rotativa sobre postura/treino/nutrição

### Frases motivacionais (banco de ~30 frases):
- "Cada repetição te aproxima da mulher que você já é 💪"
- "Amazona mode: ON 🔥"
- "Seu corpo, suas regras, sua transformação ✨"
- "A cintura não se marca sozinha — bora vacuum! 💨"
- (criar mais ~26 frases variadas, motivacionais e femininas)

---

## 🏋️ ABA 2: TREINO

### Sistema de Fases Progressivas:

O treino é dividido em **4 fases** com progressão automática. O usuário marca qual fase está e o app mostra os treinos correspondentes.

---

### FASE 1 — FUNDAÇÃO (Semanas 1-6) ← FASE ATUAL
**Objetivo:** Aprender movimentos, ativar glúteo, corrigir postura, criar hábito

**Estrutura semanal:**

#### SEGUNDA — Glúteo Máximo + Peito
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Glute Bridge (segurar 2-3seg no topo) | 3x15 | 45seg | Empurre o quadril pro TETO. Aperte forte no topo |
| 2 | Sumo Squat com halter | 3x12 | 60seg | Pés bem abertos, dedos pra fora, desça devagar |
| 3 | Leg Press (pés altos e largos) | 3x12 | 60seg | Pés no TOPO da plataforma = mais glúteo |
| 4 | Abdutora | 3x15 | 45seg | Segure 1seg na abertura máxima |
| 5 | Pullover com halter | 3x12 | 60seg | Abre a caixa torácica, silhueta ampulheta |
| 6 | Vacuum | 5x20-30seg | 30seg | Solte TODO o ar, puxe umbigo pra dentro e pra cima |

#### TERÇA — Glúteo Médio + Cardio
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Clamshell com elástico | 3x15 cada | 30seg | SEMPRE comece pelo lado ESQUERDO |
| 2 | Abdução em pé com elástico | 3x15 cada | 30seg | Tronco reto, não incline |
| 3 | Lateral Walk com elástico | 3x12 cada lado | 30seg | Passos curtos, tensão constante no elástico |
| 4 | Abdutora (máquina) | 3x15 | 45seg | Segure 1seg aberto |
| 5 | Adutora (máquina) | 3x15 | 45seg | Interno de coxa = feminiza silhueta |
| 6 | Cardio: Esteira inclinada | 20min | - | Inclinação 8-12%, velocidade 5-6km/h. Ativa glúteo! |

#### QUARTA — Posterior + Glúteo + Cardio
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Stiff com halteres | 3x12 | 60seg | Empurre o quadril PRA TRÁS, sinta atrás da coxa |
| 2 | Glute Bridge com halter | 3x15 | 45seg | Halter apoiado no quadril, empurre pro teto |
| 3 | Leg Press (pés altos) | 3x12 | 60seg | Desça controlado (3seg descendo) |
| 4 | Sumo Squat | 3x12 | 60seg | Foco no glúteo ao subir |
| 5 | Vacuum | 5x20-30seg | 30seg | Pode fazer em pé ou de 4 apoios |
| 6 | Cardio: Esteira inclinada | 15min | - | Inclinação 8-12%, velocidade 5-6km/h |

#### QUINTA — Glúteo Médio + Core
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Clamshell com elástico | 3x15 cada | 30seg | Lado ESQUERDO primeiro |
| 2 | Abdução em pé com elástico | 3x15 cada | 30seg | Movimento controlado |
| 3 | Lateral Walk | 3x12 cada | 30seg | Mantenha semi-agachamento |
| 4 | Abdutora (máquina) | 3x15 | 45seg | Aumente peso quando ficar fácil |
| 5 | Prancha (pode ser de joelhos) | 3x20-30seg | 30seg | Aperte abdômen e glúteo, corpo RETO |
| 6 | Vacuum | 5x20-30seg | 30seg | Concentre-se em puxar umbigo pra coluna |

#### SEXTA — Glúteo FOCO + Peito
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Glute Bridge (segurar 3seg) | 4x15 | 45seg | 4 séries! Dia de foco = volume maior |
| 2 | Sumo Squat com halter | 3x15 | 60seg | Mais reps que segunda = mais queima |
| 3 | Leg Press (pés altos e largos) | 3x15 | 60seg | Mais reps, foco na contração do glúteo |
| 4 | Abdutora | 3x20 | 45seg | Mais reps, segure 1seg |
| 5 | Pullover com halter | 3x12 | 60seg | Silhueta ampulheta |
| 6 | Vacuum | 5x20-30seg | 30seg | Dia forte de vacuum |

#### SÁBADO — Cardio + Recuperação
| # | Exercício | Duração | Dica |
|---|-----------|---------|------|
| 1 | Esteira inclinada | 30-40min | Inclinação 8-12%, velocidade 5-6km/h |
| 2 | Alongamento completo | 10min | Todos os alongamentos + flexor 60seg cada |
| 3 | Vacuum | 5x20-30seg | Aproveite pra fazer com calma |

#### DOMINGO — Descanso total
- Apenas alongamento leve se quiser
- Skincare, hidratação, autocuidado

---

### FASE 2 — CONSTRUÇÃO (Semanas 7-14)
**Objetivo:** Aumentar carga, mais volume, introduzir exercícios intermediários

**Mudanças em relação à Fase 1:**
- Aumento de carga em TODOS os exercícios (~20-30% mais peso)
- Glute Bridge → com halter mais pesado ou elevação dos pés
- Adicionar: Bulgarian Split Squat (3x10 cada perna)
- Adicionar: Hip Thrust na máquina multiuso ou improvisado (banco + barra/halter)
- Adicionar: Step Up com halter (3x12 cada perna)
- Sumo Squat: 4x12 (mais 1 série)
- Prancha: 3x30-45seg (progressão)
- Cardio mantém, adicionar 1 dia de HIIT (sábado: 20min intervalado)
- Clamshell + abdução: aumentar resistência do elástico

**Estrutura semanal (mesma divisão):**

#### SEGUNDA — Glúteo Máximo + Peito
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Hip Thrust (banco + halter) | 4x12 | 60seg | Apoie as costas no banco, empurre o quadril pro teto |
| 2 | Bulgarian Split Squat | 3x10 cada | 60seg | Pé traseiro no banco, foque no glúteo ao subir |
| 3 | Sumo Squat pesado | 4x12 | 60seg | Aumente a carga, desça controlado |
| 4 | Leg Press (pés altos) | 4x12 | 60seg | Mais carga que Fase 1 |
| 5 | Abdutora pesada | 3x15 | 45seg | Aumente peso, segure 2seg aberto |
| 6 | Pullover | 3x12 | 60seg | Pode aumentar halter |
| 7 | Vacuum | 5x30seg | 30seg | Progressão: 30seg mínimo |

#### TERÇA — Glúteo Médio + Cardio
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Clamshell (elástico mais forte) | 3x20 cada | 30seg | Lado ESQUERDO primeiro |
| 2 | Abdução em pé (elástico forte) | 3x15 cada | 30seg | Controle total |
| 3 | Lateral Walk (elástico forte) | 3x15 cada | 30seg | Mais passos, mais tensão |
| 4 | Abdutora (máquina, mais peso) | 4x15 | 45seg | Progressão de carga |
| 5 | Adutora (mais peso) | 3x15 | 45seg | Coxas torneadas |
| 6 | Step Up com halter | 3x12 cada | 60seg | Banco médio, empurre pelo calcanhar |
| 7 | Cardio: Esteira inclinada | 25min | - | Inclinação 10-12% |

#### QUARTA — Posterior + Glúteo + Cardio
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Stiff com halteres (mais pesados) | 4x12 | 60seg | Sinta o alongamento na posterior |
| 2 | Hip Thrust | 4x12 | 60seg | Foco na contração no topo |
| 3 | Leg Press | 4x12 | 60seg | Desça 3-4seg (excêntrico) |
| 4 | Good Morning com barra | 3x12 | 60seg | Barra atrás do pescoço, flexione no quadril |
| 5 | Vacuum | 5x30seg | 30seg | Mantenha consistência |
| 6 | Cardio: Esteira | 20min | - | Inclinação 10-12% |

#### QUINTA — Glúteo Médio + Core
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Clamshell (forte) | 3x20 cada | 30seg | Esquerdo primeiro |
| 2 | Abdução em pé | 3x15 cada | 30seg | Controle |
| 3 | Lateral Walk | 3x15 cada | 30seg | Mantenha agachamento baixo |
| 4 | Abdutora (pesada) | 4x15 | 45seg | Segure 2seg |
| 5 | Prancha | 3x30-45seg | 30seg | Progressão: tente sem joelhos |
| 6 | Prancha lateral | 2x20seg cada | 30seg | NOVO: marca a cintura |
| 7 | Vacuum | 5x30seg | 30seg | Core completo |

#### SEXTA — Glúteo FOCO + Peito
| # | Exercício | Séries x Reps | Descanso | Dica |
|---|-----------|---------------|----------|------|
| 1 | Hip Thrust pesado | 4x15 | 60seg | Dia de volume = mais reps |
| 2 | Bulgarian Split Squat | 3x12 cada | 60seg | Mais reps que segunda |
| 3 | Sumo Squat | 4x15 | 60seg | Queima total |
| 4 | Leg Press | 4x15 | 60seg | Reps altas, foco na contração |
| 5 | Abdutora | 4x20 | 45seg | Volume máximo |
| 6 | Pullover | 3x12 | 60seg | Ampulheta |
| 7 | Vacuum | 5x30seg | 30seg | Vacuum forte |

#### SÁBADO — HIIT + Cardio
| # | Exercício | Duração | Dica |
|---|-----------|---------|------|
| 1 | HIIT Esteira | 20min | 30seg sprint (velocidade 10-12) + 60seg caminhada. Repita 12-15x |
| 2 | Esteira inclinada | 15min | Cooldown: inclinação 8%, velocidade 5km/h |
| 3 | Alongamento completo | 10min | Flexor 60seg cada + todos os alongamentos |

---

### FASE 3 — DEFINIÇÃO (Semanas 15-24)
**Objetivo:** Aumentar intensidade, técnicas avançadas, mais definição

**Mudanças em relação à Fase 2:**
- Introduzir **drop sets** no último exercício de glúteo (faz a série, reduz peso 30%, faz mais reps até falha)
- Introduzir **pausa no fundo** no squat e leg press (2seg parado embaixo)
- Hip Thrust: 4x15 com pausa de 3seg no topo
- Adicionar: Kickback na polia/cabo (3x15 cada)
- Adicionar: Elevação pélvica com pés elevados (banco)
- Bulgarian Split Squat: com deficit (pé da frente em step)
- Core: Prancha 3x45-60seg + Prancha lateral 3x30seg + Dead bug 3x10
- Cardio: 3 sessões/semana (2 inclinada + 1 HIIT)
- Flexibilidade: Adicionar sessão de 15min 2x/semana (yoga básico)

**Exemplo segunda Fase 3:**

| # | Exercício | Séries x Reps | Descanso | Técnica |
|---|-----------|---------------|----------|---------|
| 1 | Hip Thrust pesado | 4x15 | 60seg | Pausa 3seg no topo |
| 2 | Bulgarian Split Squat deficit | 3x12 cada | 60seg | Pé em step, mais profundo |
| 3 | Sumo Squat | 4x12 | 60seg | Pausa 2seg no fundo |
| 4 | Kickback na polia | 3x15 cada | 45seg | Esquerdo primeiro! |
| 5 | Leg Press (drop set) | 3x12 + drop | 90seg | Última série: drop set |
| 6 | Pullover | 3x12 | 60seg | Ampulheta |
| 7 | Vacuum | 5x30-45seg | 30seg | Progressão de tempo |

*(Criar treinos completos para todos os dias seguindo o mesmo padrão de progressão)*

---

### FASE 4 — AVANÇADO (Semana 25+)
**Objetivo:** Manutenção, refinamento, preparação pra possíveis procedimentos

**Mudanças em relação à Fase 3:**
- Treino com **periodização** (semana pesada, semana leve, semana moderada)
- Supersets: combinar exercícios (ex: Hip Thrust + Abdutora sem descanso)
- Adicionar: Glute Ham Raise ou Nordic Curl (se disponível)
- Adicionar: Cable Pull Through
- Volume total maior (mais séries totais por treino)
- Drop sets + Rest-pause sets (faz reps, descansa 10seg, faz mais)
- Cardio: manter 3x/semana, ajustar conforme composição corporal
- Flexibilidade: yoga 2-3x/semana
- Core avançado: Ab wheel, Pallof press, Hanging leg raise

*(Criar treinos completos para todos os dias)*

---

### CADA TREINO DEVE MOSTRAR:

Para cada exercício no app:
1. **Nome** do exercício
2. **Séries x Reps**
3. **Tempo de descanso** (com timer embutido)
4. **Dica rápida** (1 linha, como executar)
5. **Botão expandir** → mostra explicação detalhada + erros comuns
6. **🎬 Botão "Ver exercício"** → abre vídeo em MODAL/POPUP dentro do app (ver seção abaixo)
7. **Checkbox** por série completada
8. **Campo de peso** usado (pra tracking)

---

### 🎬 SISTEMA DE VÍDEOS (IMPORTANTE — NÃO TROCAR DE ABA)

A usuária é INICIANTE e precisa ver como cada exercício é feito. Os vídeos devem abrir **dentro do app em um modal/popup**, NUNCA redirecionar pra outra aba ou sair do app.

#### Como implementar:

**1. Modal de vídeo:**
- Botão 🎬 ou ícone de play ao lado de cada exercício
- Ao clicar, abre um **modal overlay escuro** (fundo semitransparente)
- Dentro do modal: player de vídeo (YouTube embed via iframe) + nome do exercício + dicas
- Botão X pra fechar o modal (ou clicar fora)
- O modal deve funcionar BEM no celular (tela cheia ou quase)
- O vídeo NÃO deve começar automaticamente (autoplay=0)

**2. Fonte dos vídeos:**
- Usar vídeos do YouTube embed (iframe com `youtube-nocookie.com` pra privacidade)
- Buscar vídeos curtos (30seg-2min) de canais fitness brasileiros confiáveis
- Priorizar vídeos em PORTUGUÊS quando disponível
- Se não encontrar em PT, usar vídeos em inglês de canais conhecidos

**3. Mapeamento de vídeos por exercício:**
Cada exercício deve ter um `videoId` do YouTube associado. Exemplos de busca:

| Exercício | Buscar no YouTube | Tipo de vídeo |
|-----------|-------------------|---------------|
| Glute Bridge | "glute bridge como fazer" ou "elevação pélvica" | Execução correta + erros comuns |
| Sumo Squat | "agachamento sumo com halter" | Posição dos pés + profundidade |
| Leg Press (pés altos) | "leg press pés altos glúteo" | Posição dos pés na plataforma |
| Abdutora | "cadeira abdutora" | Execução + como apertar no topo |
| Pullover | "pullover com halter" | Amplitude + respiração |
| Vacuum | "vacuum abdominal como fazer" | Técnica de respiração |
| Clamshell | "clamshell com elástico glúteo" | Posição + não girar o tronco |
| Abdução em pé | "abdução em pé elástico" | Postura reta + controle |
| Lateral Walk | "lateral walk elástico" | Semi-agachamento + tensão constante |
| Stiff | "stiff com halteres" ou "levantamento terra romeno" | Movimento do quadril + costas retas |
| Prancha | "prancha abdominal iniciante" | Alinhamento do corpo |
| Bulgarian Split Squat | "agachamento búlgaro" | Distância do banco + equilíbrio |
| Hip Thrust | "hip thrust com halter banco" | Posição das costas no banco |
| Step Up | "step up com halter" | Empurrar pelo calcanhar |
| Good Morning | "good morning barra" | Flexão no quadril, não na lombar |
| Kickback polia | "kickback glúteo polia cabo" | Não arquear a lombar |
| Kegel | "exercício kegel masculino" | Identificar músculo correto |
| Alongamento flexor | "alongamento flexor quadril" | Posição correta do quadril |
| World's Greatest Stretch | "world's greatest stretch" | Sequência completa |

**NOTA PARA O CLAUDE CODE:** Os videoIds específicos do YouTube precisam ser preenchidos manualmente ou buscados via pesquisa. Crie o sistema com IDs placeholder e um objeto/mapa fácil de editar onde todos os IDs ficam centralizados, tipo:

```javascript
const EXERCISE_VIDEOS = {
  "glute-bridge": {
    youtubeId: "PLACEHOLDER",
    title: "Glute Bridge — Como fazer corretamente",
    tips: "Empurre o quadril pro teto, aperte forte no topo 2-3seg"
  },
  "sumo-squat": {
    youtubeId: "PLACEHOLDER",
    title: "Agachamento Sumo com Halter",
    tips: "Pés bem abertos, dedos pra fora, desça devagar"
  },
  // ... etc
};
```

**4. Layout do modal de vídeo:**
```
┌─────────────────────────────────┐
│  ✕                              │  ← botão fechar (canto superior)
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │    PLAYER YOUTUBE       │   │  ← iframe 16:9 responsivo
│  │    (embed)              │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  Glute Bridge                   │  ← nome do exercício
│  Empurre o quadril pro teto,    │  ← dica rápida
│  aperte forte no topo 2-3seg    │
│                                 │
│  ⚠️ Erro comum: arquear a       │  ← erros comuns
│  lombar em vez de usar o glúteo │
│                                 │
└─────────────────────────────────┘
```

---

### ⏱️ SISTEMA DE CRONÔMETRO/TIMER (IMPORTANTE — NÃO TROCAR DE ABA)

O timer deve ser INTEGRADO no app, sempre visível durante o treino. A usuária não deve precisar trocar de aba, usar o relógio do celular, ou qualquer outro app.

#### Tipos de timer:

**1. Timer de descanso entre séries (o principal):**
- Quando a usuária marca uma série como concluída (checkbox), o timer de descanso inicia AUTOMATICAMENTE
- Mostra contagem regressiva grande e visível (números grandes, cor destacada)
- Ao terminar: vibração do celular (navigator.vibrate) + som sutil + flash visual
- Botão pra pular descanso ("Pular →")
- Botão pra adicionar +15seg se precisar de mais tempo
- O tempo de descanso vem do exercício (45seg, 60seg, 90seg)

**2. Timer de vacuum:**
- Contagem regressiva de 20-30seg (configurável)
- Conta as séries automaticamente (1/5, 2/5... 5/5)
- Entre cada série: descanso de 30seg automático
- Vibra ao terminar cada série

**3. Timer de alongamento:**
- Flexor do quadril: 60seg cada lado (mostra "LADO ESQUERDO" → "LADO DIREITO")
- Pombo: 30seg cada lado
- Borboleta: 30seg
- Prancha: 20-30seg (ou configurável)
- Transição automática entre exercícios de alongamento

**4. Timer de cardio:**
- Cronômetro crescente (00:00 → tempo total)
- Meta de tempo visível (ex: "Meta: 20 minutos")
- Mostra porcentagem concluída

#### Layout do timer durante treino:
```
┌─────────────────────────────────┐
│         DESCANSO                │
│                                 │
│          0:32                   │  ← números GRANDES, cor destaque
│        ━━━━━━━━░░░              │  ← barra de progresso
│                                 │
│   [+15seg]          [Pular →]  │
│                                 │
│  Próximo: Sumo Squat 3x12      │  ← preview do próximo exercício
└─────────────────────────────────┘
```

#### Comportamento do timer:
- **Posição fixa** (sticky) no topo ou fundo da tela durante o treino — SEMPRE VISÍVEL mesmo rolando a página
- Quando não está ativo, fica recolhido/minimalista
- Quando ativo, expande com contagem regressiva grande
- Se a usuária scrollar pra ver exercícios, o timer continua visível (position: fixed ou sticky)
- Funciona mesmo com a tela bloqueada (usar Web Worker pra manter contagem precisa)
- **Não depender de setInterval sozinho** — usar Web Worker ou requestAnimationFrame pra precisão

#### Implementação técnica do timer:
```javascript
// Usar Web Worker pra timer preciso mesmo com tela bloqueada
// O timer principal deve:
// 1. Ter estado global (rodando, pausado, tipo)
// 2. Ser acessível de qualquer tela do treino
// 3. Vibrar via navigator.vibrate([200, 100, 200]) ao terminar
// 4. Tocar um beep (AudioContext) ao terminar
// 5. Manter contagem em Web Worker pra precisão
```

### AQUECIMENTO (mostrar ANTES de todo treino):
```
AQUECIMENTO + MOBILIDADE (7 min) — OBRIGATÓRIO

1. Cardio leve (3-5min): caminhada rápida, polichinelo, ou marcha no lugar
2. Círculos de quadril: 10 cada lado (mãos na cintura, gira o quadril)
3. Balanço de perna: 10 frente/trás + 10 lateral (segure em algo)
4. Agachamento profundo: segure 30seg lá embaixo (segure em algo se precisar)
5. World's Greatest Stretch: 3 cada lado
   - Passo largo à frente (posição de avanço)
   - Mão do mesmo lado no chão
   - Outra mão gira pro teto
   - Segure 5seg, troque

ATIVAÇÃO GLÚTEO ESQUERDO (3 min) — OBRIGATÓRIO
1. Toque e aperte: mão no glúteo esquerdo, aperte 10x consciente
2. Clamshell SÓ esquerdo: 10 reps lento
3. Glute Bridge bilateral: 10 reps, foco em sentir o ESQUERDO
```

### ALONGAMENTO PÓS-TREINO (mostrar DEPOIS de todo treino):
```
ALONGAMENTO (5 min) — OBRIGATÓRIO

1. ⭐ Flexor do quadril: 60seg cada lado (OBRIGATÓRIO - corrige postura)
   - Posição de avanço, joelho traseiro no chão
   - Empurre o quadril pra frente suavemente
   - Sinta o alongamento na frente do quadril de trás

2. Pombo: 30seg cada lado
   - Perna da frente cruzada, perna de trás esticada
   - Desça o tronco devagar

3. Borboleta: 30seg
   - Sentada, solas dos pés juntas
   - Pressione os joelhos pra baixo com os cotovelos
```

---

## 🍽️ ABA 3: NUTRIÇÃO

### Dados:
- **Peso atual:** 96kg
- **Meta:** 74kg
- **Altura:** 1,73m
- **Atividade:** Treina 6x/semana
- **TMB estimada:** ~1900 kcal
- **TDEE estimado:** ~2950 kcal
- **Meta calórica (deficit):** ~2400 kcal/dia
- **Proteína meta:** 160-180g/dia (prioridade pra manter/construir músculo)
- **Carboidratos:** ~250g/dia
- **Gorduras:** ~70g/dia
- **Água:** 2,5L/dia mínimo

### ESTRUTURA: 5 refeições/dia

O app deve mostrar para cada dia:
- Café da manhã
- Lanche da manhã
- Almoço
- Lanche da tarde (pré-treino)
- Jantar

### REGRAS NUTRICIONAIS:
- Priorizar proteína em TODA refeição
- Carboidratos complexos (arroz integral, batata doce, aveia)
- Gorduras boas (azeite, castanhas, abacate)
- Legumes e verduras em abundância
- Evitar: açúcar refinado, refrigerante, frituras, ultra-processados
- Permitido: 1 dia livre por semana (sábado) com moderação

---

### 📖 RECEITAS DETALHADAS

O app deve ter uma seção de receitas com instruções passo a passo. Abaixo estão as receitas que o app deve incluir.

**🎬 Cada receita deve ter botão de vídeo tutorial (mesmo sistema de modal):**
```javascript
const RECIPE_VIDEOS = {
  "omelete": { youtubeId: "PLACEHOLDER", title: "Como fazer omelete perfeito" },
  "frango-grelhado": { youtubeId: "PLACEHOLDER", title: "Como grelhar frango sem ressecar" },
  "arroz-integral": { youtubeId: "PLACEHOLDER", title: "Arroz integral soltinho" },
  "batata-doce": { youtubeId: "PLACEHOLDER", title: "Batata doce assada perfeita" },
  "shake-proteico": { youtubeId: "PLACEHOLDER", title: "Shake proteico pós-treino" },
  "mingau-aveia": { youtubeId: "PLACEHOLDER", title: "Mingau de aveia fitness" },
  "salada-completa": { youtubeId: "PLACEHOLDER", title: "Como montar salada completa" },
};
```

---

#### 🍳 OMELETE PROTEICO (Jantar favorito)

**Rendimento:** 1 porção
**Calorias:** ~420 kcal | Proteína: 38g | Carb: 8g | Gordura: 27g

**Ingredientes:**
- 3 ovos inteiros
- 2 claras extras (ou 60ml de clara de ovo de caixinha)
- 30g de queijo muçarela ralado (2 colheres de sopa cheias)
- 1/2 tomate médio picado em cubinhos
- 1/4 de cebola pequena picada fina
- 2 colheres de sopa de milho verde (opcional)
- Sal a gosto (pouco! ~1 pitada)
- Pimenta do reino a gosto
- 1 colher de chá de azeite (pra untar a frigideira)
- Orégano a gosto
- Cebolinha picada (opcional, pra finalizar)

**Modo de preparo:**
1. **Preparar os ovos:** Em uma tigela, quebre os 3 ovos + 2 claras. Bata com um garfo até ficar homogêneo (não precisa bater muito). Adicione sal e pimenta.
2. **Preparar os recheios:** Pique o tomate em cubinhos pequenos, pique a cebola bem fina. Rale o queijo. Deixe tudo separadinho num prato.
3. **Frigideira:** Aqueça uma frigideira ANTIADERENTE em fogo MÉDIO. Coloque 1 colher de chá de azeite e espalhe com papel toalha.
4. **Despejar:** Quando a frigideira estiver quente (teste: pinga uma gota de água, se chiar tá pronto), despeje a mistura de ovos. Incline a frigideira pra cobrir todo o fundo.
5. **Cozinhar:** Espere ~2 minutos sem mexer. Quando a borda começar a firmar e o centro ainda estiver levemente cremoso, é hora do recheio.
6. **Rechear:** Coloque na METADE do omelete: queijo, tomate, cebola, milho. Espere mais 30 segundos pro queijo começar a derreter.
7. **Dobrar:** Com uma espátula, dobre a metade sem recheio por cima da metade com recheio.
8. **Finalizar:** Espere 30-60 segundos, vire pro outro lado por mais 30 segundos. O interior deve estar cozido mas não seco.
9. **Servir:** Coloque no prato, salpique orégano e cebolinha por cima.

**Variações:**
- **Omelete Fitness:** Trocar muçarela por cottage (menos gordura, mesma proteína)
- **Omelete Frango:** Adicionar 50g de frango desfiado (já cozido) — sobe pra ~48g proteína
- **Omelete Espinafre:** Adicionar 1 punhado de espinafre picado (fica chique e nutritivo)

**Dicas:**
- ⚠️ Fogo MÉDIO sempre! Fogo alto = omelete borrachudo
- ⚠️ Frigideira ANTIADERENTE faz toda a diferença
- ✅ Queijo dentro derrete melhor que queijo por cima
- ✅ Pode preparar os recheios picados com antecedência e guardar na geladeira

---

#### 🥗 SALADA COMPLETA (Acompanhamento do jantar/almoço)

**Rendimento:** 1 porção generosa
**Calorias:** ~150 kcal | Proteína: 4g | Carb: 15g | Gordura: 9g

**Ingredientes:**
- 3 folhas grandes de alface crespa (ou 2 punhados de rúcula, ou mix)
- 1/2 tomate médio fatiado ou em cubos
- 1/4 de pepino em rodelas finas
- 1/4 de cenoura ralada (ralador grosso)
- 1/4 de cebola roxa em rodelas finas (fica mais bonito e suave que branca)
- 5-6 tomates cereja cortados ao meio (se tiver)
- 1 colher de sopa de milho verde
- 1 colher de sopa de azeite extra virgem
- Suco de 1/2 limão espremido
- Sal a gosto (1 pitada)
- Pimenta do reino a gosto

**Modo de preparo:**
1. **Lavar:** Lave TODAS as folhas e vegetais em água corrente. Deixe as folhas de molho em água com 1 colher de sopa de vinagre por 15 minutos (elimina bactérias). Enxague depois.
2. **Cortar:** Rasgue as folhas de alface com as mãos (não corte com faca, oxida). Fatie o tomate, pepino, cebola. Rale a cenoura.
3. **Montar:** Em um prato grande ou bowl: folhas na base → tomate → pepino → cenoura → cebola → milho → tomates cereja por cima
4. **Temperar:** NA HORA de comer (não antes, senão murcha): 1 colher de azeite + suco de limão + sal + pimenta. Misture levemente.

**Variações:**
- **Salada Proteica:** Adicionar 1 ovo cozido picado (+6g proteína)
- **Salada Completa+:** Adicionar 50g de frango grelhado cortado (+15g proteína)
- **Salada Tropical:** Adicionar cubos de manga ou abacaxi (fica incrível com rúcula)

**Dicas:**
- ✅ Prepare os vegetais lavados e picados no domingo pra semana toda (guarde em potes separados na geladeira com papel toalha — dura 4-5 dias)
- ⚠️ Tempere SÓ na hora de comer
- ⚠️ Não use molhos prontos (cheios de açúcar e sódio). Azeite + limão é perfeito

---

#### 🐔 FRANGO GRELHADO PERFEITO (Proteína base)

**Rendimento:** 2 porções (prepare 2 e guarde 1)
**Calorias por porção:** ~200 kcal | Proteína: 35g | Carb: 1g | Gordura: 6g

**Ingredientes (2 porções):**
- 2 filés de peito de frango (~150g cada, ~300g total)
- 1 colher de sopa de azeite
- 1 dente de alho amassado
- Suco de 1/2 limão
- Sal a gosto
- Pimenta do reino
- 1 colher de chá de páprica doce (dá cor bonita)
- Orégano ou tempero favorito

**Modo de preparo:**
1. **Preparar o frango:** Lave os filés. Se forem MUITO grossos, abra ao meio com faca (butterfly) ou bata com um martelo de carne/fundo de panela entre dois plásticos até ficar com espessura uniforme (~1,5cm). ISSO É IMPORTANTE — espessura uniforme = cozimento uniforme.
2. **Temperar:** Em um prato ou bowl, misture: azeite + alho + limão + sal + pimenta + páprica. Coloque os filés e esfregue o tempero dos dois lados. Idealmente deixe marinar 30min na geladeira (mínimo 10min).
3. **Grelhar:** Aqueça uma frigideira/grill em fogo MÉDIO-ALTO. Quando estiver BEM quente, coloque os filés. NÃO MEXA por 4-5 minutos.
4. **Virar:** Quando a parte de baixo estiver dourada, vire UMA VEZ. Mais 4-5 minutos do outro lado.
5. **Testar:** Corte no meio do filé mais grosso. Deve estar branco por dentro, sem rosa. Se ainda tiver rosa, tampe a frigideira e dê mais 2 minutos em fogo baixo.
6. **Descansar:** Tire do fogo e espere 3-5 minutos antes de cortar. Isso mantém o suco dentro.

**Dicas:**
- ⚠️ Fogo MÉDIO-ALTO, não alto demais (queima por fora, cru por dentro)
- ⚠️ Vire APENAS UMA VEZ
- ⚠️ Não aperte o frango com a espátula (perde todo o suco)
- ✅ A páprica dá cor bonita de "restaurante"
- ✅ Prepare 4-6 filés no domingo → guarde em potes na geladeira → dura 3-4 dias

---

#### 🍚 ARROZ INTEGRAL PERFEITO

**Rendimento:** 4 porções
**Calorias por porção (100g cozido):** ~130 kcal | Proteína: 3g | Carb: 27g | Gordura: 1g

**Ingredientes:**
- 1 xícara de arroz integral
- 2,5 xícaras de água
- 1 colher de chá de azeite
- 1/2 cebola picadinha
- 1 dente de alho picado
- Sal a gosto

**Modo de preparo:**
1. **Lavar:** Coloque o arroz integral em uma peneira e lave em água corrente por 30 segundos, mexendo com a mão.
2. **Refogar:** Em uma panela, aqueça o azeite em fogo médio. Refogue a cebola até ficar transparente (~2min). Adicione o alho, mexa por 30 segundos (não deixe queimar!).
3. **Tostar:** Adicione o arroz e mexa por 1-2 minutos (torrar levemente = fica soltinho).
4. **Água:** Adicione 2,5 xícaras de água FERVENTE + sal. Misture uma vez.
5. **Cozinhar:** Quando ferver, abaixe o fogo pro MÍNIMO, tampe a panela. Cozinhe por 35-40 minutos SEM ABRIR a tampa.
6. **Verificar:** Depois de 35min, abra e teste. Se ainda tiver água, tampe mais 5min. Se tiver seco e macio, tá pronto.
7. **Descansar:** Desligue o fogo, coloque um pano de prato entre a panela e a tampa por 5min (absorve vapor extra, fica soltinho).

**Dica:** Prepare uma panela no domingo e guarde em potes na geladeira → dura 5 dias. Reaquecer no micro-ondas com 1 colher de água por cima.

---

#### 🍠 BATATA DOCE ASSADA

**Rendimento:** 2 porções
**Calorias por porção (150g):** ~130 kcal | Proteína: 2g | Carb: 30g | Gordura: 0g

**Ingredientes:**
- 2 batatas doces médias (~150g cada)
- Papel alumínio ou assadeira

**Modo de preparo:**
1. Pré-aqueça o forno a 200°C
2. Lave bem as batatas, seque
3. Fure com garfo em vários pontos (deixa o vapor sair)
4. Embrulhe em papel alumínio OU coloque direto na assadeira
5. Asse por 40-50 minutos (teste espetando com garfo — deve entrar fácil)
6. Corte ao meio, tempere com canela (fica delicioso e zero caloria)

**Alternativa rápida (micro-ondas):**
1. Lave, fure com garfo
2. Coloque num prato
3. Micro-ondas 5-7 minutos (vire na metade do tempo)
4. Teste com garfo

---

#### 🥤 SHAKE PROTEICO PÓS-TREINO

**Rendimento:** 1 porção
**Calorias:** ~350 kcal | Proteína: 35g | Carb: 40g | Gordura: 7g

**Ingredientes:**
- 1 scoop de whey protein (sabor de preferência, ~30g)
- 1 banana madura
- 200ml de leite desnatado (ou bebida vegetal)
- 1 colher de sopa de aveia em flocos (15g)
- 1 colher de chá de pasta de amendoim (10g)
- 3-4 cubos de gelo

**Modo de preparo:**
1. Coloque tudo no liquidificador
2. Bata por 30-60 segundos até ficar homogêneo
3. Se ficar muito grosso, adicione mais leite (50ml por vez)
4. Beba em até 30 minutos pós-treino

**Variações:**
- **Sem whey:** Trocar por 3 colheres de sopa de leite em pó (fica menos proteico mas funciona)
- **Mais calórico:** Adicionar 1/2 abacate (fica cremoso e delicioso)
- **Sabor cacau:** Adicionar 1 colher de sopa de cacau em pó

---

#### 🥣 MINGAU DE AVEIA (Café da manhã)

**Rendimento:** 1 porção
**Calorias:** ~380 kcal | Proteína: 18g | Carb: 50g | Gordura: 12g

**Ingredientes:**
- 5 colheres de sopa de aveia em flocos (50g)
- 200ml de leite (desnatado ou integral)
- 1 banana fatiada
- 1 colher de sopa de pasta de amendoim (15g)
- 1 colher de chá de mel ou canela
- Frutas extras: morango, blueberry (se tiver)

**Modo de preparo:**
1. Em uma panela, coloque aveia + leite em fogo baixo
2. Mexa sempre por 3-5 minutos até engrossar
3. Quando ficar na consistência desejada (cremoso mas não muito grosso), desligue
4. Coloque no bowl
5. Cubra com banana fatiada, pasta de amendoim, frutas, canela
6. Coma quentinho

**Versão overnight (sem fogão):**
1. Na noite anterior: aveia + leite + pasta de amendoim em um pote com tampa
2. Misture, tampe, coloque na geladeira
3. De manhã: abra, coloque banana e frutas por cima, coma gelado

---

### 🗓️ PLANO SEMANAL DE REFEIÇÕES (Exemplo)

O app deve mostrar um plano semanal com as refeições distribuídas. O usuário pode trocar refeições entre si (sistema de cards arrastáveis ou seleção).

#### ROTINA DIÁRIA — Horários baseados no dia real de Arthur:
```
06:00 — Acordar
06:15 — Skincare manhã (lavar rosto → vitamina C → hidratante → protetor solar)
06:30 — Café da manhã
10:00 — Lanche da manhã
12:30 — Almoço
16:00 — Lanche da tarde / Pré-treino (comer ~1h30-2h ANTES do treino)
18:00 — TREINO (academia)
19:30 — Pós-treino: banho → Skincare NOITE (sabonete → niacinamida → hidratante → retinol 3x/sem)
20:00 — Jantar (pós-treino, janela anabólica)
22:00 — Kegel + preparar pra dormir
22:30 — Dormir
```

**⚠️ IMPORTANTE sobre skincare da noite:**
- A skincare da noite é SEMPRE pós-academia, pós-banho
- Fazer skincare antes do treino = jogar produto fora (suor remove tudo)
- Fluxo correto: treino → banho → skincare noite completa → jantar

#### SEGUNDA A SEXTA (dia de treino):

| Refeição | Horário | Opção A | Opção B | Macros aprox. |
|----------|---------|---------|---------|---------------|
| **☀️ Café** | 06:30 | Mingau de aveia + fruta + pasta de amendoim | 3 ovos mexidos + 2 fatias pão integral + queijo | ~380-400 kcal, 18-25g prot |
| **🍎 Lanche manhã** | 10:00 | 1 banana + 20g castanhas (10 unidades) | Iogurte natural + 1 colher de granola | ~200 kcal, 6-8g prot |
| **🍽️ Almoço** | 12:30 | 150g frango grelhado + 100g arroz integral + salada completa + 1 fio de azeite | 150g carne moída refogada + 100g batata doce + salada + feijão | ~550-600 kcal, 40-45g prot |
| **🍌 Pré-treino** | 16:00 | Shake proteico (whey + banana + aveia) | 2 fatias pão integral + 2 ovos + fruta | ~350 kcal, 30-35g prot |
| **🌙 Jantar (pós-treino)** | 20:00 | Omelete proteico (3 ovos + 2 claras + recheio) + salada | 150g frango + salada grande + 1/2 batata doce | ~400-450 kcal, 35-40g prot |

**Total diário aproximado:** ~2.300-2.500 kcal | ~160-170g proteína

**⚠️ Pré-treino às 16h:** Comer no máximo até 16:15. Treino é às 18h = ~2h de digestão. Não treinar de estômago cheio (dá náusea). Se sentir pesada, reduzir a porção do pré-treino e aumentar o jantar pós.

#### SÁBADO (dia leve/livre):
- Mesma estrutura mas pode escolher 1 refeição livre (pizza, hambúrguer, etc.)
- Manter proteína alta nas outras refeições

#### DOMINGO (descanso):
- Calorias podem ser um pouco menores (~2.100-2.200)
- Foco em descanso e preparação de marmitas da semana

---

### 🛒 LISTA DE COMPRAS SEMANAL

O app deve gerar uma lista de compras baseada no plano da semana:

**Proteínas:**
- [ ] 1kg peito de frango (~R$15-20)
- [ ] 2 dúzias de ovos (~R$15-18)
- [ ] 500g carne moída magra (~R$20-25)
- [ ] 1 pote de whey protein (dura ~1 mês, ~R$80-120)

**Carboidratos:**
- [ ] 1kg arroz integral (~R$8-10)
- [ ] 1kg batata doce (~R$5-8)
- [ ] 1 pacote aveia em flocos 500g (~R$5-7)
- [ ] 1 pacote pão integral (~R$7-10)

**Vegetais e frutas:**
- [ ] 1 pé de alface ou rúcula (~R$3-5)
- [ ] 6 tomates (~R$5-8)
- [ ] 3 pepinos (~R$3-5)
- [ ] 3 cenouras (~R$2-3)
- [ ] 2 cebolas roxas (~R$3-4)
- [ ] 1 cabeça de alho (~R$2)
- [ ] 6-8 bananas (~R$3-5)
- [ ] Limões (~R$2-3)
- [ ] Frutas da estação (morango, maçã, etc. ~R$8-12)

**Gorduras boas:**
- [ ] 1 vidro de azeite extra virgem (~R$15-20, dura 2+ semanas)
- [ ] 1 pote de pasta de amendoim (~R$12-15, dura 2+ semanas)
- [ ] 1 pacote de castanhas 200g (~R$10-15, dura 2 semanas)

**Laticínios:**
- [ ] 2L de leite desnatado (~R$8-10)
- [ ] 200g queijo muçarela (~R$8-10)
- [ ] 1 pote iogurte natural (~R$5-7)

**Temperos e outros:**
- [ ] Orégano, páprica, pimenta do reino (comprar 1x, dura meses)
- [ ] Milho verde em lata (~R$4)
- [ ] Feijão (~R$8-10)

**Custo semanal estimado:** R$180-250 (sem contar whey e itens que duram mais de 1 semana)

---

### FUNCIONALIDADES DA ABA NUTRIÇÃO:
1. **Plano do dia** — mostra as 5 refeições com macros
2. **Receitas** — cards clicáveis que abrem receita completa com passo a passo
3. **Lista de compras** — checklist gerável baseado na semana
4. **Contador de proteína** — barra de progresso da proteína do dia (meta: 170g)
5. **Contador de água** — botão de adicionar copos (meta: 2.5L = ~10 copos de 250ml)
6. **Log rápido** — marcar se comeu a refeição planejada ou não

---

## ✨ ABA 4: CUIDADOS

### Seção 1: SKINCARE

**🎬 Cada passo do skincare deve ter botão de vídeo no mesmo sistema de modal:**
- "Como aplicar vitamina C" → vídeo curto
- "Como passar protetor solar corretamente" → vídeo (quantidade certa, cobertura)
- "Como usar retinol" → vídeo (quantidade, frequência, cuidados)

```javascript
const SKINCARE_VIDEOS = {
  "lavar-rosto": { youtubeId: "PLACEHOLDER", title: "Como lavar o rosto corretamente" },
  "vitamina-c": { youtubeId: "PLACEHOLDER", title: "Como aplicar Vitamina C sérum" },
  "protetor-solar": { youtubeId: "PLACEHOLDER", title: "Quantidade certa de protetor solar" },
  "retinol": { youtubeId: "PLACEHOLDER", title: "Como usar retinol sem irritar a pele" },
  "niacinamida": { youtubeId: "PLACEHOLDER", title: "Como aplicar Niacinamida" },
  "esfoliacao-corpo": { youtubeId: "PLACEHOLDER", title: "Esfoliação corporal pra queratose pilar" },
};
```

#### Rotina Manhã (06:15 — ao acordar, ANTES de sair):
| Passo | Produto | Como usar | Por quê |
|-------|---------|-----------|---------|
| 1 | Sabonete facial (Cerave ou Cetaphil) | Molhe o rosto, aplique pouco produto, massageie 30seg, enxague | Limpa sem ressecar |
| 2 | Vitamina C sérum | 3-4 gotas no rosto todo, espere secar 1-2min | Clareia manchas, protege do sol |
| 3 | Hidratante facial (Cerave ou Neutrogena) | Quantidade de 1 grão de ervilha, espalhe no rosto todo | Hidrata e protege a barreira |
| 4 | Protetor solar FPS 50+ | 2 dedos de produto (indicador e médio), espalhe no rosto TODO, incluindo orelhas e pescoço | ESSENCIAL: sem protetor, NADA funciona |

#### Rotina Noite (19:30 — PÓS-ACADEMIA, PÓS-BANHO):
⚠️ **SEMPRE depois do treino e banho. Nunca antes da academia.**
| Passo | Produto | Como usar | Por quê |
|-------|---------|-----------|---------|
| 1 | Sabonete facial | Mesmo da manhã | Limpa sujeira do dia |
| 2 | Niacinamida sérum | 3-4 gotas, rosto todo, espere secar | Clareia, controla oleosidade, uniformiza |
| 3 | Hidratante | Mesmo da manhã | Restaura barreira da pele |
| 4 | Retinol (3x/semana: Seg, Qua, Sex) | Quantidade mínima (metade de 1 grão de ervilha), SÓ À NOITE | Anti-manchas, renova pele. Pode arder no início |

#### Corpo:
| Passo | Produto | Frequência | Como |
|-------|---------|------------|------|
| 1 | Sabonete ácido salicílico | Todo banho | Nos braços (queratose pilar), costas |
| 2 | Hidratante com ureia | Pós-banho | Corpo todo, especialmente braços |
| 3 | Niacinamida | Noite | Axilas e região íntima (clareia gradualmente) |

#### Alertas de skincare:
- ⚠️ Retinol + Sol = MANCHAS! Sempre usar protetor no dia seguinte
- ⚠️ Se a pele ficar vermelha/descascando com retinol: reduza pra 2x/semana
- ⚠️ Protetor solar reaplicar a cada 2-3h se estiver no sol
- ✅ Resultados de clareamento: 4-8 semanas pra começar a notar
- ✅ Queratose pilar: melhora em 4-6 semanas com ácido salicílico + ureia

### Seção 2: CABELO

**🎬 Vídeos de cabelo (mesmo sistema de modal):**
```javascript
const HAIR_VIDEOS = {
  "lavar-cabelo-cacheado": { youtubeId: "PLACEHOLDER", title: "Como lavar cabelo cacheado 2C/3A" },
  "hidratar-cachos": { youtubeId: "PLACEHOLDER", title: "Hidratação pra cabelo cacheado" },
  "pentear-molhado": { youtubeId: "PLACEHOLDER", title: "Como pentear cachos sem quebrar" },
  "secar-difusor": { youtubeId: "PLACEHOLDER", title: "Como usar difusor em cabelo cacheado" },
  "touca-cetim": { youtubeId: "PLACEHOLDER", title: "Como usar touca de cetim pra dormir" },
};
```

**Situação:** Tipo 2C/3A, ~5-8cm, meta 25-30cm

| Cuidado | Frequência | Detalhes |
|---------|------------|----------|
| Lavar | 2-3x/semana | Shampoo SEM sulfato (ex: Salon Line, Lola Cosmetics) |
| Condicionar | Toda lavagem | Condicionador da metade pro comprimento, não na raiz |
| Hidratar | 1x/semana | Máscara de hidratação (deixar 20-30min com touca) |
| Pentear | Só molhado | Pente largo, de baixo pra cima, com condicionador |
| Secar | Naturalmente ou difusor | NUNCA secar com toalha esfregando (amassa cachos) — apertar suavemente |
| Cortar pontas | A cada 3-4 meses | Só as pontas (1-2cm) pra não atrasar crescimento |
| Suplemento | Biotina 5000mcg/dia | Ajuda no crescimento (resultado em 3-6 meses) |
| Dormir | Toda noite | Fronha de seda/cetim OU touca de cetim (reduz frizz) |

**Timeline de crescimento:**
- Mês 0 (agora): 5-8cm
- Mês 6: ~12-15cm (começa a dar pra prender parcialmente)
- Mês 12: ~18-22cm (dá pra prender, rabo de cavalo)
- Mês 18: ~25-30cm (meta! depois do ombro)

### Seção 3: DEPILAÇÃO

**🎬 Vídeos de depilação (mesmo sistema de modal):**
```javascript
const DEPILATION_VIDEOS = {
  "depilar-pernas": { youtubeId: "PLACEHOLDER", title: "Como depilar pernas com gilete sem irritar" },
  "depilar-axilas": { youtubeId: "PLACEHOLDER", title: "Como depilar axilas sem escurecer" },
  "depilar-virilha": { youtubeId: "PLACEHOLDER", title: "Como depilar virilha com segurança" },
  "esfoliar-antes": { youtubeId: "PLACEHOLDER", title: "Como esfoliar antes da depilação" },
  "pos-depilacao": { youtubeId: "PLACEHOLDER", title: "Cuidados pós-depilação pele parda" },
};
```

**Dias:** Terça e Sábado

| Área | Método | Direção | Cuidado especial |
|------|--------|---------|------------------|
| Barriga/Peito | Gilete com espuma | A favor do pelo (↓) | Esticar a pele com a outra mão |
| Pernas | Gilete ou depilador | Contra o pelo (↑) pra mais rente | Esfoliar 1 dia ANTES |
| Axilas | SÓ gilete com espuma | A favor + contra (2 passadas) | Sem desodorante por 12h depois! |
| Virilha/íntima | Gilete com MUITO cuidado | A favor do pelo SEMPRE | Calcinha algodão depois, sem roupa justa 24h |
| Braços | Opcional | - | Pode só descolorir com água oxigenada |

**Passo a passo (todas as áreas):**
1. **Dia anterior:** Esfoliar a área no banho (bucha vegetal ou esfoliante)
2. **No dia:** Banho quente pra abrir poros
3. **Aplicar:** Espuma de barbear ou condicionador (NUNCA a seco!)
4. **Depilar:** Lâmina NOVA, passadas suaves sem pressionar
5. **Enxaguar:** Água fria pra fechar poros
6. **Pós:** Hidratar com Bepantol ou Aloe Vera
7. **Noite:** Niacinamida nas áreas escuras

**Alertas pele parda:**
- ⚠️ NUNCA depilar a seco = foliculite + manchas escuras
- ⚠️ Não expor áreas depiladas ao sol por 24h
- ⚠️ Se aparecer bolinha vermelha (foliculite): Bepantol + não depilar até sarar
- ⚠️ Não usar desodorante comum logo após depilar axilas (arde e mancha)

### Seção 4: FUNÇÃO ÍNTIMA

**Exercícios diários:**

**Kegel (10 reps/dia):**
1. Identifique o músculo: é o mesmo que você usa pra parar o xixi no meio
2. Contraia e segure 5 segundos
3. Relaxe 5 segundos
4. Repita 10 vezes
5. Faça TODOS os dias (pode fazer sentado, em pé, em qualquer lugar)

**Ereção Reversa (quando tiver ereção, 10-20 reps):**
1. Com ereção, contraia o músculo do Kegel
2. O pênis deve "pular" levemente pra cima
3. Segure 3 segundos
4. Relaxe 3 segundos
5. Se não pular, tá contraindo o músculo errado — tente novamente

**Dicas:**
- Resultado aparece em 4-8 semanas de prática consistente
- Cardio regular melhora circulação (já tá fazendo ✅)
- Sono de qualidade (7-8h) afeta diretamente
- Evitar "death grip" na masturbação (segurar forte demais dessensibiliza)

---

## 📊 ABA 5: PROGRESSO

### Funcionalidades:

**1. Fotos de progresso:**
- Upload de fotos: frente, lateral, costas
- Organizadas por data
- Comparação lado a lado (foto antiga vs foto recente)
- Lembrete quinzenal pra tirar novas fotos (15 em 15 dias)

**2. Medidas corporais (quinzenal):**
- Peso (kg)
- Cintura (cm) — no ponto mais fino
- Quadril (cm) — no ponto mais largo
- Coxa (cm) — no meio da coxa
- Braço (cm)
- Peito (cm) — na linha do mamilo
- Calcular: Razão cintura/quadril (meta: ≤0.75 = silhueta feminina)

**3. Gráficos:**
- Gráfico de linha: peso ao longo do tempo
- Gráfico de linha: medidas ao longo do tempo
- Gráfico de razão cintura/quadril
- Card com previsão de quando alcançará a meta (baseado na tendência)

**4. Conquistas/Badges:**
- 🔥 "7 dias seguidos" — streak de 1 semana
- 💪 "1 mês consistente" — 30 dias
- 🍑 "Glúteo acordou!" — completou 2 semanas de ativação
- ⚡ "Fase 2 desbloqueada"
- 🌟 "Fase 3 desbloqueada"
- 👑 "Amazona" — fase 4 desbloqueada
- 📸 "Primeira comparação" — tirou fotos em 2 datas diferentes
- 🎯 "-5kg" / "-10kg" / "-20kg"
- 💧 "Hidratada" — 7 dias seguidos bebendo 2.5L
- ✨ "Pele de seda" — 30 dias seguidos de skincare completo

---

## ⚙️ FUNCIONALIDADES TÉCNICAS

### Persistência de dados:
- **localStorage** para TODOS os dados (checklist, progresso, medidas, fotos, fase atual, conquistas)
- Exportar dados como JSON (botão "Exportar backup")
- Importar dados de JSON (botão "Restaurar backup")

### Timers:
- Timer de descanso entre séries (configurável, padrão 45-60seg)
- Timer de vacuum (20-30seg com contagem regressiva)
- Timer de alongamento flexor (60seg com contagem regressiva)
- Timer de prancha
- Todos com vibração do celular ao terminar (se suportado pelo navegador)

### Progressive Web App (PWA):
- Manifesto PWA (instalável no celular como app)
- Service worker para funcionar offline
- Ícone bonito (emoji 🦋 ou 🔥 ou ✨)

### Notificações (se o usuário permitir):
- Lembrete de manhã (6:15): "Bom dia, amazona! Skincare + protetor solar ☀️"
- Lembrete pré-treino (17:30): "Bora treinar? 💪 Não esquece a garrafinha de água"
- Lembrete pós-treino (19:30): "Skincare da noite + Kegel! ✨"
- Lembrete de dormir (22:15): "Hora de descansar, amazona 🌙 Sono = recuperação muscular"
- Lembrete de foto (quinzenal): "Hora de registrar seu progresso! 📸"

---

## 📐 ESPECIFICAÇÕES TÉCNICAS PARA CLAUDE CODE

### Stack:
- **Single HTML file** com CSS e JS inline — OU se ficar muito grande, pode separar em até 3 arquivos (index.html, styles.css, app.js)
- **Sem frameworks** (vanilla JS) — OU se ficar muito grande, pode separar em até 3 arquivos (index.html, styles.css, app.js)
- **Responsivo** (mobile-first, funciona em iPhone e Android)
- **localStorage** para persistência
- **Service Worker** para PWA e offline
- Se necessário, pode usar uma lib de gráficos simples (Chart.js via CDN)

### Componentes críticos (NÃO podem faltar):

**1. Modal de vídeo (reutilizável):**
- Componente único que recebe videoId e mostra YouTube embed
- Overlay escuro, fecha com X ou clique fora
- iframe responsivo (aspect-ratio 16:9)
- Usar `youtube-nocookie.com` no embed
- Todos os vídeos mapeados num objeto central fácil de editar
- Deve funcionar em TODAS as seções (treino, skincare, cabelo, depilação)

**2. Timer global (sticky):**
- Componente fixo (position: fixed) no bottom ou top durante treino
- Web Worker pra precisão (não depender só de setInterval)
- Vibração + som ao terminar
- Botões: pausar, pular, +15seg
- Inicia automaticamente ao marcar série completa
- Mostra próximo exercício durante descanso

**3. Offline-first:**
- Tudo funciona sem internet (exceto vídeos do YouTube)
- Se não tiver internet e clicar no vídeo, mostrar mensagem amigável: "Conecte à internet pra ver o vídeo 📶"

### Tamanho estimado:
- Esse é um app GRANDE. Se ficar impossível em 1 arquivo, separar em:
  - `index.html` (estrutura + CSS)
  - `app.js` (lógica principal)
  - `sw.js` (service worker)
  - `manifest.json` (PWA)
  - `data.js` (dados dos treinos, receitas, dicas)

### Prioridade de implementação (se precisar fazer em partes):
1. **MVP:** Dashboard + Treino Fase 1 + Timer
2. **V2:** Nutrição + Receitas + Lista de compras
3. **V3:** Cuidados (skincare, cabelo, depilação)
4. **V4:** Progresso (fotos, medidas, gráficos, badges)
5. **V5:** PWA + Notificações + Todas as fases

---

## 🔑 INFORMAÇÕES IMPORTANTES PARA O CÓDIGO

1. **Glúteo esquerdo é o lado fraco** — SEMPRE mostrar "Comece pelo lado ESQUERDO" nos exercícios unilaterais
2. **Anteriorização pélvica** — Sempre mostrar o alongamento do flexor como OBRIGATÓRIO
3. **Vacuum é PRIORIDADE** — Destacar visualmente no checklist diário
4. **O app é para uso PESSOAL** — pode ter dados hardcoded (nome, peso, metas)
5. **Idioma:** Tudo em português brasileiro
6. **Tom:** Feminino, motivacional, acolhedor, direto
7. **Sem hip thrust na academia** — Fase 1 não tem. Fase 2+ improvisa com banco + halter
