# Design — Melhorias Completas App Arthur

Data: 2026-03-02
Abordagem: Por Camadas (Dados → Lógica → UX)

## FASE 1 — Conteúdo e Dados (data.js)

### 1.1 Erros comuns nos exercícios
- Adicionar campo `commonMistakes` em cada entrada de `EXERCISE_VIDEOS`
- Conteúdo baseado na v9 (erros comuns de cada exercício)
- Exemplo: `"glute-bridge": { ..., commonMistakes: "Não hiperextenda a lombar" }`

### 1.2 Corrigir acentos
- `"Configuracoes"` → `"Configurações"` (SettingsManager)
- `"Concluido"` → `"Concluído"` (CardioControls, VacuumControls)
- Revisar todas strings sem acento em app.js

### 1.3 Conteúdo educacional
- Novo objeto `EDUCATIONAL_CONTENT` em data.js:
  - Anteriorização pélvica (o que é, como corrigir)
  - TMB/TDEE (por que 2300-2500kcal)
  - Conexão mente-músculo glúteo esquerdo
  - Por que o esquerdo precisa de atenção especial

### 1.4 Rotina Noturna
- Novo objeto `NIGHT_ROUTINE` em data.js:
  - Skincare noite (passos)
  - Kegel (10 reps)
  - Alongamento noturno (flexor 60seg cada lado)
  - Dicas de sono (7-8h, sem tela 30min antes)

## FASE 2 — Lógica e Features (app.js)

### 2.1 Badges — implementar 10 faltantes
- `glute-awakened`: 14 dias com treino completo no checklist
- `phase-2`: Ativar ao mudar pra fase 2 em SettingsManager
- `phase-3`: Ativar ao mudar pra fase 3
- `phase-4`: Ativar ao mudar pra fase 4 (Amazona)
- `hydrated-7`: 7 dias seguidos com "agua" no checklist
- `skin-30`: 30 dias com skincare manhã + noite no checklist
- Badges já implementados: streak-7, streak-30, first-workout, first-comparison, minus-5/10/20kg

### 2.2 VideoModal — erros comuns
- No `open()`, buscar `commonMistakes` do vídeo
- Exibir abaixo das dicas com ícone ⚠️
- Adicionar `<p id="video-mistakes">` no HTML do modal

### 2.3 Saudação contextual
- Expandir `Utils.getGreeting()`:
  - Incluir dia do treino: "Bom dia! Dia de Glúteo Máximo 🍑"
  - Incluir streak: "15 dias seguidos 🔥"
  - Incluir fase: mensagem Amazona se fase 4

### 2.4 Troca de refeições
- Botão toggle em cada refeição: optionA ↔ optionB
- Salvar preferência em localStorage por dia

### 2.5 Rotina Noturna renderizada
- Nova seção em CareManager usando NIGHT_ROUTINE
- Checklist items integrados ao sistema existente

### 2.6 Card de regras nutricionais
- Card no topo da aba Nutrição:
  - TMB/TDEE estimado
  - Meta de proteína (160-170g)
  - Hidratação (2.5L)
  - Contexto educacional

## FASE 3 — UX e Visual (index.html + app.js)

### 3.1 Swipe navigation
- touchstart/touchmove/touchend no container principal
- Threshold 50px, animação de transição
- Indicador visual do swipe

### 3.2 Indicador L/R em unilaterais
- Para exercícios com `startLeft: true`:
  - Banner "🔴 LADO ESQUERDO PRIMEIRO" acima do card
  - Cor de destaque (vermelho/laranja)

### 3.3 Tema Amazona consistente
- Toast de boas-vindas baseado na fase
- Notificações com tema Amazona
- Frases motivacionais contextuais

### 3.4 Lembrete de foto quinzenal
- Verificar última data de foto em ProgressManager
- Se > 14 dias: card no Dashboard "Hora de tirar fotos! 📸"
- Link direto pra aba Progresso

### 3.5 CSS novos elementos
- `.video-mistakes` (erros comuns no modal)
- `.side-indicator` (indicador L/R)
- `.nutrition-info-card` (card de nutrição)
- `.swipe-feedback` (animação de swipe)
- `.photo-reminder` (lembrete de foto)
- `.night-routine-card` (rotina noturna)

## Arquivos afetados

| Arquivo | Mudanças |
|---------|----------|
| data.js | commonMistakes, EDUCATIONAL_CONTENT, NIGHT_ROUTINE |
| app.js | Badges, VideoModal, greeting, swipe, refeições, nutrição, rotina noturna, acentos |
| index.html | Modal (erros comuns), CSS novos elementos |

## Ordem de implementação

1. data.js — erros comuns (1.1)
2. data.js — conteúdo educacional + rotina noturna (1.3, 1.4)
3. app.js — corrigir acentos (1.2)
4. app.js — VideoModal erros comuns (2.2) + index.html
5. app.js — Badges completos (2.1)
6. app.js — Saudação contextual (2.3)
7. app.js — Troca de refeições (2.4)
8. app.js — Regras nutricionais (2.6)
9. app.js — Rotina noturna renderizada (2.5)
10. app.js — Indicador L/R (3.2)
11. app.js — Tema Amazona (3.3)
12. app.js — Lembrete foto (3.4)
13. app.js + index.html — Swipe navigation (3.1)
14. index.html — CSS novos elementos (3.5)
