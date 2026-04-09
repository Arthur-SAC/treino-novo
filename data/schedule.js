// ============================================================
// data/schedule.js — Dados de programação semanal e cards diários
// Contém: WEEK_SCHEDULE, DAY_CARD_LAYOUTS, DAILY_CARDS
// ============================================================

const WEEK_SCHEDULE = {
  1: { type: "treino", workout: "Lower A", label: "💪 Lower A (Glúteo heavy)", warmup: "lower", cooldown: "lower" },
  2: { type: "descanso-ativo", workout: null, label: "🧘 Yoga + Rebolar", warmup: null, cooldown: null },
  3: { type: "treino", workout: "Upper", label: "💪 Upper Body", warmup: "upper", cooldown: "upper" },
  4: { type: "ativacao-leve", workout: null, label: "🟡 Ativação + Caminhada", warmup: null, cooldown: null },
  5: { type: "treino", workout: "Lower B", label: "💪 Lower B (Coxas + Quadril)", warmup: "lower", cooldown: "lower" },
  6: { type: "treino", workout: "Gluteo Isolado", label: "💪 Glúteo Isolado + Core", warmup: "lower", cooldown: "lower" },
  0: { type: "descanso-total", workout: null, label: "😴 Descanso total", warmup: null, cooldown: null },
};

const DAY_CARD_LAYOUTS = {
  "treino": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "pre_treino", "treino", "pos_treino", "bonus_sensual", "jantar", "rotina_noturna"],
  "descanso-ativo": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "yoga_rebolar", "pos_atividade", "bonus_sensual", "jantar", "rotina_noturna"],
  "ativacao-leve": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "ativacao_leve", "bonus_sensual", "jantar", "rotina_noturna"],
  "descanso-total": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "descanso", "bonus_sensual", "jantar", "rotina_noturna"]
};

const DAILY_CARDS = {
  acordar: {
    icon: "☀️",
    time: "06:00",
    title: "Ao Acordar",
    content: {
      intro: "O jeito que você começa o dia define o resto dele. Esses primeiros minutos são sagrados — cada passo aqui prepara seu corpo pra render o dia todo.",
      steps: [
        {
          name: "Hidratação em jejum",
          description: "Beba uma garrafa inteira de água (700ml) ANTES de qualquer coisa. Não precisa ser gelada — temperatura ambiente ou morna está ótimo. Beba com calma, em goles grandes.",
          why: "Após 7-8h de sono, seu corpo está desidratado. A água em jejum reativa o metabolismo, ajuda os rins a filtrar, e faz sua pele começar o dia hidratada de dentro pra fora.",
          duration: "2min"
        },
        {
          name: "Kegel Matinal — Protocolo Rápido",
          description: "Sente na cama ou fique de pé. Contraia o músculo do assoalho pélvico (como se fosse segurar o xixi) rapidamente: contraia 1 segundo, solte 1 segundo. Faça 10 contrações seguidas. Descanse 10 segundos. Repita mais 2 vezes (total: 3 séries de 10).",
          why: "O Kegel fortalece o assoalho pélvico, melhora o controle, intensifica sensações íntimas e previne problemas futuros. Fazer de manhã cria o hábito e começa o dia ativando essa musculatura.",
          duration: "2min"
        },
        {
          name: "Vacuum Abdominal",
          description: "De pé ou de quatro apoios. Solte TODO o ar dos pulmões pela boca. Com os pulmões vazios, puxe o umbigo pra dentro e pra cima, como se quisesse encostar o umbigo nas costas. Segure 20 segundos (ou o quanto aguentar). Solte, respire normal. Repita 3 vezes.",
          why: "O vacuum trabalha o transverso abdominal — o músculo mais profundo do abdômen, que funciona como um 'espartilho natural'. Com o tempo, ele afina a cintura e melhora a postura. É assim que se marca a silhueta ampulheta.",
          duration: "2min"
        },
        {
          name: "Mobilidade Matinal (5 minutos)",
          description: "Faça cada movimento devagar, sem forçar:\n\n1. **Alongamento do flexor do quadril** (30s cada lado) — Ajoelhe com um pé à frente, empurre o quadril pra frente suavemente. Você sente na frente da coxa de trás.\n\n2. **Torção torácica** (30s cada lado) — De quatro apoios, coloque uma mão atrás da cabeça e gire o tronco pro lado, abrindo o peito pro teto. Volte devagar.\n\n3. **Círculos de quadril** (30s cada direção) — De pé, mãos na cintura, faça círculos amplos com o quadril. 10 pra cada lado.\n\n4. **Cat-Cow** (1 min) — De quatro apoios, arqueie as costas pra cima (gato) e depois deixe a barriga cair e olhe pra cima (vaca). Uma respiração completa em cada posição.\n\n5. **Rotação de pescoço** (30s) — Círculos lentos com a cabeça. 5 pra cada lado.",
          why: "Você fica 8h+ sentada por dia. Isso encurta o flexor do quadril (que DESLIGA o glúteo), trava a coluna torácica e enrijece o pescoço. 5 minutos de manhã desfaz o estrago e prepara o corpo pro treino.",
          duration: "5min"
        }
      ]
    }
  },

  skincare_manha: {
    icon: "🧴",
    time: "06:15",
    title: "Skincare Manhã",
    content: {
      intro: "A ordem dos produtos importa! Cada camada prepara a pele pra próxima. Pule um passo e os outros perdem eficácia.",
      steps: "dynamic:skincare_morning"
    }
  },

  cafe: {
    icon: "☕",
    time: "07:00",
    title: "Café da Manhã",
    mealId: "cafe",
    content: {
      intro: "Primeira refeição do dia — combina proteína + carboidrato pra começar com energia e saciedade. Tome o chá de spearmint junto (1ª xícara do dia).",
      supplements: "Suplementos agora: multivitamínico + creatina (se for no shake)"
    }
  },

  lanche_manha: {
    icon: "🍎",
    time: "10:00",
    title: "Lanche da Manhã",
    mealId: "lanche1",
    content: {
      intro: "Comer a cada 3h mantém o metabolismo ativo e evita que você chegue com fome demais no almoço. Não pule esse lanche!",
      supplements: "Chá de spearmint — 1ª xícara 🌿"
    }
  },

  almoco: {
    icon: "🍽️",
    time: "12:00",
    title: "Almoço",
    mealId: "almoco",
    content: {
      intro: "Refeição principal do dia. Monte o prato com: ½ de vegetal/salada, ¼ de proteína, ¼ de carboidrato. Coma devagar — leva 20min pro cérebro registrar saciedade.",
      supplements: "Ômega-3 agora (absorve melhor com gordura da refeição)"
    }
  },

  jantar: {
    icon: "🌙",
    time: "20:00",
    title: "Jantar",
    mealId: "jantar",
    content: {
      intro: "Última refeição grande do dia. Proteína é essencial aqui — seu corpo vai usar durante o sono pra reconstruir músculo.",
      supplements: "Vitamina D3+K2 com a refeição"
    }
  },

  pre_treino: {
    icon: "⚡",
    time: "16:00",
    title: "Pré-Treino",
    mealId: "pretreino",
    content: {
      intro: "Coma 45-60 minutos antes do treino. Carboidrato aqui é combustível puro — vai direto pro músculo durante o exercício.",
      supplements: "Chá de spearmint — 2ª xícara 🌿\nCreatina (5g) se não tomou no café"
    }
  },

  treino: {
    icon: "💪",
    time: "17:40",
    title: "Treino do Dia",
    content: {
      intro: "dynamic:workout_intro",
      steps: "dynamic:workout"
    }
  },

  pos_treino: {
    icon: "🐕",
    time: "19:00",
    title: "Pós-Treino",
    content: {
      intro: "A janela pós-treino é quando seu corpo está mais receptivo a nutrientes. Aproveite!",
      steps: [
        {
          name: "Shake Pós-Treino",
          description: "Whey protein (1 dose/30g) + banana + água ou leite. Beba nos primeiros 30min após o treino.",
          why: "Proteína rápida pro músculo que acabou de ser estimulado. A banana repõe glicogênio.",
          duration: "5min"
        },
        {
          name: "Passeio com os Cães",
          description: "Caminhada tranquila de ~25 minutos. Ritmo leve, sem pressa.",
          why: "Cardio leve pós-treino ajuda na recuperação ativa — aumenta fluxo sanguíneo pros músculos sem sobrecarregar. Também baixa o cortisol do treino.",
          duration: "25min"
        },
        {
          name: "Alongamento Pós-Treino",
          description: "dynamic:cooldown",
          why: "Alongar após o treino reduz dor muscular do dia seguinte (DOMS), melhora flexibilidade e ajuda o corpo a sair do modo 'luta' pro modo 'recuperação'.",
          duration: "5-8min"
        }
      ]
    }
  },

  lanche_tarde: {
    icon: "🍌",
    time: "16:00",
    title: "Lanche da Tarde",
    mealId: "pretreino",
    content: {
      intro: "Em dia sem treino pesado, esse lanche é mais leve. Mantenha a proteína pra não perder músculo.",
      supplements: "Chá de spearmint — 2ª xícara 🌿"
    }
  },

  yoga_rebolar: {
    icon: "🧘",
    time: "17:00",
    title: "Yoga + Rebolar",
    content: {
      intro: "Hoje é dia de mobilidade e movimento. Yoga trabalha flexibilidade e consciência corporal. Rebolar treina isolamento de quadril — fundamental pra dança e pra postura feminina.",
      steps: [
        {
          name: "Yoga de Quadril (20min)",
          description: "Siga a sequência de yoga da aba Treino > Yoga. Foque nas posições de abertura de quadril: Pombo, Borboleta, Guerreiro 2, Lagarto. Segure cada posição por 5-8 respirações profundas.",
          why: "Quadril flexível = glúteo mais ativo nos treinos + menos dor lombar + mais amplitude de movimento. Tudo conectado.",
          duration: "20min"
        },
        {
          name: "Rebolar / Movimento de Quadril (15min)",
          description: "Vá pra aba Treino > Rebolar e siga os exercícios do dia. Pratique ondulações, círculos de quadril, body wave, e isolamento. Coloque uma música que você goste!",
          why: "Rebolar treina controle motor fino do quadril, ativa músculos estabilizadores que não são pegos na musculação, e constrói confiança corporal.",
          duration: "15min"
        },
        {
          name: "Ativação Glúteo Esquerdo",
          description: "OBRIGATÓRIO todo dia. Deite de lado esquerdo pra cima. Faça 15 abduções lentas com a perna esquerda. Coloque a mão no glúteo esq pra sentir a contração. Depois: 15 fire hydrants do lado esquerdo. Descanse 30s. Repita 2x.",
          why: "O glúteo esquerdo é mais fraco que o direito (assimetria comum). Se não corrigir, o corpo compensa e a diferença aumenta. Esse trabalho isolado equilibra os dois lados.",
          duration: "10min"
        }
      ]
    }
  },

  pos_atividade: {
    icon: "🚶",
    time: "18:30",
    title: "Pós-Atividade",
    content: {
      intro: "Atividade leve de hoje finalizada. Hora de desacelerar.",
      steps: [
        {
          name: "Passeio com os Cães",
          description: "Caminhada tranquila de ~25 minutos com os dogs.",
          why: "Movimento leve pós-yoga ajuda a integrar os alongamentos e mantém o corpo ativo sem sobrecarregar.",
          duration: "25min"
        }
      ]
    }
  },

  ativacao_leve: {
    icon: "🟡",
    time: "17:00",
    title: "Ativação + Caminhada",
    content: {
      intro: "Quinta é dia leve, mas NÃO é dia de ficar parada. A ativação do glúteo esquerdo é obrigatória. O resto você escolhe.",
      steps: [
        {
          name: "Ativação Glúteo Esquerdo (OBRIGATÓRIO)",
          description: "Mesmo protocolo de sempre: deite de lado, 15 abduções lentas com a perna esquerda, mão no glúteo pra sentir. 15 fire hydrants. 2 séries. Foque na contração, não na velocidade.",
          why: "Corrigir a assimetria entre glúteo direito e esquerdo. Mesmo em dia de descanso, isso não sobrecarrega — é ativação, não treino.",
          duration: "10min"
        },
        {
          name: "Escolha: Caminhada OU Yoga leve",
          description: "Opção 1: Caminhada de 25-30 minutos (pode ser passeio com os dogs mais longo)\nOpção 2: Yoga de quadril leve (15-20min)\nOpção 3: Escada do prédio (suba e desça 5-10x)\n\nEscolha o que sentir vontade. O importante é se mover.",
          why: "Dia de 'descanso ativo' ajuda na recuperação sem sobrecarregar. Movimento leve aumenta fluxo sanguíneo pros músculos que treinaram forte nos dias anteriores.",
          duration: "20-30min"
        }
      ]
    }
  },

  descanso: {
    icon: "😴",
    time: "15:00",
    title: "Descanso",
    content: {
      intro: "Domingo é dia de descanso REAL. Seu corpo precisa disso pra crescer.",
      steps: [
        {
          name: "Por que descansar é treinar",
          description: "Músculo NÃO cresce durante o treino — cresce durante o descanso. Quando você treina, cria microlesões nas fibras musculares. Durante o descanso (especialmente o sono), seu corpo reconstrói essas fibras MAIS FORTES e MAIORES. Sem descanso adequado = overtraining = sem resultado.",
          why: "Pular o descanso não acelera resultados — atrasa. Overtraining causa cortisol alto, que aumenta gordura abdominal e dificulta ganho muscular.",
          duration: null
        },
        {
          name: "Sugestões pro dia",
          description: "• Alongamento leve e gostoso (só se tiver vontade)\n• Passeio tranquilo com os dogs\n• Cuidar do cabelo (máscara de hidratação se for dia)\n• Skincare caprichado\n• Ler, assistir, descansar de verdade\n• Preparar marmitas da semana (meal prep)",
          why: "Descanso não precisa ser produtivo. Mas se quiser aproveitar, o autocuidado conta como investimento no processo.",
          duration: null
        }
      ]
    }
  },

  rotina_noturna: {
    icon: "🌛",
    time: "22:00",
    title: "Rotina Noturna",
    content: {
      intro: "A noite é quando seu corpo recupera, constrói músculo e renova a pele. Uma rotina noturna bem feita multiplica os resultados de tudo que você fez durante o dia.",
      steps: [
        {
          name: "Skincare Noite",
          description: "dynamic:skincare_night",
          why: "A pele se regenera durante o sono. Os ativos noturnos (niacinamida, retinol) só funcionam de noite, sem interferência do sol.",
          duration: "5min"
        },
        {
          name: "Kegel Noturno — Protocolo Longo",
          description: "Deite na cama, relaxe o corpo. Contraia o assoalho pélvico com força máxima e SEGURE por 10 segundos. Solte e descanse 10 segundos. Repita 5 vezes. Depois, faça o 'elevador': contraia progressivamente em 3 níveis (térreo → 1º andar → 2º andar), segure 5s no topo, e desça devagar. Repita 3 vezes.",
          why: "O protocolo longo à noite desenvolve resistência do assoalho pélvico. Combinado com o rápido da manhã, você treina tanto velocidade quanto força da musculatura. Resultados visíveis em 4-8 semanas.",
          duration: "3min"
        },
        {
          name: "Suplementos Noturnos",
          description: "Tome a melatonina (dose ANVISA: 0.21mg) 30-60 minutos ANTES de deitar. Se tomar colágeno, é agora também — 10g dissolvido em água.",
          why: "Melatonina regula o ciclo do sono. Não é sonífero — é um sinal pro corpo de que está na hora de desacelerar. Colágeno é melhor absorvido em jejum/estômago vazio.",
          duration: "1min"
        },
        {
          name: "Preparo pro Sono",
          description: "Meta: largar o celular às 22h e dormir às 22:30.\n\n• Diminua as luzes do quarto (ou use modo noturno no celular se precisar)\n• Evite telas brilhantes — a luz azul bloqueia a melatonina natural\n• Temperatura ideal: quarto fresco (se possível)\n• Se a mente estiver agitada: 5 respirações diafragmáticas (inspira 4s, segura 4s, solta 6s)",
          why: "Sono é o fator #1 de recuperação muscular, saúde da pele e regulação hormonal. Menos de 7h = cortisol alto = mais gordura abdominal + menos ganho muscular. Não existe treino que compense sono ruim.",
          duration: null
        }
      ]
    }
  },

  bonus_sensual: {
    icon: "💃",
    time: "19:30",
    title: "Bônus: Movimento Sensual (opcional)",
    content: {
      intro: "dynamic:sensual_intro",
      steps: "dynamic:sensual_steps"
    }
  }
};
