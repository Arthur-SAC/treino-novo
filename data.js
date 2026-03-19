// ============================================================
// DATA.JS — App de Transformação Corporal Arthur
// Todos os dados hardcoded. Texto em Português Brasileiro.
// ============================================================

// ─── 1. MOTIVATIONAL_QUOTES ─────────────────────────────────
const MOTIVATIONAL_QUOTES = [
  "Cada repetição te aproxima da mulher que você já é 💪",
  "Amazona mode: ON 🔥",
  "Seu corpo, suas regras, sua transformação ✨",
  "A cintura não se marca sozinha — bora vacuum! 💨",
  "Você não precisa de permissão pra brilhar 👑",
  "Glúteo não cresce no sofá — bora treinar! 🍑",
  "Consistência supera perfeição, sempre 💜",
  "Hoje é dia de ser mais forte que ontem 🔥",
  "A dor do treino passa, o resultado fica ✨",
  "Você já sobreviveu a 100% dos seus piores dias 💪",
  "Não é sobre motivação, é sobre disciplina 🏋️",
  "Seu futuro eu vai te agradecer por hoje 🌟",
  "Foco na jornada, não só no destino 🦋",
  "Transformação começa de dentro pra fora 💫",
  "Bora construir o corpo que você merece! 🔥",
  "Cada gota de suor é um passo mais perto 💧",
  "Você é mais forte do que imagina 💪",
  "Não desista — seus glúteos estão quase acordando! 🍑",
  "Postura de rainha, treino de guerreira 👑",
  "Silhueta ampulheta em construção ⏳",
  "O espelho vai contar uma nova história 🪞",
  "Sua melhor versão está sendo construída agora ✨",
  "Menos desculpas, mais agachamento 🏋️",
  "Vacuou hoje? Sua cintura agradece! 💨",
  "Quem disse que princesa não levanta peso? 👑",
  "Um dia de cada vez, uma série de cada vez 💜",
  "O progresso é lento, mas desistir não acelera nada 🌟",
  "Confia no processo — os resultados vêm! 🔥",
  "Hoje o glúteo esquerdo vai trabalhar DOBRADO! 🍑",
  "Você escolheu mudar. Isso já te faz incrível 💫"
];

// ─── 2. DAILY_TIPS ──────────────────────────────────────────
const DAILY_TIPS = [
  "Postura: ombros pra trás e pra baixo. Imagina que tem um fio puxando o topo da sua cabeça pro teto.",
  "Beba pelo menos 500ml de água ANTES do café da manhã. Seu corpo desidrata durante a noite.",
  "Proteína em TODA refeição — é o tijolo que constrói seu músculo.",
  "Durma 7-8h. Músculo não cresce no treino, cresce no descanso!",
  "Vacuum pode ser feito em qualquer lugar — fila do mercado, trânsito, no banho.",
  "Alongar o flexor do quadril todo dia corrige a postura e destrava o glúteo.",
  "Foco na conexão mente-músculo: pense no músculo que está trabalhando.",
  "Não pule o aquecimento! 7 minutos previnem semanas de lesão.",
  "Mastigue devagar — leva 20 minutos pro cérebro registrar saciedade.",
  "Troque o elevador pela escada. Cada degrau ativa o glúteo.",
  "Protetor solar TODO dia, mesmo nublado. Sua pele agradece em 10 anos.",
  "Ative o glúteo esquerdo conscientemente — coloque a mão e aperte antes de cada série.",
  "Carboidrato NÃO é inimigo. É combustível pro treino. Escolha os integrais.",
  "Se sentir dor (não desconforto), PARE. Dor é sinal de algo errado.",
  "Prepare as refeições no domingo — facilita a semana toda e evita tentações.",
  "Respire fundo entre as séries. Oxigênio = recuperação mais rápida.",
  "Anote o peso usado em cada exercício. Progressão de carga = resultados.",
  "Estresse menos. Cortisol alto atrapalha perda de gordura e ganho muscular.",
  "Coloque alarme pra beber água a cada 2 horas. Desidratação afeta TUDO.",
  "Tire fotos de progresso a cada 15 dias. O espelho engana, a foto não.",
  "Levante a cada 50min do computador. Seu flexor do quadril agradece e o glúteo ativa.",
  "Melatonina: tome 30-60min ANTES de deitar. Dose baixa (0.5-1mg) já funciona.",
  "Multivitamínico com zinco e selênio ajuda na função íntima e recuperação muscular.",
  "Colágeno hidrolisado (10g/dia) melhora pele, cabelo e articulações.",
  "Distribua proteína ao longo do dia (a cada 3-4h). Corpo absorve melhor ~40g por vez.",
  "Ômega-3: anti-inflamatório natural. 1 cápsula no almoço se não come peixe.",
  "Ficar sentada muito tempo? Aperte o glúteo 10x a cada hora — ativação isométrica."
];

// ─── 3. EXERCISE_VIDEOS ─────────────────────────────────────
const EXERCISE_VIDEOS = {
  "glute-bridge": { youtubeId: "Z-dSAVAkC-8", gifUrl: "https://static.exercisedb.dev/media/u0cNiij.gif", title: "Glute Bridge — Como fazer corretamente", tips: "Empurre o quadril pro teto, aperte forte no topo 2-3seg", commonMistakes: "Hiperextender a lombar no topo. Empurrar com as costas em vez do glúteo. Pés muito longe do corpo." },
  "sumo-squat": { youtubeId: "mOtY705EJYg", gifUrl: "https://static.exercisedb.dev/media/dzz6BiV.gif", title: "Agachamento Sumo com Halter", tips: "Pés bem abertos, dedos pra fora, desça devagar", commonMistakes: "Joelhos caindo pra dentro. Inclinar o tronco pra frente. Não descer o suficiente." },
  "leg-press": { youtubeId: "bfHuhQPa4lc", gifUrl: "https://static.exercisedb.dev/media/2Qh2J1e.gif", title: "Leg Press pés altos", tips: "Pés no TOPO da plataforma = mais glúteo", commonMistakes: "Pés baixos na plataforma (tira ênfase do glúteo). Travar os joelhos no topo. Tirar a lombar do apoio." },
  "abdutora": { youtubeId: "GljAOyT5xLI", gifUrl: "https://static.exercisedb.dev/media/CHpahtl.gif", title: "Cadeira Abdutora", tips: "Segure 1seg na abertura máxima", commonMistakes: "Usar impulso em vez de força. Não segurar na abertura máxima. Inclinar o tronco." },
  "adutora": { youtubeId: "Wf602gn_9zU", gifUrl: "https://static.exercisedb.dev/media/oHsrypV.gif", title: "Cadeira Adutora", tips: "Interno de coxa = feminiza silhueta", commonMistakes: "Usar impulso. Não controlar a volta. Sentar torta na máquina." },
  "pullover": { youtubeId: "FK4rHfWKEac", gifUrl: "https://static.exercisedb.dev/media/9XjtHvS.gif", title: "Pullover com Halter", tips: "Abre a caixa torácica, silhueta ampulheta", commonMistakes: "Dobrar demais os cotovelos. Usar peso excessivo. Arquear a lombar." },
  "vacuum": { youtubeId: "NcWHmnVN9Ng", gifUrl: null, title: "Vacuum Abdominal", tips: "Solte TODO o ar, puxe umbigo pra dentro e pra cima", commonMistakes: "Não soltar todo o ar antes. Prender a respiração errado. Forçar o abdômen pra fora." },
  "abducao-deitada": { youtubeId: "7HWdwvAQFuY", gifUrl: "https://static.exercisedb.dev/media/7WaDzyL.gif", title: "Abdução Lateral Deitada com Caneleira", tips: "SEMPRE comece pelo lado ESQUERDO. Levante a perna até ~45 graus", commonMistakes: "Levantar a perna além do ponto de contração do glúteo. Girar o quadril pra trás. Fazer rápido demais sem controle." },
  "abducao-pe": { youtubeId: "o5KcItusG64", gifUrl: "https://static.exercisedb.dev/media/7WaDzyL.gif", title: "Abdução em Pé com Caneleira", tips: "Tronco reto, não incline. Caneleira no tornozelo", commonMistakes: "Inclinar o tronco pro lado oposto. Usar impulso. Não manter o core ativado." },
  "fire-hydrant": { youtubeId: "BLx5wSzafxg", gifUrl: null, title: "Fire Hydrant com Caneleira", tips: "De quatro apoios, levante o joelho pro lado mantendo 90 graus", commonMistakes: "Girar o tronco junto. Não manter o core ativado. Subir o joelho além da altura do quadril." },
  "stiff": { youtubeId: "CN_7cz3P-1U", gifUrl: "https://static.exercisedb.dev/media/hrVQWvE.gif", title: "Stiff com Halteres", tips: "Empurre o quadril PRA TRÁS, sinta atrás da coxa", commonMistakes: "Arredondar as costas. Dobrar os joelhos demais. Não empurrar o quadril pra trás." },
  "prancha": { youtubeId: "ASdvN_XEl_c", gifUrl: null, title: "Prancha Abdominal", tips: "Aperte abdômen e glúteo, corpo RETO", commonMistakes: "Quadril subindo (montanha). Quadril descendo (banana). Não ativar o core." },
  "prancha-lateral": { youtubeId: "zt7PjySXWCw", gifUrl: null, title: "Prancha Lateral", tips: "Marca a cintura", commonMistakes: "Quadril caindo. Ombro não alinhado com o pulso. Não ativar o oblíquo." },
  "hip-thrust": { youtubeId: "WA2Q1auA1zY", gifUrl: null, title: "Hip Thrust", tips: "Apoie costas no banco, empurre quadril pro teto", commonMistakes: "Hiperextender a lombar. Posição errada das costas no banco. Pés muito perto ou longe." },
  "bulgarian-split-squat": { youtubeId: "HTedLXOg89Y", gifUrl: null, title: "Agachamento Búlgaro", tips: "Pé traseiro no banco, foque no glúteo ao subir", commonMistakes: "Joelho passando do pé. Tronco inclinado demais. Pé traseiro muito tenso." },
  "step-up": { youtubeId: "7AtIjR-QqVA", gifUrl: "https://static.exercisedb.dev/media/gFyFj9z.gif", title: "Step Up com Halter", tips: "Empurre pelo calcanhar", commonMistakes: "Empurrar com o pé de baixo. Não subir pelo calcanhar. Tronco inclinado." },
  "good-morning": { youtubeId: "aAvJCDyG0m0", gifUrl: "https://static.exercisedb.dev/media/XlZ4lAC.gif", title: "Good Morning", tips: "Barra atrás do pescoço, flexione no quadril", commonMistakes: "Arredondar as costas. Dobrar os joelhos demais. Descer rápido demais." },
  "kickback-polia": { youtubeId: "XYCCcD0MxN8", gifUrl: "https://static.exercisedb.dev/media/HEJ6DIX.gif", title: "Kickback na Polia", tips: "Não arquear a lombar", commonMistakes: "Arquear a lombar. Usar impulso. Não controlar a volta." },
  "elevacao-pelvica": { youtubeId: "mFqvX2-UzoA", gifUrl: "https://static.exercisedb.dev/media/aWedzZX.gif", title: "Elevação Pélvica Pés Elevados", tips: "Pés no banco, quadril bem alto", commonMistakes: "Não subir o quadril o suficiente. Pés escorregando. Lombar compensando." },
  "dead-bug": { youtubeId: "uQfzuKBMJeE", gifUrl: "https://static.exercisedb.dev/media/iny3m5y.gif", title: "Dead Bug", tips: "Lombar colada no chão", commonMistakes: "Lombar saindo do chão. Movimentos rápidos sem controle. Prender a respiração." },
  "cable-pull-through": { youtubeId: "wV4j_CAOze8", gifUrl: "https://static.exercisedb.dev/media/OM46QHm.gif", title: "Cable Pull Through", tips: "Puxe com o quadril, não com os braços", commonMistakes: "Puxar com os braços. Não flexionar no quadril. Arredondar as costas." },
  "glute-ham-raise": { youtubeId: "m0AIU1dCVkU", gifUrl: null, title: "Glute Ham Raise", tips: "Controle a descida", commonMistakes: "Cair sem controle. Usar as mãos pra ajudar. Não ativar o posterior." },
  "kegel": { youtubeId: "3Pz2LxtOoPU", gifUrl: null, title: "Exercício Kegel", tips: "Identifique o músculo correto", commonMistakes: "Contrair o abdômen em vez do assoalho pélvico. Prender a respiração. Fazer rápido demais." },
  "alongamento-flexor": { youtubeId: "ZrHXejl-rYg", gifUrl: null, title: "Alongamento Flexor do Quadril", tips: "Posição correta do quadril", commonMistakes: "Joelho passando do pé. Não empurrar o quadril pra frente. Arquear a lombar." },
  "worlds-greatest-stretch": { youtubeId: "-CiWQ2IvY34", gifUrl: "https://static.exercisedb.dev/media/DFGXwZr.gif", title: "World's Greatest Stretch", tips: "Sequência completa", commonMistakes: "Pular etapas da sequência. Não segurar tempo suficiente. Respiração presa." },
  "cardio-esteira": { youtubeId: "KegIrmaClFQ", gifUrl: null, title: "Cardio Esteira Inclinada", tips: "Inclinação 8-12%, velocidade 5-6km/h", commonMistakes: "Segurar nas barras laterais. Inclinação muito baixa. Velocidade alta demais." },
  "circulos-quadril": { youtubeId: "b3qf3YzFgmU", gifUrl: null, title: "Círculos de Quadril — Mobilidade", tips: "Mãos na cintura, gira o quadril em círculos", commonMistakes: "" },
  "balanco-perna": { youtubeId: "jpmSaPEPErw", gifUrl: null, title: "Balanço de Perna — Aquecimento", tips: "Segure em algo, balance frente/trás e lateral", commonMistakes: "" },
  "agachamento-profundo": { youtubeId: "iUnwcn6f_7Y", gifUrl: null, title: "Agachamento Profundo — Mobilidade", tips: "Segure embaixo 30seg, cotovelos empurram joelhos pra fora", commonMistakes: "" },
  "polichinelo": { youtubeId: "yDSMdd8hiFg", gifUrl: "https://static.exercisedb.dev/media/HtfCpfi.gif", title: "Polichinelo — Aquecimento Cardio", tips: "Cardio leve pra aquecer o corpo", commonMistakes: "" },
  "fire-hydrant-ativacao": { youtubeId: "BLx5wSzafxg", gifUrl: null, title: "Fire Hydrant — Ativação Glúteo", tips: "Sem caneleira, só ativação do glúteo médio", commonMistakes: "" },
  "donkey-kick": { youtubeId: "NPVIiAvi1hM", gifUrl: null, title: "Donkey Kick — Ativação Glúteo", tips: "De quatro, chuta pra cima apertando o glúteo", commonMistakes: "" },
  "cat-cow": { youtubeId: "40Y1rukJs4E", gifUrl: null, title: "Gato e Vaca — Mobilidade Coluna", tips: "Arredonda e arqueia as costas alternando", commonMistakes: "" },
  "pombo-alongamento": { youtubeId: "fASdWDluHrc", gifUrl: null, title: "Pombo — Alongamento Quadril", tips: "Perna cruzada na frente, desça o tronco devagar", commonMistakes: "" },
  "borboleta-alongamento": { youtubeId: "6XT60SbKR3s", gifUrl: "https://static.exercisedb.dev/media/bWlZvXh.gif", title: "Borboleta — Alongamento", tips: "Solas dos pés juntas, pressione joelhos pra baixo", commonMistakes: "" },
  "glute-bridge-ativacao": { youtubeId: "eu5oejYxPBQ", gifUrl: "https://static.exercisedb.dev/media/u0cNiij.gif", title: "Glute Bridge — Ativação", tips: "Sem peso, foque em sentir o glúteo", commonMistakes: "" },
  "deadlift": { youtubeId: "ytGaGIn3SjE", gifUrl: null, title: "Levantamento Terra (Deadlift)", tips: "Quadril pra trás, barra rente ao corpo", commonMistakes: "Arredondar as costas. Subir com a lombar. Barra longe do corpo." },
  "remada-curvada": { youtubeId: "kBraFNjSJWQ", gifUrl: null, title: "Remada Curvada com Halteres", tips: "Retração escapular completa", commonMistakes: "Usar impulso. Costas arredondadas. Cotovelos muito abertos." },
  "supino-inclinado": { youtubeId: "8iPEnn-ltC8", gifUrl: null, title: "Supino Inclinado com Halteres", tips: "Peito alto, cotovelos 45 graus", commonMistakes: "Banco muito inclinado. Peso caindo rápido. Ombros subindo." },
  "elevacao-lateral": { youtubeId: "3VcKaXpzqRo", gifUrl: null, title: "Elevação Lateral", tips: "Peso leve, cotovelo levemente dobrado, até altura do ombro", commonMistakes: "Peso pesado demais. Usar trapézio. Elevar acima do ombro." },
  "crucifixo": { youtubeId: "eozdVDA78K0", gifUrl: null, title: "Crucifixo com Halteres", tips: "Braços levemente dobrados, abrir lento", commonMistakes: "Braços retos. Peso pesado demais. Perder controle na descida." },
  "rosca-direta": { youtubeId: "ykJmrZ5v0Oo", gifUrl: null, title: "Rosca Direta", tips: "Cotovelos fixos, sem balanço", commonMistakes: "Usar impulso. Cotovelos subindo. Não controlar a descida." },
  "triceps-testa": { youtubeId: "d_KZxkY_0cM", gifUrl: null, title: "Tríceps Testa", tips: "Cotovelos apontando pro teto, fixos", commonMistakes: "Cotovelos abrindo. Descer rápido demais. Lombar arqueando." },
  "panturrilha": { youtubeId: "gwLzBJYoWlI", gifUrl: null, title: "Panturrilha em Pé", tips: "Extensão máxima, pausa 1s no topo", commonMistakes: "Amplitude curta. Velocidade rápida. Não pausar no topo." },
  "crunch-bicicleta": { youtubeId: "9FGilxCbdz8", gifUrl: null, title: "Crunch Bicicleta", tips: "Cotovelo toca joelho oposto, devagar", commonMistakes: "Puxar o pescoço. Fazer rápido demais." },
  "band-pull-apart": { youtubeId: "JObYtU7Y7ag", gifUrl: null, title: "Band Pull-Apart (Elástico)", tips: "Escápulas juntas, braços estendidos", commonMistakes: "Braços dobrados. Usar impulso." },
  "agachamento": { youtubeId: "aclHkVaku9U", gifUrl: null, title: "Agachamento com Barra", tips: "Pés largura dos ombros, descer até coxa paralela", commonMistakes: "Joelhos caindo pra dentro. Lombar arredondando. Calcanhar subindo." },
  "clamshell": { youtubeId: "cC7RUFwh2Ew", gifUrl: null, title: "Clamshell com Elástico", tips: "Deitado de lado, abrir joelhos mantendo pés juntos", commonMistakes: "Girar o tronco. Separar os pés. Fazer rápido demais." },
  "donkey-kick-caneleira": { youtubeId: "VKGClPYoJCE", gifUrl: null, title: "Donkey Kick com Caneleira", tips: "Quadrupede, chutar pé pra cima mantendo joelho 90°", commonMistakes: "Arquear a lombar. Girar o quadril. Não controlar." }
};


// ─── 4. RECIPE_VIDEOS ───────────────────────────────────────
const RECIPE_VIDEOS = {
  "omelete": { youtubeId: "gY4YpCyxV4Q", title: "Como fazer omelete perfeito" },
  "frango-grelhado": { youtubeId: "tv8ffdWSUiA", title: "Como grelhar frango sem ressecar" },
  "arroz-integral": { youtubeId: "J2qcCKiEhTk", title: "Arroz integral soltinho" },
  "batata-doce": { youtubeId: "TUtiIWV6ZV4", title: "Batata doce assada perfeita" },
  "shake-proteico": { youtubeId: "ncO4ziU_wh0", title: "Shake proteico pós-treino" },
  "mingau-aveia": { youtubeId: "fp796Zk9YxU", title: "Mingau de aveia fitness" },
  "salada-completa": { youtubeId: "QmZ5fTadMv0", title: "Como montar salada completa" }
};

// ─── 4b. SKINCARE_VIDEOS ────────────────────────────────────
const SKINCARE_VIDEOS = {
  "lavar-rosto": { youtubeId: "_Oysx4GCbPs", title: "Como lavar o rosto corretamente" },
  "vitamina-c": { youtubeId: "l_GiJwTRUXQ", title: "Como aplicar Vitamina C sérum" },
  "protetor-solar": { youtubeId: "5c6j6InQtho", title: "Quantidade certa de protetor solar" },
  "retinol": { youtubeId: "zfU6VCH3Z7k", title: "Como usar retinol sem irritar a pele" },
  "niacinamida": { youtubeId: "U2AVMwxUVC0", title: "Como aplicar Niacinamida" },
  "esfoliacao-corpo": { youtubeId: "P_-a8bNcA5s", title: "Esfoliação corporal pra queratose pilar" }
};

// ─── 4c. HAIR_VIDEOS ────────────────────────────────────────
const HAIR_VIDEOS = {
  "lavar-cabelo-cacheado": { youtubeId: "9-XzqyXH63A", title: "Como lavar cabelo cacheado 2C/3A" },
  "hidratar-cachos": { youtubeId: "kakZO_dRAJc", title: "Hidratação pra cabelo cacheado" },
  "pentear-molhado": { youtubeId: "vm-e2w-XcfI", title: "Como pentear cachos sem quebrar" },
  "secar-difusor": { youtubeId: "qo1ZaqrPQFc", title: "Como usar difusor em cabelo cacheado" },
  "touca-cetim": { youtubeId: "v4kGHb65vHM", title: "Como usar touca de cetim pra dormir" }
};

// ─── 4d. DEPILATION_VIDEOS ──────────────────────────────────
const DEPILATION_VIDEOS = {
  "depilar-pernas": { youtubeId: "kZNqCeXwZow", title: "Como depilar pernas com gilete sem irritar" },
  "depilar-axilas": { youtubeId: "0CdsTVizU2Q", title: "Como depilar axilas sem escurecer" },
  "depilar-virilha": { youtubeId: "O9J2CuyH1C4", title: "Como depilar virilha com segurança" },
  "esfoliar-antes": { youtubeId: "goURZl0zV9s", title: "Como esfoliar antes da depilação" },
  "pos-depilacao": { youtubeId: "0CdsTVizU2Q", title: "Cuidados pós-depilação pele parda" }
};





// ─── 9. MEAL_OPTIONS ─────────────────────────────────────────
const MEAL_OPTIONS = {
  cafe: {
    id: "cafe",
    label: "Café da manhã",
    time: "7h-8h",
    feminizacao: "Chá de spearmint (hortelã-peppermint): tomar junto com o café da manhã. 1 xícara aqui + 1 à tarde = dose diária completa.",
    options: [
      {
        name: "Shake de Whey + Linhaça",
        kcal: 565, prot: 39, carb: 58, fat: 16,
        fem: true,
        ingredients: [
          ["Whey Protein", "1 dose (30g)"],
          ["Aveia em flocos finos", "50g"],
          ["Banana média", "1 un."],
          ["Pasta de amendoim", "1 col. sopa"],
          ["Linhaça dourada moída", "2 col. sopa — fitoestrógenos"],
          ["Água ou leite de soja", "200ml — isoflavonas"],
          ["Creatina", "5g — misturar aqui"]
        ],
        prep: [
          "Coloque a aveia e a linhaça moída primeiro no liquidificador — bater com tudo desde o início",
          "Adicione whey, creatina, banana e a pasta de amendoim",
          "Leite de soja no lugar da água: mais proteína E isoflavonas. Sabor neutro no shake.",
          "Bata 30–40s. A linhaça some no sabor completamente — você não vai sentir nada diferente.",
          "Linhaça deve ser MOÍDA — inteira o corpo não absorve os lignanas (fitoestrógenos)."
        ]
      },
      {
        name: "Ovos + Pão Integral + Abacate",
        kcal: 490, prot: 30, carb: 42, fat: 18,
        fem: false,
        ingredients: [
          ["Ovos inteiros", "3 un."],
          ["Pão integral", "2 fatias (~70g)"],
          ["Abacate", "¼ (~60g)"],
          ["Tomate + azeite", "livre"],
          ["Queijo cottage", "3 col. sopa (opcional)"]
        ],
        prep: [
          "Bata os ovos com sal, pimenta e ervas antes da frigideira",
          "Frigideira antiaderente, fogo médio-baixo com fio de azeite — ovos mexidos ficam melhores em fogo baixo mexendo devagar",
          "Amasse o abacate com limão e sal e espalhe no pão tostado",
          "Azeite vai SOBRE a salada fria, nunca pra fritar"
        ]
      },
      {
        name: "Iogurte Grego + Granola + Linhaça",
        kcal: 455, prot: 29, carb: 50, fat: 14,
        fem: true,
        ingredients: [
          ["Iogurte grego natural integral", "200g"],
          ["Granola sem açúcar", "40g"],
          ["Banana ou manga", "1 porção"],
          ["Linhaça dourada moída", "2 col. sopa"],
          ["Whey em pó", "½ dose (15g) — misturar no iogurte"]
        ],
        prep: [
          "Misture o whey e a linhaça diretamente no iogurte com garfo — linhaça moída some na textura",
          "Monte em camadas: iogurte+whey+linhaça → fruta fatiada → granola por cima",
          "Granola sempre por último pra não amolecer."
        ]
      }
    ]
  },
  lanche1: {
    id: "lanche1",
    label: "Lanche manhã",
    time: "10h-11h",
    feminizacao: "Chá de spearmint: segunda xícara aqui. Feio em nome, poderoso no efeito — leve anti-androgênico acumulativo.",
    options: [
      {
        name: "Edamame + Fruta",
        kcal: 210, prot: 11, carb: 26, fat: 5,
        fem: true,
        ingredients: [
          ["Edamame (soja verde) congelado", "100g — isoflavonas + proteína"],
          ["Sal grosso + limão", "tempero"],
          ["Fruta da época", "1 un."]
        ],
        prep: [
          "Edamame: cozinhar na água por 5 min, escorrer, temperar com sal grosso e limão",
          "Encontrar em supermercados maiores, seção de congelados (Carrefour, Extra). Preço: ~R$8–12 por pacote.",
          "Comer na vagem ou tirar os grãos — ambos funcionam. Sabor parecido com feijão verde suave."
        ]
      },
      {
        name: "Iogurte Grego Natural",
        kcal: 190, prot: 18, carb: 10, fat: 9,
        fem: false,
        ingredients: [
          ["Iogurte grego natural integral", "170g"],
          ["Canela em pó", "pitada"]
        ],
        prep: [
          "Comer puro ou com canela — opção mais rápida e que bate bem proteína",
          "Evite saborizados — têm muito açúcar. Procure: proteína >8g por 100g na tabela"
        ]
      },
      {
        name: "2 Ovos Cozidos + Fruta",
        kcal: 210, prot: 13, carb: 20, fat: 9,
        fem: false,
        ingredients: [
          ["Ovos", "2 un."],
          ["Fruta da época", "1 un."],
          ["Sal grosso", "pitada"]
        ],
        prep: [
          "Cozinhe na véspera: 10 min água fervendo pra gema dura, 7 min pra mole",
          "Geladeira com casca até 7 dias — praticidade máxima"
        ]
      }
    ]
  },
  almoco: {
    id: "almoco",
    label: "Almoço",
    time: "12h-13h",
    feminizacao: null,
    options: [
      {
        name: "Frango + Arroz + Feijão + Legumes",
        kcal: 620, prot: 48, carb: 65, fat: 10,
        fem: false,
        ingredients: [
          ["Peito ou sobrecoxa s/ pele", "180g"],
          ["Arroz branco cozido", "4 col. sopa (~100g)"],
          ["Feijão cozido", "4 col. sopa"],
          ["Legumes (abobrinha, cenoura, chuchu)", "150g"],
          ["Salada (alface, tomate, pepino)", "livre"],
          ["Azeite sobre a salada", "1 col. chá"]
        ],
        prep: [
          "Frango: tempere com limão, alho, sal. Frigideira quente, 4–5 min cada lado. Não furar com garfo — perde o suco",
          "Legumes: refogar com pouco azeite e sal, ou vapor (mais nutritivo)",
          "Feijão: refogar alho, juntar feijão cozido + sal + cominho",
          "Azeite sempre frio sobre a salada — calor destrói os compostos bons"
        ]
      },
      {
        name: "Carne Moída + Batata-Doce + Brócolis",
        kcal: 580, prot: 42, carb: 58, fat: 14,
        fem: true,
        ingredients: [
          ["Carne moída patinho", "150g"],
          ["Batata-doce", "200g (~1 média)"],
          ["Brócolis ou couve-flor", "150g — DIM natural"],
          ["Tomate pelado ou extrato", "2 col. sopa"],
          ["Alho, cebola, sal, pimenta", "à gosto"]
        ],
        prep: [
          "Carne: refogue cebola e alho, adicione a carne mexendo até dourar bem",
          "Batata-doce: cozinhar com casca preserva mais nutrientes. 20–25 min na água",
          "Brócolis: 5 min no vapor EXATO — não mais, senão perde cor, nutrientes e o DIM. Brócolis é uma das melhores fontes de DIM (modulador hormonal natural).",
          "Couve-flor funciona igual ao brócolis — mesma família, mesmo composto"
        ]
      },
      {
        name: "Tofu Grelhado + Arroz + Legumes",
        kcal: 520, prot: 36, carb: 58, fat: 14,
        fem: true,
        ingredients: [
          ["Tofu firme", "200g — isoflavonas de soja"],
          ["Arroz cozido", "4 col. sopa"],
          ["Abobrinha + cenoura + pimentão", "150g"],
          ["Shoyu / molho de soja", "1 col. sopa (pra marinar)"],
          ["Alho, azeite, gergelim", "tempero"]
        ],
        prep: [
          "Tofu: cortar em cubos ou fatias, marinar 15 min em shoyu + alho + limão — marinar é essencial, sem isso fica sem graça",
          "Grelhar em frigideira quente com fio de azeite por 3–4 min de cada lado até dourar. Não mexer antes de soltar.",
          "Legumes: refogar no mesmo azeite após o tofu, 5 min. Adicionar um fio de shoyu no final.",
          "Tofu firme: encontrar em supermercados maiores ou lojas de produtos naturais. ~R$8–14 por bloco de 300g. Guardar na geladeira coberto de água e trocar a água diariamente."
        ]
      }
    ]
  },
  pretreino: {
    id: "pretreino",
    label: "Pré-treino",
    time: "15h-16h · 1h antes do treino",
    feminizacao: null,
    options: [
      {
        name: "Banana + Pasta de Amendoim",
        kcal: 220, prot: 6, carb: 34, fat: 8,
        fem: false,
        ingredients: [
          ["Banana média", "1 un."],
          ["Pasta de amendoim", "1 col. sopa"]
        ],
        prep: [
          "Comer 45–60 min antes — não muito próximo pra não pesar no estômago",
          "A banana dá energia rápida, o amendoim segura por mais tempo. Dupla perfeita pré-treino."
        ]
      },
      {
        name: "Tapioca com Frango Desfiado",
        kcal: 310, prot: 26, carb: 36, fat: 5,
        fem: false,
        ingredients: [
          ["Goma de tapioca", "3 col. sopa (~50g)"],
          ["Frango desfiado (sobra do almoço)", "80g"],
          ["Requeijão light ou cottage", "1 col. sopa"]
        ],
        prep: [
          "Frigideira antiaderente seca (zero óleo), fogo médio. Espalhar a goma em círculo",
          "Esperar firmar (~2 min), virar delicadamente, mais 1 min",
          "Rechear e dobrar. Dica: frango desfiado pronto na geladeira, separa uma parte no almoço."
        ]
      },
      {
        name: "Batata-Doce + 2 Ovos Cozidos",
        kcal: 290, prot: 16, carb: 38, fat: 9,
        fem: false,
        ingredients: [
          ["Batata-doce cozida", "150g"],
          ["Ovos cozidos", "2 un."],
          ["Sal + azeite + ervas", "pitada"]
        ],
        prep: [
          "Cozinhar em lote na véspera — geladeira 5 dias",
          "Come fria mesmo — fio de azeite e sal grosso ficam ótimos",
          "Bom pra treinos longos ou mais intensos — mais sustentável"
        ]
      }
    ]
  },
  jantar: {
    id: "jantar",
    label: "Jantar",
    time: "20h-21h",
    feminizacao: null,
    options: [
      {
        name: "Frango + Arroz + Abobrinha Refogada",
        kcal: 520, prot: 42, carb: 52, fat: 9,
        fem: false,
        ingredients: [
          ["Frango (peito ou coxa desossada)", "160g"],
          ["Arroz cozido", "3 col. sopa"],
          ["Abobrinha", "200g"],
          ["Alho, azeite, ervas", "tempero"]
        ],
        prep: [
          "Abobrinha: refogar com alho no azeite por 5–7 min — manter levemente crocante",
          "Jantar pode ter menos carb que o almoço se não foi dia de treino (2 col. de arroz)"
        ]
      },
      {
        name: "Peixe Assado + Purê de Batata-Doce",
        kcal: 480, prot: 40, carb: 45, fat: 10,
        fem: false,
        ingredients: [
          ["Filé de peixe", "200g"],
          ["Batata-doce", "180g"],
          ["Leite ou leite vegetal", "3 col. sopa (pro purê)"],
          ["Limão, alho, azeite", "tempero"]
        ],
        prep: [
          "Peixe: envolva em papel alumínio com tempero, 200°C por 15–18 min — suculento e sem louça pra lavar",
          "Purê: amassar batata cozida com leite morno e sal — sem manteiga em excesso"
        ]
      },
      {
        name: "Tofu com Legumes + Couve Refogada",
        kcal: 430, prot: 30, carb: 22, fat: 18,
        fem: true,
        ingredients: [
          ["Tofu firme", "180g — isoflavonas"],
          ["Couve ou espinafre", "80g — DIM leve"],
          ["Cenoura + pimentão + cebola", "100g"],
          ["Ovos (opcional, pra proteína extra)", "2 un."],
          ["Shoyu, alho, azeite, gergelim", "tempero"]
        ],
        prep: [
          "Tofu: fatiar e grelhar até dourar (3–4 min cada lado). Reservar.",
          "Couve: refogar com alho no azeite por 2 min — não deixar murchar demais, perde os nutrientes",
          "Legumes: refogar na mesma frigideira por 5 min. Juntar o tofu e um fio de shoyu no final.",
          "Se quiser mais proteína: ovos mexidos na mesma frigideira, misturar tudo junto — estilo yakisoba de panela."
        ]
      }
    ]
  },
  noturno: {
    id: "noturno",
    label: "Noturno (opcional)",
    time: "22h-23h",
    feminizacao: null,
    options: [
      {
        name: "Iogurte Grego Natural",
        kcal: 190, prot: 18, carb: 10, fat: 9,
        fem: false,
        ingredients: [
          ["Iogurte grego integral", "170g"],
          ["Canela", "pitada"]
        ],
        prep: [
          "Proteína de digestão lenta (caseína) que trabalha durante o sono",
          "Só vale se a proteína do dia não fechou — se já bateu 155g, não é necessário"
        ]
      },
      {
        name: "Whey com Leite + Canela",
        kcal: 250, prot: 30, carb: 15, fat: 5,
        fem: false,
        ingredients: [
          ["Whey Protein", "1 dose (30g)"],
          ["Leite semidesnatado", "200ml"],
          ["Canela", "pitada"]
        ],
        prep: [
          "Misturar no shaker com leite — mais cremoso que com água",
          "Comer 1h antes de dormir, não muito próximo"
        ]
      },
      {
        name: "Queijo Cottage + Frutas",
        kcal: 180, prot: 20, carb: 14, fat: 4,
        fem: false,
        ingredients: [
          ["Queijo cottage", "150g"],
          ["Morangos ou kiwi", "100g"]
        ],
        prep: [
          "Cottage é ~80% caseína — perfeito pro noturno sem ser pesado",
          "Com frutas vermelhas adiciona vitamina C pra síntese de colágeno durante o sono"
        ]
      }
    ]
  }
};

// ─── 10. SUPPLEMENTS ──────────────────────────────────────────
const SUPPLEMENTS = [
  {
    name: "Whey Protein",
    dose: "1 dose (30g)",
    when: "Café ✅",
    note: "Correto. Shake da manhã está ótimo.",
    intimate: "Sem impacto",
    evidence: "Alta"
  },
  {
    name: "Creatina",
    dose: "5g",
    when: "Qualquer hora ✅",
    note: "Timing não importa — tomar todo dia.",
    intimate: "Sem impacto",
    evidence: "Alta"
  },
  {
    name: "Ômega-3",
    dose: "2-3 cápsulas",
    when: "Almoço ou jantar ⚠️",
    note: "Mova pra junto da refeição. Gordura aumenta absorção 50%.",
    intimate: "Melhora circulação — efeito positivo",
    evidence: "Alta"
  },
  {
    name: "Multivitamínico",
    dose: "dose do produto",
    when: "Café ✅",
    note: "Correto. Pasta de amendoim tem gordura pras vitaminas A, D, E, K.",
    intimate: "Sem impacto",
    evidence: "Alta"
  },
  {
    name: "Vitamina D3 + K2",
    dose: "D3: 2.000-4.000 UI/dia · K2: 100mcg/dia",
    when: "Café ou almoço",
    note: "Suporte hormonal geral, resultado de treino, humor. Deficiência quase universal no Brasil.",
    intimate: "Nenhum impacto negativo",
    evidence: "Alta"
  },
  {
    name: "Chá de Spearmint",
    dose: "2 xícaras/dia",
    when: "Manhã + tarde",
    note: "Leve efeito anti-androgênico — reduz testosterona livre modestamente.",
    intimate: "Não afeta desempenho nas doses de chá",
    evidence: "Moderada"
  },
  {
    name: "Linhaça dourada moída",
    dose: "2 col. sopa/dia",
    when: "No shake ou iogurte",
    note: "Fitoestrógenos (lignanas) — efeito estrogênico suave e acumulativo.",
    intimate: "Zero impacto",
    evidence: "Moderada"
  },
  {
    name: "DIM (Diindolylmethane)",
    dose: "100-200mg/dia com refeição",
    when: "Almoço ou jantar",
    note: "Modula metabolismo de estrogênio. Melhora pele. Encontrado em brócolis.",
    intimate: "Não afeta testosterona diretamente",
    evidence: "Moderada"
  },
  {
    name: "Soja / Tofu / Edamame",
    dose: "1-2 porções/dia (alimento)",
    when: "Almoço ou jantar",
    note: "Isoflavonas — fitoestrógenos com ligação fraca nos receptores de estrogênio.",
    intimate: "Em doses alimentares: zero impacto",
    evidence: "Moderada"
  }
];

// ─── 11. RECIPES ──────────────────────────────────────────────
const RECIPES = [
  {
    id: "omelete",
    name: "Omelete Proteico",
    emoji: "🍳",
    servings: 1,
    calories: 420,
    protein: 38,
    carbs: 8,
    fat: 27,
    ingredients: [
      "3 ovos inteiros",
      "2 claras extras (ou 60ml de clara de ovo de caixinha)",
      "30g de queijo muçarela ralado (2 colheres de sopa cheias)",
      "1/2 tomate médio picado em cubinhos",
      "1/4 de cebola pequena picada fina",
      "2 colheres de sopa de milho verde (opcional)",
      "Sal a gosto (pouco! ~1 pitada)",
      "Pimenta do reino a gosto",
      "1 colher de chá de azeite (pra untar a frigideira)",
      "Orégano a gosto",
      "Cebolinha picada (opcional, pra finalizar)"
    ],
    steps: [
      "Preparar os ovos: Em uma tigela, quebre os 3 ovos + 2 claras. Bata com um garfo até ficar homogêneo (não precisa bater muito). Adicione sal e pimenta.",
      "Preparar os recheios: Pique o tomate em cubinhos pequenos, pique a cebola bem fina. Rale o queijo. Deixe tudo separadinho num prato.",
      "Frigideira: Aqueça uma frigideira ANTIADERENTE em fogo MÉDIO. Coloque 1 colher de chá de azeite e espalhe com papel toalha.",
      "Despejar: Quando a frigideira estiver quente (teste: pinga uma gota de água, se chiar tá pronto), despeje a mistura de ovos. Incline a frigideira pra cobrir todo o fundo.",
      "Cozinhar: Espere ~2 minutos sem mexer. Quando a borda começar a firmar e o centro ainda estiver levemente cremoso, é hora do recheio.",
      "Rechear: Coloque na METADE do omelete: queijo, tomate, cebola, milho. Espere mais 30 segundos pro queijo começar a derreter.",
      "Dobrar: Com uma espátula, dobre a metade sem recheio por cima da metade com recheio.",
      "Finalizar: Espere 30-60 segundos, vire pro outro lado por mais 30 segundos. O interior deve estar cozido mas não seco.",
      "Servir: Coloque no prato, salpique orégano e cebolinha por cima."
    ],
    variations: [
      { name: "Omelete Fitness", description: "Trocar muçarela por cottage (menos gordura, mesma proteína)" },
      { name: "Omelete Frango", description: "Adicionar 50g de frango desfiado (já cozido) — sobe pra ~48g proteína" },
      { name: "Omelete Espinafre", description: "Adicionar 1 punhado de espinafre picado (fica chique e nutritivo)" }
    ],
    tips: [
      "Fogo MÉDIO sempre! Fogo alto = omelete borrachudo",
      "Frigideira ANTIADERENTE faz toda a diferença",
      "Queijo dentro derrete melhor que queijo por cima",
      "Pode preparar os recheios picados com antecedência e guardar na geladeira"
    ],
    videoKey: "omelete"
  },
  {
    id: "salada-completa",
    name: "Salada Completa",
    emoji: "🥗",
    servings: 1,
    calories: 150,
    protein: 4,
    carbs: 15,
    fat: 9,
    ingredients: [
      "3 folhas grandes de alface crespa (ou 2 punhados de rúcula, ou mix)",
      "1/2 tomate médio fatiado ou em cubos",
      "1/4 de pepino em rodelas finas",
      "1/4 de cenoura ralada (ralador grosso)",
      "1/4 de cebola roxa em rodelas finas",
      "5-6 tomates cereja cortados ao meio (se tiver)",
      "1 colher de sopa de milho verde",
      "1 colher de sopa de azeite extra virgem",
      "Suco de 1/2 limão espremido",
      "Sal a gosto (1 pitada)",
      "Pimenta do reino a gosto"
    ],
    steps: [
      "Lavar: Lave TODAS as folhas e vegetais em água corrente. Deixe as folhas de molho em água com 1 colher de sopa de vinagre por 15 minutos (elimina bactérias). Enxague depois.",
      "Cortar: Rasgue as folhas de alface com as mãos (não corte com faca, oxida). Fatie o tomate, pepino, cebola. Rale a cenoura.",
      "Montar: Em um prato grande ou bowl: folhas na base, tomate, pepino, cenoura, cebola, milho, tomates cereja por cima.",
      "Temperar: NA HORA de comer (não antes, senão murcha): 1 colher de azeite + suco de limão + sal + pimenta. Misture levemente."
    ],
    variations: [
      { name: "Salada Proteica", description: "Adicionar 1 ovo cozido picado (+6g proteína)" },
      { name: "Salada Completa+", description: "Adicionar 50g de frango grelhado cortado (+15g proteína)" },
      { name: "Salada Tropical", description: "Adicionar cubos de manga ou abacaxi (fica incrível com rúcula)" }
    ],
    tips: [
      "Prepare os vegetais lavados e picados no domingo pra semana toda (guarde em potes separados na geladeira com papel toalha — dura 4-5 dias)",
      "Tempere SÓ na hora de comer",
      "Não use molhos prontos (cheios de açúcar e sódio). Azeite + limão é perfeito"
    ],
    videoKey: "salada-completa"
  },
  {
    id: "frango-grelhado",
    name: "Frango Grelhado Perfeito",
    emoji: "🐔",
    servings: 2,
    calories: 200,
    protein: 35,
    carbs: 1,
    fat: 6,
    ingredients: [
      "2 filés de peito de frango (~150g cada, ~300g total)",
      "1 colher de sopa de azeite",
      "1 dente de alho amassado",
      "Suco de 1/2 limão",
      "Sal a gosto",
      "Pimenta do reino",
      "1 colher de chá de páprica doce (dá cor bonita)",
      "Orégano ou tempero favorito"
    ],
    steps: [
      "Preparar o frango: Lave os filés. Se forem MUITO grossos, abra ao meio com faca (butterfly) ou bata com um martelo de carne/fundo de panela entre dois plásticos até ficar com espessura uniforme (~1,5cm). ISSO É IMPORTANTE — espessura uniforme = cozimento uniforme.",
      "Temperar: Em um prato ou bowl, misture: azeite + alho + limão + sal + pimenta + páprica. Coloque os filés e esfregue o tempero dos dois lados. Idealmente deixe marinar 30min na geladeira (mínimo 10min).",
      "Grelhar: Aqueça uma frigideira/grill em fogo MÉDIO-ALTO. Quando estiver BEM quente, coloque os filés. NÃO MEXA por 4-5 minutos.",
      "Virar: Quando a parte de baixo estiver dourada, vire UMA VEZ. Mais 4-5 minutos do outro lado.",
      "Testar: Corte no meio do filé mais grosso. Deve estar branco por dentro, sem rosa. Se ainda tiver rosa, tampe a frigideira e dê mais 2 minutos em fogo baixo.",
      "Descansar: Tire do fogo e espere 3-5 minutos antes de cortar. Isso mantém o suco dentro."
    ],
    variations: [
      { name: "Frango Desfiado", description: "Cozinhe em água com temperos e desfie — ótimo pra saladas e omeletes" },
      { name: "Frango ao Molho", description: "Após grelhar, adicione molho de tomate caseiro e cozinhe por 5min" }
    ],
    tips: [
      "Fogo MÉDIO-ALTO, não alto demais (queima por fora, cru por dentro)",
      "Vire APENAS UMA VEZ",
      "Não aperte o frango com a espátula (perde todo o suco)",
      "A páprica dá cor bonita de restaurante",
      "Prepare 4-6 filés no domingo, guarde em potes na geladeira — dura 3-4 dias"
    ],
    videoKey: "frango-grelhado"
  },
  {
    id: "arroz-integral",
    name: "Arroz Integral Perfeito",
    emoji: "🍚",
    servings: 4,
    calories: 130,
    protein: 3,
    carbs: 27,
    fat: 1,
    ingredients: [
      "1 xícara de arroz integral",
      "2,5 xícaras de água",
      "1 colher de chá de azeite",
      "1/2 cebola picadinha",
      "1 dente de alho picado",
      "Sal a gosto"
    ],
    steps: [
      "Lavar: Coloque o arroz integral em uma peneira e lave em água corrente por 30 segundos, mexendo com a mão.",
      "Refogar: Em uma panela, aqueça o azeite em fogo médio. Refogue a cebola até ficar transparente (~2min). Adicione o alho, mexa por 30 segundos (não deixe queimar!).",
      "Tostar: Adicione o arroz e mexa por 1-2 minutos (torrar levemente = fica soltinho).",
      "Água: Adicione 2,5 xícaras de água FERVENTE + sal. Misture uma vez.",
      "Cozinhar: Quando ferver, abaixe o fogo pro MÍNIMO, tampe a panela. Cozinhe por 35-40 minutos SEM ABRIR a tampa.",
      "Verificar: Depois de 35min, abra e teste. Se ainda tiver água, tampe mais 5min. Se tiver seco e macio, tá pronto.",
      "Descansar: Desligue o fogo, coloque um pano de prato entre a panela e a tampa por 5min (absorve vapor extra, fica soltinho)."
    ],
    variations: [
      { name: "Arroz com Brócolis", description: "Adicione brócolis picado nos últimos 10min de cozimento" },
      { name: "Arroz Temperado", description: "Adicione cúrcuma (açafrão) na água — fica amarelinho e anti-inflamatório" }
    ],
    tips: [
      "Prepare uma panela no domingo e guarde em potes na geladeira — dura 5 dias",
      "Reaquecer no micro-ondas com 1 colher de água por cima"
    ],
    videoKey: "arroz-integral"
  },
  {
    id: "batata-doce",
    name: "Batata Doce Assada",
    emoji: "🍠",
    servings: 2,
    calories: 130,
    protein: 2,
    carbs: 30,
    fat: 0,
    ingredients: [
      "2 batatas doces médias (~150g cada)",
      "Papel alumínio ou assadeira"
    ],
    steps: [
      "Pré-aqueça o forno a 200°C.",
      "Lave bem as batatas, seque.",
      "Fure com garfo em vários pontos (deixa o vapor sair).",
      "Embrulhe em papel alumínio OU coloque direto na assadeira.",
      "Asse por 40-50 minutos (teste espetando com garfo — deve entrar fácil).",
      "Corte ao meio, tempere com canela (fica delicioso e zero caloria)."
    ],
    variations: [
      { name: "Micro-ondas (rápido)", description: "Lave, fure com garfo, micro-ondas 5-7 minutos (vire na metade)" },
      { name: "Purê de Batata Doce", description: "Amasse com garfo, adicione canela e mel — fica como sobremesa fitness" }
    ],
    tips: [
      "Fure bem com garfo antes de assar (evita explodir no forno)",
      "Canela combina perfeitamente e tem zero caloria",
      "Prepare várias no domingo e guarde na geladeira"
    ],
    videoKey: "batata-doce"
  },
  {
    id: "shake-proteico",
    name: "Shake Proteico Pós-Treino",
    emoji: "🥤",
    servings: 1,
    calories: 350,
    protein: 35,
    carbs: 40,
    fat: 7,
    ingredients: [
      "1 scoop de whey protein (sabor de preferência, ~30g)",
      "1 banana madura",
      "200ml de leite desnatado (ou bebida vegetal)",
      "1 colher de sopa de aveia em flocos (15g)",
      "1 colher de chá de pasta de amendoim (10g)",
      "3-4 cubos de gelo"
    ],
    steps: [
      "Coloque tudo no liquidificador.",
      "Bata por 30-60 segundos até ficar homogêneo.",
      "Se ficar muito grosso, adicione mais leite (50ml por vez).",
      "Beba em até 30 minutos pós-treino."
    ],
    variations: [
      { name: "Sem Whey", description: "Trocar por 3 colheres de sopa de leite em pó (fica menos proteico mas funciona)" },
      { name: "Mais Calórico", description: "Adicionar 1/2 abacate (fica cremoso e delicioso)" },
      { name: "Sabor Cacau", description: "Adicionar 1 colher de sopa de cacau em pó" }
    ],
    tips: [
      "Beba em até 30 minutos após o treino pra melhor absorção",
      "Banana madura fica mais doce e bate melhor",
      "Gelo deixa mais refrescante e com textura de milk shake"
    ],
    videoKey: "shake-proteico"
  },
  {
    id: "mingau-aveia",
    name: "Mingau de Aveia",
    emoji: "🥣",
    servings: 1,
    calories: 380,
    protein: 18,
    carbs: 50,
    fat: 12,
    ingredients: [
      "5 colheres de sopa de aveia em flocos (50g)",
      "200ml de leite (desnatado ou integral)",
      "1 banana fatiada",
      "1 colher de sopa de pasta de amendoim (15g)",
      "1 colher de chá de mel ou canela",
      "Frutas extras: morango, blueberry (se tiver)"
    ],
    steps: [
      "Em uma panela, coloque aveia + leite em fogo baixo.",
      "Mexa sempre por 3-5 minutos até engrossar.",
      "Quando ficar na consistência desejada (cremoso mas não muito grosso), desligue.",
      "Coloque no bowl.",
      "Cubra com banana fatiada, pasta de amendoim, frutas, canela.",
      "Coma quentinho."
    ],
    variations: [
      { name: "Overnight Oats (sem fogão)", description: "Na noite anterior: aveia + leite + pasta de amendoim em um pote com tampa. Misture, tampe, coloque na geladeira. De manhã: abra, coloque banana e frutas por cima, coma gelado." },
      { name: "Mingau Proteico", description: "Adicione 1/2 scoop de whey após desligar o fogo (+15g proteína)" }
    ],
    tips: [
      "Mexa sempre pra não grudar no fundo",
      "Fogo baixo pra não transbordar",
      "Overnight oats é perfeito pra quem não tem tempo de manhã"
    ],
    videoKey: "mingau-aveia"
  },
  {
    id: "feijao-caseiro",
    name: "Feijão Caseiro",
    emoji: "🫘",
    servings: 10,
    calories: 110,
    protein: 7,
    carbs: 18,
    fat: 1,
    ingredients: [
      "500g feijão carioca (deixar de molho 8-12h)",
      "1 cebola média picada",
      "4 dentes de alho amassados",
      "2 folhas de louro",
      "1 colher de sopa de azeite",
      "Sal a gosto",
      "Pimenta do reino a gosto",
      "Água suficiente pra cobrir (~1,5L)"
    ],
    steps: [
      "Deixar de molho: Na noite anterior, coloque o feijão em uma tigela com bastante água (3x o volume). Deixe 8-12h. Descarte a água depois (reduz gases).",
      "Cozinhar: Na panela de pressão, coloque o feijão com água nova até cobrir + 2 dedos acima. Adicione as folhas de louro. Feche e cozinhe por 25-30min após pegar pressão.",
      "Temperar: Em outra panela, aqueça o azeite em fogo médio. Refogue a cebola até dourar (~3min), depois o alho (~30seg).",
      "Juntar: Abra a pressão, retire 1 concha de feijão e amasse com garfo (engrossar o caldo). Junte o refogado ao feijão, adicione sal e pimenta. Cozinhe mais 10min sem tampa pra apurar.",
      "Guardar: Rende ~10 porções. Separe em potes e congele — dura até 3 meses no freezer."
    ],
    variations: [
      { name: "Feijão Tropeiro", description: "Adicione bacon, linguiça, farinha de mandioca, ovo e couve" },
      { name: "Feijão com Legumes", description: "Adicione cenoura e abóbora picada no cozimento" }
    ],
    tips: [
      "Sempre deixe de molho — cozinha mais rápido e reduz gases",
      "Congele em porções individuais pra facilitar a semana",
      "Louro dá sabor e ajuda na digestão",
      "Na panela comum: cozinhe 1h30-2h em fogo baixo"
    ]
  },
  {
    id: "carne-moida-refogada",
    name: "Carne Moída Refogada",
    emoji: "🥩",
    servings: 4,
    calories: 180,
    protein: 26,
    carbs: 3,
    fat: 8,
    ingredients: [
      "500g carne moída magra (patinho ou acém)",
      "1 cebola média picada",
      "3 dentes de alho amassados",
      "2 tomates maduros picados em cubos",
      "1 colher de sopa de azeite",
      "Sal a gosto",
      "Pimenta do reino",
      "1 colher de chá de páprica doce",
      "Cheiro-verde picado (opcional)"
    ],
    steps: [
      "Refogar: Em uma panela grande, aqueça o azeite em fogo médio-alto. Refogue a cebola até ficar transparente (~2min), depois o alho (~30seg).",
      "Carne: Adicione a carne moída e mexa bem pra desmanchar os pedaços. Cozinhe até perder a cor rosa (~5-7min).",
      "Temperar: Adicione sal, pimenta e páprica. Misture bem.",
      "Tomate: Adicione os tomates picados, abaixe o fogo pra médio. Deixe cozinhar por 10-15min mexendo de vez em quando, até o molho reduzir.",
      "Finalizar: Salpique cheiro-verde. Sirva com arroz e feijão."
    ],
    variations: [
      { name: "Carne Moída com Legumes", description: "Adicione cenoura ralada, vagem e milho — fica completo" },
      { name: "Molho Bolonhesa", description: "Adicione molho de tomate (200ml) e sirva com macarrão integral" }
    ],
    tips: [
      "Fogo alto no início pra selar a carne (evita cozinhar na água)",
      "Escolha carne moída magra pra menos gordura",
      "Prepare 500g no domingo — rende 4 refeições na semana",
      "Congela bem por até 3 meses"
    ]
  },
  {
    id: "frango-grelhado-temperado",
    name: "Frango Grelhado Temperado",
    emoji: "🍗",
    servings: 4,
    calories: 200,
    protein: 35,
    carbs: 1,
    fat: 6,
    ingredients: [
      "600g peito de frango (4 filés de ~150g)",
      "2 colheres de sopa de azeite",
      "3 dentes de alho amassados",
      "Suco de 1 limão",
      "1 colher de chá de páprica defumada",
      "1 colher de chá de cúrcuma (açafrão)",
      "Sal a gosto",
      "Pimenta do reino",
      "Orégano a gosto",
      "1 colher de chá de mostarda (opcional)"
    ],
    steps: [
      "Preparar: Lave os filés e seque com papel toalha. Se muito grossos, abra ao meio (butterfly) ou bata entre dois plásticos até ~1,5cm de espessura uniforme.",
      "Marinada: Em um bowl, misture azeite + alho + limão + páprica + cúrcuma + sal + pimenta + orégano + mostarda. Passe nos filés dos dois lados. Marine por 30min na geladeira (mínimo 15min).",
      "Grelhar: Aqueça uma frigideira/grill em fogo médio-alto até BEM quente. Coloque os filés SEM MEXER por 5min.",
      "Virar: Vire UMA VEZ. Mais 4-5min do outro lado. Não aperte com espátula!",
      "Verificar: Corte no meio — deve estar branco, sem rosa. Se rosa, tampe e dê mais 2min em fogo baixo.",
      "Descansar: Retire do fogo, espere 3-5min antes de cortar. Mantém o suco dentro."
    ],
    variations: [
      { name: "Frango Desfiado", description: "Cozinhe em água temperada (alho, cebola, louro, sal) por 25min, desfie com garfo" },
      { name: "Frango ao Forno", description: "Mesma marinada, asse a 200°C por 25-30min virando na metade" }
    ],
    tips: [
      "Páprica defumada + cúrcuma = cor de restaurante e sabor incrível",
      "Prepare 4-6 filés no domingo, guarde em potes — dura 4 dias na geladeira",
      "Vire APENAS UMA VEZ pro suco não escapar",
      "Mostarda na marinada amacia a carne"
    ]
  },
  {
    id: "shake-arthur",
    name: "Shake Proteico da Arthur",
    emoji: "🥤",
    servings: 1,
    calories: 480,
    protein: 38,
    carbs: 52,
    fat: 14,
    ingredients: [
      "1 scoop whey protein (30g)",
      "40g aveia em flocos (4 colheres de sopa)",
      "1 banana madura",
      "5g creatina monohidratada (1 colher de chá rasa)",
      "1 colher de sopa de pasta de amendoim (15g)",
      "200ml de leite (integral ou desnatado)"
    ],
    steps: [
      "Coloque o leite no liquidificador primeiro.",
      "Adicione a banana picada, aveia e pasta de amendoim.",
      "Bata por 20 segundos até a aveia quebrar.",
      "Adicione o whey e a creatina.",
      "Bata mais 15-20 segundos até ficar homogêneo (não bata demais pra não esquentar).",
      "Sirva imediatamente — creatina dissolve melhor fresca."
    ],
    variations: [
      { name: "Versão Cacau", description: "Adicione 1 colher de sopa de cacau em pó — sabor chocolate" },
      { name: "Versão Morango", description: "Troque banana por 100g de morango congelado" },
      { name: "Mais Calórico", description: "Adicione 1/2 abacate pra +100 kcal e textura cremosa" }
    ],
    tips: [
      "Tomar como café da manhã ou pós-treino",
      "Creatina não tem sabor — some no shake",
      "Banana madura (com pintinhas) fica mais doce e bate melhor",
      "Se ficar grosso demais, adicione +50ml de leite"
    ]
  },
  {
    id: "tapioca-proteica",
    name: "Tapioca Proteica",
    emoji: "🫓",
    servings: 1,
    calories: 370,
    protein: 25,
    carbs: 40,
    fat: 14,
    ingredients: [
      "2 colheres de sopa de goma de tapioca (40g)",
      "2 ovos",
      "1 colher de chá de azeite",
      "Sal a gosto",
      "Recheio: 50g frango desfiado OU queijo muçarela (20g)"
    ],
    steps: [
      "Tapioca: Aqueça uma frigideira antiaderente em fogo médio. Espalhe a goma de tapioca uniformemente formando um disco. Espere hidratar (~1min).",
      "Virar: Quando a tapioca soltar da frigideira, vire com cuidado. Mais 30seg.",
      "Ovos: Em outra frigideira com azeite, mexe os 2 ovos com sal até ficarem cremosos (~2min).",
      "Montar: Coloque os ovos mexidos e o frango/queijo no centro da tapioca. Dobre ao meio.",
      "Servir: Coma quente, acompanhada de 1 banana (se pré-treino)."
    ],
    variations: [
      { name: "Tapioca Doce", description: "Recheie com banana + pasta de amendoim + canela" },
      { name: "Tapioca Fitness", description: "Adicione 1 scoop de whey aos ovos mexidos (+25g proteína)" }
    ],
    tips: [
      "Goma de tapioca hidratada (úmida) funciona melhor que a seca",
      "Fogo médio — fogo alto queima rápido",
      "Ótima opção de pré-treino: carboidrato rápido + proteína",
      "Prepare o frango desfiado com antecedência"
    ]
  },
  {
    id: "ceia-noturna",
    name: "Ceia Noturna",
    emoji: "😴",
    servings: 1,
    calories: 160,
    protein: 14,
    carbs: 15,
    fat: 4,
    ingredients: [
      "100g queijo cottage",
      "1 fruta: 5 morangos OU 1 kiwi OU 1/2 banana",
      "1 pitada de canela",
      "1 colher de chá de mel (opcional)"
    ],
    steps: [
      "Coloque o cottage em um bowl.",
      "Corte a fruta em pedaços pequenos e coloque por cima.",
      "Salpique canela generosamente.",
      "Se quiser mais doce, adicione 1 fio de mel.",
      "Coma devagar, 30-60min antes de dormir."
    ],
    variations: [
      { name: "Versão Iogurte", description: "Troque cottage por 120g iogurte grego natural + 15g castanhas" },
      { name: "Versão Caseína", description: "Adicione 1/2 scoop de caseína ao cottage — proteína de absorção lenta" }
    ],
    tips: [
      "Cottage tem caseína (proteína lenta) — ideal pra noite",
      "Comer 30-60min antes de deitar",
      "Evite frutas muito doces à noite (prefira morango, kiwi)",
      "Canela ajuda no controle de glicose noturna"
    ]
  },
  {
    id: "pate-frango-cottage",
    name: "Patê de Frango com Cottage e Milho",
    emoji: "🥪",
    servings: 2,
    calories: 250,
    protein: 28,
    carbs: 12,
    fat: 8,
    ingredients: [
      "200g frango desfiado (cozido)",
      "100g queijo cottage",
      "2 colheres de sopa de milho verde",
      "1/4 cebola picada bem fina",
      "Sal a gosto",
      "Pimenta do reino",
      "1 colher de chá de azeite",
      "Cebolinha picada (opcional)"
    ],
    steps: [
      "Desfiar: Se o frango não estiver desfiado, cozinhe em água com sal e alho por 20min. Desfie com 2 garfos.",
      "Misturar: Em um bowl, misture o frango desfiado + cottage + milho + cebola. Mexa bem.",
      "Temperar: Adicione sal, pimenta, azeite e cebolinha. Prove e ajuste.",
      "Guardar: Coloque em um pote com tampa. Dura 3-4 dias na geladeira.",
      "Servir: Com pão integral (pré-treino) ou torrada (ceia). 1 porção = metade do pote."
    ],
    variations: [
      { name: "Patê Apimentado", description: "Adicione 1 colher de pimenta calabresa" },
      { name: "Patê com Requeijão", description: "Troque o cottage por 2 col. requeijão light (mais cremoso)" }
    ],
    tips: [
      "Prepare no domingo — rende 2 porções pra semana",
      "Funciona como pré-treino (com pão) ou ceia (com torrada)",
      "Frango desfiado congela bem — prepare bastante de uma vez",
      "Cottage dá cremosidade com menos gordura que requeijão"
    ]
  },
  {
    id: "pate-frango-legumes",
    name: "Patê de Frango com Legumes",
    emoji: "🥕",
    servings: 2,
    calories: 200,
    protein: 25,
    carbs: 5,
    fat: 8,
    ingredients: [
      "200g frango desfiado (cozido)",
      "2 colheres de sopa de requeijão light",
      "1/2 cenoura ralada fina",
      "Salsinha picada (1 colher de sopa)",
      "Sal a gosto",
      "Pimenta do reino",
      "Suco de 1/2 limão"
    ],
    steps: [
      "Desfiar: Se o frango não estiver desfiado, cozinhe em água com sal e alho por 20min. Desfie.",
      "Misturar: Em um bowl, misture frango + requeijão + cenoura ralada + salsinha.",
      "Temperar: Adicione sal, pimenta e suco de limão. Misture bem.",
      "Guardar: Coloque em pote com tampa — dura 3-4 dias na geladeira.",
      "Servir: Com pão integral, torrada, ou como recheio de tapioca."
    ],
    variations: [
      { name: "Versão com Cottage", description: "Troque requeijão por 100g cottage (mais proteína)" },
      { name: "Com Beterraba", description: "Troque cenoura por beterraba ralada — fica rosa e nutritivo" }
    ],
    tips: [
      "Cenoura ralada fina integra melhor no patê",
      "Limão dá frescor e ajuda na conservação",
      "Ótimo pra levar de lanche no trabalho",
      "Salsinha é rica em vitamina C e ferro"
    ]
  },
  {
    id: "pasta-de-atum",
    name: "Pasta de Atum",
    emoji: "🐟",
    servings: 1,
    calories: 180,
    protein: 26,
    carbs: 2,
    fat: 7,
    ingredients: [
      "1 lata de atum em água (escorrido, ~120g)",
      "1 colher de sopa de requeijão light",
      "1/4 cebola picada bem fina",
      "Suco de 1/2 limão",
      "Sal a gosto",
      "Pimenta do reino",
      "Cebolinha picada (opcional)"
    ],
    steps: [
      "Escorrer: Abra a lata de atum e escorra toda a água. Coloque em um bowl.",
      "Desfiar: Com um garfo, desfie o atum até ficar em lascas.",
      "Misturar: Adicione requeijão, cebola, limão, sal e pimenta. Misture bem.",
      "Finalizar: Salpique cebolinha por cima.",
      "Servir: Com pão integral, torrada, ou dentro de uma tapioca."
    ],
    variations: [
      { name: "Pasta Cremosa", description: "Adicione 50g cottage pra mais cremosidade (+6g prot)" },
      { name: "Pasta Apimentada", description: "Adicione pimenta calabresa e tomate seco picado" }
    ],
    tips: [
      "Atum em ÁGUA (não em óleo) — menos gordura, mais proteína",
      "Limão corta o sabor forte do atum",
      "Pronta em 3 minutos — perfeita pra quando não tem tempo",
      "Rica em ômega-3 naturalmente"
    ]
  },
  {
    id: "frango-cozido-desfiado",
    name: "Frango Cozido e Desfiado",
    emoji: "🍗",
    servings: 5,
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 4,
    ingredients: [
      "500g peito de frango (~3 filés)",
      "1 cebola pequena cortada ao meio",
      "3 dentes de alho inteiros (amassados levemente)",
      "2 folhas de louro",
      "1 colher de chá de sal",
      "Água suficiente pra cobrir o frango",
      "Pimenta do reino a gosto"
    ],
    steps: [
      "Preparar: Lave os filés de frango e coloque numa panela média.",
      "Temperos: Adicione a cebola, alho, louro, sal e pimenta. Cubra com água (uns 2 dedos acima do frango).",
      "Cozinhar: Leve ao fogo alto até ferver. Quando ferver, abaixe pra fogo baixo e tampe. Cozinhe por 20-25 minutos.",
      "Testar: Espete com garfo — se sair fácil e o frango estiver branco por dentro, tá pronto. Se rosa, mais 5 minutos.",
      "Desfiar: Retire o frango (guarde o caldo!). Espere esfriar 5 minutos. Desfie com 2 garfos puxando em direções opostas.",
      "Guardar: Separe em porções de ~100g em potes. Dura 4 dias na geladeira ou 3 meses no freezer.",
      "Caldo: O caldo que sobrou é ouro — use pra cozinhar arroz, sopas, ou congele em formas de gelo."
    ],
    variations: [
      { name: "Frango Desfiado Temperado", description: "Após desfiar, refogue com azeite + alho + páprica + salsinha" },
      { name: "Frango pra Patê", description: "Desfie mais fino e use nos patês de cottage ou requeijão" },
      { name: "Frango pra Sopa", description: "Desfie e volte pro caldo com legumes picados (cenoura, batata)" }
    ],
    tips: [
      "Desfie QUENTE (mais fácil) — só espere o suficiente pra não queimar a mão",
      "500g rende ~5 porções de 100g — prepare no domingo pra semana",
      "O caldo congela em formas de gelo pra usar quando quiser",
      "Base pra: patês, saladas, tapioca, panqueca, sopa",
      "Na panela de pressão: 12-15 minutos após pegar pressão (mais rápido)"
    ]
  },
  {
    id: "tilapia-grelhada-limao",
    name: "Tilápia Grelhada com Limão",
    emoji: "🐟",
    servings: 1,
    calories: 180,
    protein: 34,
    carbs: 2,
    fat: 4,
    ingredients: [
      "1 filé de tilápia (~150g)",
      "Suco de 1/2 limão",
      "1 dente de alho picado",
      "Sal e pimenta a gosto",
      "1 colher de chá de azeite",
      "Salsa picada pra finalizar"
    ],
    steps: [
      "Tempere o filé com limão, alho, sal e pimenta — deixe 10min",
      "Aqueça a frigideira antiaderente com 1 colher de chá de azeite",
      "Coloque o filé e cozinhe 4-5min de cada lado em fogo médio",
      "Não mexa muito — deixe dourar de cada lado",
      "Finalize com salsa picada e mais um fio de limão"
    ],
    variations: [
      { name: "Outro Peixe", description: "Substitua tilápia por pescada ou merluza" },
      { name: "Com Alcaparras", description: "Adicione alcaparras pra mais sabor" },
      { name: "Na Airfryer", description: "Faça na airfryer: 180°C por 12-15min" }
    ],
    tips: [
      "Tilápia é o peixe mais barato e tem 34g de proteína por filé",
      "Compre filés congelados — mais barato e dura semanas",
      "Ótimo com arroz integral e salada",
      "Peixe 2x/semana elimina a necessidade de suplemento de ômega-3"
    ],
    videoKey: null
  },
  {
    id: "sardinha-assada-forno",
    name: "Sardinha Assada no Forno",
    emoji: "🐟",
    servings: 2,
    calories: 200,
    protein: 25,
    carbs: 0,
    fat: 11,
    ingredients: [
      "1 lata de sardinha em óleo (ou 4 sardinhas frescas)",
      "Suco de 1 limão",
      "1 dente de alho fatiado",
      "Pimenta do reino a gosto",
      "Sal a gosto",
      "Azeite pra regar"
    ],
    steps: [
      "Se fresca: limpe e tempere com limão, alho, sal — 15min",
      "Se em lata: escorra o óleo, coloque numa forma",
      "Leve ao forno a 200°C por 15-20min (fresca) ou 10min (lata)",
      "Regue com azeite e limão ao servir"
    ],
    variations: [
      { name: "Sardinha em Lata", description: "Sardinha em lata é a opção mais rápida e barata" },
      { name: "Com Tomate Cereja", description: "Adicione tomate cereja cortado ao meio por cima" },
      { name: "Com Farofa", description: "Sirva com farofa de alho" }
    ],
    tips: [
      "Sardinha tem MAIS ômega-3 que salmão e custa 1/5 do preço",
      "1 lata = ~25g de proteína",
      "Compre em promoção — dura anos na despensa",
      "Rica em cálcio (os ossinhos são comestíveis)"
    ],
    videoKey: null
  },
  {
    id: "wrap-frango-rapido",
    name: "Wrap de Frango Rápido",
    emoji: "🌯",
    servings: 1,
    calories: 350,
    protein: 32,
    carbs: 28,
    fat: 12,
    ingredients: [
      "1 tortilha/wrap integral",
      "100g de frango desfiado (do meal prep)",
      "1 colher de requeijão light",
      "Alface picada",
      "Tomate fatiado",
      "Sal e orégano a gosto"
    ],
    steps: [
      "Espalhe o requeijão na tortilha toda",
      "Coloque o frango desfiado no centro",
      "Adicione alface e tomate",
      "Tempere com sal e orégano",
      "Enrole apertado e corte no meio"
    ],
    variations: [
      { name: "Wrap de Atum", description: "Use atum em vez de frango" },
      { name: "Com Queijo", description: "Adicione queijo mussarela" },
      { name: "Wrap Crocante", description: "Leve pra selar na frigideira 1min cada lado (fica crocante)" }
    ],
    tips: [
      "Perfeito pra levar pro trabalho — monta em 3 minutos",
      "Faça o frango desfiado no domingo (meal prep) e use a semana toda",
      "Wrap integral tem mais fibra que pão",
      "Embala em papel alumínio pra transportar"
    ],
    videoKey: null
  },
  {
    id: "ovos-cozidos-batch",
    name: "Ovos Cozidos em Batch",
    emoji: "🥚",
    servings: 6,
    calories: 78,
    protein: 6,
    carbs: 1,
    fat: 5,
    notes: "Macros por OVO",
    ingredients: [
      "6 ovos",
      "Água suficiente pra cobrir",
      "1 colher de chá de vinagre (evita rachar)",
      "Gelo pra banho de gelo"
    ],
    steps: [
      "Coloque os ovos em panela com água fria cobrindo",
      "Adicione vinagre e leve ao fogo alto",
      "Quando ferver, conte 10 minutos",
      "Transfira imediatamente pra banho de gelo (água + gelo)",
      "Deixe 5 minutos no gelo — descasca fácil",
      "Guarde na geladeira em pote fechado — dura 5 dias"
    ],
    variations: [
      { name: "Puro", description: "Coma puro com sal e pimenta" },
      { name: "Pasta de Ovo", description: "Amasse com requeijão pra fazer pasta" },
      { name: "Na Salada", description: "Corte ao meio e coloque na salada" },
      { name: "Temperado", description: "Tempere com paprika e azeite" }
    ],
    tips: [
      "Faça 6-12 de uma vez no domingo — snack pronto a semana toda",
      "78 kcal e 6g proteína por ovo — snack perfeito",
      "Leve 2 pro trabalho como lanche da manhã",
      "O banho de gelo é o segredo pra descascar fácil"
    ],
    videoKey: null
  },
  {
    id: "salmao-airfryer",
    name: "Salmão na Airfryer",
    emoji: "🐟",
    servings: 1,
    calories: 280,
    protein: 30,
    carbs: 0,
    fat: 17,
    ingredients: [
      "1 filé de salmão (~150g)",
      "Suco de 1/2 limão",
      "1 colher de chá de azeite",
      "Sal, pimenta e páprica a gosto",
      "Alecrim (opcional)"
    ],
    steps: [
      "Tempere o salmão com limão, azeite, sal, pimenta e páprica",
      "Deixe marinar 10-15min",
      "Pré-aqueça a airfryer a 200°C por 3min",
      "Coloque o salmão com a pele pra baixo",
      "Cozinhe por 8-10min a 200°C",
      "Não precisa virar — fica perfeito"
    ],
    variations: [
      { name: "Truta", description: "Substitua por truta (mais barata, mesmo sabor)" },
      { name: "Mel e Mostarda", description: "Adicione mel + mostarda por cima antes de assar" },
      { name: "No Forno", description: "Sem airfryer: forno a 200°C por 15-18min" }
    ],
    tips: [
      "Salmão é rei do ômega-3 — excelente pra pele e inflamação",
      "Mais caro, mas vale como refeição especial 1x/semana",
      "Compre congelado — muito mais barato que fresco",
      "A pele fica crocante na airfryer — pode comer"
    ],
    videoKey: null
  }
];


// ─── 11. SKINCARE_ROUTINE ────────────────────────────────────
const SKINCARE_ROUTINE = {
  morning: {
    label: "Rotina Manhã (06:15)",
    time: "06:15",
    emoji: "☀️",
    steps: [
      {
        order: 1,
        product: "Sabonete facial (Cerave ou Cetaphil)",
        howTo: "Molhe o rosto, aplique pouco produto, massageie 30seg, enxague",
        why: "Limpa sem ressecar",
        videoKey: "lavar-rosto",
        emoji: "🧼"
      },
      {
        order: 2,
        product: "Vitamina C sérum",
        howTo: "3-4 gotas no rosto todo, espere secar 1-2min",
        why: "Clareia manchas, protege do sol",
        videoKey: "vitamina-c",
        emoji: "🍊"
      },
      {
        order: 3,
        product: "Hidratante facial (Cerave ou Neutrogena)",
        howTo: "Quantidade de 1 grão de ervilha, espalhe no rosto todo",
        why: "Hidrata e protege a barreira",
        videoKey: null,
        emoji: "💧"
      },
      {
        order: 4,
        product: "Protetor solar FPS 50+",
        howTo: "2 dedos de produto (indicador e médio), espalhe no rosto TODO, incluindo orelhas e pescoço. DICA PELE PARDA: escolha protetor com cor (tipo La Roche-Posay com cor, Nivea Sun Facial com cor) ou fórmula que não deixe white cast (aspecto esbranquiçado)",
        why: "ESSENCIAL: sem protetor, NADA funciona. Pele parda mancha mais fácil sem proteção",
        videoKey: "protetor-solar",
        emoji: "🛡️"
      }
    ]
  },
  night: {
    label: "Rotina Noite (19:30 — PÓS-ACADEMIA)",
    time: "19:30",
    emoji: "🌙",
    note: "SEMPRE depois do treino e banho. Nunca antes da academia.",
    steps: [
      {
        order: 0,
        product: "Água micelar (ou óleo de limpeza)",
        howTo: "Algodão com água micelar, passe no rosto TODO — remove protetor solar e sujeira pesada. SÓ DEPOIS lave com sabonete facial",
        why: "Double cleansing: sem isso o protetor não sai e o retinol/niacinamida não penetram",
        videoKey: null,
        emoji: "🧹"
      },
      {
        order: 1,
        product: "Sabonete facial",
        howTo: "Mesmo da manhã — limpa sujeira do dia e suor do treino",
        why: "Limpa sujeira do dia",
        videoKey: "lavar-rosto",
        emoji: "🧼"
      },
      {
        order: 2,
        product: "Niacinamida sérum",
        howTo: "3-4 gotas, rosto todo, espere secar",
        why: "Clareia, controla oleosidade, uniformiza",
        videoKey: "niacinamida",
        emoji: "✨"
      },
      {
        order: 3,
        product: "Hidratante",
        howTo: "Mesmo da manhã",
        why: "Restaura barreira da pele",
        videoKey: null,
        emoji: "💧"
      },
      {
        order: 4,
        product: "Retinol (3x/semana: Seg, Qua, Sex)",
        howTo: "Quantidade mínima (metade de 1 grão de ervilha), SÓ À NOITE",
        why: "Anti-manchas, renova pele. Pode arder no início",
        videoKey: "retinol",
        emoji: "🌟",
        days: [1, 3, 5]
      }
    ]
  },
  body: {
    label: "Cuidados Corpo",
    emoji: "🧴",
    steps: [
      {
        order: 1,
        product: "Sabonete ácido salicílico",
        howTo: "Nos braços (queratose pilar), costas — todo banho",
        why: "Desobstrui poros, melhora queratose pilar",
        frequency: "Todo banho",
        videoKey: "esfoliacao-corpo",
        emoji: "🧼"
      },
      {
        order: 2,
        product: "Hidratante com ureia",
        howTo: "Corpo todo, especialmente braços — pós-banho",
        why: "Hidrata e ajuda na queratose pilar",
        frequency: "Pós-banho",
        videoKey: null,
        emoji: "🧴"
      },
      {
        order: 3,
        product: "Niacinamida",
        howTo: "Axilas e região íntima — à noite",
        why: "Clareia gradualmente",
        frequency: "Toda noite",
        videoKey: "niacinamida",
        emoji: "✨"
      }
    ]
  },
  alerts: [
    "Retinol + Sol = MANCHAS! Sempre usar protetor no dia seguinte",
    "Se a pele ficar vermelha/descascando com retinol: reduza pra 2x/semana",
    "Protetor solar reaplicar a cada 2-3h se estiver no sol",
    "Resultados de clareamento: 4-8 semanas pra começar a notar",
    "Queratose pilar: melhora em 4-6 semanas com ácido salicílico + ureia",
    "Skincare da noite é SEMPRE pós-academia, pós-banho. Fazer antes do treino = jogar produto fora",
    "Double cleansing à noite é ESSENCIAL: água micelar PRIMEIRO, sabonete DEPOIS. Sem isso protetor solar entope os poros",
    "Protetor solar pra pele parda: evite protetores que deixam white cast (aspecto branco/roxo). Prefira com cor ou base com FPS"
  ]
};

// ─── 12. HAIR_CARE ───────────────────────────────────────────
const HAIR_CARE = {
  type: "2C/3A",
  currentLength: "5-8cm",
  goalLength: "25-30cm",
  routine: [
    { care: "Lavar", frequency: "2-3x/semana", details: "Shampoo SEM sulfato (ex: Salon Line, Lola Cosmetics)", videoKey: "lavar-cabelo-cacheado" },
    { care: "Condicionar", frequency: "Toda lavagem", details: "Condicionador da metade pro comprimento, não na raiz", videoKey: null },
    { care: "Hidratar", frequency: "1x/semana", details: "Máscara de hidratação (deixar 20-30min com touca)", videoKey: "hidratar-cachos" },
    { care: "Pentear", frequency: "Só molhado", details: "Pente largo, de baixo pra cima, com condicionador", videoKey: "pentear-molhado" },
    { care: "Secar", frequency: "Naturalmente ou difusor", details: "NUNCA secar com toalha esfregando (amassa cachos) — apertar suavemente", videoKey: "secar-difusor" },
    { care: "Cortar pontas", frequency: "A cada 3-4 meses", details: "Só as pontas (1-2cm) pra não atrasar crescimento", videoKey: null },
    { care: "Suplemento", frequency: "Diário", details: "Biotina 5000mcg/dia — ajuda no crescimento (resultado em 3-6 meses)", videoKey: null },
    { care: "Dormir", frequency: "Toda noite", details: "Fronha de seda/cetim OU touca de cetim (reduz frizz)", videoKey: "touca-cetim" }
  ],
  timeline: [
    { month: 0, length: "5-8cm", milestone: "Início — cabelo curto" },
    { month: 6, length: "~12-15cm", milestone: "Começa a dar pra prender parcialmente" },
    { month: 12, length: "~18-22cm", milestone: "Dá pra prender, rabo de cavalo" },
    { month: 18, length: "~25-30cm", milestone: "META! Depois do ombro" }
  ],
  supplements: {
    name: "Biotina",
    dose: "5000mcg/dia",
    notes: "Ajuda no crescimento do cabelo. Resultado visível em 3-6 meses de uso consistente. Pode ser encontrada em farmácias."
  }
};

// ─── 13. DEPILATION ──────────────────────────────────────────
const DEPILATION = {
  device: {
    name: "Philips Epilator Series 8000 BRE700",
    type: "Depilador elétrico (epilator)",
    howItWorks: "32 pinças que giram e arrancam o pelo da raiz — resultado liso por 2-4 semanas",
    features: [
      "Wet & Dry — funciona no banho (menos dor)",
      "2 velocidades (1: áreas sensíveis, 2: pernas/braços)",
      "Luz embutida (Opti-light) pra enxergar pelos finos",
      "Discos de cerâmica (mais suave na pele)",
      "Sem fio — 40 min de bateria (corpo todo)",
      "Cabeçote largo (pernas) + cabeçote área sensível (virilha/axilas)"
    ]
  },
  days: [6],
  dayNames: ["Sábado"],
  frequencyNote: "Com epilator o pelo demora 2-4 semanas pra voltar. Comece 1x/semana e depois pode espaçar pra 1x a cada 2 semanas quando o pelo ficar mais ralo.",
  areas: [
    { area: "Pernas", method: "Epilator — cabeçote largo, velocidade 2", direction: "Contra o pelo (de baixo pra cima)", specialCare: "Esticar a pele com a outra mão. Área menos sensível — comece por aqui", videoKey: "depilar-pernas" },
    { area: "Barriga/Peito", method: "Epilator — cabeçote largo, velocidade 1", direction: "Contra o pelo (de baixo pra cima)", specialCare: "Velocidade 1 (mais suave). Esticar bem a pele", videoKey: null },
    { area: "Braços", method: "Epilator — cabeçote largo, velocidade 2", direction: "Contra o pelo", specialCare: "Fácil e rápido, pouca dor", videoKey: null },
    { area: "Axilas", method: "Epilator — cabeçote área sensível, velocidade 1", direction: "Várias direções (pelo cresce em espiral)", specialCare: "Sem desodorante por 12h depois! Usar velocidade 1", videoKey: "depilar-axilas" },
    { area: "Virilha/íntima", method: "Epilator — cabeçote área sensível, velocidade 1", direction: "A favor do pelo nas primeiras vezes, depois contra", specialCare: "Calcinha algodão depois, sem roupa justa 24h. Área mais sensível — faça por último", videoKey: "depilar-virilha" }
  ],
  steps: [
    "Dia anterior: Esfoliar a área no banho (bucha vegetal ou esfoliante)",
    "Pelo ideal: 3-5mm — se estiver comprido, apare com tesoura antes",
    "No banho: Água morna pra relaxar a pele e abrir poros (Wet & Dry!)",
    "Esticar a pele com a outra mão — facilita a pinça pegar o pelo",
    "Passar o epilator CONTRA o sentido do pelo, sem pressionar",
    "Velocidade 1 pra áreas sensíveis (virilha, axilas), velocidade 2 pra pernas/braços",
    "Começar pelas pernas (menos dor) e ir pras áreas sensíveis por último",
    "Pós: Enxaguar com água fria e hidratar com Bepantol ou Aloe Vera",
    "Noite: Niacinamida nas áreas escuras pra clarear"
  ],
  firstTimeGuide: [
    "Semana 1: Só pernas — pra acostumar com a sensação",
    "Semana 2: Pernas + braços + barriga/peito",
    "Semana 3: Tudo + axilas",
    "Semana 4+: Corpo todo incluindo virilha",
    "A partir da 3ª vez: dor cai pela metade (pelo volta mais fino)",
    "Depois de 2 meses: corpo todo em 30-40min, quase sem dor"
  ],
  alerts: [
    "Primeiras vezes DÓI — é normal! A dor diminui muito a partir da 3ª sessão",
    "SEMPRE esfoliar 1 dia antes pra evitar pelo encravado",
    "Não expor áreas depiladas ao sol por 24h",
    "Se aparecer bolinha vermelha (foliculite): Bepantol + não depilar até sarar",
    "Não usar desodorante comum logo após depilar axilas (arde e mancha)",
    "Pelo cresce mais FINO e RALO com o tempo — oposto da gilete",
    "Use no banho (Wet & Dry) — dói MUITO menos que a seco",
    "Carregar o epilator na noite anterior pra não ficar sem bateria"
  ]
};

// ─── 14. KEGEL_ROUTINE ───────────────────────────────────────
const KEGEL_ROUTINE = {
  standard: {
    name: "Kegel Clássico",
    description: "Contraia o músculo do assoalho pélvico (o mesmo que para o xixi). Segure firme, relaxe e repita. Fortalece o controle e a sustentação.",
    reps: 10,
    holdSeconds: 5,
    relaxSeconds: 5,
    frequency: "Todos os dias",
    tip: "Pode fazer em qualquer lugar — sentada, em pé, deitada"
  },
  reverse: {
    name: "Kegel Reverso (Performance)",
    description: "Com ereção, contraia o músculo pélvico — o pênis deve se mover levemente pra cima. Treina controle de ereção, rigidez e resistência durante o sexo.",
    reps: "10-20",
    holdSeconds: 3,
    relaxSeconds: 3,
    frequency: "Quando tiver ereção"
  },
  tips: [
    "Resultado aparece em 4-8 semanas de prática diária",
    "Cardio melhora circulação e sustentação (já tá fazendo!)",
    "Sono de qualidade (7-8h) impacta diretamente a função",
    "Evitar death grip — desensibiliza e prejudica o controle",
    "Treino de glúteo e core fortalece toda a região pélvica",
    "Manter boa hidratação ajuda na qualidade da ereção",
    "Consistência > intensidade — melhor 10 reps todo dia do que 50 uma vez por semana"
  ]
};

// ─── 15. BADGES ──────────────────────────────────────────────
const BADGES = [
  { id: "streak-7", name: "7 dias seguidos", emoji: "🔥", description: "Complete o checklist por 7 dias consecutivos", condition: "streak >= 7" },
  { id: "streak-30", name: "1 mês consistente", emoji: "💪", description: "Complete o checklist por 30 dias consecutivos", condition: "streak >= 30" },
  { id: "glute-awakened", name: "Glúteo acordou!", emoji: "🍑", description: "Complete 2 semanas de ativação de glúteo", condition: "gluteActivationDays >= 14" },
  { id: "phase-2", name: "Fase 2 desbloqueada", emoji: "⚡", description: "Avance pra Fase 2 — Construção", condition: "currentPhase >= 2" },
  { id: "phase-3", name: "Fase 3 desbloqueada", emoji: "🌟", description: "Avance pra Fase 3 — Definição", condition: "currentPhase >= 3" },
  { id: "phase-4", name: "Amazona", emoji: "👑", description: "Avance pra Fase 4 — Avançado", condition: "currentPhase >= 4" },
  { id: "first-comparison", name: "Primeira comparação", emoji: "📸", description: "Tire fotos de progresso em 2 datas diferentes", condition: "photoSets >= 2" },
  { id: "minus-5kg", name: "-5kg", emoji: "🎯", description: "Perca 5kg desde o início", condition: "weightLost >= 5" },
  { id: "minus-10kg", name: "-10kg", emoji: "🎯", description: "Perca 10kg desde o início", condition: "weightLost >= 10" },
  { id: "minus-20kg", name: "-20kg", emoji: "🎯", description: "Perca 20kg desde o início (meta final!)", condition: "weightLost >= 20" },
  { id: "hydrated-7", name: "Hidratada", emoji: "💧", description: "7 dias seguidos bebendo 2.5L de água", condition: "waterStreak >= 7" },
  { id: "skin-30", name: "Pele de seda", emoji: "✨", description: "30 dias seguidos de skincare completo", condition: "skincareStreak >= 30" }
];



// ─── 18. EDUCATIONAL_CONTENT ────────────────────────────────
const EDUCATIONAL_CONTENT = {
  anteriorPelvic: {
    title: "Anteriorização Pélvica",
    emoji: "🦴",
    content: "A anteriorização pélvica é quando a pelve inclina pra frente, causando hiperlordose (curvatura exagerada na lombar). Isso enfraquece o glúteo e encurta o flexor do quadril. Corrigir isso é ESSENCIAL pro glúteo crescer.",
    howToFix: [
      "Alongar o flexor do quadril diariamente (60seg cada lado)",
      "Fortalecer o glúteo (glute bridge, hip thrust)",
      "Fortalecer o abdômen (prancha, dead bug)",
      "Consciência postural: imaginar 'enfiar o rabo' levemente"
    ]
  },
  tmbTdee: {
    title: "TMB e TDEE — Por que 2.300-2.500 kcal?",
    emoji: "🔢",
    content: "TMB (Taxa Metabólica Basal) é o que seu corpo gasta em repouso. TDEE (Gasto Energético Diário Total) inclui atividade física. Pra Arthur (96kg, 1.73m): TMB ~1.900-2.000kcal + treino 6x/semana = TDEE ~2.800-3.000kcal. Seu TDEE é ~2.800-3.000 kcal. Comendo 2.300-2.500, você está em déficit de ~400-500 kcal/dia — perfeito pra perder gordura sem perder músculo. Nos dias de descanso, 2.000-2.200 aumenta o déficit pra acelerar a perda.",
    macroSplit: "Proteína: 160-170g (1.8g/kg) | Carboidrato: 45-50% | Gordura: 25-30%"
  },
  mindMuscle: {
    title: "Conexão Mente-Músculo",
    emoji: "🧠",
    content: "Pensar no músculo que está trabalhando aumenta a ativação em até 20%. Antes de cada série, toque o músculo com a mão (especialmente o glúteo esquerdo), visualize ele contraindo, e durante o exercício mantenha o foco nele.",
    leftGlute: "O glúteo esquerdo é tipicamente mais fraco (dominância do lado direito). Por isso SEMPRE começamos exercícios unilaterais pelo ESQUERDO — quando está mais descansada e focada."
  },
  hydration: {
    title: "Hidratação — Por que 2.5L?",
    emoji: "💧",
    content: "Água é essencial pra síntese proteica (construção muscular), pra pele saudável, e pra performance no treino. 2.5L é o mínimo pra quem treina. Desidratação de 2% já reduz força em 10%.",
    tips: "Beba 500ml ao acordar. Tenha sempre uma garrafa por perto. Coloque alarme a cada 2h."
  },
  sedentaryLife: {
    title: "Vida Sedentária + Treino",
    emoji: "🪑",
    content: "Ficar sentada 8h+ encurta o flexor do quadril, enfraquece o glúteo e piora a postura. Mas treinar 1h por dia COMPENSA — o importante é não ficar 8h sem se mover.",
    tips: [
      "A cada 50min: levante, ande 2min, faça 10 agachamentos ou alongue o flexor",
      "No trabalho: sente na ponta da cadeira 5min por hora (ativa o core)",
      "Ergonomia: monitor na altura dos olhos, pés no chão, costas apoiadas",
      "Hidratação: beber água te força a levantar pro banheiro (win-win)"
    ]
  },
  supplements: {
    title: "Suplementos",
    emoji: "💊",
    content: "Suplementos complementam, não substituem a alimentação. Os essenciais pro teu objetivo:",
    tips: [
      "Whey Protein: 1 scoop/dia pra atingir meta de proteína (já tá no shake \u2713)",
      "Creatina: 5g/dia todo dia, qualquer horário (já tá no shake \u2713)",
      "Multivitamínico (Vita Supraz): tá ótimo, o zinco e selênio ajudam na performance íntima",
      "Melatonina: 0.5-1mg, 30-60min antes de dormir, dose baixa funciona melhor",
      "Colágeno hidrolisado: 10g/dia (pele + cabelo + articulações)",
      "Ômega-3: 1g/dia se não come peixe 2x/semana",
      "Vitamina D3: 2000-4000 UI/dia — pele parda produz menos vitamina D pelo sol. Essencial pra humor, energia, recuperação muscular e ossos. Barata (~R$15/mês)"
    ]
  },
  deload: {
    title: "Semana de Deload — Por que descansar te faz crescer",
    emoji: "🔄",
    content: "A cada 4-6 semanas (ou entre fases), faça 1 semana com 60% da carga e do volume normal. Isso NÃO é preguiça — é estratégia. O músculo cresce no DESCANSO, não no treino. Sem deload, o corpo platôa e o risco de lesão aumenta.",
    tips: "Na semana de deload: mesmos exercícios, metade das séries, 60% do peso. Foque na técnica perfeita e na conexão mente-músculo. Mantenha a alimentação normal."
  },
  jointCare: {
    title: "Cuidado com Articulações — Joelhos e Quadril",
    emoji: "🦴",
    content: "Com 96kg, seus joelhos recebem 3-4x o peso corporal em agachamentos e lunges (~300-400kg de força!). Cuidar das articulações agora evita problemas no futuro e permite treinar mais pesado com segurança.",
    tips: "Sempre aqueça os joelhos com 1-2 séries leves antes de ir pesado. Forma perfeita > carga pesada — SEMPRE. Se sentir dor (não desconforto muscular) no joelho, PARE. Ômega-3 e colágeno ajudam na saúde articular. Não trave o joelho no topo dos movimentos — mantenha levemente flexionado."
  }
};


const DAILY_TIMELINE = {
  treino: [
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️", items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)", "Mobilidade desk-worker (5min): hip flexor + torção torácica + pescoço", "Vacuum matinal (3x20seg)"] },
    { id: "cafe", time: "7:00", label: "☕ Café da manhã", icon: "☕", type: "meal", mealId: "cafe", items: ["Suplementos: multivitamínico + (creatina e whey no shake)"] },
    { id: "lanche1", time: "10:00", label: "🍎 Lanche manhã", icon: "🍎", type: "meal", mealId: "lanche1", items: ["Chá de spearmint — 1ª xícara 🌿"] },
    { id: "almoco", time: "12:00", label: "🍽️ Almoço", icon: "🍽️", type: "meal", mealId: "almoco", items: ["Ômega-3 com a refeição (absorção melhor com gordura)"] },
    { id: "pretreino", time: "16:00", label: "⚡ Pré-treino", icon: "⚡", type: "meal", mealId: "pretreino", items: ["Chá de spearmint — 2ª xícara 🌿", "Comer 45-60min antes do treino"] },
    { id: "treino", time: "17:40", label: "💪 Treino", icon: "💪", type: "workout", items: ["Ativação glúteo esq (10min)", "Aquecimento", "Treino do dia", "Alongamento"] },
    { id: "postreino", time: "19:00", label: "🐕 Pós-treino", icon: "🐕", items: ["Passeio com os cães (~25min — cardio leve)"] },
    { id: "jantar", time: "20:00", label: "🌙 Jantar", icon: "🌙", type: "meal", mealId: "jantar", items: ["Vitamina D3+K2 com a refeição"] },
    { id: "noturno", time: "22:00", label: "🌛 Noturno", icon: "🌛", type: "meal", mealId: "noturno", items: ["Skincare noite (passo a passo)", "Kegel noturno", "Meta: largar celular 22h, dormir 22:30", "Lembrete: luz azul + estímulo = sono ruim = cortisol alto"] },
  ],
  descanso: [
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️", items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)", "Mobilidade desk-worker (5min): hip flexor + torção torácica + pescoço", "Vacuum matinal (3x20seg)"] },
    { id: "cafe", time: "7:00", label: "☕ Café da manhã", icon: "☕", type: "meal", mealId: "cafe", items: ["Suplementos: multivitamínico"] },
    { id: "lanche1", time: "10:00", label: "🍎 Lanche manhã", icon: "🍎", type: "meal", mealId: "lanche1", items: ["Chá de spearmint — 1ª xícara 🌿"] },
    { id: "almoco", time: "12:00", label: "🍽️ Almoço", icon: "🍽️", type: "meal", mealId: "almoco", items: ["Ômega-3 com a refeição"] },
    { id: "lanche2", time: "16:00", label: "🍎 Lanche tarde", icon: "🍎", type: "meal", mealId: "pretreino", items: ["Chá de spearmint — 2ª xícara 🌿"] },
    { id: "atividade", time: "17:40", label: "🚶 Atividade leve", icon: "🚶", items: ["Caminhada 25-30min ou escada do prédio (progressivo)", "Protocolo ativação glúteo esq (10min)", "Yoga de quadril (20min)"] },
    { id: "postreino", time: "19:00", label: "🐕 Passeio cães", icon: "🐕", items: ["Passeio com os cães (~25min)"] },
    { id: "jantar", time: "20:00", label: "🌙 Jantar", icon: "🌙", type: "meal", mealId: "jantar", items: ["Vitamina D3+K2 com a refeição"] },
    { id: "noturno", time: "22:00", label: "🌛 Noturno", icon: "🌛", type: "meal", mealId: "noturno", items: ["Skincare caprichado (rosto + corpo)", "Kegel noturno", "Ritual de corpo", "Meta: largar celular 22h, dormir 22:30"] },
  ]
};

const WEEK_SCHEDULE = {
  1: { type: "treino", workout: "Lower A", label: "💪 Lower A (Glúteo heavy)", warmup: "lower", cooldown: "lower" },
  2: { type: "descanso", workout: null, label: "🧘 Yoga + Rebolar", warmup: null, cooldown: null },
  3: { type: "treino", workout: "Upper", label: "💪 Upper Body", warmup: "upper", cooldown: "upper" },
  4: { type: "descanso", workout: null, label: "🟡 Ativação + Caminhada", warmup: null, cooldown: null },
  5: { type: "treino", workout: "Lower B", label: "💪 Lower B (Coxas + Quadril)", warmup: "lower", cooldown: "lower" },
  6: { type: "treino", workout: "Gluteo Isolado", label: "💪 Glúteo Isolado + Core", warmup: "lower", cooldown: "lower" },
  0: { type: "descanso", workout: null, label: "😴 Descanso total", warmup: null, cooldown: null },
};

const KEGEL_PROTOCOL_TYPES = [
  { tipo: "Rápida", desc: "Contrair e soltar rápido x10. Descansar 10s. Repetir 3x.", quando: "3x ao dia" },
  { tipo: "Longa", desc: "Contrair 10s, soltar 10s. Repetir 5x.", quando: "3x ao dia" },
  { tipo: "Elevador", desc: "Contrair progressivamente 'andares', relaxar andares. Repetir 3x.", quando: "1x ao dia" },
];

// ─── WORKOUTS — Rotina Amazona (4 Fases) ─────────────────
const WORKOUTS = {
  fase1: {
    name: "Fase 1 — Fundação",
    period: "Meses 1-2",
    frequency: "3x/semana",
    objective: "Ativar glúteos dormentes, aprender os movimentos, criar o hábito",
    note: "Pode fazer no prédio: elástico + halteres. Glúteo esq mais dormido: 5 reps extras de ativação unilateral esquerda ANTES de cada exercício bilateral.",
    days: {
      "Lower A": {
        name: "Treino A · Full Body (Seg/Qua/Sex)",
        exercises: [
          { id: "f1-glute-bridge", name: "Glute Bridge no chão", sets: 3, reps: "15", rest: "90seg", weight: "0 kg → haltere leve no quadril", tip: "Empurre o quadril pro teto, squeeze 2-3seg no topo. Começar sem peso.", videoKey: "glute-bridge", unilateral: false, startLeft: false },
          { id: "f1-bridge-uni-esq", name: "Glute Bridge Unilateral ESQUERDO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Pé esquerdo no chão, direito suspenso. Segurar 3seg no topo.", videoKey: "glute-bridge", unilateral: true, startLeft: true },
          { id: "f1-bridge-uni-dir", name: "Glute Bridge Unilateral DIREITO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Mesmo número de reps que o esquerdo. Nunca mais.", videoKey: "glute-bridge", unilateral: true, startLeft: false },
          { id: "f1-abducao-elastico", name: "Abdução deitada com elástico", sets: 3, reps: "20", rest: "60seg", weight: "elástico leve/médio", tip: "Deitada de lado, elevar perna. Sentir queimar no glúteo.", videoKey: "abducao-deitada", unilateral: false, startLeft: false },
          { id: "f1-wall-sit", name: "Wall Sit (agachamento na parede)", sets: 3, reps: "20-30seg", rest: "60seg", weight: "0 kg", tip: "Costas na parede, coxas paralelas ao chão. Protege joelhos.", videoKey: "agachamento", unilateral: false, startLeft: false, type: "plank" },
          { id: "f1-rdl", name: "RDL com halteres leves", sets: 3, reps: "12", rest: "90seg", weight: "5-8 kg cada", tip: "Dobrar no quadril, NÃO na coluna. Sentir posterior da coxa.", videoKey: "stiff", unilateral: false, startLeft: false },
          { id: "f1-prancha", name: "Prancha", sets: 3, reps: "20-30seg", rest: "45seg", weight: "0 kg", tip: "Corpo reto. Apertar glúteo e abdômen.", videoKey: "prancha", unilateral: false, startLeft: false, type: "plank" },
          { id: "f1-vacuum", name: "Vacuum Abdominal", sets: 3, reps: "20seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e pra cima, segurar. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" },
        ]
      }
    }
  },

  fase2: {
    name: "Fase 2 — Construção",
    period: "Meses 3-5",
    frequency: "4x/semana",
    objective: "Construir volume em glúteos e coxas, iniciar a silhueta amazona",
    days: {
      "Lower A": {
        name: "Lower A · Glúteo + Posterior",
        exercises: [
          {
            id: "f2-hip-thrust-pesado",
            name: "Hip Thrust Barra/Halteres (pesado)",
            sets: 4,
            reps: "10-12",
            rest: "90seg",
            weight: "20-50 kg",
            tip: "Principal do dia. Progressão de carga toda semana.",
            videoKey: "hip-thrust",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-hip-thrust-uni-esq",
            name: "Hip Thrust Unilateral ESQUERDO",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "10-20 kg",
            tip: "Extra pro lado fraco — começa pelo esquerdo.",
            videoKey: "hip-thrust",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f2-hip-thrust-uni-dir",
            name: "Hip Thrust Unilateral DIREITO",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "10-20 kg",
            tip: "Igual ao esquerdo, nem uma a mais.",
            videoKey: "hip-thrust",
            unilateral: true,
            startLeft: false
          },
          {
            id: "f2-rdl",
            name: "RDL com Halteres",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "10-18 kg cada",
            tip: "Dobrar quadril, não a coluna.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-stiff",
            name: "Stiff com Halteres",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "10-18 kg cada",
            tip: "Volume na parte de baixo da bunda.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-abducao-maquina",
            name: "Abdução Máquina ou Elástico",
            sets: 4,
            reps: "20",
            rest: "45seg",
            weight: "10-30 kg / elástico médio",
            tip: "Lento, sentir queimar.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false
          },
          { id: "f2-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Upper": {
        name: "Upper · Peito + Costas + Ombros",
        exercises: [
          {
            id: "f2-supino-inclinado",
            name: "Supino Inclinado com Halteres",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "8-14 kg cada",
            tip: "Peito alto e ombros arredondados.",
            videoKey: "supino-inclinado",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-remada-curvada",
            name: "Remada Curvada com Halteres",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "10-16 kg cada",
            tip: "Retração escapular completa.",
            videoKey: "remada-curvada",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-elevacao-lateral",
            name: "Elevação Lateral",
            sets: 4,
            reps: "15",
            rest: "45seg",
            weight: "4-8 kg cada",
            tip: "Ombros redondos = silhueta mais feminina.",
            videoKey: "elevacao-lateral",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-band-pull-apart",
            name: "Band Pull-Apart com Elástico",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico leve/médio",
            tip: "Postura e ombros saudáveis.",
            videoKey: "band-pull-apart",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-rosca-triceps",
            name: "Rosca Direta + Tríceps Testa",
            sets: 3,
            reps: "15 cada",
            rest: "45seg",
            weight: "8-12 kg cada",
            tip: "Bônus de braços.",
            videoKey: "rosca-direta",
            unilateral: false,
            startLeft: false
          },
          { id: "f2-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Lower B": {
        name: "Lower B · Coxa + Quadril",
        exercises: [
          {
            id: "f2-bulgaro-esq",
            name: "Agachamento Búlgaro (esquerdo primeiro)",
            sets: 3,
            reps: "10 cada",
            rest: "60seg",
            weight: "8-16 kg cada",
            tip: "Começar pelo lado esquerdo sempre.",
            videoKey: "bulgarian-split-squat",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f2-agachamento-barra",
            name: "Agachamento com Barra ou Halteres",
            sets: 4,
            reps: "10",
            rest: "90seg",
            weight: "30-50 kg barra / 14-20 kg cada",
            tip: "Pés abertos, joelhos seguindo o pé.",
            videoKey: "agachamento",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-sumo",
            name: "Sumo Agachamento",
            sets: 3,
            reps: "15",
            rest: "60seg",
            weight: "20-40 kg (haltere ou barra)",
            tip: "Interno de coxa — coxas grossas.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-leg-press",
            name: "Leg Press (pés altos e abertos)",
            sets: 4,
            reps: "12",
            rest: "90seg",
            weight: "40-80 kg",
            tip: "Ativa glúteo mais que quadríceps.",
            videoKey: "leg-press",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-aducao",
            name: "Adução Interna Máquina",
            sets: 4,
            reps: "15",
            rest: "45seg",
            weight: "15-35 kg",
            tip: "Preenche a coxa internamente.",
            videoKey: "adutora",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-panturrilha",
            name: "Panturrilha em Pé",
            sets: 4,
            reps: "20",
            rest: "45seg",
            weight: "20-40 kg (barra ou máquina)",
            tip: "Pernas completas.",
            videoKey: "panturrilha",
            unilateral: false,
            startLeft: false
          },
          { id: "f2-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Gluteo Isolado": {
        name: "Glúteo Isolado + Core",
        exercises: [
          {
            id: "f2-kickback-esq",
            name: "Kickback com Caneleira — 4 apoios (esquerdo primeiro)",
            sets: 4,
            reps: "15 cada",
            rest: "45seg",
            weight: "3-8 kg caneleira",
            tip: "Extensão completa de quadril.",
            videoKey: "kickback-polia",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f2-hip-thrust-uni-core",
            name: "Hip Thrust Unilateral",
            sets: 3,
            reps: "12 cada",
            rest: "60seg",
            weight: "10-20 kg",
            tip: "Esquerdo começa.",
            videoKey: "hip-thrust",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f2-abducao-deitada",
            name: "Abdução Deitada Lateral",
            sets: 4,
            reps: "20",
            rest: "45seg",
            weight: "elástico / 3-8 kg caneleira",
            tip: "Sempre comece pelo lado esquerdo.",
            videoKey: "abducao-deitada",
            unilateral: false,
            startLeft: true
          },
          {
            id: "f2-prancha-variacoes",
            name: "Prancha Variações",
            sets: 3,
            reps: "45seg",
            rest: "30seg",
            weight: "0 kg",
            tip: "Alternar prancha frontal e lateral.",
            videoKey: "prancha",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f2-crunch-bicicleta",
            name: "Crunch Bicicleta",
            sets: 3,
            reps: "20",
            rest: "30seg",
            weight: "0 kg",
            tip: "Cotovelo toca joelho oposto, devagar.",
            videoKey: "crunch-bicicleta",
            unilateral: false,
            startLeft: false
          },
          { id: "f2-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      }
    }
  },

  fase3: {
    name: "Fase 3 — Amazona 🔥",
    period: "Meses 6-10",
    frequency: "4-5x/semana",
    objective: "Maximizar volume nos lugares certos — a forma amazona acontece aqui",
    days: {
      "Lower A": {
        name: "Lower A · Glúteo Heavy",
        exercises: [
          {
            id: "f3-hip-thrust-heavy",
            name: "Hip Thrust Barra (carga máxima progressiva)",
            sets: 5,
            reps: "8-10",
            rest: "90seg",
            weight: "50-90 kg",
            tip: "Aqui é onde a bunda cresce de verdade.",
            videoKey: "hip-thrust",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-hip-thrust-uni-esq",
            name: "Hip Thrust Unilateral ESQUERDO",
            sets: 3,
            reps: "10",
            rest: "60seg",
            weight: "15-30 kg",
            tip: "Continua o extra do lado fraco.",
            videoKey: "hip-thrust",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f3-rdl-barra",
            name: "RDL com Barra",
            sets: 4,
            reps: "10",
            rest: "90seg",
            weight: "40-60 kg",
            tip: "Empurre o quadril pra trás, sinta atrás da coxa.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-stiff-pesado",
            name: "Stiff com Halteres (pesado)",
            sets: 4,
            reps: "10",
            rest: "90seg",
            weight: "30-50 kg",
            tip: "Volume na parte de baixo da bunda.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-abducao-dropset",
            name: "Abdução Máquina (drop set no final)",
            sets: 4,
            reps: "12 + drop",
            rest: "60seg",
            weight: "25-45 kg",
            tip: "Drop set: terminar o último sem descanso, peso menor.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Upper": {
        name: "Upper · Curvilíneo",
        exercises: [
          {
            id: "f3-supino-inclinado",
            name: "Supino Inclinado com Halteres",
            sets: 4,
            reps: "10",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Peito alto, cotovelos 45 graus.",
            videoKey: "supino-inclinado",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-remada-curvada",
            name: "Remada Curvada com Halteres",
            sets: 4,
            reps: "10",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Abre as costas, cria a forma ampulheta.",
            videoKey: "remada-curvada",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-elevacao-lateral",
            name: "Elevação Lateral",
            sets: 4,
            reps: "15",
            rest: "45seg",
            weight: "7-12 kg cada",
            tip: "Ombros arredondados = cintura parece mais fina.",
            videoKey: "elevacao-lateral",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-band-pull-apart",
            name: "Band Pull-Apart com Elástico",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico médio/forte",
            tip: "Postura e ombros saudáveis.",
            videoKey: "band-pull-apart",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-crucifixo",
            name: "Crucifixo com Halteres",
            sets: 3,
            reps: "12",
            rest: "45seg",
            weight: "10-16 kg cada",
            tip: "Braços levemente dobrados, abrir lento.",
            videoKey: "crucifixo",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Lower B": {
        name: "Lower B · Coxa + Quadril",
        exercises: [
          {
            id: "f3-agachamento-barra",
            name: "Agachamento Barra Traseira",
            sets: 4,
            reps: "8-10",
            rest: "90seg",
            weight: "50-80 kg",
            tip: "Pés largura dos ombros, descer até coxa paralela.",
            videoKey: "agachamento",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-bulgaro-esq",
            name: "Agachamento Búlgaro com Halteres (esquerdo primeiro)",
            sets: 3,
            reps: "10 cada",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Pé traseiro no banco, foque no glúteo ao subir.",
            videoKey: "bulgarian-split-squat",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f3-aducao",
            name: "Adução Interna Máquina",
            sets: 4,
            reps: "15",
            rest: "45seg",
            weight: "25-50 kg",
            tip: "Preenche a coxa internamente.",
            videoKey: "adutora",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-sumo-pesado",
            name: "Sumo Pesado com Barra",
            sets: 4,
            reps: "10",
            rest: "90seg",
            weight: "50-80 kg barra",
            tip: "Interno de coxa — coxas grossas.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-bulgaro-dir",
            name: "Agachamento Búlgaro com Halteres — substituição cadeira extensora",
            sets: 3,
            reps: "15",
            rest: "60seg",
            weight: "10-18 kg cada",
            tip: "Substitui cadeira extensora. Quadríceps em foco.",
            videoKey: "bulgarian-split-squat",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Gluteo Isolado": {
        name: "Full Glúteo + Posterior",
        exercises: [
          {
            id: "f3-deadlift",
            name: "Deadlift (Levantamento Terra)",
            sets: 4,
            reps: "8",
            rest: "90seg",
            weight: "50-80 kg",
            tip: "O exercício que mais recruta glúteo e posterior junto.",
            videoKey: "deadlift",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-hip-thrust-pausa",
            name: "Hip Thrust com Pausa 2s em Cima",
            sets: 4,
            reps: "10",
            rest: "90seg",
            weight: "50-80 kg",
            tip: "A pausa isométrica constrói mente-músculo.",
            videoKey: "hip-thrust",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-stiff-leg-curl",
            name: "Stiff com Halteres — substituição leg curl",
            sets: 4,
            reps: "12",
            rest: "60seg",
            weight: "20-40 kg",
            tip: "Substitui leg curl. Posterior da coxa em foco.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-abducao-pe-band",
            name: "Abdução com Elástico em Pé",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico médio/forte",
            tip: "Sempre comece pelo lado esquerdo.",
            videoKey: "abducao-pe",
            unilateral: false,
            startLeft: true
          },
          { id: "f3-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      }
    }
  },

  fase4: {
    name: "Fase 4 — Manutenção",
    period: "Mês 11+",
    frequency: "3-4x/semana",
    objective: "Manter, refinar, continuar crescendo devagar",
    note: "Mantenha intensidade mas pode reduzir volume.",
    days: {
      "Lower A": {
        name: "Lower Body Foco Glúteo",
        exercises: [
          {
            id: "f4-hip-thrust",
            name: "Hip Thrust Barra",
            sets: 3,
            reps: "10",
            rest: "90seg",
            weight: "50-90 kg",
            tip: "Manter carga da fase 3. Unilateral esquerdo continua pra sempre.",
            videoKey: "hip-thrust",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-hip-thrust-uni-esq",
            name: "Hip Thrust Unilateral ESQUERDO",
            sets: 3,
            reps: "10",
            rest: "60seg",
            weight: "15-30 kg",
            tip: "Continua o extra do lado fraco.",
            videoKey: "hip-thrust",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f4-rdl",
            name: "RDL com Barra",
            sets: 3,
            reps: "10",
            rest: "90seg",
            weight: "40-60 kg",
            tip: "Empurre o quadril pra trás, sinta atrás da coxa.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-abducao",
            name: "Abdução Máquina",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "25-45 kg",
            tip: "Lento, sentir queimar.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-deadlift",
            name: "Deadlift (Levantamento Terra)",
            sets: 3,
            reps: "8",
            rest: "90seg",
            weight: "50-80 kg",
            tip: "Quadril pra trás, barra rente ao corpo.",
            videoKey: "deadlift",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Upper": {
        name: "Upper Body",
        exercises: [
          {
            id: "f4-supino-inclinado",
            name: "Supino Inclinado com Halteres",
            sets: 3,
            reps: "10",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Peito alto, cotovelos 45 graus.",
            videoKey: "supino-inclinado",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-remada-curvada",
            name: "Remada Curvada com Halteres",
            sets: 3,
            reps: "10",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Retração escapular completa.",
            videoKey: "remada-curvada",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-elevacao-lateral",
            name: "Elevação Lateral",
            sets: 3,
            reps: "15",
            rest: "45seg",
            weight: "7-12 kg cada",
            tip: "Ombros arredondados = cintura parece mais fina.",
            videoKey: "elevacao-lateral",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-band-pull-apart",
            name: "Band Pull-Apart com Elástico",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico médio/forte",
            tip: "Postura e ombros saudáveis.",
            videoKey: "band-pull-apart",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-crucifixo",
            name: "Crucifixo com Halteres",
            sets: 3,
            reps: "12",
            rest: "45seg",
            weight: "10-16 kg cada",
            tip: "Braços levemente dobrados, abrir lento.",
            videoKey: "crucifixo",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Lower B": {
        name: "Lower Body Foco Glúteo 2",
        exercises: [
          {
            id: "f4-agachamento-barra",
            name: "Agachamento Barra Traseira",
            sets: 3,
            reps: "10",
            rest: "90seg",
            weight: "50-80 kg",
            tip: "Pés largura dos ombros, descer até coxa paralela.",
            videoKey: "agachamento",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-bulgaro-esq",
            name: "Agachamento Búlgaro com Halteres (esquerdo primeiro)",
            sets: 3,
            reps: "10 cada",
            rest: "60seg",
            weight: "14-22 kg cada",
            tip: "Pé traseiro no banco, foque no glúteo ao subir.",
            videoKey: "bulgarian-split-squat",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f4-aducao",
            name: "Adução Interna Máquina",
            sets: 3,
            reps: "15",
            rest: "45seg",
            weight: "25-50 kg",
            tip: "Preenche a coxa internamente.",
            videoKey: "adutora",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-sumo",
            name: "Sumo com Barra",
            sets: 3,
            reps: "10",
            rest: "90seg",
            weight: "50-80 kg barra",
            tip: "Interno de coxa — coxas grossas.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-leg-press",
            name: "Leg Press (pés altos e abertos)",
            sets: 3,
            reps: "12",
            rest: "90seg",
            weight: "60-100 kg",
            tip: "Ativa glúteo mais que quadríceps.",
            videoKey: "leg-press",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      },
      "Gluteo Isolado": {
        name: "Misto ou Cardio + Core",
        exercises: [
          {
            id: "f4-stiff",
            name: "Stiff com Halteres",
            sets: 3,
            reps: "10",
            rest: "90seg",
            weight: "30-50 kg",
            tip: "Volume na parte de baixo da bunda.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-kickback",
            name: "Kickback com Caneleira — 4 apoios (esquerdo primeiro)",
            sets: 3,
            reps: "15 cada",
            rest: "45seg",
            weight: "3-8 kg caneleira",
            tip: "Extensão completa de quadril.",
            videoKey: "kickback-polia",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f4-abducao-deitada",
            name: "Abdução Deitada Lateral",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico / 3-8 kg caneleira",
            tip: "Sempre comece pelo lado esquerdo.",
            videoKey: "abducao-deitada",
            unilateral: false,
            startLeft: true
          },
          {
            id: "f4-prancha-variacoes",
            name: "Prancha Variações",
            sets: 3,
            reps: "45seg",
            rest: "30seg",
            weight: "0 kg",
            tip: "Alternar prancha frontal e lateral.",
            videoKey: "prancha",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-cardio",
            name: "Cardio Esteira Inclinada",
            sets: 1,
            reps: "20-30min",
            rest: "0seg",
            weight: "0 kg",
            tip: "Inclinação 8-12%, velocidade 5-6km/h.",
            videoKey: "cardio-esteira",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      }
    }
  }
};

// ─── WARMUP_LOWER ────────────────────────────────────────────
const WARMUP_LOWER = [
  { name: "Alongamento hip flexor ajoelhado", desc: "Ajoelhar, uma perna à frente 90°. Empurrar quadril pra frente suavemente. Destravar 8h sentada.", time: "30seg cada lado" },
  { name: "Torção torácica deitada", desc: "Deitada de lado, joelhos dobrados. Abrir braço de cima pra trás, olhar seguir a mão. Soltar ombros e costas.", time: "5x cada lado" },
  { name: "Rotação pescoço + ombros", desc: "Girar pescoço devagar 5x cada lado. Depois subir ombros até orelhas e soltar com força 10x. Soltar tensão.", time: "1 min" },
  { name: "Marcha elevando joelho", desc: "Ativa circulação e aquece quadril", time: "2 min" },
  { name: "Círculos de quadril", desc: "Mãos na cintura, círculos amplos", time: "1 min cada sentido" },
  { name: "Leg swing frente/trás", desc: "Pêndulo solto — não forçar", time: "15x cada perna" },
  { name: "Leg swing lateral", desc: "Plano lateral — abre o quadril", time: "15x cada perna" },
  { name: "Agachamento com pausa no fundo", desc: "3s no fundo, mobilidade de tornozelo e quadril", time: "10 reps" },
  { name: "Clamshell esquerdo com elástico ⭐", desc: "Ativa o glúteo esq antes do treino — crítico", time: "2x15" },
  { name: "Clamshell bilateral com elástico", desc: "Dois lados, ativa glúteo médio", time: "2x20" },
  { name: "Cat-cow no quadrupede", desc: "Mobilidade lombar — arquear e curvar devagar", time: "10 lentos" },
];

// ─── WARMUP_UPPER ────────────────────────────────────────────
const WARMUP_UPPER = [
  { name: "Alongamento hip flexor ajoelhado", desc: "Ajoelhar, uma perna à frente 90°. Empurrar quadril pra frente suavemente. Destravar 8h sentada.", time: "30seg cada lado" },
  { name: "Torção torácica deitada", desc: "Deitada de lado, joelhos dobrados. Abrir braço de cima pra trás, olhar seguir a mão. Soltar ombros e costas.", time: "5x cada lado" },
  { name: "Rotação pescoço + ombros", desc: "Girar pescoço devagar 5x cada lado. Depois subir ombros até orelhas e soltar com força 10x. Soltar tensão.", time: "1 min" },
  { name: "Jumping jack ou pular corda", desc: "Elevar frequência cardíaca base", time: "2 min" },
  { name: "Círculos de ombro", desc: "Braços estendidos, amplos — frente e trás", time: "15x cada direção" },
  { name: "T-spine rotation", desc: "Deitado de lado, joelhos dobrados: abrir o braço pra trás", time: "10x cada lado" },
  { name: "Band pull-apart (ou toalha)", desc: "Elástico na frente, abrir até tocar o peito por trás", time: "2x15" },
  { name: "Supino com peso leve (50%)", desc: "Aquecimento específico do padrão de empurrar", time: "2x15" },
];

// ─── COOLDOWN_LOWER ──────────────────────────────────────────
const COOLDOWN_LOWER = [
  { name: "Pigeon Pose", desc: "Joelho dobrado na frente, perna trás estendida. Relaxar quadril pro chão. Se doer no joelho da frente: afastar mais o pé.", time: "2 min cada lado" },
  { name: "Lizard Pose", desc: "Avanço fundo, antebraço no chão. Respirar fundo, afundar mais a cada expiração. Não forçar se lombar reclamar.", time: "90seg cada lado" },
  { name: "Borboleta sentada", desc: "Pés juntos, joelhos abertos, inclinar devagar. Puxar pés mais perto = mais intenso. Dor no joelho = soltar.", time: "2 min" },
  { name: "Happy Baby", desc: "Deitada, segurar plantas dos pés, joelhos abertos. Balançar suave lado a lado. Pescoço no chão.", time: "2 min" },
  { name: "Círculos de quadril em pé", desc: "Mãos na cintura, círculos amplos e lentos. Tronco PARADO, só quadril move. Se tronco mexer, círculo menor.", time: "1 min (30seg cada sentido)" },
  { name: "Isolamento quadril frente/trás", desc: "Pés paralelos, empurrar quadril frente e trás sem mover tronco. Imaginar parede na frente e atrás. Joelhos levemente flexionados.", time: "1 min" },
];

// ─── COOLDOWN_UPPER ──────────────────────────────────────────
const COOLDOWN_UPPER = [
  { name: "Peitoral na porta", desc: "Braço dobrado 90° na porta, girar suavemente. Sentir abertura no peito.", time: "1 min cada lado" },
  { name: "Torção espinhal sentada", desc: "Perna cruzada, torcer o tronco devagar. Olhar por cima do ombro.", time: "1 min cada lado" },
  { name: "Child's Pose", desc: "Joelhos abertos, braços à frente, testa no chão. Respirar profundo.", time: "2 min" },
  { name: "Ondulação de coluna em pé", desc: "Da cintura pra cima, ondular como cobra. Começar pela pélvis, passar por lombar, torácica, pescoço. Tensão no pescoço = parar antes.", time: "1 min" },
  { name: "Rotação de ombros fluida", desc: "Círculos amplos com os ombros, devagar, sentir soltar.", time: "1 min" },
];

// ─── GLUTE_FIX_PROTOCOL ──────────────────────────────────────
const GLUTE_FIX_PROTOCOL = {
  explanation: "Desequilíbrio de glúteo é quase universal em sedentários. O lado dominante assume o trabalho. O esquerdo vai ficando dormido. É um problema de conexão nervo-músculo, não de tamanho.",
  daily_exercises: [
    { name: "Clamshell com elástico — ESQUERDO", sets: "3x20 lentos", desc: "Deitado de lado, elástico nos joelhos. Abrir e fechar como concha. Só o esquerdo neste bloco." },
    { name: "Glute bridge unilateral — ESQUERDO", sets: "3x15 com pausa 3s", desc: "Pé esquerdo no chão, direito suspenso. Elevar quadril, SEGURAR 3s no topo." },
    { name: "Donkey kick — ESQUERDO", sets: "3x20", desc: "Quadrupede, chutar o pé esquerdo para cima e trás. Joelho dobrado 90°." },
    { name: "Side-lying abduction — ESQUERDO", sets: "3x20 lentos", desc: "Deitado de lado, elevar a perna esquerda estendida. Segurar 1s no topo." },
    { name: "Isométrico de parede — ESQUERDO", sets: "3x30s", desc: "De pé, pressionar pé esquerdo contra parede. Sentir glúteo esq contrair. Zero movimento." },
  ],
  rules: [
    { name: "Regra do líder", rule: "SEMPRE", desc: "Unilaterais: começa pelo ESQUERDO. Reps do esquerdo definem o máximo do direito." },
    { name: "Pausa isométrica nos bilaterais", rule: "Cada rep", desc: "Hip thrust e agachamento: squeeze consciente no topo, imaginar apertar moeda com glúteo esquerdo. 1-2s de pausa." },
    { name: "Mão de feedback", rule: "Opcional", desc: "Nos primeiros meses: colocar a mão no glúteo esquerdo durante exercícios pra sentir se está contraindo." },
    { name: "Não compensar na lombar", rule: "Crítico", desc: "Glúteo dormido = lombar faz o trabalho → lesão. Se sentir tensão na lombar, parar e fazer 10 glute bridges unilaterais esq." },
  ],
  timeline: [
    ["Semanas 1-4", "Melhora de ativação — vai começar a SENTIR o esquerdo queimar"],
    ["Meses 2-3", "Simetria de força — os dois lados produzem força similar"],
    ["Meses 4-8", "Resultado visual — esquerdo começa a acompanhar o direito"],
    ["Mês 8+", "Com consistência, diferença mínima ou imperceptível"],
  ]
};

// ─── YOGA_LEVELS ─────────────────────────────────────────────
const YOGA_LEVELS = {
  iniciante: [["Pigeon Pose","2 min cada lado"],["Happy Baby","2 min"],["Borboleta","2 min"],["Cat-Cow","2 min"],["Torção sentada","1 min cada lado"]],
  intermediario: [["Lizard Pose","2 min cada lado"],["Malasana (agachamento profundo)","2 min"],["Frog Pose","2 min"],["Forward Fold sentado","2 min"],["Low Lunge com abertura","2 min cada lado"]],
  avancado: [["Dragon Pose","3 min cada lado"],["Splits progressivos","trabalhar devagar"],["Standing Split","1 min cada lado"],["Pancake Stretch","3 min"]],
};

// ─── REBOLAR_STEPS ───────────────────────────────────────────
const REBOLAR_STEPS = [
  { fase: "Semanas 1-2 · Isolamento Base", steps: ["Pé paralelo, mãos na cintura — mover SÓ o quadril frente/trás sem mover o tronco. 3x30 reps.","Quadril esquerda/direita isolado: 3x30 reps.","Círculos lentos: 3x20 em cada sentido.","Objetivo real: o tronco não mexe. Só o quadril."] },
  { fase: "Semanas 3-4 · Ritmo", steps: ["Mesmos movimentos com música — funk, pagode, baile funk.","Adicionar leve balanço nos joelhos enquanto move o quadril.","Figura de 8 / infinito com o quadril: 3x20.","Praticar frente ao espelho — feedback visual acelera muito."] },
  { fase: "Mês 2+ · Expressão", steps: ["Adicionar movimento dos braços e expressão corporal.","YouTube: 'aprenda a rebolar do zero' — boas aulas gratuitas.","Bachata para iniciantes no YouTube — ensina isolamento naturalmente.","Gravar e comparar com semanas anteriores."] },
];

// ─── EXERCISE_TECHNIQUE ──────────────────────────────────────
const EXERCISE_TECHNIQUE = [
  {
    exercise: "Hip Thrust", subtitle: "Glúteo — base de tudo",
    tips: ["Banco atrás das escápulas, não da nuca","Pés paralelos ou levemente abertos, largura de quadril","No topo: quadril paralelo ao chão — não hiperextender a lombar","Pausa de 1-2s no topo com squeeze consciente","Descer controlado em 2s","Joelhos seguindo a linha dos pés"],
    alerts: [
      { signal: "Dor ou tensão na lombar baixa", fix: "Glúteo não ativou. Parar, fazer 10 glute bridges unilaterais esq, recomeçar." },
      { signal: "Tensão no quadríceps", fix: "Pés muito à frente ou banco muito baixo." },
      { signal: "Pontada no joelho", fix: "Joelho caindo pra dentro. Usar elástico." },
      { signal: "Pescoço tenso", fix: "Banco na posição errada — deve estar nas escápulas." }
    ]
  },
  {
    exercise: "Agachamento", subtitle: "Coxa + Glúteo",
    tips: ["Pés na largura dos ombros ou um pouco mais, levemente abertos (15-30°)","Descer como se fosse sentar numa cadeira atrás — não deixar os joelhos passarem muito à frente dos pés","Lombar neutra durante todo o movimento — nem arqueada demais, nem curvada","Olhar levemente pra frente e pra cima, não direto para baixo","Descer até coxa paralela ao chão no mínimo — agachamento raso não ativa o glúteo","Subir empurrando o chão, não pensando em joelhos — muda o recrutamento muscular"],
    alerts: [
      { signal: "Joelhos indo pra dentro na subida (valgismo)", fix: "Glúteo fraco ou mobilidade de tornozelo ruim. Reduzir carga, usar elástico nos joelhos para treinar o padrão." },
      { signal: "Lombar 'arredondando' no fundo", fix: "Falta de mobilidade de quadril ou carga alta demais. Reduzir peso, trabalhar mobilidade antes." },
      { signal: "Elevação de calcanhar", fix: "Mobilidade de tornozelo insuficiente. Agachar com calcanhar em pequena elevação temporariamente." },
      { signal: "Dor anterior no joelho", fix: "Carga alta demais ou movimento muito à frente. Recuar o padrão." }
    ]
  },
  {
    exercise: "RDL / Stiff", subtitle: "Posterior de coxa e glúteo",
    tips: ["Movimento começa no quadril — dobrar o quadril pra trás, não curvar a coluna","Barra ou halteres deslizam rente ao corpo durante todo o movimento","Joelhos levemente dobrados e fixos — não é agachamento, não muda o ângulo do joelho","Descer até sentir o alongamento no posterior da coxa — cada pessoa tem um range diferente","Subir contraindo glúteo e posterior juntos, não usando a lombar para puxar","Escápulas juntas e lombar neutra durante todo o movimento"],
    alerts: [
      { signal: "Dor aguda na lombar", fix: "Coluna arredondando. Reduzir a amplitude e focar na neutralidade antes de aumentar range." },
      { signal: "Não sentir o posterior da coxa", fix: "Joelhos dobrados demais — virou agachamento. Fixar os joelhos." },
      { signal: "Barra ou halteres longe do corpo", fix: "Sobrecarrega a lombar. Deslizar rente às pernas." }
    ]
  },
  {
    exercise: "Elevação Lateral", subtitle: "Ombros arredondados",
    tips: ["Peso MUITO mais leve do que parece necessário — é um músculo pequeno","Cotovelo levemente dobrado, não completamente estendido","Elevar até a altura do ombro — não acima, não recruta mais e lesiona","Imaginar que está despejando água de uma jarra — rotação interna leve no topo","Subida em 2s, descida em 3s controlada — a descida constrói tanto quanto a subida","Não usar o trapézio para 'ajudar' — se os ombros subirem junto, o peso está pesado demais"],
    alerts: [
      { signal: "Dor no topo do ombro (pinçamento)", fix: "Peso alto demais ou elevando acima da altura do ombro." },
      { signal: "Trapézio (pescoço/ombro) ficando tenso", fix: "Compensação. Reduzir peso, focar em manter ombros abaixados." },
      { signal: "Não sentir o deltóide lateral", fix: "Movimento errado — cotovelo liderando em vez do pulso." }
    ]
  },
  {
    exercise: "Búlgaro", subtitle: "Glúteo + coxa unilateral",
    tips: ["Pé da frente longe o suficiente — se o joelho passar muito à frente dos dedos, o pé está próximo demais","Tronco levemente inclinado à frente (não reto) — ativa mais o glúteo","Descer controlado, joelho de trás quase tocando o chão","SEMPRE começa pelo lado esquerdo — o número do esquerdo define o máximo do direito","Segurar apoio nas primeiras semanas é ok — melhor fazer certo com apoio do que errado livre"],
    alerts: [
      { signal: "Joelho anterior batendo no chão com força", fix: "Descida sem controle — desacelerar a fase excêntrica." },
      { signal: "Dor no joelho posterior (de trás)", fix: "Posição do banco muito alta. Baixar o apoio." },
      { signal: "Instabilidade e queda lateral", fix: "Normal nas primeiras semanas. Usar apoio até o equilíbrio estabilizar." }
    ]
  },
];

// ─── CARDIO_GUIDE ────────────────────────────────────────────
const CARDIO_GUIDE = [
  { title: "Caminhada plana", ideal: "Recuperação ativa, dias de descanso", kcal: "~200-280 kcal/h", impact: "Zero impacto no músculo", when: "Terça e Quinta" },
  { title: "Caminhada inclinada (10-15%)", ideal: "Máximo resultado com mínimo desgaste", kcal: "~350-450 kcal/h", impact: "Ativa glúteo durante o cardio", when: "Substituir caminhada plana após mês 2" },
  { title: "Bike de baixa intensidade", ideal: "Cardio leve sem impacto articular", kcal: "~250-350 kcal/h", impact: "Muito baixo", when: "Opcional em qualquer dia" },
  { title: "Escada do prédio (8 andares)", ideal: "Cardio + ativação de glúteo no dia a dia", kcal: "~400-500 kcal/h", impact: "Ativa glúteo e posterior a cada degrau — excelente", when: "Todo dia, progressivo: mês 1 sobe 2-3 andares (elevador o resto), mês 2 sobe 4-5, mês 3+ tenta os 8. Descer os 8 desde o dia 1." },
  { title: "Corrida (EVITAR primeiros 6 meses)", ideal: "Não recomendado no início", kcal: "—", impact: "Consome músculo junto com gordura", when: "Só após base muscular estabelecida" },
];

// ─── COLOR_GUIDE ──────────────────────────────────────────────
const COLOR_GUIDE = {
  cima: {
    label: "Parte de cima",
    subtitle: "Blusinhas, croppeds, tops, camisas, bodysuit",
    tip: "A parte de cima fica perto do rosto — cores aqui afetam direto como a pele aparece. Tons quentes fazem a pele brilhar; tons frios apagam.",
    best: [
      { hex: "#8B3A2A", name: "Terracota", why: "Harmonia total com a pele, faz o rosto iluminar" },
      { hex: "#C6882A", name: "Mostarda / Âmbar", why: "O tom dourado faz a pele parecer mais luminosa" },
      { hex: "#7D2B4E", name: "Vinho / Borgonha", why: "Contraste elegante que valoriza pele morena" },
      { hex: "#1B5E3C", name: "Verde floresta", why: "Contraste profundo — muito flattering em tons pardos" },
      { hex: "#3D1A5A", name: "Roxo ameixa", why: "Intenso e feminino, cria profundidade no look" },
      { hex: "#1C2C5B", name: "Azul marinho", why: "Versátil, contraste marcante sem agredir" },
      { hex: "#5A3E28", name: "Chocolate", why: "Monocromático com a pele — efeito luxuoso" },
      { hex: "#C4956A", name: "Caramelo", why: "Tom próximo da pele — efeito monochromático sensual" },
    ],
    avoid: [
      { hex: "#E8F4F8", name: "Azul bebê", why: "Lava o rosto" },
      { hex: "#FFE4E1", name: "Rosa bebê", why: "Desbota o tom da pele" },
      { hex: "#FFFFFF", name: "Branco puro", why: "Use creme/off-white no lugar" },
      { hex: "#E8E0F0", name: "Lavanda pálida", why: "Apaga o brilho" },
    ],
    combos: [
      { swatches: ["#8B3A2A", "#C6882A", "#F5E6C8"], name: "Terra quente", desc: "Terracota + mostarda + creme" },
      { swatches: ["#7D2B4E", "#1A1A1A", "#B8860B"], name: "Noite e dourado", desc: "Vinho + preto + detalhe dourado" },
      { swatches: ["#1B5E3C", "#C4956A", "#F5E6C8"], name: "Floresta e mel", desc: "Verde escuro + caramelo" },
    ]
  },
  baixo: {
    label: "Parte de baixo",
    subtitle: "Calças, saias, shorts, leggings",
    tip: "A parte de baixo emoldura o glúteo e as coxas — o foco do seu treino. Cores escuras e monocromáticas criam volume visual, estampas e tons vibrantes celebram as curvas quando elas já estiverem construídas.",
    best: [
      { hex: "#1A1A1A", name: "Preto", why: "Infalível. Define contorno e alonga. Melhor amigo da silhueta." },
      { hex: "#1C2C5B", name: "Azul marinho", why: "Substituto do preto com mais personalidade" },
      { hex: "#1B5E3C", name: "Verde floresta", why: "Tendência atual, muito flattering em pele morena" },
      { hex: "#5A3E28", name: "Chocolate escuro", why: "Monocromático, sofisticado, valoriza as curvas" },
      { hex: "#3D1A5A", name: "Roxo ameixa", why: "Profundo e sensual em calça jeans ou legging" },
      { hex: "#7D2B4E", name: "Vinho", why: "Excelente em saia lápis ou calça reta" },
      { hex: "#8B3A2A", name: "Terracota", why: "Belíssimo em saia midi ou calça pantalona" },
      { hex: "#2C4A3E", name: "Verde militar / Oliva", why: "Neutro quente que combina com quase tudo" },
    ],
    avoid: [
      { hex: "#B8B8B8", name: "Cinza claro", why: "Não favorece nem contrasta" },
      { hex: "#E8F4F8", name: "Azul bebê", why: "Faz as pernas parecerem mais largas" },
      { hex: "#E8F8E8", name: "Verde menta", why: "Tom frio conflita com subtom da pele" },
      { hex: "#FFE4E1", name: "Rosa bebê", why: "Desbota próximo da pele" },
    ],
    combos: [
      { swatches: ["#1A1A1A", "#C6882A", "#B8860B"], name: "Preto e ouro", desc: "Calça preta + top mostarda + acessório dourado" },
      { swatches: ["#1C2C5B", "#F5E6C8", "#8B3A2A"], name: "Marinho e terra", desc: "Calça marinha + blusa creme + detalhe terracota" },
      { swatches: ["#2C4A3E", "#C4956A", "#5A3E28"], name: "Tons naturais", desc: "Oliva + caramelo + chocolate" },
    ]
  },
  intima: {
    label: "Roupa íntima & lingerie",
    subtitle: "Calcinha, sutiã, bralette, bodysuit, camisola",
    tip: "Em lingerie a regra muda: você quer ou criar contraste dramático com a pele (escuros intensos) ou criar o efeito 'segunda pele' (nude certo para pele parda — não o nude rosado europeu). Ambos funcionam por razões diferentes.",
    best: [
      { hex: "#1A1A1A", name: "Preto", why: "Clássico absoluto. Pele parda + lingerie preta = combinação perfeita. Sempre." },
      { hex: "#C4956A", name: "Nude caramelo", why: "O nude CERTO para pele parda. Efeito segunda pele real — não o rosado europeu." },
      { hex: "#8B0000", name: "Vermelho cereja escuro", why: "Contraste dramático e sensual. Clássico que nunca erra." },
      { hex: "#6B2D5E", name: "Roxo profundo", why: "Excelente em renda. Contraste luxuoso com a pele morena." },
      { hex: "#7D2B4E", name: "Vinho", why: "Sofisticado e sensual. Ótimo em cetim ou renda." },
      { hex: "#B8860B", name: "Dourado / Bronze", why: "Em acetinado ou renda faz a pele parecer bronzeada e luminosa." },
      { hex: "#2C4A3E", name: "Verde militar / Oliva", why: "Tendência atual — inesperado e muito lindo em pele morena." },
      { hex: "#3D1A5A", name: "Roxo ameixa", why: "Profundo e misterioso. Poderoso em qualquer peça de lingerie." },
    ],
    avoid: [
      { hex: "#F5D5C8", name: "Nude rosado", why: "O 'nude' europeu — some na pele, não cria segunda pele real" },
      { hex: "#E8E0F0", name: "Lavanda pálida", why: "Pastel frio sem contraste ou harmonia" },
      { hex: "#E8F4F8", name: "Azul bebê", why: "Lavado, perde todo o impacto" },
      { hex: "#FFFFFF", name: "Branco puro", why: "Difícil de manter e sem sinergia — use off-white/creme" },
    ],
    combos: [
      { swatches: ["#1A1A1A", "#B8860B"], name: "Clássico dourado", desc: "Preto + detalhe dourado — infalível" },
      { swatches: ["#7D2B4E", "#3D1A5A", "#1A1A1A"], name: "Noite escura", desc: "Vinho + roxo + preto — intenso e sensual" },
      { swatches: ["#C4956A", "#B8860B", "#5A3E28"], name: "Segunda pele", desc: "Nude caramelo + bronze + chocolate — monochromático" },
    ]
  }
};

// ─── PROJECTION_RATES ─────────────────────────────────────────
const PROJECTION_RATES = {
  quadril: 0.7,
  cintura: -0.35,
  coxa: 0.5,
  peso: -0.38,
  busto: 0.25
};

// ─── SHOPPING_LIST ────────────────────────────────────────
const SHOPPING_LIST = {
  proteinas: [
    { item: "Peito de frango ou sobrecoxa s/ pele", qty: "1.2 kg", checked: false },
    { item: "Carne moída patinho", qty: "600g", checked: false },
    { item: "Ovos", qty: "2 dúzias", checked: false },
    { item: "Whey Protein", qty: "1 pote (mensal)", checked: false },
    { item: "Tofu firme 🌿", qty: "2 blocos (600g)", checked: false },
    { item: "Filé de peixe", qty: "400g", checked: false },
    { item: "Queijo cottage", qty: "300g", checked: false },
    { item: "Iogurte grego natural integral", qty: "6 potes (170g)", checked: false },
  ],
  carboidratos: [
    { item: "Arroz branco ou integral", qty: "1 kg", checked: false },
    { item: "Feijão (carioca ou preto)", qty: "500g", checked: false },
    { item: "Batata-doce", qty: "1.5 kg", checked: false },
    { item: "Aveia em flocos finos", qty: "500g", checked: false },
    { item: "Pão integral", qty: "1 pacote", checked: false },
    { item: "Goma de tapioca", qty: "500g", checked: false },
    { item: "Granola sem açúcar", qty: "300g", checked: false },
  ],
  verduras_legumes: [
    { item: "Brócolis ou couve-flor 🌿", qty: "1 kg", checked: false },
    { item: "Abobrinha", qty: "800g", checked: false },
    { item: "Cenoura", qty: "500g", checked: false },
    { item: "Alface, tomate, pepino", qty: "livre", checked: false },
    { item: "Couve ou espinafre 🌿", qty: "2 maços", checked: false },
    { item: "Pimentão", qty: "3 un.", checked: false },
    { item: "Cebola e alho", qty: "500g + 1 cabeça", checked: false },
  ],
  frutas: [
    { item: "Banana", qty: "1 cacho (~12)", checked: false },
    { item: "Fruta da época", qty: "7 un.", checked: false },
    { item: "Abacate", qty: "2 un.", checked: false },
    { item: "Limão", qty: "6 un.", checked: false },
    { item: "Morangos ou kiwi", qty: "300g", checked: false },
  ],
  gorduras: [
    { item: "Pasta de amendoim", qty: "1 pote (500g)", checked: false },
    { item: "Azeite extra virgem", qty: "500ml", checked: false },
    { item: "Linhaça dourada moída 🌿", qty: "300g", checked: false },
  ],
  laticinios: [
    { item: "Leite de soja 🌿 ou leite semidesnatado", qty: "2L", checked: false },
    { item: "Requeijão light ou cottage", qty: "1 pote", checked: false },
  ],
  temperos_outros: [
    { item: "Shoyu / molho de soja", qty: "200ml", checked: false },
    { item: "Sal, pimenta, cominho, ervas", qty: "conforme falta", checked: false },
    { item: "Gergelim", qty: "100g", checked: false },
    { item: "Canela em pó", qty: "1 pote", checked: false },
    { item: "Extrato de tomate", qty: "2 latas", checked: false },
  ],
  suplementos_chas: [
    { item: "Creatina", qty: "1 pote (mensal)", checked: false },
    { item: "Ômega-3 cápsulas", qty: "1 pote (mensal)", checked: false },
    { item: "Multivitamínico", qty: "1 pote (mensal)", checked: false },
    { item: "Chá de spearmint (hortelã) 🌿", qty: "2 caixas", checked: false },
    { item: "Edamame congelado 🌿", qty: "2 pacotes", checked: false },
    { item: "Vitamina D3 + K2", qty: "1 pote (mensal)", checked: false },
  ],
};

// ─── SKINCARE_PRODUCTS ────────────────────────────────────────
const SKINCARE_PRODUCTS = {
  rostoManha: [
    { name: "Gel de Limpeza Facial suave", brand: "Neutrogena ou CeraVe", price: "~R$25–40" },
    { name: "Sérum Vitamina C 10%", brand: "Yes! Vitamins ou Simple Organic", price: "~R$40–80" },
    { name: "Hidratante Gel-Creme leve", brand: "Neutrogena Hydro Boost", price: "~R$45–60" },
    { name: "Protetor Solar FPS 60 ★ ESSENCIAL", brand: "Episol Sec ou Anthelios Airlicium", price: "~R$35–85" },
  ],
  rostoNoite: [
    { name: "Gel de Limpeza (mesmo da manhã)", brand: "", price: "" },
    { name: "Sérum Niacinamida 10%", brand: "Skala (~R$20), Yes! Vitamins ou Dermage", price: "~R$20–50" },
    { name: "Retinol 0.3% (2–3×/sem inicialmente)", brand: "Episkin ou La Roche-Posay Redermic", price: "~R$50–120" },
    { name: "Hidratante Noturno mais rico", brand: "CeraVe Loção ou Aquaphor", price: "~R$40–80" },
  ],
  corpo: [
    { name: "Hidratante Corporal rico", brand: "Muriel Karité ou Nívea Luminous 630", price: "~R$20–55" },
    { name: "Protetor Solar Corporal FPS 50+", brand: "Episol corpo ou Nívea Sun", price: "~R$30–45" },
    { name: "Esfoliante corporal (1–2×/semana)", brand: "Océane Body Scrub ou sal grosso + azeite (caseiro)", price: "~R$0–25" },
    { name: "Nívea Luminous 630 (axilas + virilha)", brand: "Niacinamida + hexyl resorcinol — específico pra isso", price: "~R$50–60" },
    { name: "Desodorante sem álcool e perfume", brand: "Nívea Sensitive ou Dove Sensitive", price: "~R$12–20" },
    { name: "Loção pós-depilação (anti-foliculite)", brand: "Com ác. salicílico — Nívea ou Avon Naturals", price: "~R$20–30" },
  ]
};

// ─── HAIR_WASH_ROUTINE ────────────────────────────────────────
const HAIR_WASH_ROUTINE = [
  "Shampoo sem sulfato só no couro cabeludo — não esfregar as pontas",
  "Condicionador do meio pra baixo, 3–5 min. Enxaguar deixando um pouquinho",
  "Leave-in no fio ainda molhado espalhando bem",
  "Creme de pentear com squish (apertar cachos de baixo pra cima)",
  "Gel por cima — não tocar até secar completamente",
  "Secar com difusor (melhor que ar natural em clima úmido como Aracaju)",
  "Seco: quebrar o cast do gel batendo com as palmas levemente"
];

// ─── HAIR_PRODUCTS ────────────────────────────────────────────
const HAIR_PRODUCTS = [
  { name: "Shampoo sem sulfato", brand: "Salon Line S.O.S Cachos ou Skala Expert", price: "~R$15–22" },
  { name: "Condicionador hidratante", brand: "Salon Line S.O.S ou Novex Embelleze", price: "~R$15–22" },
  { name: "Leave-in para cachos", brand: "Salon Line S.O.S ou Lola Minha Vida", price: "~R$20–35" },
  { name: "Creme de pentear", brand: "Lola Dream Cream ou Salon Line", price: "~R$22–38" },
  { name: "Gel fixador anti-frizz", brand: "Salon Line (buscar versão pra cachos)", price: "~R$12–18" },
  { name: "Touca/Bonnet de cetim", brand: "Shopee — 'touca cetim cachos'", price: "~R$15–25" },
  { name: "Fronha de cetim", brand: "Shopee", price: "~R$20–40" },
];

// ─── NUTRITION_PHASES ─────────────────────────────────────────
const NUTRITION_PHASES = {
  deficit: {
    label: "Fase de Déficit (Meses 1-5)",
    description: "Perder gordura abdominal preservando músculo. 96kg → ~86kg.",
    treino: { kcal: 2300, prot: 150, carb: 230, fat: 65 },
    descanso: { kcal: 2100, prot: 140, carb: 190, fat: 65 },
  },
  construcao: {
    label: "Fase de Construção (Meses 6-10)",
    description: "Corpo mais leve, articulações saudáveis. Agora hipertrofia máxima.",
    treino: { kcal: 2550, prot: 155, carb: 280, fat: 70 },
    descanso: { kcal: 2300, prot: 145, carb: 230, fat: 65 },
  }
};

// ─── SHOPPING_SYSTEM ──────────────────────────────────────────
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

// ─── POWER_MOVES ──────────────────────────────────────────────
const POWER_MOVES = {
  banho: {
    label: "No banho",
    icon: "🚿",
    moves: [
      { name: "Círculos de quadril lentos", how: "Mãos na cintura, 10x cada sentido. Água batendo nas costas.", result: "Treina isolamento de quadril — base do rebolar.", alert: "Se o tronco mexer junto, diminuir o círculo." },
      { name: "Figure-8 com quadril", how: "Desenhar um infinito (∞) com o quadril. Devagar, sentir cada parte.", result: "Fluidez de movimento. A Luiza Sonza faz isso naturalmente.", alert: null },
      { name: "Ondulação de coluna (cobra)", how: "Da pélvis até o pescoço, ondular pra frente e pra trás.", result: "Flexibilidade de coluna + movimento sensual.", alert: "Tensão no pescoço = parar antes de chegar lá." },
      { name: "Squeeze de glúteo isométrico", how: "Apertar os dois glúteos com força, segurar 10seg, soltar. 5x.", result: "Ativação sem esforço. Acorda o glúteo esquerdo.", alert: null },
    ]
  },
  cozinha: {
    label: "Esperando comida / café",
    icon: "☕",
    moves: [
      { name: "Elevação de panturrilha", how: "Na ponta dos pés, subir e descer. 15x devagar.", result: "Pernas mais alongadas e definidas.", alert: "Segurar em algo se perder equilíbrio." },
      { name: "Postura feminina", how: "Ombros pra trás e pra baixo. Peito aberto. Queixo nivelado. Peso num pé só, quadril levemente de lado.", result: "Treinar a stance feminina até virar natural.", alert: null },
      { name: "Kegel discreto", how: "Qualquer dos 3 tipos (rápida, longa, elevador). Ninguém vê.", result: "Melhora ereção, controle e intensidade em 4-8 semanas.", alert: null },
      { name: "Balanço sutil de quadril", how: "Peso alternando entre os pés, quadril balançando suave lado a lado.", result: "Gingado natural. Fica automático com o tempo.", alert: null },
    ]
  },
  trabalho: {
    label: "No trabalho (sentada, invisível)",
    icon: "💼",
    moves: [
      { name: "Kegel (todos os 3 tipos)", how: "Contrair assoalho pélvico. 100% invisível.", result: "Acumula sessões ao longo do dia. Resultado em semanas.", alert: null },
      { name: "Squeeze de glúteo na cadeira", how: "Apertar glúteos 5seg, soltar. 10x.", result: "Ativação constante, especialmente o esquerdo dormido.", alert: null },
      { name: "Postura check", how: "Ombros baixos, coluna longa, pés no chão.", result: "Reduz tensão no pescoço/ombros. Cintura parece mais fina com postura boa.", alert: null },
      { name: "Rotação de tornozelo", how: "10 círculos cada pé, sob a mesa.", result: "Circulação pras pernas — 8h sentada trava tudo.", alert: null },
      { name: "Vacuum discreto", how: "Puxar umbigo pra dentro, segurar 10seg. Ninguém percebe.", result: "Marca cintura ao longo do tempo.", alert: null },
    ]
  },
  cama: {
    label: "Antes de dormir (na cama)",
    icon: "🛏️",
    moves: [
      { name: "Borboleta deitada", how: "De costas, plantas dos pés juntas, joelhos abertos pro lado. 2min.", result: "Abre quadril enquanto relaxa. Prepara pro sono.", alert: "Se doer na virilha, afastar os pés do corpo." },
      { name: "Hip flexor na cama", how: "Uma perna pendurada pra fora da cama, outra joelho ao peito. 1min cada.", result: "Destravar hip flexor = melhor circulação pélvica = melhor ereção.", alert: "Não forçar. Gravidade faz o trabalho." },
      { name: "Respiração diafragmática", how: "Mão na barriga. Inspirar pelo nariz (barriga sobe), expirar pela boca (barriga desce). 5x devagar.", result: "Acalma sistema nervoso. Sono mais profundo.", alert: null },
    ]
  }
};

// ─── INTIMACY_GUIDE ───────────────────────────────────────────
const INTIMACY_GUIDE = {
  feminina: {
    title: "Feminina no comando",
    items: [
      { topic: "Ondulação do quadril", desc: "O treino de isolamento de quadril (círculos, figure-8) se aplica diretamente. Em vez de movimentos retos, ondular — transforma qualquer posição.", how: "Praticar os círculos e ondulações nos micro-momentos até ficar natural. Na hora, o corpo já sabe." },
      { topic: "Mãos no próprio corpo", desc: "Tocar a si mesma durante — cintura, coxas, cabelo. Mostra confiança e feminilidade sem perder o controle.", how: "Começar com uma mão enquanto a outra apoia. Com o tempo fica natural." },
      { topic: "Contato visual", desc: "Olhar nos olhos da parceira durante, especialmente nos momentos intensos. Cria conexão e mostra presença.", how: "Se sentir vergonha, alternar: olhar → fechar os olhos → olhar de novo." },
      { topic: "Lingerie como ferramenta", desc: "Não precisa tirar tudo. Manter peças durante é visual e tátil — especialmente renda e cetim.", how: "Peças que dão acesso sem tirar: body com abertura, calcinha de lado. Cores escuras e nude caramelo." },
      { topic: "Quadril liderando", desc: "Em vez de usar só força de braço/perna, deixar o quadril liderar o ritmo. O treino de rebolar ensina exatamente isso.", how: "Ritmo vem do quadril, não das coxas empurrando. Mais lento e ondulado." },
      { topic: "Posições femininas sendo ativa", desc: "Cowgirl reversa (de costas) permite controle total com visual feminino. De lado (spooning) permite ondulação suave. De quatro com ondulação de coluna.", how: "A flexibilidade de quadril que você está construindo abre essas posições." },
    ]
  },
  confianca: {
    title: "Confiança íntima",
    items: [
      { topic: "Técnica supera tamanho", desc: "Ângulo faz mais diferença que comprimento. Posições com as pernas da parceira mais fechadas aumentam a sensação pra ambos.", how: "Experimentar ângulos: pernas juntas (missionário com pernas fechadas), travesseiro embaixo do quadril dela." },
      { topic: "Ritmo e variação", desc: "Alternar lento/profundo com rápido/superficial. Previsibilidade é o oposto de prazer.", how: "Regra 3-1: 3 movimentos lentos, 1 rápido. Repetir. Depois inverter." },
      { topic: "Preliminares longas", desc: "80% da satisfação feminina acontece nas preliminares. Mais tempo aqui = menos pressão na penetração.", how: "Mínimo 15-20min. Sem pressa. O corpo da parceira precisa de tempo pra responder." },
      { topic: "Mãos e boca", desc: "Complementam e amplificam. Usar durante a penetração, não só antes.", how: "Uma mão livre sempre pode estar fazendo algo — na cintura, no cabelo, estimulando." },
      { topic: "Kegel forte", desc: "Kegel fortalecido = controle de quando gozar + sensação melhor pra parceira. Independe completamente de tamanho.", how: "O treino de kegel que você já faz 3x/dia é o caminho. Resultado em 4-8 semanas." },
      { topic: "Profundidade sem comprimento", desc: "Posições que maximizam profundidade: pernas dela no peito (missionário profundo), travesseiro elevando quadril dela, cowgirl onde ela controla o ângulo.", how: "O ângulo do quadril muda tudo. Experimentar com travesseiro é o hack mais simples." },
    ]
  },
  evolucao: {
    title: "Evolução com o treino",
    items: [
      { topic: "Meses 1-2", desc: "Fôlego melhora — não cansa tão rápido. Kegel começa a dar resultado — mais controle. Hip flexor mais solto — menos dor de quadril durante." },
      { topic: "Meses 3-5", desc: "Flexibilidade de quadril abre novas posições. Resistência sobe — consegue manter ritmo por mais tempo. Corpo começando a mudar — confiança sobe." },
      { topic: "Meses 6+", desc: "Corpo visivelmente diferente — lingerie fica bem. Kegel forte — controle total. Fôlego de atleta. Ondulação de quadril é natural. A namorada vai notar." },
    ]
  }
};
