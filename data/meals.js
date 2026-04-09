// ============================================================
// data/meals.js — Dados de nutrição e refeições
// Ingredientes acessíveis em Aracaju/SE
// ============================================================

var MEALS = {

  // ─── CAFÉ DA MANHÃ — 07:00 ────────────────────────────────
  cafe: {
    title: "Café da Manhã",
    time: "07:00",
    supplements: ["Creatina 5g (misturar no shake ou dissolver em água)", "Multivitamínico (tomar com a refeição)"],
    options: [
      {
        name: "Shake Proteico com Banana e Aveia",
        prepTime: "3 min",
        ingredients: [
          "1 dose (30g) de whey protein sabor baunilha ou chocolate",
          "1 banana média (madura — mais doce e cremosa)",
          "3 colheres de sopa (30g) de aveia em flocos finos",
          "1 colher de sopa (20g) de pasta de amendoim integral",
          "200ml de leite integral ou desnatado",
          "5g de creatina monohidratada",
          "Gelo a gosto (opcional)"
        ],
        steps: [
          "Descasque a banana e quebre em pedaços grosseiros — ela precisa estar madura (com manchas escuras) para ficar cremosa e adoçar naturalmente.",
          "Coloque no liquidificador: primeiro o leite, depois a banana, a aveia, a pasta de amendoim e por último o whey. Essa ordem evita o whey grudar nas paredes.",
          "Dissolva os 5g de creatina em 50ml de água à parte e adicione ao liquidificador — ou misture direto no shake.",
          "Bata em velocidade alta por 30 segundos. O shake deve ficar espesso e sem grumos visíveis de aveia.",
          "Se ficou muito espesso, adicione mais 50ml de leite e bata 10 segundos.",
          "Despeje no copo e tome imediatamente — a aveia absorve líquido e engrossa rápido.",
          "Tome o multivitamínico com o shake (junto com comida para melhor absorção)."
        ],
        supplements: ["Creatina 5g (misturada no shake)", "Multivitamínico"]
      },
      {
        name: "Tapioca com Ovo Mexido e Queijo Coalho",
        prepTime: "8 min",
        ingredients: [
          "4 colheres de sopa (50g) de goma de tapioca (polvilho doce hidratado)",
          "2 ovos caipiras ou comuns",
          "1 fatia (40g) de queijo coalho",
          "1 colher de chá de manteiga ou azeite",
          "Sal e pimenta-do-reino a gosto",
          "Cebolinha picada a gosto (opcional)"
        ],
        steps: [
          "PREPARAR A GOMA: Se a goma estiver em bloco, passe pela peneira apertando com os dedos para soltar os grumos. A textura ideal é de farinha solta e levemente úmida.",
          "FAZER A TAPIOCA: Aqueça uma frigideira antiaderente (20-22cm) em fogo médio por 1 minuto — ela precisa estar quente mas não queimando.",
          "Espalhe a goma na frigideira com uma colher, formando um disco fino e uniforme. Não pressione, apenas espalhe. Quando as bordas começarem a se soltar e o centro perder o aspecto úmido (cerca de 1-2 minutos), a tapioca está pronta pra rechear.",
          "FAZER O OVO MEXIDO: Em outra frigideira pequena, aqueça a manteiga em fogo médio-baixo. Quebre os ovos, tempere com sal e pimenta. Com uma espátula, mexa devagar e constantemente, fazendo movimentos de raspar o fundo. Retire do fogo quando ainda parecer um pouco úmido — ele termina de cozinhar com o calor residual. Todo o processo leva 2-3 minutos.",
          "MONTAR: Coloque o ovo mexido sobre metade da tapioca. Adicione o queijo coalho fatiado em tiras. Se quiser derreter o queijo, tampe a frigideira por 30 segundos.",
          "Dobre a tapioca ao meio, pressione levemente e sirva imediatamente."
        ],
        supplements: ["Multivitamínico (tomar com a refeição)"]
      },
      {
        name: "Cuscuz com Ovo Frito",
        prepTime: "10 min",
        ingredients: [
          "4 colheres de sopa (80g) de flocão de milho (flocos de milho para cuscuz)",
          "5 colheres de sopa (75ml) de água morna",
          "Uma pitada de sal",
          "2 ovos",
          "1 colher de sopa de azeite ou óleo de coco",
          "Manteiga a gosto para finalizar (opcional)"
        ],
        steps: [
          "HIDRATAR O FLOCÃO: Em uma tigela ou diretamente na cuscuzeira, misture o flocão com o sal. Adicione a água morna aos poucos, misturando com um garfo para hidratar uniformemente. A textura correta é de farofa úmida — o flocão não deve ficar empapado nem seco. Deixe descansar 2 minutos.",
          "COZINHAR NO VAPOR: Encha a parte de baixo da cuscuzeira com água até a metade e leve ao fogo alto. Quando a água ferver e o vapor começar a subir forte, coloque a parte de cima com o flocão hidratado. Tampa e cozinhe por 5-7 minutos.",
          "SINAL DE PRONTO: O cuscuz estará pronto quando soltar do fundo da forma, a superfície ficar firme ao toque e ele sair em bloco ao virar. Se resistir, deixe mais 2 minutos.",
          "DESENFORME: Coloque um prato em cima, vire de uma vez e bata levemente para soltar. Finalize com um pouco de manteiga por cima se quiser.",
          "FRITAR OS OVOS: Aqueça o azeite em frigideira pequena em fogo médio. Quebre os ovos com cuidado para não romper a gema. Quando a clara ficar branca e opaca ao redor da gema (cerca de 2 minutos), o ovo está no ponto estrelado. Para gema mais firme, tampe a frigideira por mais 1 minuto.",
          "Coloque os ovos sobre o cuscuz e sirva imediatamente."
        ],
        supplements: ["Multivitamínico (tomar com a refeição)", "Creatina 5g (dissolver em um copo d'água separado)"]
      }
    ]
  },

  // ─── LANCHE DA MANHÃ — 10:00 ─────────────────────────────
  lanche1: {
    title: "Lanche da Manhã",
    time: "10:00",
    supplements: ["Chá de spearmint — 1ª xícara do dia (deixar em infusão 5 min, sem açúcar)"],
    options: [
      {
        name: "Iogurte com Fruta e Castanha de Caju",
        prepTime: "3 min",
        ingredients: [
          "1 pote (170g) de iogurte natural integral ou grego",
          "1 banana média fatiada OU meia manga Palmer fatiada",
          "1 colher de sopa (15g) de castanha de caju torrada sem sal",
          "1 colher de chá de mel (opcional)"
        ],
        steps: [
          "Coloque o iogurte no pote ou em uma tigela.",
          "Fatie a fruta em rodelas finas ou cubos e coloque por cima do iogurte.",
          "Adicione as castanhas de caju por cima — elas dão crocância e gordura saudável.",
          "Regue com o mel se quiser mais doçura.",
          "Não deixe montado por muito tempo — a fruta solta água e amolece o iogurte. Monte e coma na hora."
        ],
        supplements: ["Chá de spearmint — 1ª xícara (beber ao lado)"]
      },
      {
        name: "Banana com Pasta de Amendoim",
        prepTime: "1 min",
        ingredients: [
          "2 bananas nanicas (as menores e mais doces)",
          "2 colheres de sopa (30g) de pasta de amendoim integral (sem açúcar adicionado)"
        ],
        steps: [
          "Descasque as bananas e coloque em um prato.",
          "Tire a pasta de amendoim da geladeira com antecedência — pasta fria fica dura e difícil de espalhar.",
          "Espalhe a pasta sobre as bananas ou use como molho para mergulhar os pedaços.",
          "Opção pratica: leve a banana inteira e a pasta em potinho pequeno para comer fora de casa."
        ],
        supplements: ["Chá de spearmint — 1ª xícara (beber ao lado)"]
      },
      {
        name: "Mix de Castanhas com Fruta Seca",
        prepTime: "2 min",
        ingredients: [
          "10 unidades de castanha de caju",
          "10 unidades de amendoim torrado sem sal",
          "5 unidades de castanha-do-pará (máximo 2-3/dia pelo teor de selênio, mas aqui distribuímos ao longo da semana)",
          "1 colher de sopa (15g) de uva-passa ou tâmara picada",
          "1 fruta fresca ao lado: 1 banana OU 1 fatia de mamão"
        ],
        steps: [
          "Monte o mix de castanhas e frutas secas em um potinho com tampa para levar na bolsa.",
          "DICA: Prepare 5 potinhos no domingo para a semana toda — um por dia de trabalho.",
          "Mastigui bem as castanhas — são calóricas e densas, mastigar devagar ajuda na saciedade.",
          "Coma a fruta fresca ao lado para hidratar e adicionar fibras."
        ],
        supplements: ["Chá de spearmint — 1ª xícara (beber ao lado)"]
      }
    ]
  },

  // ─── ALMOÇO — 12:00 ──────────────────────────────────────
  almoco: {
    title: "Almoço",
    time: "12:00",
    supplements: ["Ômega-3 — 1 cápsula (tomar durante ou logo após a refeição)"],
    options: [
      {
        name: "Prato Padrão — Frango Grelhado, Arroz, Feijão e Salada",
        prepTime: "25 min",
        ingredients: [
          "150g de filé de frango (peito ou sobrecoxa sem osso)",
          "1 dente de alho amassado",
          "Suco de meio limão",
          "Sal, pimenta-do-reino e cúrcuma a gosto",
          "1 colher de chá de azeite",
          "4 colheres de sopa (80g) de arroz branco cozido",
          "3-4 colheres de sopa (80g) de feijão carioca cozido com caldo",
          "2 punhados grandes de alface ou rúcula",
          "1 tomate médio picado",
          "Sal e azeite para a salada"
        ],
        steps: [
          "TEMPERAR O FRANGO (pode fazer na véspera): Bata o filé levemente com a palma da mão para deixar a espessura uniforme — isso garante cozimento igual. Tempere com alho amassado, suco de limão, sal, pimenta e cúrcuma. Deixe marinar 10-15 minutos no mínimo.",
          "GRELHAR O FRANGO: Aqueça a frigideira ou grelha em fogo MÉDIO por 2 minutos — ela precisa estar bem quente antes de colocar o frango. Pincele com azeite.",
          "Coloque o frango e NÃO mova por 5 minutos. Você saberá a hora de virar quando ele soltar naturalmente da frigideira e as bordas ficarem brancas (cozidas). Se precisar forçar, não está no ponto.",
          "Vire e grelhe por mais 4-5 minutos do outro lado. O frango está cozido quando, ao cortar o centro, não tiver mais cor rosada — apenas branco uniforme.",
          "DEIXAR DESCANSAR: Retire do fogo e deixe o frango descansar 2 minutos antes de cortar. Isso redistribui o suco e deixa mais macio.",
          "MONTAR O PRATO (regra do prato saudável): Metade do prato = salada (alface + tomate temperados com sal e azeite). Um quarto do prato = proteína (frango fatiado). Um quarto restante = carboidratos (arroz + feijão lado a lado).",
          "Regue o feijão com um fio de azeite para finalizar."
        ],
        supplements: ["Ômega-3 — 1 cápsula (tomar com a refeição)"]
      },
      {
        name: "Macaxeira Cozida com Carne Moída Refogada",
        prepTime: "30 min",
        ingredients: [
          "250g de macaxeira (mandioca) descascada e cortada em pedaços de 5cm",
          "150g de carne moída patinho ou acém",
          "2 dentes de alho picados",
          "1 cebola pequena picada",
          "1 tomate médio picado (sem sementes)",
          "Sal, pimenta, cominho e páprica defumada a gosto",
          "1 colher de sopa de azeite",
          "Cheiro-verde (coentro e cebolinha) picado a gosto",
          "2 punhados de salada para acompanhar"
        ],
        steps: [
          "COZINHAR A MACAXEIRA: Coloque a macaxeira em panela com água fria e sal. Leve ao fogo alto. Quando ferver, reduza para médio e cozinhe por 20-25 minutos. Estará pronta quando um garfo entrar facilmente sem resistência. Escorra a água e mantenha tampada.",
          "REFOGAR A CARNE: Enquanto a macaxeira cozinha, aqueça o azeite em frigideira em fogo alto. Adicione a cebola e refogue 3 minutos, mexendo, até ficar translúcida.",
          "Adicione o alho e mexa por 30 segundos — cuidado para não queimar (fica amargo rápido).",
          "Acrescente a carne moída, quebrando com uma colher de pau para não formar blocos. Deixe selar 3-4 minutos sem mexer para dourar. Quando a carne soltar líquido e ficar marrom, está no ponto.",
          "Adicione o tomate picado, tempere com sal, pimenta, cominho e páprica. Cozinhe mais 5 minutos em fogo médio, mexendo ocasionalmente, até o tomate desmanchar e o molho engrossar.",
          "Finalize com cheiro-verde picado, misture e desligue o fogo.",
          "MONTAR: Coloque a macaxeira cozida em um lado do prato e a carne moída por cima ou ao lado. Sirva a salada verde do outro lado."
        ],
        supplements: ["Ômega-3 — 1 cápsula (tomar com a refeição)"]
      },
      {
        name: "Cuscuz com Frango Desfiado e Legumes",
        prepTime: "25 min",
        ingredients: [
          "6 colheres de sopa (120g) de flocão de milho",
          "7-8 colheres de sopa (110ml) de água morna",
          "150g de filé de frango cozido e desfiado",
          "1 cenoura média ralada grossa",
          "1 abobrinha pequena em cubinhos (ou cheiro-verde picado)",
          "2 dentes de alho picados",
          "Sal e azeite a gosto",
          "1 ovo cozido fatiado para enfeitar (opcional)"
        ],
        steps: [
          "COZINHAR O FRANGO: Leve o filé de frango temperado (sal e alho) ao fogo com água suficiente para cobrir. Cozinhe em fogo médio por 20 minutos após ferver, ou até a carne ficar fácil de desfiar. Retire, deixe amornar e desfie com dois garfos.",
          "REFOGAR OS LEGUMES: Em frigideira, aqueça azeite em fogo médio. Refogue o alho até dourar levemente (30 segundos). Adicione a cenoura ralada e a abobrinha em cubinhos. Refogue 4-5 minutos, tempere com sal e reserve. Misture o frango desfiado aos legumes.",
          "HIDRATAR O FLOCÃO: Misture o flocão com uma pitada de sal. Adicione a água morna em fio, misturando com garfo, até o flocão ficar úmido e soltando. Deixe descansar 3 minutos.",
          "MONTAR O CUSCUZ: Forre a cuscuzeira (ou uma peneira sobre panela com água fervendo) com papel vegetal ou um pano úmido. Coloque metade do flocão, espalhe o recheio de frango e legumes, cubra com o restante do flocão. Tampe e cozinhe no vapor por 7 minutos.",
          "Vire em um prato, decore com ovo fatiado e sirva com salada ao lado."
        ],
        supplements: ["Ômega-3 — 1 cápsula (tomar com a refeição)"]
      }
    ]
  },

  // ─── PRÉ-TREINO — 16:00 ──────────────────────────────────
  pretreino: {
    title: "Pré-Treino",
    time: "16:00",
    note: "Comer 45-60 minutos antes do treino para o carboidrato virar energia disponível.",
    supplements: ["Chá de spearmint — 2ª xícara do dia (sem açúcar, em infusão 5 min)"],
    options: [
      {
        name: "Banana Amassada com Aveia e Mel",
        prepTime: "3 min",
        ingredients: [
          "2 bananas nanicas maduras",
          "3 colheres de sopa (30g) de aveia em flocos finos",
          "1 colher de chá de mel",
          "Canela em pó a gosto"
        ],
        steps: [
          "Descasque as bananas e coloque em uma tigela.",
          "Amasse com um garfo até obter uma pasta grossa com alguns pedaços — não precisa ficar completamente liso.",
          "Adicione a aveia em flocos e misture bem. A aveia vai absorver a umidade da banana em 1-2 minutos.",
          "Regue com mel e polvilhe canela por cima.",
          "TIMING: Coma exatamente 45-60 minutos antes do treino. Cedo demais (2h+) e o glicogênio já caiu. Tarde demais (15 min) e vai treinar pesado com o estômago cheio.",
          "Este é o pré-treino ideal: banana (carboidrato de rápida absorção) + aveia (liberação sustentada de energia) = energia estável por 60-90 minutos."
        ],
        supplements: ["Chá de spearmint — 2ª xícara (beber antes ou junto)"]
      },
      {
        name: "Tapioca com Pasta de Amendoim",
        prepTime: "5 min",
        ingredients: [
          "4 colheres de sopa (50g) de goma de tapioca",
          "1 colher e meia de sopa (25g) de pasta de amendoim integral",
          "1 banana pequena fatiada para rechear (opcional)"
        ],
        steps: [
          "Prepare a tapioca conforme o método do café da manhã: espalhe a goma em frigideira quente em fogo médio, espere 1-2 minutos até as bordas soltarem.",
          "Quando a superfície ficar opaca (não mais úmida), distribua a pasta de amendoim sobre metade da tapioca.",
          "Se quiser, adicione rodelas finas de banana sobre a pasta.",
          "Dobre ao meio, pressione levemente e deixe mais 30 segundos na frigideira para a pasta aquecer.",
          "Retire e coma imediatamente — a tapioca esfria rápido."
        ],
        supplements: ["Chá de spearmint — 2ª xícara (beber antes ou junto)"]
      },
      {
        name: "Batata Doce com Canela",
        prepTime: "8 min",
        ingredients: [
          "1 batata doce média (150-180g)",
          "Canela em pó a gosto",
          "Uma pitada de sal",
          "1 colher de chá de manteiga (opcional)"
        ],
        steps: [
          "LAVAR: Esfregue bem a batata doce sob água corrente — pode comer com casca depois de cozida.",
          "COZINHAR NO MICRO-ONDAS: Faça 4-5 furos com garfo em volta da batata (para o vapor escapar e não explodir). Coloque em prato micro-ondável.",
          "Cozinhe em potência alta por 5 minutos. Verifique apertando com os dedos protegidos por pano de prato — se ceder facilmente, está pronta. Se ainda dura, coloque mais 2 minutos.",
          "SINAL DE PRONTO: A casca ficará levemente enrugada e a batata cederá completamente ao garfo.",
          "Corte ao meio no sentido do comprimento, tempere com sal, adicione manteiga se quiser e polvilhe canela generosamente.",
          "Espere 2 minutos para amornar antes de comer."
        ],
        supplements: ["Chá de spearmint — 2ª xícara (beber antes ou junto)"]
      }
    ]
  },

  // ─── JANTAR — 20:00 ──────────────────────────────────────
  jantar: {
    title: "Jantar",
    time: "20:00",
    supplements: ["Vitamina D3 + K2 (tomar com a refeição — D3 é lipossolúvel, absorve melhor com gordura)"],
    options: [
      {
        name: "Omelete com Salada Verde",
        prepTime: "10 min",
        ingredients: [
          "3 ovos",
          "2 fatias (40g) de queijo coalho ou muçarela",
          "1 tomate médio picado sem sementes",
          "Sal e pimenta-do-reino a gosto",
          "1 colher de chá de manteiga ou azeite",
          "2 punhados de rúcula ou alface para acompanhar",
          "Cebolinha ou orégano a gosto"
        ],
        steps: [
          "BATER OS OVOS: Quebre os 3 ovos em uma tigela. Tempere com sal e pimenta. Bata com garfo ou fouet até a gema e a clara ficarem completamente misturadas e levemente espumosas — cerca de 30 segundos. Não bata em excesso.",
          "AQUECER A FRIGIDEIRA: Use uma frigideira antiaderente de 20-22cm. Aqueça em fogo MÉDIO-BAIXO por 1 minuto. Adicione a manteiga e espere ela derreter e começar a borbulhar levemente — mas não deixar dourar.",
          "DESPEJAR OS OVOS: Despeje a mistura de ovos de uma vez. Agite levemente a frigideira para espalhar por igual. Agora NÃO mexa.",
          "COZIMENTO: Deixe cozinhar em fogo médio-baixo. As bordas vão começar a firmar em 1-2 minutos. Quando as bordas estiverem completamente firmes mas o centro ainda levemente úmido (brilhante), coloque o queijo e o tomate sobre metade do omelete.",
          "DOBRAR: Com uma espátula larga, dobre a metade sem recheio sobre a metade com recheio. Pressione suavemente. Deixe mais 30-40 segundos para o queijo derreter.",
          "O omelete perfeito tem exterior dourado claro, interior úmido e fofo — não seco e borrachudo. Se ficou seco, foi fogo alto demais.",
          "SALADA: Tempere a rúcula/alface com uma pitada de sal e um fio de azeite. Sirva ao lado."
        ],
        supplements: ["Vitamina D3 + K2 (tomar com a refeição)"]
      },
      {
        name: "Frango Grelhado com Batata Doce e Brócolis",
        prepTime: "25 min",
        ingredients: [
          "150g de filé de frango (peito ou sobrecoxa sem osso)",
          "1 batata doce média (150g) descascada e fatiada em rodelas de 1cm",
          "1 xícara (100g) de brócolis em floretes",
          "Alho em pó, sal, pimenta, orégano a gosto",
          "1 colher de sopa de azeite"
        ],
        steps: [
          "BATATA DOCE: Coloque as rodelas de batata doce em um prato com uma colher de chá de azeite, sal e alho em pó. Cozinhe no micro-ondas por 6-7 minutos, virando na metade do tempo, até ficarem macias ao garfo.",
          "BRÓCOLIS NO VAPOR: Coloque os floretes de brócolis em uma panelinha com 3-4 colheres de sopa de água. Tampe e cozinhe em fogo médio por 4-5 minutos. O brócolis está pronto quando ficar verde-vivo e a faca entrar com leve resistência. Não cozinhe além — fica mole e perde a cor.",
          "GRELHAR O FRANGO: Tempere o frango com sal, pimenta, alho em pó e orégano. Grelhe em frigideira quente com fio de azeite, 5 minutos de cada lado em fogo médio, sem mexer. Vire apenas uma vez.",
          "Monte o prato com o frango fatiado, as rodelas de batata doce e o brócolis. Regue tudo com um fio de azeite e sirva."
        ],
        supplements: ["Vitamina D3 + K2 (tomar com a refeição)"]
      },
      {
        name: "Sopa de Frango com Legumes",
        prepTime: "30 min",
        ingredients: [
          "150g de frango (coxa ou peito) cozido e desfiado",
          "1 cenoura média em rodelas finas",
          "1 abobrinha pequena em cubinhos",
          "1 batata inglesa pequena em cubinhos",
          "2 dentes de alho picados",
          "Meia cebola picada",
          "700ml de água ou caldo de frango caseiro",
          "Sal, pimenta, cúrcuma e cheiro-verde a gosto",
          "1 colher de sopa de azeite"
        ],
        steps: [
          "REFOGAR A BASE: Em uma panela média, aqueça o azeite em fogo médio. Adicione a cebola e refogue 3 minutos até ficar transparente. Adicione o alho e refogue mais 30 segundos.",
          "ADICIONAR OS LEGUMES: Coloque a cenoura em rodelas e a batata em cubinhos. Misture bem. Refogue 2 minutos para absorver o tempero da base.",
          "COZINHAR: Adicione a água ou caldo. Tempere com sal, pimenta e cúrcuma. Aumente para fogo alto e espere ferver.",
          "Quando ferver, reduza para fogo médio-baixo. Tampe parcialmente (deixe uma fresta para não transbordar) e cozinhe por 15 minutos.",
          "Adicione a abobrinha e o frango desfiado. Cozinhe mais 5 minutos — a abobrinha cozinha rápido.",
          "SINAL DE PRONTO: A cenoura e a batata devem ceder completamente ao garfo. O caldo deve estar levemente encorpado (não aguado).",
          "Finalize com bastante cheiro-verde picado (coentro + cebolinha). Prove o sal e ajuste.",
          "DICA NOTURNA: A sopa é ideal para noites quentes de Aracaju — fica leve mas proteica. Se quiser mais encorpado, adicione 2 colheres de aveia em flocos finos no final do cozimento."
        ],
        supplements: ["Vitamina D3 + K2 (tomar com a refeição)"]
      }
    ]
  }

};

// ─── LISTA DE COMPRAS SEMANAL ─────────────────────────────
var SHOPPING_BASE = {

  proteinas: [
    { name: "Filé de frango (peito ou sobrecoxa sem osso)", qty: "1 kg", section: "Carnes" },
    { name: "Carne moída patinho ou acém", qty: "500g", section: "Carnes" },
    { name: "Ovos caipiras ou comuns", qty: "2 dúzias (24 unidades)", section: "Ovos" },
    { name: "Whey protein (qualquer sabor)", qty: "verificar se tem — repor quando acabar", section: "Suplementos" }
  ],

  carboidratos: [
    { name: "Flocão de milho (flocos p/ cuscuz)", qty: "500g", section: "Grãos e Cereais" },
    { name: "Goma de tapioca (polvilho hidratado)", qty: "500g", section: "Grãos e Cereais" },
    { name: "Aveia em flocos finos", qty: "500g", section: "Grãos e Cereais" },
    { name: "Arroz branco", qty: "1 kg (ou verificar se tem)", section: "Grãos e Cereais" },
    { name: "Feijão carioca", qty: "500g (ou verificar se tem)", section: "Grãos e Cereais" },
    { name: "Batata doce", qty: "1 kg (4-5 batatas médias)", section: "Hortifrúti" },
    { name: "Macaxeira (mandioca)", qty: "500g", section: "Hortifrúti" },
    { name: "Banana nanica", qty: "2 pencas (14-16 unidades)", section: "Hortifrúti" }
  ],

  gorduras: [
    { name: "Pasta de amendoim integral (sem açúcar)", qty: "1 pote (400g)", section: "Mercearia" },
    { name: "Castanha de caju torrada sem sal", qty: "200g", section: "Mercearia" },
    { name: "Amendoim torrado sem sal", qty: "200g", section: "Mercearia" },
    { name: "Azeite de oliva extravirgem", qty: "verificar se tem — 1 garrafa 500ml", section: "Mercearia" },
    { name: "Manteiga com sal", qty: "200g", section: "Laticínios" }
  ],

  vegetais: [
    { name: "Alface ou rúcula", qty: "2 pés ou 2 sacos", section: "Hortifrúti" },
    { name: "Tomate", qty: "1 kg (5-6 tomates)", section: "Hortifrúti" },
    { name: "Cenoura", qty: "500g (3-4 cenouras)", section: "Hortifrúti" },
    { name: "Brócolis", qty: "1 cabeça média (ou 300g congelado)", section: "Hortifrúti" },
    { name: "Abobrinha", qty: "2 unidades médias", section: "Hortifrúti" },
    { name: "Cebola", qty: "1 saco (3-4 unidades)", section: "Hortifrúti" },
    { name: "Alho", qty: "1 cabeça ou 1 saquinho já picado", section: "Hortifrúti" },
    { name: "Batata inglesa", qty: "500g", section: "Hortifrúti" },
    { name: "Cheiro-verde (coentro + cebolinha)", qty: "1 maço de cada", section: "Hortifrúti" }
  ],

  laticinios: [
    { name: "Iogurte natural integral ou grego", qty: "4 potes (170g cada)", section: "Laticínios" },
    { name: "Queijo coalho", qty: "200g (fatiado ou em bloco)", section: "Laticínios" },
    { name: "Leite integral ou desnatado", qty: "1 litro", section: "Laticínios" }
  ],

  frutas: [
    { name: "Manga Palmer", qty: "2 unidades", section: "Hortifrúti" },
    { name: "Mamão formosa", qty: "meio mamão (ou 1 pequeno)", section: "Hortifrúti" },
    { name: "Limão", qty: "6 unidades", section: "Hortifrúti" }
  ],

  outros: [
    { name: "Mel", qty: "1 pote pequeno (250g)", section: "Mercearia" },
    { name: "Canela em pó", qty: "verificar se tem — 1 saquinho", section: "Temperos" },
    { name: "Cúrcuma em pó", qty: "verificar se tem — 1 saquinho", section: "Temperos" },
    { name: "Páprica defumada", qty: "verificar se tem — 1 saquinho", section: "Temperos" },
    { name: "Cominho em pó", qty: "verificar se tem — 1 saquinho", section: "Temperos" },
    { name: "Orégano seco", qty: "verificar se tem", section: "Temperos" },
    { name: "Uva-passa ou tâmara seca", qty: "100g", section: "Mercearia" },
    { name: "Chá de spearmint (hortelã selvagem)", qty: "1 caixa (sachês)", section: "Mercearia" }
  ],

  suplementos: [
    { name: "Whey protein", qty: "verificar estoque", section: "Suplementos" },
    { name: "Creatina monohidratada", qty: "verificar estoque (repor quando < 100g)", section: "Suplementos" },
    { name: "Multivitamínico", qty: "verificar estoque", section: "Suplementos" },
    { name: "Ômega-3 (cápsulas)", qty: "verificar estoque", section: "Suplementos" },
    { name: "Vitamina D3 + K2 (cápsulas)", qty: "verificar estoque", section: "Suplementos" }
  ]

};
