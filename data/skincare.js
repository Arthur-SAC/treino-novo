// ============================================================
// data/skincare.js — Rotina de skincare e cuidados corporais
// Dados personalizados para pele parda, acne ativa, manchas.
// ============================================================

var SKINCARE = {

  // ─── SKINCARE MANHÃ ────────────────────────────────────────
  morning: {
    label: "Skincare Manhã",
    steps: [
      {
        name: "Limpeza",
        product: "Sabonete facial (gel ou espuma)",
        amount: "Quantidade do tamanho de uma moeda",
        howTo: "Molhe o rosto com água fria. Aplique o sabonete nas pontas dos dedos e faça movimentos circulares suaves por todo o rosto — testa, nariz, bochechas e queixo — durante 30 segundos. Nunca use as unhas, sempre as pontas dos dedos. Enxágue com água fria (não quente — a fria fecha os poros). Seque batendo levemente com a toalha, nunca esfregue.",
        waitTime: null,
        tip: "Água fria no enxágue final ajuda a fechar os poros e controlar a oleosidade ao longo do dia."
      },
      {
        name: "Tônico",
        product: "Tônico facial sem álcool",
        amount: "3 a 4 gotas",
        howTo: "Aplique as gotas diretamente nas mãos ou em um chumaço de algodão. Passe suavemente por todo o rosto em movimentos ascendentes (de baixo pra cima), sem esfregar. Dê atenção especial às áreas com poros dilatados (nariz e queixo). Não enxágue.",
        waitTime: "30 segundos",
        tip: "Tônico sem álcool não resseca — ele equilibra o pH da pele e prepara para absorver melhor o próximo passo."
      },
      {
        name: "Sérum Vitamina C",
        product: "Sérum com Vitamina C 10–20%",
        amount: "3 a 4 gotas",
        howTo: "Com o rosto ainda levemente úmido do tônico, aplique as gotas nas pontas dos dedos. Use batidinhas suaves (não esfregue, bata como se estivesse digitando devagar) por todo o rosto. Dê atenção especial às manchas escuras — fique alguns segundos fazendo as batidinhas sobre elas. Não esqueça as laterais do rosto e a área ao redor dos olhos (sem tocar o olho).",
        waitTime: "2 a 3 minutos",
        tip: "A Vitamina C é antioxidante e clareante — ela clareia manchas e protege contra os radicais livres do sol. Funciona ainda melhor com protetor solar depois."
      },
      {
        name: "Hidratante",
        product: "Hidratante facial oil-free (pele oleosa/mista)",
        amount: "Quantidade do tamanho de uma ervilha",
        howTo: "Aplique pequenos pontos na testa, no nariz, em cada bochecha e no queixo. Com os dedos, espalhe em movimentos suaves de baixo pra cima — sempre ascendentes, nunca puxando a pele pra baixo. Não esqueça o pescoço, que envelhece junto com o rosto.",
        waitTime: "1 a 2 minutos",
        tip: "Oil-free não significa que resseca — é pele oleosa que também precisa de hidratação, senão produz ainda mais óleo."
      },
      {
        name: "Protetor Solar",
        product: "Protetor solar facial FPS 30+ (de preferência FPS 50+)",
        amount: "Duas linhas sobre os dois dedos indicador e médio juntos",
        howTo: "Aplique em pequenos pontos pelo rosto inteiro: testa, nariz, bochechas e queixo. Espalhe com movimentos suaves, cobrindo TODO o rosto — incluindo as orelhas e o pescoço. Não esqueça as pálpebras superiores (área comum de manchas). Deixe absorver antes de sair de casa.",
        waitTime: null,
        tip: "Reaplicar a cada 2–3 horas em dia de sol forte — especialmente em Aracaju. Sem protetor solar, vitamina C e tratamentos de manchas têm efeito muito menor."
      }
    ]
  },

  // ─── SKINCARE NOITE ────────────────────────────────────────
  night: {
    label: "Skincare Noite",
    steps: [
      {
        name: "1ª Limpeza — Oleosa",
        product: "Água micelar ou óleo de limpeza",
        amount: "Quantidade generosa no algodão ou nas mãos",
        howTo: "Aplique no rosto SECO — não molhe antes. Se usar água micelar, embeba bem um chumaço de algodão e pressione suavemente sobre a pele em movimentos circulares lentos por 1 minuto inteiro. Se usar óleo, aplique nas mãos secas e massageie em círculos por todo o rosto. Esse passo dissolve o protetor solar, a maquiagem e a oleosidade do dia. Enxágue com água morna.",
        waitTime: null,
        tip: "Esse passo é indispensável se usou protetor solar — sem ele, o próximo sabonete não remove o filtro completamente."
      },
      {
        name: "2ª Limpeza — Aquosa",
        product: "Sabonete facial (o mesmo da manhã)",
        amount: "Quantidade do tamanho de uma moeda",
        howTo: "Molhe o rosto com água morna. Aplique o sabonete com movimentos circulares suaves nas pontas dos dedos por 30 segundos. Enxágue completamente com água morna. Seque batendo levemente com a toalha, nunca esfregando.",
        waitTime: null,
        tip: "A dupla limpeza garante que nenhum resíduo de protetor ou sujeira fique na pele durante a noite."
      },
      {
        name: "Tônico",
        product: "Tônico facial sem álcool",
        amount: "3 a 4 gotas",
        howTo: "Igual ao passo da manhã — aplique nas mãos ou no algodão e passe em movimentos ascendentes por todo o rosto. Não enxágue.",
        waitTime: "30 segundos",
        tip: "Equilibra o pH pós-limpeza e prepara a pele para absorver melhor o tratamento noturno."
      },
      {
        name: "Tratamento (alternado)",
        product: "ÁCIDO GLICÓLICO 7–10% (Seg/Qua/Sex) OU NIACINAMIDA 10% (Ter/Qui/Sáb)",
        amount: "3 a 4 gotas ou uma pequena quantidade",
        howTo: "Ácido glicólico (Seg/Qua/Sex): aplique com batidinhas suaves por todo o rosto, evitando a área ao redor dos olhos. Não enxágue. Aguarde absorver. Niacinamida (Ter/Qui/Sáb): aplique com batidinhas suaves focando nas manchas escuras do rosto. Também não enxágue. NUNCA use os dois na mesma noite — o ácido e a niacinamida juntos podem causar vermelhidão.",
        waitTime: "1 a 2 minutos",
        tip: "No domingo dê um dia de descanso pra pele — só tônico e hidratante. Se sentir ardência ou vermelhidão com o ácido, espaçe mais os dias."
      },
      {
        name: "Hidratante Noturno",
        product: "Hidratante facial (pode ser mais rico que o da manhã)",
        amount: "Quantidade do tamanho de uma ervilha",
        howTo: "Aplique em movimentos ascendentes por todo o rosto e pescoço. À noite não precisa se preocupar com brilho ou oleosidade — o hidratante pode ser levemente mais nutritivo. Se tiver pele muito oleosa e o tratamento já for hidratante, use pouca quantidade.",
        waitTime: null,
        tip: "A pele se regenera à noite — um bom hidratante noturno potencializa os efeitos do tratamento."
      }
    ]
  },

  // ─── CUIDADOS CORPORAIS ────────────────────────────────────
  body: {
    label: "Cuidados Corporais",
    sections: [
      {
        name: "Axilas e Virilhas Escuras",
        frequency: "Rotina diária + tratamento 3x/semana",
        daily: [
          "Use desodorante sem alumínio (o alumínio oxida e escurece a pele com o tempo)",
          "Hidrate as axilas e virilhas após o banho, quando a pele ainda está levemente úmida",
          "Evite roupas muito apertadas nessas áreas — o atrito constante causa escurecimento"
        ],
        treatment: [
          {
            step: "Esfoliação suave",
            frequency: "2x por semana (ex: terça e sábado)",
            howTo: "Misture açúcar cristal com óleo de coco até formar uma pasta. Aplique nas axilas e virilhas com movimentos circulares suaves por 1 a 2 minutos. Enxágue com água morna. Não force — a esfoliação deve ser delicada nessas áreas.",
            product: "Açúcar cristal + óleo de coco (caseiro) ou esfoliante corporal suave de farmácia"
          },
          {
            step: "Ácido glicólico noturno",
            frequency: "3x por semana NOS DIAS sem esfoliação (ex: segunda, quarta, sexta)",
            howTo: "Após o banho e a pele seca, aplique o ácido glicólico com um algodão ou direto nas pontas dos dedos nas axilas e virilhas. Não enxágue. Deixe agir durante a noite. NUNCA aplique em pele esfoliada no mesmo dia — aguarde pelo menos 48h entre esfoliação e ácido.",
            product: "Ácido glicólico 7–10% (genérico de farmácia, ex: Dermacyd, manipulado)"
          },
          {
            step: "Creme clareador noturno",
            frequency: "Toda noite, após o ácido (ou no lugar dele nos dias de descanso)",
            howTo: "Aplique uma pequena quantidade de creme com niacinamida nas axilas e virilhas. Massageie até absorver. Use toda noite como último passo corporal.",
            product: "Bepantol Derma, creme com niacinamida ou clareador corporal (Nívea Luminous, por ex.)"
          }
        ],
        timeline: "4 a 8 semanas para notar diferença, 3 a 6 meses para resultado significativo. Consistência é tudo.",
        warnings: [
          "NUNCA use limão nas axilas ou virilhas — causa manchas ainda piores ao sol (fotossensibilização)",
          "NUNCA use bicarbonato de sódio — irrita e pode escurecer mais",
          "Se sentir ardência, vermelhidão ou descamação com o ácido, pare por 3 dias e reintroduza com menos frequência",
          "Se tiver feridas abertas ou pelo encravado inflamado nessas áreas, não aplique ácido"
        ]
      },
      {
        name: "Manchas nas Costas",
        frequency: "Cuidado diário + esfoliação semanal",
        daily: [
          "Passe protetor solar corporal nas costas em dias de praia, piscina ou sol forte",
          "Hidrate as costas após o banho (pode ser o mesmo hidratante corporal)",
          "Use roupas de algodão — tecidos sintéticos retêm suor e pioram as manchas"
        ],
        treatment: [
          {
            step: "Esfoliação corporal nas costas",
            frequency: "1x por semana",
            howTo: "No banho, use um esfoliante corporal ou a mistura de açúcar com óleo de coco. Com uma esponja de banho ou as mãos, faça movimentos circulares suaves nas costas. Enxágue bem. Hidrate logo depois.",
            product: "Esfoliante corporal de farmácia ou açúcar + óleo de coco"
          },
          {
            step: "Sabonete com ácido salicílico (opcional)",
            frequency: "No banho diário, se tiver acne ativa nas costas",
            howTo: "Use como sabonete de banho nas costas — deixe agir por 1 minuto antes de enxáguar. Não use o mesmo dia que for esfoliar.",
            product: "Sabonete com ácido salicílico 2% (farmácia — ex: Stridex, Vichy, similares)"
          }
        ],
        timeline: "Manchas pós-acne nas costas demoram mais — espere 2 a 4 meses com consistência.",
        warnings: [
          "Sem protetor solar nas costas, as manchas ficam mais escuras com o sol",
          "Nunca espreme espinhas nas costas — aumenta o risco de mancha e cicatriz"
        ]
      },
      {
        name: "Foliculite (Pelos Encravados)",
        frequency: "Cuidado antes e após a epilação",
        daily: [
          "Hidrate diariamente a pele das pernas e outras áreas epiladas — pele seca prende mais pelos",
          "Use calças e leggings de algodão sempre que possível após a epilação"
        ],
        treatment: [
          {
            step: "Esfoliação pré-epilação",
            frequency: "24 horas ANTES de epilar (nunca no mesmo dia)",
            howTo: "Esfolie suavemente as áreas que serão epiladas — pernas, virilha, axilas. Use movimentos circulares por 1 a 2 minutos. Enxágue e hidrate bem. Isso libera os pelos que estariam presos sob a pele antes de epilar.",
            product: "Esfoliante corporal suave ou açúcar + óleo de coco"
          },
          {
            step: "Epilação",
            frequency: "Conforme necessário",
            howTo: "Epilar com a pele LIMPA e SECA (sem hidratante — o pelo escorrega). Vá contra o sentido do crescimento do pelo para arrancar pela raiz. Mantenha a pele esticada com a outra mão. Faça devagar — apressar aumenta a dor e o risco de encravado.",
            product: "Depilador elétrico (epilador)"
          },
          {
            step: "Cuidado pós-epilação imediato",
            frequency: "Logo após epilar",
            howTo: "Aplique o creme calmante imediatamente após a epilação. Faça movimentos suaves, sem pressão. Se a pele estiver muito vermelha, aplique uma compressa fria por 2 a 3 minutos antes do creme.",
            product: "Bepantol Derma, creme com óleo de melaleuca (tea tree) ou gel de aloe vera"
          },
          {
            step: "Cuidado nas 24h pós-epilação",
            frequency: "No dia seguinte à epilação",
            howTo: "Evite roupas apertadas, calor intenso (sol forte, academia intensa) e esfoliação nas próximas 24h. Hidrate bem a pele no dia seguinte.",
            product: "Hidratante corporal sem perfume"
          }
        ],
        timeline: "Com esfoliação regular antes da epilação, os encravados diminuem bastante em 2 a 4 semanas.",
        warnings: [
          "Se um pelo encravado inflamar (vermelho, dolorido, com pus), aplique compressa morna por 5 minutos — isso ajuda a abrir. Não espreme e não tente tirar com agulha em casa",
          "Se piorar ou multiplicar, a farmácia tem creme com antibiótico tópico (ex: neomicina) ou consulte um dermatologista",
          "Nunca epilar pele irritada, com espinhas abertas ou inflamação ativa"
        ]
      }
    ]
  }

};
