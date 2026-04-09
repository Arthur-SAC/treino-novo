// data/style.js — Guia de estilo, cores, tamanhos e lingerie

var STYLE_GUIDE = {

  skinTone: {
    type: "parda-quente",
    description: "Pele parda de subtom quente, heranca mista: pai boliviano e mae brasileira branca. O subtom dourado-terracota da sua pele pede cores ricas e saturadas — tons que criam contraste sem apagar o calor natural da pele.",

    bestColors: [
      { name: "Vinho",          hex: "#722F37", when: "Todas as fases" },
      { name: "Terracota",      hex: "#CC4E3A", when: "Todas as fases" },
      { name: "Verde esmeralda",hex: "#046307", when: "Todas as fases" },
      { name: "Azul marinho",   hex: "#1B2A4A", when: "Todas as fases" },
      { name: "Mostarda",       hex: "#C49102", when: "Fase 2+" },
      { name: "Rubi",           hex: "#9B111E", when: "Fase 2+" },
      { name: "Roxo profundo",  hex: "#4A0E4E", when: "Fase 2+" },
      { name: "Preto",          hex: "#0A0A0A", when: "Todas as fases" },
      { name: "Creme/off-white",hex: "#F5F0E1", when: "Fase 3+" },
      { name: "Dourado",        hex: "#C5993A", when: "Acessorios" }
    ],

    avoidColors: [
      {
        name: "Rosa bebe",
        hex: "#FFB6C1",
        why: "Tom muito claro que apaga o calor da pele parda — deixa o visual lavado e sem vida"
      },
      {
        name: "Lilas claro",
        hex: "#C8A2C8",
        why: "Falta de contraste com a pele quente — dilui a silhueta em vez de definir"
      },
      {
        name: "Amarelo neon",
        hex: "#FFFF00",
        why: "Realca o subtom amarelado da pele de forma indesejada — deixa a aparencia cansada"
      },
      {
        name: "Laranja vibrante",
        hex: "#FF5E00",
        why: "Compete diretamente com o subtom quente da pele, criando conflito visual em vez de harmonia"
      }
    ]
  },

  phases: [
    {
      phase: 1,
      title: "Base — Conforto feminino",
      description: "Pecas femininas sutis, sem nada chamativo. O objetivo aqui e se sentir confortavel e comectar com a feminilidade no dia a dia sem pressao de performance visual.",
      items: [
        {
          type: "Calca cintura alta",
          desc: "Jeans ou moletom com cintura alta (acima do umbigo). A cintura alta cria ilusao de quadril mais largo desde ja, mesmo antes das mudancas fisicas. Prefira corte reto ou skinny — evite bootcut por enquanto.",
          sizeGuide: "quadril"
        },
        {
          type: "Blusa gola V ou U suave",
          desc: "Algodao ou viscose, caimento suave, sem ser apertada. A gola V alonga o pescoco e suaviza os ombros. Prefira blusas que cubram o quadril — sem expor a cintura nesta fase. Cores solidas ou estampas discretas.",
          sizeGuide: "busto"
        },
        {
          type: "Intima — Cueca boxer feminina ou calcinha boyshort",
          desc: "Calcinha boyshort de algodao de marcas femininas (ex: Hope, Duloren, Lupo feminina). Corte cobre mais, da seguranca, mas ja e completamente feminina. Comece com tons neutros: preto, marrom, bege. Evite calcinha muito pequena nesta fase — conforto em primeiro lugar.",
          sizeGuide: "quadril"
        }
      ]
    },

    {
      phase: 2,
      title: "Forma — Marcando silhueta",
      description: "O corpo ja comeca a mudar — gluteos ganhando forma, postura melhorando. Hora de mostrar a silhueta que esta crescendo. Ainda discreto, mas agora com intenção de demarcar o corpo.",
      items: [
        {
          type: "Legging cintura alta",
          desc: "Tecido com compressao leve a media (suplex, poliamida). Cintura bem alta para marcar a transicao quadril-cintura. Cores escuras (preto, vinho, verde escuro) disfarçam mais e sao mais versateis. Evite leggings finas demais — prefira tecido grosso que sustente sem ficar transparente.",
          sizeGuide: "quadril"
        },
        {
          type: "Blusa justa / baby look",
          desc: "Camiseta mais justa que a fase 1, mas sem ser cropped ainda. Visa marcar o tronco e criar contraste com o quadril em desenvolvimento. Comprimento na cintura ou logo abaixo. Tecido maleavel (malha, viscose).",
          sizeGuide: "busto"
        },
        {
          type: "Saia midi",
          desc: "Na altura da panturrilha (abaixo do joelho). Tecido com volume leve (viscose fluida, crepe) — ajuda a criar ilusao de quadril antes da massa muscular aparecer completamente. Cintura elastica ou fechamento lateral. Estampas florais escuras ou cores solidas do seu palette.",
          sizeGuide: "quadril"
        },
        {
          type: "Calcinha bikini ou hipster",
          desc: "Transicao da boyshort para algo mais feminino. Bikini cobre o essencial com visual claramente feminino. Hipster fica no meio do caminho — boa opcao de transicao. Comece com renda discreta ou tecido liso. Cores: preto, vinho, verde escuro.",
          sizeGuide: "quadril"
        }
      ]
    },

    {
      phase: 3,
      title: "Ousada — Mostrando curvas",
      description: "Curvas visiveis. Gluteos formados, cintura demarcada. Hora de ser ousada e mostrar o trabalho que voce fez. As roupas agora sao aliadas do corpo construido.",
      items: [
        {
          type: "Shortinho jeans cintura alta",
          desc: "Jeans ajustado com cintura bem alta — acentua o quadril e alonga as pernas. Comprimento na metade da coxa. Prefira corte sem elastano para firmar a silhueta. Lavagem escura ou media. Combine com blusa tucked in para maximizar a percepcao do quadril.",
          sizeGuide: "quadril"
        },
        {
          type: "Cropped",
          desc: "So entra no guarda-roupa quando a cintura estiver visivelmente demarcada (diferenca quadril-cintura maior que 15cm). Tecido firme (malha canelada, rib) ou leve (crepe). Comprimento acima do umbigo. Evite cropped de malha muito fina se ainda ha volume abdominal — prefira estruturado.",
          sizeGuide: "busto"
        },
        {
          type: "Vestido bodycon ate o joelho",
          desc: "Tecido com elastano que abraca o corpo. O comprimento no joelho equilibra a ousadia — mostra a silhueta sem expor demais. Preto ou vinho para comecar. Evite bodycon acima do joelho nesta fase se ainda ha gordura abdominal — o midi e mais generoso e igualmente sensual.",
          sizeGuide: "quadril"
        },
        {
          type: "Blusas decote V profundo",
          desc: "Decote V que vai ate o meio do peito. Alonga o pescoço, suaviza os ombros e cria proporcao. Funciona com ou sem sutiã com bojo. Cores do seu palette — vinho, esmeralda, preto.",
          sizeGuide: "busto"
        },
        {
          type: "Calcinha fio dental + soutien com bojo",
          desc: "Fio dental de renda ou tecido liso (comece pelo liso). O fio fica completamente entre os gluteos — nao tem como 'escapar' pela lateral como na hipster. Soutien com bojo leve (espuma fina, nao enchimento extremo) para criar projecao natural. Conjunto combinando: mesmo tecido e cor em cima e embaixo.",
          sizeGuide: "quadril"
        }
      ]
    },

    {
      phase: 4,
      title: "Femme fatale — Confianca total",
      description: "Corpo de amazona construido. Voce sabe o que tem e sabe como mostrar. Qualquer roupa usada com essa confianca vira arma. Esta fase nao tem restricao — voce ja pagou o preco, agora e so desfrutar.",
      items: [
        {
          type: "Conjunto lingerie (renda / cetim / tule)",
          desc: "Conjunto completo: calcinha + soutien no mesmo material e cor. Renda para ocasioes especiais, cetim para sensualidade fluida, tule para leveza. Cores ideais para sua pele: vinho, preto, rubi, verde escuro. Evite branco puro — off-white (creme) ca muito melhor no seu subtom.",
          sizeGuide: "quadril"
        },
        {
          type: "Fio dental dia-a-dia",
          desc: "Calcinha de uso diario: algodao com acabamento fio dental ou microfibra fina. Confortavel para o dia inteiro. Elimina marcas de calcinha sob roupas justas (legging, vestido bodycon). Mantenha multiplas pecas em preto, vinho e nude escuro.",
          sizeGuide: "quadril"
        },
        {
          type: "Body (renda ou liso)",
          desc: "Body de renda ou malha fina com fechamento de pressao entre as pernas. Pode ser usado como roupa (com calca/saia) ou como lingerie. Renda: mais sensual. Malha lisa: mais versatil, da para usar embaixo de blazer. Certifique-se de que o fechamento fica confortavel — ajuste as alcas primeiro.",
          sizeGuide: "busto"
        },
        {
          type: "Calca jeans cintura baixa mostrando fio",
          desc: "Jeans de cintura baixa (abaixo do umbigo) quando o quadril ja for amplo o suficiente para a calca nao cair. O fio dental mostrando acima da cintura e intencional — e um statement. Funciona com moletom ou camiseta cropped por cima.",
          sizeGuide: "quadril"
        },
        {
          type: "Camisola / pijama cetim",
          desc: "Para uso noturno ou em casa. Cetim desliza sobre o corpo, cria visual glamouroso mesmo sem sair de casa. Comprimento na coxa ou midi. Alcinhas finas. Cores: preto, vinho, dourado. Mantenha pelo menos um conjunto para dias em que voce quer se sentir bem sem sair.",
          sizeGuide: "quadril"
        }
      ]
    }
  ],

  sizeChart: {
    bottom: [
      { size: "PP / 34", minHip:  86, maxHip:  90 },
      { size: "P / 36",  minHip:  90, maxHip:  94 },
      { size: "M / 38",  minHip:  94, maxHip:  98 },
      { size: "G / 40",  minHip:  98, maxHip: 102 },
      { size: "GG / 42", minHip: 102, maxHip: 106 },
      { size: "XG / 44", minHip: 106, maxHip: 110 },
      { size: "XG / 46", minHip: 110, maxHip: 114 },
      { size: "XGG / 48",minHip: 114, maxHip: 118 },
      { size: "XGG / 50",minHip: 118, maxHip: 122 }
    ],

    top: [
      { size: "PP / 34", minBust:  78, maxBust:  82 },
      { size: "P / 36",  minBust:  82, maxBust:  86 },
      { size: "M / 38",  minBust:  86, maxBust:  90 },
      { size: "G / 40",  minBust:  90, maxBust:  94 },
      { size: "GG / 42", minBust:  94, maxBust:  98 },
      { size: "XG / 44", minBust:  98, maxBust: 102 },
      { size: "XG / 46", minBust: 102, maxBust: 106 },
      { size: "GG / 48", minBust: 106, maxBust: 110 }
    ],

    panties: [
      { size: "PP", minHip:  86, maxHip:  92 },
      { size: "P",  minHip:  92, maxHip:  98 },
      { size: "M",  minHip:  98, maxHip: 104 },
      { size: "G",  minHip: 104, maxHip: 110 },
      { size: "GG", minHip: 110, maxHip: 116 },
      { size: "XG", minHip: 116, maxHip: 122 }
    ]
  },

  lingerie: {
    whenReady: "Quando a diferenca quadril - cintura for maior que 20cm E voce se sentir confiante",

    howToChoose: [
      "Comece sempre por cores escuras (preto, vinho) — mais versáteis e generosas visualmente no subtom quente da pele parda",
      "Renda cai melhor que tecido liso na maioria das silhuetas — cria textura que dissimula imperfeicoes e adiciona feminilidade",
      "Progrida da calcinha bikini ou hipster para o fio dental — nao pule etapas, o conforto vem com a habitua",
      "Soutien com bojo leve (espuma fina) e mais adequado que push-up extremo — projeta sem parecer artificial",
      "Conjuntos combinando (mesma cor e tecido em cima e embaixo) dao aparencia de maior intencionalidade e elegancia",
      "Algodao para o dia a dia, renda e cetim para momentos especiais — nao use renda o tempo todo ou perde o efeito"
    ],

    howToWear: [
      "Calcinha: a cintura da calcinha deve ficar no osso do quadril ou logo acima — nem subindo ate o umbigo, nem caindo. Ajuste as laterais para ficarem simetricas",
      "Soutien com bojo: ajuste as alicas para levantar levemente o peito sem apertar os ombros. A tira traseira deve ficar paralela ao chao — se sobe, a tira esta larga demais",
      "Fio dental: a parte traseira senta naturalmente entre os gluteos sem necessidade de ajuste manual — se precisar puxar ou empurrar toda hora, o tamanho esta errado",
      "Body: vesta de baixo para cima — pernas primeiro, depois ajuste o corpo no tronco, depois as alicas. Feche os colchetes de pressao por ultimo, sentada ou agachada levemente"
    ]
  }

};

// ---------------------------------------------------------------------------

var PHASE_GOALS = {

  "1to2": {
    description: "Completar 4 semanas consistentes de treino + sentir gluteo ativando",
    exerciseGoals: [],
    minWeeks: 4
  },

  "2to3": {
    description: "Hip Thrust 50kg + 3 meses de treino",
    exerciseGoals: [
      { exerciseId: "f2-hip-thrust-pesado", targetWeight: 50, name: "Hip Thrust" },
      { exerciseId: "f2-agachamento-barra", targetWeight: 40, name: "Agachamento" }
    ],
    minWeeks: 12
  },

  "3to4": {
    description: "Hip Thrust 80kg + 8 meses de treino",
    exerciseGoals: [
      { exerciseId: "f3-hip-thrust-heavy",  targetWeight: 80, name: "Hip Thrust" },
      { exerciseId: "f3-agachamento-barra", targetWeight: 70, name: "Agachamento" },
      { exerciseId: "f3-rdl-barra",         targetWeight: 60, name: "Levantamento Romeno" }
    ],
    minWeeks: 32
  }

};
