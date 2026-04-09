// ============================================================
// data/hair.js — Rotina de cuidados com o cabelo
// Tipo 3a (cachos definidos), curto em crescimento.
// ============================================================

var HAIR = {

  type: "3a",
  washFrequency: "2–3x por semana (não todo dia — lavar todo dia remove os óleos naturais e desfaz os cachos)",

  // ─── DIA DE LAVAR ──────────────────────────────────────────
  washDay: {
    label: "Dia de Lavar o Cabelo",
    steps: [
      {
        name: "Molhar o Cabelo",
        product: null,
        amount: null,
        howTo: "Use água morna — nem fria nem quente. Deixe a água correr pelo cabelo por pelo menos 30 segundos antes de qualquer produto. Isso abre as cutículas e permite que o shampoo e o condicionador penetrem melhor. Incline a cabeça pra frente e deixe a água cair dos fios para as pontas — não esfregue os fios entre si.",
        tip: "Nunca use água muito quente — resseca os fios e desfaz os cachos. Morna é o ideal."
      },
      {
        name: "Shampoo",
        product: "Shampoo sem sulfato (sulfate-free)",
        amount: "Quantidade do tamanho de uma moeda",
        howTo: "Aplique o shampoo SOMENTE no couro cabeludo — nunca nos fios ou nas pontas. Com as pontas dos dedos (não as unhas), massageie o couro cabeludo em movimentos circulares por 1 a 2 minutos. Cubra toda a área: topo, laterais, nuca. Enxágue completamente com água morna até não restar nenhum resíduo. Para saber se o couro cabeludo está limpo: passe o dedo — se der um leve 'cric' de limpeza, está pronto. Se escorregar, ainda tem produto. Faça o shampoo uma segunda vez se necessário.",
        tip: "Shampoo sem sulfato limpa sem agredir — sulfato é o que faz aquela espuma densa, mas também remove os óleos naturais que definem os cachos."
      },
      {
        name: "Condicionador",
        product: "Condicionador para cabelos cacheados ou com umectação",
        amount: "Quantidade generosa — cachos precisam de mais condicionador que cabelos lisos",
        howTo: "Aplique o condicionador SOMENTE nos fios e pontas — nunca nas raízes ou couro cabeludo (empasta e pesa o cacho). Com o pente de dentes largos, penteia de baixo para cima em pequenas seções: comece pelas pontas, desfaça os nós, depois suba para o meio e por último para as raízes. Isso evita quebra. Deixe agir por 3 a 5 minutos. Enxágue com água FRIA — a água fria sela as cutículas, deixa o cacho mais definido e adiciona brilho.",
        tip: "O enxágue final com água fria é um dos segredos dos cachos bonitos — não pule esse passo mesmo que doa no inverno."
      },
      {
        name: "Leave-in / Creme de Pentear",
        product: "Leave-in ou creme de pentear para cabelos cacheados",
        amount: "Quantidade do tamanho de uma moeda (ajuste conforme o comprimento)",
        howTo: "Aplique no cabelo ainda MOLHADO — não espere secar nem um pouco. Distribua o produto pelos fios em seções, de cima para baixo. Depois, com as duas mãos, faça o movimento de 'scrunch': pegue os fios de baixo pra cima em direção ao couro cabeludo, amassando os cachos suavemente — isso ativa a espiral do cacho. Faça isso por todo o cabelo. Depois de aplicar, NÃO toque mais no cabelo enquanto estiver secando — tocar causa frizz.",
        tip: "O segredo do scrunch: pense que você está empurrando os cachos pra cima, não esticando pra baixo."
      },
      {
        name: "Secagem",
        product: "Camiseta velha de algodão ou toalha de microfibra",
        amount: null,
        howTo: "Opção 1 — Secagem natural (melhor): Retire o excesso de água com a camiseta de algodão ou toalha de microfibra. Envolva o cabelo ou faça o movimento de scrunch para absorver a água sem criar frizz. Deixe secar ao ar livre sem mexer. Opção 2 — Difusor: Use o difusor com temperatura FRIA ou MORNA — nunca quente. Incline a cabeça pra baixo e apoie os cachos dentro da tigela do difusor por 1 a 2 minutos por seção, sem mexer. Mova com calma. NUNCA use toalha felpuda — o algodão agarra os fios e desfaz os cachos criando frizz.",
        tip: "Se possível, seque ao ar livre — é o método que preserva melhor a definição dos cachos."
      }
    ]
  },

  // ─── DIA SEM LAVAR ─────────────────────────────────────────
  dayAfter: {
    label: "Dia Sem Lavar (Refresh)",
    steps: [
      {
        name: "Refresh dos Cachos",
        product: "Borrifador com água + leave-in",
        amount: "Spray leve — não encharcar",
        howTo: "Encha um borrifador com água filtrada e adicione uma pequena quantidade de leave-in (tipo 1 dedo de produto para o borrifador cheio). Borrife levemente nos fios — mais nas pontas e no meio, menos nas raízes. Enquanto ainda estiver úmido, faça o scrunch de baixo pra cima para reativar os cachos. Deixe secar sem tocar.",
        tip: "Não precisa molhar muito — só o suficiente para o produto ativar os cachos novamente."
      },
      {
        name: "Touca de Cetim",
        product: "Touca de cetim ou fronha de cetim",
        amount: null,
        howTo: "Toda noite antes de dormir, coloque a touca de cetim. Se o cabelo for curto e não couber bem, use uma fronha de cetim no travesseiro. O cetim não cria atrito com os fios — travesseiros comuns de algodão esfarelam os cachos e criam frizz durante a noite.",
        tip: "A touca de cetim é o item mais subestimado para quem tem cachos. Faz diferença enorme no dia seguinte."
      }
    ]
  },

  // ─── FASE DE CRESCIMENTO ───────────────────────────────────
  growth: {
    label: "Fase de Crescimento",
    tips: [
      "Corte só as pontas duplas a cada 3 a 4 meses — pontas duplas sobem pelo fio e causam quebra, atrasando o crescimento",
      "Massageie o couro cabeludo por 2 minutos por dia com as pontas dos dedos — estimula a circulação e o crescimento",
      "Evite calor (secador quente, chapinha, babyliss) — o calor quebra os fios e compromete o comprimento conquistado",
      "Alimentação importa: proteína (frango, ovos, feijão), biotina (ovos, castanhas) e ferro (carne, feijão, espinafre) são os nutrientes mais ligados ao crescimento capilar",
      "Não prenda muito apertado — rabos de cavalo e coque com elástico comum quebram os fios na linha de tensão",
      "Máscara de hidratação 1x por semana por 15 minutos antes do shampoo (ou no lugar do condicionador) — fios hidratados crescem mais fortes e com menos quebra",
      "Durma sempre com a touca de cetim — a proteção noturna evita a quebra mecânica que acontece ao dormir"
    ],
    phases: [
      {
        length: "Curto (atual)",
        months: "0–3 meses",
        style: "Nessa fase o cabelo está definindo sua forma cacheada. Aposte em produtos leves (leave-in fluido) para não pesar. O pixie cacheado ou o bob curtinho já têm um apelo muito feminino. Acessórios fazem diferença: tiara fina, presilhas decorativas ou uma faixa de cetim transformam o visual. Defina bem os cachos com o scrunch — fios soltos e mal definidos envelhecem mais; cachos com forma ficam modernos e femininos."
      },
      {
        length: "Bob (altura das orelhas ao queixo)",
        months: "4–8 meses",
        style: "Fase do bob cacheado — uma das mais bonitas e versáteis. Os cachos curtos têm mais volume e 'bounce'. Aqui você pode começar a fazer side part (risca lateral) para um visual mais feminino. Use grampos ou clips para prender um lado e expor o rosto. Condicionador generoso é importante porque os fios já têm comprimento para pesar."
      },
      {
        length: "Ombro",
        months: "9–14 meses",
        style: "Nessa fase os cachos ficam mais pesados e podem perder um pouco da definição pela gravidade. Invista em creme de pentear mais forte para definição. Half-up half-down (metade preso, metade solto) é um penteado incrivelmente feminino para esse comprimento. Mascara de nutrição passa a ser mais importante — fios mais longos são mais velhos nas pontas e precisam de mais cuidado."
      },
      {
        length: "Longo",
        months: "15+ meses",
        style: "Cabelo longo cacheado é marcante e feminino. Nessa fase você terá variedade: cachos soltos, meio-preso, trança lateral, coque alto cacheado. Para manter o volume sem perder comprimento, evite qualquer elástico de borracha — use de tecido. Máscara de hidratação e nutrição se torna indispensável pelo menos 1x por semana para manter as pontas saudáveis."
      }
    ]
  }

};
