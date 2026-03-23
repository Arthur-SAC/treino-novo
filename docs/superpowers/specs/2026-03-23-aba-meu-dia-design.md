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

### Cards — Comportamento

- Cada card tem **header clicavel** (icone + horario + titulo)
- Clicar no header **colapsa/expande** o corpo do card
- Todos comecam **abertos** ao abrir o app
- Estado colapsado persiste durante a sessao (localStorage com reset diario)
- Card colapsado mostra so o header com seta indicando que pode expandir

### Cards — Lista por Tipo de Dia

#### Dia de Treino (seg, qua, sex, sab)

| # | Icone | Horario | Titulo | Conteudo |
|---|-------|---------|--------|----------|
| 1 | ☀️ | 06:00 | Ao Acordar | Agua 700ml em jejum (explicar por que: metabolismo, hidratacao pos-sono, rins). Kegel rapido: passo-a-passo com tempo de contracao/repouso. Vacuum abdominal: posicao, respiracao, 3x20s. Mobilidade matinal: cada movimento com descricao detalhada, musculos trabalhados, 5min total |
| 2 | 🧴 | 06:15 | Skincare Manha | Cada produto em ordem: lavar rosto (como, agua morna), vitamina C (quanto, onde aplicar, esperar 2min), hidratante, protetor solar (quantidade, reaplicar). Explicar por que a ordem importa |
| 3 | ☕ | 07:00 | Cafe da Manha | 3 opcoes de refeicao do data.js com macros. Ingredientes, modo de preparo quando relevante. Dica do cha de hortela |
| 4 | 🍎 | 10:00 | Lanche da Manha | Opcao de snack + por que comer nesse horario (manter metabolismo, evitar catabolismo) |
| 5 | 🍽️ | 12:00 | Almoco | Refeicao completa com macros. Dicas de como montar o prato |
| 6 | ⚡ | 16:00 | Pre-Treino | Refeicao pre-treino com macros. Timing ideal (1-1.5h antes). Cafe/creatina. Preparo mental |
| 7 | 💪 | 17:40 | Treino do Dia | Nome do treino + fase atual. Aquecimento detalhado (cada movimento). Lista de exercicios com series/reps/descanso. Dicas de execucao. Cooldown/alongamento pos-treino passo-a-passo |
| 8 | 🐕 | 19:00 | Pos-Treino | Shake pos-treino (receita). Caminhada com dogs ~25min. Alongamento detalhado de cada musculo trabalhado. Skincare pos-treino |
| 9 | 🌙 | 20:00 | Jantar | Refeicao noturna com macros |
| 10 | 🌛 | 22:00 | Rotina Noturna | Skincare noite passo-a-passo (micellar, lavar, niacinamida, hidratante, retinol se seg/qua/sex). Kegel longo: 10s segura, 10s descansa, 5x. Melatonina. Dicas de sono (sem tela, escurecer quarto) |

#### Dia de Descanso Ativo (terca — yoga + rebolar)

Cards 1-5 e 9-10 iguais. Card 6 (pre-treino) vira lanche da tarde. Card 7 vira:
- 🧘 **Yoga + Rebolar** — Sequencia de yoga do dia + exercicios de movimento/quadril

Card 8 vira pos-atividade mais leve.

#### Dia de Ativacao Leve (quinta)

Cards 1-5 e 9-10 iguais. Card 6 vira lanche. Card 7 vira:
- 🟡 **Ativacao + Caminhada** — Ativacao glutea obrigatoria (gluteo esq) + caminhada. Opcoes extras opcionais.

Card 8 some ou fica simplificado.

#### Dia de Descanso Total (domingo)

Cards 1-5 e 9-10 iguais. Cards 6, 7, 8 somem. Aparece um card:
- 😴 **Descanso** — Importancia do descanso, sugestoes leves (alongamento opcional, leitura, passeio tranquilo)

## Dados — Onde Ficam os Textos

Novo objeto `DAILY_CARDS` no `data.js` com todo o conteudo narrativo de cada card. Estrutura:

```js
const DAILY_CARDS = {
  acordar: {
    icon: "☀️",
    time: "06:00",
    title: "Ao Acordar",
    content: {
      intro: "Texto introdutorio...",
      steps: [
        {
          name: "Hidratacao",
          description: "Beba 700ml de agua...",
          why: "Apos 7-8h de sono, seu corpo esta desidratado...",
          duration: null
        },
        {
          name: "Kegel Rapido",
          description: "Passo a passo detalhado...",
          why: "Fortalece o assoalho pelvico...",
          duration: "2min"
        }
        // ...
      ]
    }
  }
  // ...demais cards
};
```

Cards de refeicao reutilizam dados de `MEAL_OPTIONS` ja existente.
Card de treino reutiliza dados de `WORKOUTS` ja existente.
Card de skincare reutiliza dados de `SKINCARE_ROUTINE` ja existente.

## Logica — DayManager (app.js)

Novo manager `DayManager` que:
1. Detecta o dia da semana atual (`Utils.getDayOfWeek()`)
2. Consulta `WEEK_SCHEDULE` pra saber tipo do dia (treino/descanso)
3. Monta a lista de cards aplicaveis para aquele dia
4. Renderiza os cards com conteudo do `DAILY_CARDS` + dados reutilizados
5. Gerencia estado colapsar/expandir (localStorage, reset diario)

## Visual — CSS

- Cards com bordas arredondadas, sombra leve, fundo branco
- Header do card: fundo com gradiente suave, icone grande, horario e titulo
- Seta de colapsar/expandir no canto direito do header
- Transicao suave ao colapsar (max-height + opacity)
- Texto narrativo com line-height generoso, paragrafos espaçados
- Steps dentro do card com visual de lista numerada elegante
- Tag "por que?" em destaque (cor diferente ou italico) para as explicacoes
- Responsivo: cards ocupam largura total no mobile

## Impacto nas Outras Abas

- **Treino**: continua igual, serve como referencia detalhada de exercicios, fases, tecnicas
- **Nutricao**: continua igual, referencia pra ver receitas de outros dias, macros gerais
- **Cuidados**: continua igual, referencia pra rotinas completas (cabelo, depilacao, etc.)
- **Progresso**: continua igual
- **Inicio (removida)**: conteudo migra — streak e macros vao pro mini-dashboard, timeline some (substituida pelos cards)

## Fora do Escopo

- Notificacoes/alarmes por horario
- Integracao com calendario externo
- Gamificacao alem do streak existente
