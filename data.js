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
  "hip-thrust": { youtubeId: "hCm-70-9_XE", gifUrl: null, title: "Hip Thrust", tips: "Apoie costas no banco, empurre quadril pro teto", commonMistakes: "Hiperextender a lombar. Posição errada das costas no banco. Pés muito perto ou longe." },
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
  "donkey-kick": { youtubeId: "Zmi989h1m8k", gifUrl: null, title: "Donkey Kick — Ativação Glúteo", tips: "De quatro, chuta pra cima apertando o glúteo", commonMistakes: "" },
  "cat-cow": { youtubeId: "40Y1rukJs4E", gifUrl: null, title: "Gato e Vaca — Mobilidade Coluna", tips: "Arredonda e arqueia as costas alternando", commonMistakes: "" },
  "pombo-alongamento": { youtubeId: "fASdWDluHrc", gifUrl: null, title: "Pombo — Alongamento Quadril", tips: "Perna cruzada na frente, desça o tronco devagar", commonMistakes: "" },
  "borboleta-alongamento": { youtubeId: "6XT60SbKR3s", gifUrl: "https://static.exercisedb.dev/media/bWlZvXh.gif", title: "Borboleta — Alongamento", tips: "Solas dos pés juntas, pressione joelhos pra baixo", commonMistakes: "" },
  "glute-bridge-ativacao": { youtubeId: "eu5oejYxPBQ", gifUrl: "https://static.exercisedb.dev/media/u0cNiij.gif", title: "Glute Bridge — Ativação", tips: "Sem peso, foque em sentir o glúteo", commonMistakes: "" },
  "deadlift": { youtubeId: "ytGaGIn3SjE", gifUrl: null, title: "Levantamento Terra (Deadlift)", tips: "Quadril pra trás, barra rente ao corpo", commonMistakes: "Arredondar as costas. Subir com a lombar. Barra longe do corpo." },
  "remada-curvada": { youtubeId: "6TSP1TRMUzs", gifUrl: null, title: "Remada Curvada com Halteres", tips: "Retração escapular completa", commonMistakes: "Usar impulso. Costas arredondadas. Cotovelos muito abertos." },
  "supino-inclinado": { youtubeId: "8iPEnn-ltC8", gifUrl: null, title: "Supino Inclinado com Halteres", tips: "Peito alto, cotovelos 45 graus", commonMistakes: "Banco muito inclinado. Peso caindo rápido. Ombros subindo." },
  "elevacao-lateral": { youtubeId: "3VcKaXpzqRo", gifUrl: null, title: "Elevação Lateral", tips: "Peso leve, cotovelo levemente dobrado, até altura do ombro", commonMistakes: "Peso pesado demais. Usar trapézio. Elevar acima do ombro." },
  "crucifixo": { youtubeId: "eozdVDA78K0", gifUrl: null, title: "Crucifixo com Halteres", tips: "Braços levemente dobrados, abrir lento", commonMistakes: "Braços retos. Peso pesado demais. Perder controle na descida." },
  "rosca-direta": { youtubeId: "ykJmrZ5v0Oo", gifUrl: null, title: "Rosca Direta", tips: "Cotovelos fixos, sem balanço", commonMistakes: "Usar impulso. Cotovelos subindo. Não controlar a descida." },
  "triceps-testa": { youtubeId: "d_KZxkY_0cM", gifUrl: null, title: "Tríceps Testa", tips: "Cotovelos apontando pro teto, fixos", commonMistakes: "Cotovelos abrindo. Descer rápido demais. Lombar arqueando." },
  "panturrilha": { youtubeId: "gwLzBJYoWlI", gifUrl: null, title: "Panturrilha em Pé", tips: "Extensão máxima, pausa 1s no topo", commonMistakes: "Amplitude curta. Velocidade rápida. Não pausar no topo." },
  "crunch-bicicleta": { youtubeId: "9FGilxCbdz8", gifUrl: null, title: "Crunch Bicicleta", tips: "Cotovelo toca joelho oposto, devagar", commonMistakes: "Puxar o pescoço. Fazer rápido demais." },
  "band-pull-apart": { youtubeId: "JObYtU7Y7ag", gifUrl: null, title: "Crucifixo Inverso com Halteres", tips: "Curvada pra frente, braços abertos. Escápulas juntas no topo", commonMistakes: "Braços dobrados. Usar impulso." },
  "agachamento": { youtubeId: "aclHkVaku9U", gifUrl: null, title: "Agachamento com Barra", tips: "Pés largura dos ombros, descer até coxa paralela", commonMistakes: "Joelhos caindo pra dentro. Lombar arredondando. Calcanhar subindo." },
  "clamshell": { youtubeId: "oHjBwnfpcQs", gifUrl: null, title: "Clamshell com Caneleira", tips: "Deitado de lado, caneleira no joelho. Abrir joelhos mantendo pés juntos", commonMistakes: "Girar o tronco. Separar os pés. Fazer rápido demais." },
  "donkey-kick-caneleira": { youtubeId: "Zmi989h1m8k", gifUrl: null, title: "Donkey Kick com Caneleira", tips: "Quadrupede, chutar pé pra cima mantendo joelho 90°", commonMistakes: "Arquear a lombar. Girar o quadril. Não controlar." },
  "frog-pump": { youtubeId: "7-M-HpCVIkA", gifUrl: null, title: "Frog Pump — Ativação Glúteo", tips: "Solas dos pés juntas (posição borboleta), empurre quadril pro teto apertando o glúteo", commonMistakes: "Empurrar com as costas. Não juntar as solas dos pés. Não apertar o glúteo no topo." },
  "side-lunge": { youtubeId: "3BRKE0-l7mg", gifUrl: null, title: "Afundo Lateral (Side Lunge)", tips: "Passo largo pro lado, flexionar um joelho mantendo o outro esticado", commonMistakes: "Joelho passando do pé. Tronco caindo pra frente. Passo curto demais." }
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
  },
  {
    name: "Magnésio Bisglicerinato",
    dose: "300-400mg",
    when: "Antes de dormir",
    note: "Melhora qualidade do sono profundo, recuperação muscular, reduz cortisol. Maioria dos brasileiros é deficiente.",
    intimate: "Sem impacto",
    evidence: "Alta"
  },
  {
    name: "Zinco Quelado",
    dose: "15-30mg",
    when: "Jantar",
    note: "Recuperação muscular, saúde da pele, imunidade. Não tomar junto com cálcio.",
    intimate: "Melhora testosterona se deficiente",
    evidence: "Alta"
  },
  {
    name: "Ashwagandha (KSM-66)",
    dose: "300-600mg",
    when: "Antes de dormir ou manhã",
    note: "Adaptógeno — reduz cortisol, melhora composição corporal, sono e ansiedade.",
    intimate: "Melhora desempenho e libido",
    evidence: "Alta"
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
          description: "Tome a melatonina (0.5-1mg) 30-60 minutos ANTES de deitar. Se tomar colágeno, é agora também — 10g dissolvido em água.",
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
    note: "Pode fazer no prédio: caneleira + halteres. Glúteo esq mais dormido: 5 reps extras de ativação unilateral esquerda ANTES de cada exercício bilateral.",
    days: {
      "Lower A": {
        name: "Treino A · Full Body (Seg/Qua/Sex)",
        exercises: [
          { id: "f1-glute-bridge", name: "Glute Bridge no chão", sets: 3, reps: "15", rest: "90seg", weight: "0 kg → haltere leve no quadril", tip: "Empurre o quadril pro teto, squeeze 2-3seg no topo. Começar sem peso.", videoKey: "glute-bridge", unilateral: false, startLeft: false, narrative: "Deita de costas no chão, joelhos dobrados, pés apoiados na largura do quadril. Empurra os calcanhares contra o chão e levanta o quadril até o corpo ficar em linha reta dos ombros aos joelhos. No topo, aperta com tudo o glúteo por 2-3 segundos antes de descer devagar.", why: "É o exercício mais importante de ativação de glúteo — se ele não dispara aqui, não vai disparar em nenhum outro movimento. O squeeze no topo é o sinal que treina o seu cérebro a recrutar as fibras do glúteo que ficaram dormentes." },
          { id: "f1-frog-pump", name: "Frog Pump (ativação borboleta)", sets: 3, reps: "20", rest: "60seg", weight: "0 kg", tip: "Solas dos pés juntas, joelhos abertos. Empurre o quadril pro teto apertando o glúteo.", videoKey: "frog-pump", unilateral: false, startLeft: false, narrative: "Deita de costas no chão e junta as solas dos pés, deixando os joelhos caírem abertos para os lados como uma borboleta. Com os pés juntos perto do bumbum, empurra o quadril pro teto apertando o glúteo com tudo no topo por 2 segundos. Desce devagar. A posição dos pés impede as pernas de ajudarem — o glúteo faz TODO o trabalho sozinho.", why: "O frog pump é um dos melhores exercícios de ativação de glúteo porque a posição borboleta dos pés elimina a participação dos isquiotibiais e quadríceps, forçando o glúteo a trabalhar isolado. Recomendado por especialistas em treino feminizante como ativação essencial antes de exercícios pesados." },
          { id: "f1-bridge-uni-esq", name: "Glute Bridge Unilateral ESQUERDO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Pé esquerdo no chão, direito suspenso. Segurar 3seg no topo.", videoKey: "glute-bridge", unilateral: true, startLeft: true, narrative: "Mesma posição do glute bridge, mas desta vez você dobra o pé direito e deixa ele suspenso no ar, apoiando apenas o pé esquerdo no chão. Empurra com o calcanhar esquerdo, levanta o quadril e segura 3 segundos no topo, sentindo o glúteo esquerdo trabalhar com força.", why: "Seu glúteo esquerdo é mais dorminhoco que o direito — fazer o unilateral esquerdo primeiro e com mais foco corrige essa assimetria ao longo do tempo, garantindo que os dois lados cresçam juntos e que a silhueta fique equilibrada." },
          { id: "f1-bridge-uni-dir", name: "Glute Bridge Unilateral DIREITO", sets: 3, reps: "12", rest: "60seg", weight: "0 kg", tip: "Mesmo número de reps que o esquerdo. Nunca mais.", videoKey: "glute-bridge", unilateral: true, startLeft: false, narrative: "Igual ao lado esquerdo, mas agora com o pé direito no chão e o esquerdo suspenso. Faz exatamente o mesmo número de repetições que fez no lado esquerdo — nem uma a mais, nem uma a menos. O tempo de squeeze no topo também é o mesmo: 3 segundos.", why: "Equilibrar os dois lados é essencial nessa fase. O lado direito não precisa de volume extra — ele já está mais ativo. Igualar as reps evita que o lado dominante compense ainda mais e que a assimetria piore." },
          { id: "f1-abducao-caneleira", name: "Abdução deitada com caneleira", sets: 3, reps: "20", rest: "60seg", weight: "caneleira 2-4 kg", tip: "Deitada de lado, elevar perna. Sentir queimar no glúteo.", videoKey: "abducao-deitada", unilateral: false, startLeft: false, narrative: "Deita de lado no chão com a caneleira na perna de cima. Mantém o corpo alinhado, braço dobrado apoiando a cabeça. Levanta a perna de cima em direção ao teto até uns 45 graus, sem rodar o quadril pra frente, e desce devagar controlando o movimento. Comece sempre pelo lado esquerdo.", why: "Esse movimento isola o glúteo médio, que é o músculo responsável pela curva lateral do quadril — a parte que dá aquela forma arredondada e cheia da silhueta amazona. Trabalhar o lado esquerdo com atenção extra corrige a assimetria entre os glúteos." },
          { id: "f1-wall-sit", name: "Wall Sit (agachamento na parede)", sets: 3, reps: "20-30seg", rest: "60seg", weight: "0 kg", tip: "Costas na parede, coxas paralelas ao chão. Protege joelhos.", videoKey: "agachamento", unilateral: false, startLeft: false, type: "plank", narrative: "Encosta as costas inteiras na parede e desliza até as coxas ficarem paralelas ao chão, como se você estivesse sentada numa cadeira invisível. Joelhos a 90 graus, pés apoiados no chão diretamente abaixo dos joelhos. Respira fundo e segura a posição pelo tempo indicado, contraindo o abdômen.", why: "Treina a resistência isométrica de quadríceps e glúteos ao mesmo tempo — sem nenhum impacto. Na Fase 1, quando os tendões e ligamentos ainda estão se adaptando, o wall sit constrói a base de força que vai sustentar os agachamentos mais pesados das fases seguintes." },
          { id: "f1-rdl", name: "RDL com halteres leves", sets: 3, reps: "12", rest: "90seg", weight: "5-8 kg cada", tip: "Dobrar no quadril, NÃO na coluna. Sentir posterior da coxa.", videoKey: "stiff", unilateral: false, startLeft: false, narrative: "Fica em pé com um haltere em cada mão na frente das coxas. Afasta os pés na largura do quadril, levinho dobradinho os joelhos. Empurra o quadril pra trás como se fosse fechar uma porta com a bunda, inclinando o tronco para frente e descendo os halteres perto das pernas — sem encurvar a coluna. Quando sentir o alongamento na parte de trás da coxa, aperta o glúteo e volta.", why: "Constrói a cadeia posterior — glúteos e isquiotibiais — que é o que cria aquela prateleirinha no embaixo do bumbum. É o exercício que dá profundidade e formato ao glúteo, não só volume. Essencial pra silhueta amazona." },
          { id: "f1-prancha", name: "Prancha", sets: 3, reps: "20-30seg", rest: "45seg", weight: "0 kg", tip: "Corpo reto. Apertar glúteo e abdômen.", videoKey: "prancha", unilateral: false, startLeft: false, type: "plank", narrative: "Apoia os antebraços no chão com os cotovelos embaixo dos ombros e sobe o corpo, ficando na ponta dos pés. O corpo todo deve formar uma linha reta da cabeça ao calcanhar — nem o quadril caindo, nem o bumbum subindo. Contrai o abdômen e o glúteo ao mesmo tempo e respira normalmente.", why: "O core forte é a base invisível de todos os outros exercícios. Com uma prancha consistente, você vai agachar mais pesada, fazer hip thrust com mais força e manter uma postura que destaca a curva da cintura — elemento central da silhueta amazona." },
          { id: "f1-vacuum", name: "Vacuum Abdominal", sets: 3, reps: "20seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e pra cima, segurar. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum", narrative: "Fica em pé ou ajoelhada, solta TODO o ar dos pulmões numa expiração completa. Depois puxa o umbigo pra dentro em direção à coluna e tenta 'sugá-lo' pra cima, como se quisesse fazer a barriga tocar nas costelas por dentro. Segura essa contração por 20 segundos respirando suavemente pelo nariz, sem soltar a barriga.", why: "Treina o transverso abdominal, o músculo mais profundo da barriga — o seu espartilho natural. Com prática consistente, o vacuum afina visualmente a cintura e cria aquela definição em 'X' que é a marca registrada da silhueta amazona, mesmo antes de perder peso." },
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
            startLeft: false,
            narrative: "Apoie as escápulas no banco, pés apoiados no chão com largura do quadril e joelhos dobrados a 90°. Suba o quadril empurrando forte pelos calcanhares, contraindo os glúteos no topo por 2 segundos — quadril não pode girar. Desça em 3 segundos controlados até quase tocar o chão e suba de novo.",
            why: "É o exercício que mais recruta glúteo máximo com carga, sendo o motor principal do crescimento da bunda nessa fase. Progressão de peso semanal aqui é o que transforma a silhueta amazona."
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
            startLeft: true,
            narrative: "Mesma posição do hip thrust normal, mas com a perna direita dobrada e levantada do chão. Empurre o quadril para cima só com a força do glúteo esquerdo, pressionando pelo calcanhar esquerdo. Segure 2 segundos no topo com contração total, depois desça devagar em 3 segundos.",
            why: "Seu glúteo esquerdo é mais fraco que o direito — essa série extra garante estímulo adicional para corrigir a assimetria e desenvolver os dois lados de forma equilibrada."
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
            startLeft: false,
            narrative: "Agora troca: levanta a perna esquerda e trabalha só com o glúteo direito. Mesmo peso, mesmo número de reps e mesma qualidade de execução que fez no lado esquerdo. Não compensa nem adiciona reps — o objetivo é igualar o estímulo.",
            why: "Manter o volume igual nos dois lados evita que o lado direito (mais forte) domine ainda mais. O glúteo esquerdo recebe estímulo extra; o direito, apenas manutenção — e juntos constroem a curva simétrica que define a silhueta amazona."
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
            startLeft: false,
            narrative: "De pé, halteres na frente das coxas. Empurre o quadril para trás (como se fosse fechar uma gaveta com o bumbum) mantendo a coluna reta e neutra. Desça os halteres junto às pernas até sentir um alongamento forte na parte de trás da coxa, depois empurre o quadril pra frente para voltar — a força vem do quadril, não das costas.",
            why: "O RDL estira o glúteo máximo e o isquiotibial em carga, estimulando o crescimento da parte inferior e lateral da bunda — criando o arredondamento que compõe a silhueta amazona na vista lateral."
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
            startLeft: false,
            narrative: "Pernas levemente flexionadas, halteres descendo pelo trajeto das pernas com a coluna reta. Desça devagar em 3 segundos sentindo o alongamento total na parte de baixo da bunda e atrás da coxa. Na subida, contraia os glúteos e empurre o quadril pra frente — não use as costas.",
            why: "O stiff trabalha a inserção inferior do glúteo máximo e os isquiotibiais, preenchendo o volume embaixo da bunda e criando aquela curva de transição entre coxa e glúteo que define o formato amazona."
          },
          {
            id: "f2-abducao-maquina",
            name: "Abdução Máquina",
            sets: 4,
            reps: "20",
            rest: "45seg",
            weight: "10-30 kg",
            tip: "Lento, sentir queimar.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false,
            narrative: "Sente na máquina com as costas bem apoiadas no encosto e os pés na plataforma. Abra as pernas devagar em 3 segundos até o limite confortável, sinta o glúteo médio e o lateral queimar, e feche em 2 segundos sem bater o peso. Não use impulso — cada rep conta.",
            why: "O glúteo médio é o músculo lateral da bunda que cria aquela curva de quadril vista de frente. Trabalhar ele com volume alto (20 reps) gera o inchaço lateral que define a proporção amazona."
          },
          { id: "f2-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum", narrative: "Expire todo o ar dos pulmões completamente, depois puxe o umbigo em direção à coluna e para cima, como se quisesse esconder a barriga. Segure por 25 segundos respirando superficialmente pelo nariz. Faça entre os exercícios ou no final do treino.", why: "O vacuum ativa o transverso do abdômen — o músculo mais interno da barriga. Fortalecê-lo aperta a cintura de dentro pra fora, acentuando a curva da ampulheta sem adicionar volume." }
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
            startLeft: false,
            narrative: "Banco inclinado a 30-45°, halteres na altura do peito com cotovelos a 45° do tronco — não abra demais. Empurre os halteres para cima e levemente para dentro, espremendo o peito no topo por 1 segundo. Desça em 3 segundos controlados sentindo o alongamento no peito.",
            why: "O supino inclinado desenvolve a parte superior do peito, criando volume no tórax que alarga visualmente a parte de cima do corpo — quanto mais larga a parte superior, mais fina a cintura parece em comparação, formando o V da ampulheta."
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
            startLeft: false,
            narrative: "Incline o tronco a 45° com a coluna reta, halteres pendurados com os braços estendidos. Puxe os halteres em direção ao abdômen comprimindo as escápulas no topo por 1 segundo — pense em juntar as pontas das omoplatas. Desça devagar em 3 segundos sem curvar as costas.",
            why: "Costas largas criam a ilusão de cintura mais fina, elemento essencial da proporção ampulheta. A remada desenvolve o latíssimo e o meio das costas, que abrem a silhueta de trás e definem o formato das costas."
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
            startLeft: false,
            narrative: "De pé, halteres leves nas laterais do corpo. Eleve os braços levemente dobrados até a altura dos ombros, como se fosse derramar água de dois copos. Suba em 2 segundos, segure 1 segundo no topo com os deltoides contraídos, e desça em 3 segundos — sem balançar o tronco.",
            why: "Ombros arredondados e bem definidos alargam a parte superior do corpo, acentuando a curva da cintura e criando a proporção feminina da ampulheta. É o detalhe que muda completamente como a silhueta aparece com uma blusa."
          },
          {
            id: "f2-crucifixo-inverso",
            name: "Crucifixo Inverso com Halteres",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "2-4 kg halteres",
            tip: "Curvada pra frente, braços abertos. Escápulas juntas no topo.",
            videoKey: "band-pull-apart",
            unilateral: false,
            startLeft: false,
            narrative: "Incline o tronco a 90° para frente com a coluna reta, halteres pendurados com os cotovelos levemente flexionados. Abra os braços como asas para os lados até sentir as escápulas se juntarem, mantendo 1 segundo no topo. Desça devagar e sem balançar — o peso é leve porque o ângulo é difícil.",
            why: "Trabalha o deltoide posterior e o meio das costas — músculos que corrigem a postura curvada para frente e criam o bom porte. Uma postura ereta e ombros para trás definem instantaneamente uma silhueta mais feminina e confiante."
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
            startLeft: false,
            narrative: "Faça 15 reps de rosca direta primeiro — cotovelos fixos no corpo, suba os halteres girando o punho para cima e desça devagar. Sem descanso, vira os halteres e faz 15 reps de tríceps testa deitada — desce os halteres em direção à testa em 3 segundos e estende os braços de volta.",
            why: "Bíceps e tríceps tonificados completam a proporção do braço feminino. Braços definidos sem volume excessivo reforçam a feminilidade da silhueta amazona e ficam lindos com regata e vestido."
          },
          { id: "f2-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum", narrative: "Expire todo o ar dos pulmões completamente, depois puxe o umbigo em direção à coluna e para cima, como se quisesse esconder a barriga. Segure por 25 segundos respirando superficialmente pelo nariz. Faça entre os exercícios ou no final do treino.", why: "O vacuum ativa o transverso do abdômen — o músculo mais interno da barriga. Fortalecê-lo aperta a cintura de dentro pra fora, acentuando a curva da ampulheta sem adicionar volume." }
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
            startLeft: true,
            narrative: "Pé de trás apoiado no banco, pé da frente distante o suficiente para o joelho não passar muito da ponta do pé. Desça em 3 segundos até a coxa ficar paralela ao chão, sentindo o glúteo e a coxa da perna da frente trabalhando. Suba empurrando pelo calcanhar da frente sem travar o joelho no topo. Começa sempre pelo esquerdo.",
            why: "O búlgaro é um dos exercícios mais eficazes para coxa e glúteo juntos com carga alta — desenvolve a espessura da coxa e o volume lateral do glúteo que cria aquela curva de quadril vista de perfil. Começar pelo esquerdo garante que o lado mais fraco não seja prejudicado pela fadiga."
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
            startLeft: false,
            narrative: "Pés na largura dos ombros ou um pouco mais abertos, pontas levemente para fora. Desça em 3 segundos como se fosse sentar em uma cadeira baixa, joelhos acompanhando a direção dos pés. Desça até a coxa ficar paralela ao chão, depois sobe empurrando pelos calcanhares e contraindo os glúteos no topo.",
            why: "O agachamento com carga é o movimento composto que mais gera volume total em coxa e glúteo. Na fase 2, ele sinaliza ao corpo que chegou a hora de crescer — é o exercício-base que garante espessura nas coxas e o arredondamento que define a silhueta amazona."
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
            startLeft: false,
            narrative: "Pés bem abertos (mais que a largura dos ombros), pontas viradas para fora a 45°. Segure o haltere ou barra no centro do corpo e desça em 3 segundos mantendo o tronco ereto e os joelhos empurrando para fora sobre os pés. Sinta o esticão no interno da coxa. Na subida, pressione os joelhos para fora e aperte os glúteos.",
            why: "A pegada sumo ativa o adutor e o glúteo médio de forma que o agachamento normal não alcança, preenchendo o interno e o lateral da coxa. Coxas grossas por todos os ângulos são a base da silhueta amazona."
          },
          {
            id: "f2-side-lunge",
            name: "Afundo Lateral com Halteres",
            sets: 3,
            reps: "12 cada lado",
            rest: "60seg",
            weight: "8-14 kg cada",
            tip: "Passo largo pro lado, começar pelo esquerdo. Interno de coxa + glúteo médio.",
            videoKey: "side-lunge",
            unilateral: false,
            startLeft: true,
            narrative: "De pé com halteres nas mãos ao lado do corpo, dê um passo largo para o lado esquerdo, flexionando o joelho esquerdo e empurrando o quadril pra trás enquanto mantém a perna direita esticada. Desça até a coxa esquerda ficar paralela ao chão, sentindo o alongamento forte no interno da coxa direita. Empurre pelo calcanhar esquerdo pra voltar à posição inicial. Faça todas as reps de um lado antes de trocar — sempre comece pelo esquerdo.",
            why: "O afundo lateral trabalha o interno de coxa e o glúteo médio em um plano de movimento que nenhum agachamento ou hip thrust alcança — o plano lateral. Preenche a coxa por dentro e arredonda o quadril por fora, criando volume nas áreas que mais definem a silhueta amazona vista de frente."
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
            startLeft: false,
            narrative: "Coloque os pés na plataforma mais altos e mais abertos que o normal — no limite superior da plataforma, afastados além da largura dos ombros, pontas levemente para fora. Desça a plataforma em 3 segundos deixando os joelhos se abrirem para os lados. Na subida, empurre pelos calcanhares e sinta o glúteo contrair — não trave o joelho.",
            why: "Com os pés altos e abertos no leg press, o ângulo de força muda completamente e o glúteo e isquiotibial assumem o trabalho em vez do quadríceps. É a maneira de usar a máquina para construir bunda, não só coxa."
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
            startLeft: false,
            narrative: "Sente na máquina com as costas apoiadas e os pés nas plataformas laterais. Feche as pernas em 2 segundos contraindo o interno da coxa — imagine espremer uma bola entre elas. Abra devagar em 3 segundos sem deixar o peso bater. Não use impulso, controle cada centímetro.",
            why: "A adutora preenche o interno da coxa, a área que vai da virilha até o joelho. Coxas grossas por dentro criam aquela silhueta de curvas contínuas que define a parte de baixo de uma figura amazona."
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
            startLeft: false,
            narrative: "De pé com os calcanhares na borda de um degrau ou plataforma, suba na ponta dos pés em 2 segundos até sentir a panturrilha completamente contraída. Segure 1 segundo no topo, depois desça em 3 segundos passando da posição neutra até o alongamento total do calcanhar abaixo do nível do degrau.",
            why: "Panturrilhas definidas completam a estética das pernas — da coxa até o tornozelo. Elas dão a aparência de pernas mais longas e proporcionais, que é o que finaliza a silhueta amazona de corpo inteiro."
          },
          { id: "f2-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum", narrative: "Expire todo o ar dos pulmões completamente, depois puxe o umbigo em direção à coluna e para cima, como se quisesse esconder a barriga. Segure por 25 segundos respirando superficialmente pelo nariz. Faça entre os exercícios ou no final do treino.", why: "O vacuum ativa o transverso do abdômen — o músculo mais interno da barriga. Fortalecê-lo aperta a cintura de dentro pra fora, acentuando a curva da ampulheta sem adicionar volume." }
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
            startLeft: true,
            narrative: "De quatro apoios, joelhos abaixo do quadril e mãos abaixo dos ombros. Mantendo o joelho dobrado a 90°, empurre o calcanhar esquerdo em direção ao teto até a coxa ficar paralela ao chão — nunca além, para não jogar o trabalho para a lombar. Contraia o glúteo esquerdo no topo por 1 segundo e desça devagar. Sempre começa pelo esquerdo.",
            why: "O kickback de 4 apoios isola o glúteo máximo sem envolver outros músculos, gerando queima localizada e conexão mente-músculo profunda. Começar pelo esquerdo dá a série mais qualificada ao lado mais fraco, corrigindo a assimetria ao longo do tempo."
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
            startLeft: true,
            narrative: "Apoie as escápulas no banco, perna de trabalho com o pé no chão e calcanhar pressionando forte, perna de folga dobrada e levantada. Suba o quadril empurrando só com o glúteo da perna de trabalho, contraindo no topo por 2 segundos. Desça em 3 segundos sem tocar o quadril no chão — a contração não para. Esquerdo sempre começa.",
            why: "Neste dia de isolamento, o hip thrust unilateral aprofunda a conexão mente-músculo com cada glúteo individualmente, garantindo que o esquerdo (mais fraco) receba atenção máxima e comece a fechar o gap em relação ao direito."
          },
          {
            id: "f2-abducao-deitada",
            name: "Abdução Deitada Lateral",
            sets: 4,
            reps: "20",
            rest: "45seg",
            weight: "3-8 kg caneleira",
            tip: "Sempre comece pelo lado esquerdo.",
            videoKey: "abducao-deitada",
            unilateral: false,
            startLeft: true,
            narrative: "Deite de lado com o corpo alinhado, perna de baixo levemente dobrada para equilíbrio. Levante a perna de cima até uns 60° em 2 segundos mantendo o pé em flexão (paralelo ao chão, não apontando para cima). Segure 1 segundo no topo sentindo o glúteo médio queimar, depois desça devagar em 3 segundos. Faz os 20 de um lado, vira e faz do outro — sempre começa pelo esquerdo.",
            why: "A abdução deitada isola o glúteo médio e o tensor da fáscia lata, os músculos que criam a curva lateral do quadril vista de frente. É a queima que molda o lado da bunda."
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
            startLeft: false,
            narrative: "Alterne entre prancha frontal e prancha lateral a cada série. Na frontal: cotovelos abaixo dos ombros, corpo reto da cabeça ao calcanhar — aperte o abdômen, os glúteos e não deixe o quadril cair nem subir demais. Na lateral: cotovelo abaixo do ombro, quadril elevado, corpo em linha reta, braço livre pode ficar no quadril.",
            why: "A prancha frontal fortalece o core inteiro (especialmente o transverso) e a lateral ativa os oblíquos — juntos, são os responsáveis pela cintura fina e definida que cria o efeito de ampulheta quando tudo cresce ao redor."
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
            startLeft: false,
            narrative: "Deitada de costas, mãos atrás da cabeça sem puxar o pescoço. Traga o joelho direito em direção ao peito enquanto gira o cotovelo esquerdo em direção a ele — o toque não precisa ser total, o que importa é a rotação do tronco. Enquanto um joelho dobra, o outro se estende. Faça devagar, sentindo cada lado trabalhar separadamente.",
            why: "O crunch bicicleta ativa os oblíquos internos e externos, que são os músculos da lateral da cintura. Oblíquos fortes criam a curvatura lateral que define o contorno da cintura na vista frontal — parte essencial da silhueta ampulheta."
          },
          { id: "f2-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "25seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum", narrative: "Expire todo o ar dos pulmões completamente, depois puxe o umbigo em direção à coluna e para cima, como se quisesse esconder a barriga. Segure por 25 segundos respirando superficialmente pelo nariz. Faça entre os exercícios ou no final do treino.", why: "O vacuum ativa o transverso do abdômen — o músculo mais interno da barriga. Fortalecê-lo aperta a cintura de dentro pra fora, acentuando a curva da ampulheta sem adicionar volume." }
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
            narrative: "Ombros apoiados no banco, barra sobre o quadril com proteção. Empurre o chão com os pés, eleve o quadril até ficar paralelo ao tronco — segure 1 segundo no topo, espremendo forte. Aumente o peso toda semana que conseguir fechar as 10 reps limpas.",
            why: "O hip thrust com barra pesada é o principal motor do crescimento glúteo — é aqui, na fase 3, que o volume e a carga se combinam para moldar a curva amazona de verdade.",
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
            narrative: "Mesma posição do hip thrust bilateral, mas com uma perna dobrada no ar. Foque totalmente no glúteo esquerdo — empurre o quadril alto, segure 1 segundo no topo e desça com controle. Se sentir o direito tentando compensar, diminua o peso.",
            why: "O lado esquerdo mais fraco precisa de estímulo extra e isolado para igualar o direito — assimetria corrigida significa silhueta mais equilibrada e glúteo maior em ambos os lados.",
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
            narrative: "Pés na largura dos quadris, barra na frente das coxas. Empurre o quadril pra trás enquanto a barra desce rente às pernas — sem curvar a lombar. Sinta o alongamento no isquiotibial e no glúteo baixo, depois contraia o posterior para subir. Desça em 3 segundos, suba em 1.",
            why: "O RDL com barra permite carga muito maior que o haltere, recrutando mais fibras do posterior e do glúteo baixo — essencial para dar volume e arredondamento na parte de baixo da bunda.",
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
            narrative: "Halteres à frente do corpo, pernas quase estendidas com leve flexão nos joelhos. Incline o tronco à frente empurrando o quadril pra trás — os halteres descem rente às pernas até sentir forte alongamento. Contraia o glúteo e o posterior para subir. Aumente o peso quando as 10 reps ficarem fáceis.",
            why: "Com carga pesada nessa fase, o stiff desenvolve o glúteo baixo e o posterior da coxa — o par que cria aquela curva sensual na junção bunda-coxa.",
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
            narrative: "Sentada na máquina, costas encostadas, empurre os joelhos pra fora devagar — 2 segundos pra abrir, 2 segundos pra fechar. No último set: faça as 12 reps, reduza o peso imediatamente sem descanso e vá até a falha. Sinta o glúteo médio queimar.",
            why: "O drop set força o glúteo médio além do limite normal — esse músculo é o responsável pela projeção lateral da bunda, dando aquela forma redonda e cheia vista de trás.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Em pé ou sentada, expire todo o ar dos pulmões. Com os pulmões vazios, puxe o umbigo em direção à coluna e para cima — como se quisesse fazer o abdômen desaparecer. Segure sem respirar pelos 30 segundos. Solte devagar e respire. Cada série fica mais fácil.", why: "O vacuum contrai o transverso do abdômen — o músculo mais profundo da barriga — comprimindo a cintura de dentro para fora e acentuando o contraste cintura-quadril da silhueta amazona.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Banco inclinado a 30-45 graus, halteres na altura do peito. Cotovelos abertos a 45° do tronco — não 90°. Empurre os halteres pra cima e levemente pra dentro ao mesmo tempo, expirando na subida. Desça controlado em 2 segundos, sinta o alongamento no peitoral superior.",
            why: "O peitoral alto elevado cria a aparência de decote cheio e levantado, complementando a forma curvilínea — o upper body da amazona não é grande, é bem moldado.",
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
            narrative: "Tronco inclinado a 45°, costas neutras, halteres pendentes. Puxe os cotovelos para trás e para cima, espremendo as escápulas no topo — pense em apertar um lápis entre as omoplatas. Desça em 2 segundos sem deixar os ombros caírem à frente. Aumente o peso a cada semana que completar as reps.",
            why: "Costas largas e bem definidas criam a ilusão óptica de cintura mais fina — é o V que faz o X da ampulheta aparecer. Aqui você constrói a parte de cima da silhueta amazona.",
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
            narrative: "Halteres ao lado do corpo, cotovelos levemente dobrados. Eleve os braços pelos lados até a altura dos ombros — sem balançar o tronco. Desça em 2 segundos resistindo a gravidade. A sensação certa é de queimar no lado do ombro, não no trapézio.",
            why: "Ombros arredondados e definidos ampliam visualmente o topo do corpo, fazendo a cintura parecer mais estreita por contraste — um dos pilares geométricos da silhueta ampulheta.",
            videoKey: "elevacao-lateral",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-crucifixo-inverso",
            name: "Crucifixo Inverso com Halteres",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "3-6 kg halteres",
            tip: "Curvada pra frente, braços abertos. Escápulas juntas no topo.",
            narrative: "Tronco inclinado a 90°, halteres pendentes, cotovelos levemente dobrados. Abra os braços pelos lados como asas até a altura dos ombros — espreme as escápulas no topo. Controle a descida em 2 segundos. O peso aqui é leve para manter o movimento limpo nas 20 reps.",
            why: "O deltoide posterior e o rombóide desenvolvidos melhoram a postura, criam profundidade visual nas costas e fazem os ombros parecerem mais abertos — emoldurando o decote com elegância.",
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
            narrative: "Deitada no banco, halteres acima do peito, cotovelos com leve flexão fixa. Abra os braços em arco largo e controlado até sentir o alongamento no peitoral — não deixe os cotovelos passarem do nível do banco. Contraia o peito para fechar, expirando no topo. Pense em abraçar uma grande árvore.",
            why: "O crucifixo esculpe a largura e o arredondamento do peitoral, contribuindo para o decote cheio e o peito alto que completam a forma curvilínea superior.",
            videoKey: "crucifixo",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Em pé ou sentada, expire todo o ar dos pulmões. Com os pulmões vazios, puxe o umbigo em direção à coluna e para cima — como se quisesse fazer o abdômen desaparecer. Segure sem respirar pelos 30 segundos. Solte devagar e respire. Cada série fica mais fácil.", why: "O vacuum contrai o transverso do abdômen — o músculo mais profundo da barriga — comprimindo a cintura de dentro para fora e acentuando o contraste cintura-quadril da silhueta amazona.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Barra apoiada no trapézio, pés na largura dos ombros ou um pouco mais abertos com pontas levemente viradas. Empurre os joelhos pra fora ao descer, desça até a coxa paralela ao chão em 3 segundos. Suba explodindo pelos calcanhares. Mantenha o peito alto e a lombar neutra durante todo o movimento.",
            why: "O agachamento com barra pesada recruta glúteo, quadríceps e isquiotibiais ao mesmo tempo — é o exercício que mais adiciona volume geral à parte inferior, construindo as coxas grossas da amazona.",
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
            narrative: "Pé traseiro no banco, perna da frente bem avançada para que o joelho não ultrapasse o pé ao descer. Desça até a coxa da frente ficar paralela, depois empurre pelo calcanhar para subir — espremendo o glúteo no topo. Sempre comece pelo lado esquerdo com atenção redobrada.",
            why: "O búlgaro isola cada glúteo separadamente com carga alta, permitindo corrigir a assimetria esquerda com precisão — além de construir as coxas definidas e o glúteo projetado da silhueta amazona.",
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
            narrative: "Sentada na máquina, costas bem apoiadas, abra os apoios até o limite confortável. Feche as pernas com força controlada — sem bater — e segure 1 segundo com as coxas juntas. Abra em 2 segundos resistindo. Sinta o interno de coxa trabalhar em cada rep.",
            why: "A adução preenche o interno da coxa, eliminando o espaço entre as coxas e criando aquela aparência de pernas grossas e firmes — um dos traços mais marcantes da silhueta amazona.",
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
            narrative: "Pés bem afastados (mais que ombros), pontas voltadas para fora a 45°. Desça com os joelhos seguindo a direção dos pés, peito ereto. Suba explodindo pela pressão dos calcanhares e contraindo o interno de coxa no topo. A barra fica entre as pernas — barra traseira ou haltere ao centro.",
            why: "O sumo pesado é o principal construtor do interno de coxa — ativando o adutor magno e os glúteos ao mesmo tempo. Coxas grossas e sólidas são marca registrada da amazona.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-side-lunge",
            name: "Afundo Lateral com Halteres",
            sets: 3,
            reps: "12 cada lado",
            rest: "60seg",
            weight: "12-18 kg cada",
            tip: "Passo largo pro lado, começar pelo esquerdo. Complementa o sumo no plano lateral.",
            videoKey: "side-lunge",
            unilateral: false,
            startLeft: true,
            narrative: "De pé com halteres pesados ao lado do corpo, dê um passo largo para o lado, flexionando o joelho e empurrando o quadril pra trás enquanto mantém a perna oposta esticada. Desça até a coxa ficar paralela ao chão. Empurre pelo calcanhar pra voltar. Todas as reps de um lado antes de trocar — esquerdo primeiro.",
            why: "O afundo lateral trabalha o interno de coxa e o glúteo médio no plano frontal — um ângulo que nem o sumo nem o agachamento alcançam. Arredonda o quadril lateralmente e preenche a coxa por dentro, completando a silhueta amazona vista de frente."
          },
          {
            id: "f3-bulgaro-dir",
            name: "Agachamento Búlgaro com Halteres — substituição cadeira extensora",
            sets: 3,
            reps: "15",
            rest: "60seg",
            weight: "10-18 kg cada",
            tip: "Substitui cadeira extensora. Quadríceps em foco.",
            narrative: "Pé traseiro no banco, tronco mais ereto que na variação glútea — isso transfere o foco para o quadríceps da perna da frente. Desça em 2 segundos, suba em 1 explosivo. Com peso mais leve e mais reps, você vai sentir o músculo anterior da coxa queimar nas últimas reps.",
            why: "O quadríceps desenvolvido encorpa a frente da coxa e dá definição na lateral — compondo junto com o glúteo e o posterior a coxa volumosa e torneada da amazona.",
            videoKey: "bulgarian-split-squat",
            unilateral: false,
            startLeft: false
          },
          { id: "f3-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Em pé ou sentada, expire todo o ar dos pulmões. Com os pulmões vazios, puxe o umbigo em direção à coluna e para cima — como se quisesse fazer o abdômen desaparecer. Segure sem respirar pelos 30 segundos. Solte devagar e respire. Cada série fica mais fácil.", why: "O vacuum contrai o transverso do abdômen — o músculo mais profundo da barriga — comprimindo a cintura de dentro para fora e acentuando o contraste cintura-quadril da silhueta amazona.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Pés na largura dos quadris, barra sobre o meio do pé. Agache e segure a barra — uma mão pronada, outra supinada ou ambas pronadas. Barra rente à canela, costas neutras, peito aberto. Empurre o chão com os pés, estenda quadril e joelho juntos. A barra sobe rente ao corpo até você ficar em pé. Não curvar a lombar em nenhum momento.",
            why: "O terra recruta glúteo máximo, isquiotibiais, lombar e core em um único movimento — nenhum exercício gera tanto estímulo simultâneo para a cadeia posterior inteira, que é o motor da forma amazona.",
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
            narrative: "Execução igual ao hip thrust bilateral, mas no topo você para — 2 segundos com quadril elevado, glúteo completamente contraído, respiração controlada. Só então desce. A pausa parece pequena mas muda completamente a sensação do exercício: você VAI sentir.",
            why: "A contração isométrica no topo aumenta o tempo sob tensão e fortalece a conexão mente-músculo com o glúteo — fundamental para você aprender a ativar o glúteo esquerdo de forma consciente.",
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
            narrative: "Halteres à frente, pernas quase estendidas. Incline o tronco e empurre o quadril pra trás em 3 segundos — desça até sentir o alongamento no isquiotibial. Suba em 1 segundo contraindo o posterior e o glúteo. Nessa variação com mais reps, o foco é queimar o posterior da coxa.",
            why: "O isquiotibial bem desenvolvido preenche a parte de trás da coxa, criando aquela curva contínua e preenchida que vai do glúteo até atrás do joelho — detalhe que separa a coxa comum da coxa amazona.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f3-abducao-pe-caneleira",
            name: "Abdução em Pé com Caneleira",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "3-5 kg caneleira",
            tip: "Sempre comece pelo lado esquerdo.",
            narrative: "Em pé, apoie-se em uma parede ou banco com uma mão. Com a caneleira na perna de trabalho, abra a perna pelo lado — elevando devagar até sentir o glúteo médio contrair. Segure 1 segundo no topo e desça com controle. Sempre comece pelo lado esquerdo para treiná-lo sem fadiga acumulada.",
            why: "A abdução em pé isola o glúteo médio com foco especial no lado esquerdo — esse músculo é o responsável pelo arredondamento lateral da bunda e pela estabilidade que permite levantar pesos maiores nos outros exercícios.",
            videoKey: "abducao-pe",
            unilateral: false,
            startLeft: true
          },
          { id: "f3-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Em pé ou sentada, expire todo o ar dos pulmões. Com os pulmões vazios, puxe o umbigo em direção à coluna e para cima — como se quisesse fazer o abdômen desaparecer. Segure sem respirar pelos 30 segundos. Solte devagar e respire. Cada série fica mais fácil.", why: "O vacuum contrai o transverso do abdômen — o músculo mais profundo da barriga — comprimindo a cintura de dentro para fora e acentuando o contraste cintura-quadril da silhueta amazona.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Você já domina esse movimento. Barra pesada, ombros no banco, quadril sobe alto com força total — 1 segundo de pausa no topo espremendo o glúteo, desce controlado. Mantenha a carga conquistada na Fase 3 e continue progredindo quando possível. Esse é o seu exercício-rei.",
            why: "O hip thrust com barra é a fundação permanente da silhueta amazona — você não abandona, você mantém e refina. Cada repetição preserva o glúteo construído com meses de trabalho duro.",
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
            narrative: "Esse exercício não tem fim de vigência. Perna esquerda trabalhando sozinha, glúteo esquerdo no comando. Empurre o quadril com intenção — sinta a diferença entre os dois lados e celebre cada vez que o esquerdo parecer mais forte que na semana anterior.",
            why: "A manutenção do trabalho unilateral esquerdo garante que a assimetria não volte — dois glúteos igualmente desenvolvidos são o que cria aquela simetria irresistível vista de trás.",
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
            narrative: "Você sabe exatamente o que fazer: barra na frente das coxas, quadril empurrando pra trás, lombar neutra. Desça em 3 segundos até sentir o isquiotibial no limite do conforto, suba em 1. Seu corpo já memorizou esse padrão — agora é questão de executar com maestria cada rep.",
            why: "O RDL mantém o comprimento e o volume do posterior da coxa e do glúteo baixo que você construiu — preservando a curva contínua de baixo da bunda que é marca da amazona.",
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
            narrative: "Sentada na máquina, costas apoiadas, carga mantida da Fase 3. Abra devagar — 2 segundos — segure 1 segundo no limite externo, feche em 2 segundos. Não bata os pesos. Você já sabe onde sentir esse exercício: no glúteo médio, na lateral do quadril.",
            why: "Manter a abdução pesada preserva o arredondamento lateral do glúteo conquistado — essa projeção lateral é o que cria aquela largura de quadril vista de frente e a curva perfeita de lado.",
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
            narrative: "Barra sobre o meio do pé, costas neutras, peito aberto. Você já levantou muito peso — agora cada rep é perfeita: empurre o chão, abra o quadril, suba controlado com a barra colada ao corpo. Oito reps limpas valem mais que dez feias. Esse é o seu poder em forma de exercício.",
            why: "O terra mantém o recrutamento total da cadeia posterior — glúteo, isquiotibial, lombar — preservando toda a musculatura que sustenta e projeta a forma amazona construída ao longo de quase um ano.",
            videoKey: "deadlift",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-lower-a", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Expire tudo. Pulmões vazios — puxe o umbigo para a coluna e para cima, como se fosse encolher. Segure 30 segundos. Você já sabe fazer isso bem — agora é manter o hábito que define a cintura para sempre.", why: "O vacuum é a prática de manutenção mais eficiente para a cintura: nenhum exercício trabalha o transverso com tanta especificidade, mantendo a compressão interna que preserva o contraste cintura-quadril.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Banco a 30-45 graus, halteres pesados, cotovelos a 45° do tronco. Seu peitoral já sabe o caminho — empurre para cima e para dentro, expire. Desça controlado, sinta o alongamento. Dez reps limpas e poderosas. Você carrega isso com facilidade agora.",
            why: "Manter o peitoral desenvolvido preserva a forma e o levantamento do peito — um componente sutil mas importante da silhueta feminina confiante que você construiu.",
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
            narrative: "Tronco a 45°, halteres pesados, costas neutras. Puxe os cotovelos pra trás com força — retração escapular completa no topo. Você domina esse padrão. Cada rep é intencional: puxar, espremer, descer com controle. Suas costas são amplas e fortes agora.",
            why: "As costas largas e densas que você construiu precisam de estímulo contínuo para se manter — e elas são o que mantém a ampulheta perfeita quando olhada de frente ou de costas.",
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
            narrative: "Halteres ao lado, cotovelos levemente dobrados. Eleve pelos lados até os ombros — sem jogar o tronco. Quinze reps controladas, sentindo o deltoide médio em cada uma. Você já tem ombros arredondados e bonitos — agora é questão de manter.",
            why: "Os ombros arredondados são peça permanente da silhueta: eles definem a largura de cima e fazem a cintura parecer mais estreita — a geometria da ampulheta depende deles.",
            videoKey: "elevacao-lateral",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-crucifixo-inverso",
            name: "Crucifixo Inverso com Halteres",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "4-8 kg halteres",
            tip: "Curvada pra frente, braços abertos. Escápulas juntas no topo.",
            narrative: "Tronco inclinado a 90°, halteres pendentes, cotovelos ligeiramente dobrados. Abra os braços em arco até os ombros — escápulas se encontram no topo. Desça em 2 segundos. Vinte reps fluidas. Seu deltoide posterior já é forte e você sente exatamente onde o exercício chega.",
            why: "O deltoide posterior e os rombóides mantidos em bom estado garantem a postura ereta e o porte altivo que completa a presença física da amazona — corpo forte e postura de quem sabe que é poderosa.",
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
            narrative: "Deitada no banco, cotovelos com leve flexão fixa, halteres pesados. Abra em arco largo e controlado — 3 segundos descendo — sinta o peitoral alongar. Feche expirando forte. Doze reps perfeitas. Você carrega esses halteres com a facilidade que levaria meses para a você de um ano atrás.",
            why: "O peitoral bem mantido sustenta o decote cheio e o peito alto — detalhes que compõem a feminilidade confiante da silhueta que você construiu e agora celebra.",
            videoKey: "crucifixo",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-upper", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Expire tudo. Pulmões vazios — puxe o umbigo para a coluna e para cima, como se fosse encolher. Segure 30 segundos. Você já sabe fazer isso bem — agora é manter o hábito que define a cintura para sempre.", why: "O vacuum é a prática de manutenção mais eficiente para a cintura: nenhum exercício trabalha o transverso com tanta especificidade, mantendo a compressão interna que preserva o contraste cintura-quadril.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Barra no trapézio, pés largos, peito ereto. Você já agachou com esse peso muitas vezes — cada rep é uma confirmação do que você construiu. Desça até a coxa paralela, empurre pelo calcanhar, suba com o quadril abrindo. Dez reps fortes.",
            why: "O agachamento com barra mantém o volume geral da coxa e do glúteo — a base de todo o shape inferior. Sem ele, a estrutura construída começa a perder definição.",
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
            narrative: "Pé traseiro no banco, halteres pesados nas mãos. Sempre começa pelo esquerdo — perna da frente bem avançada. Desce com controle, sobe explodindo pelo calcanhar. Você já não precisa pensar muito no equilíbrio: seu corpo sabe. Agora é só executar com potência.",
            why: "O búlgaro mantém a força e o volume unilateral do glúteo e da coxa — e continuar priorizando o esquerdo garante que a simetria conquistada permaneça pelo resto da vida.",
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
            narrative: "Sentada na máquina, carga conquistada. Abra em 2 segundos, feche com força em 1 — 1 segundo de pausa com as coxas juntas. Você sente o interno da coxa trabalhar em cada rep. Quinze reps completas com carga respeitável: isso é força real.",
            why: "O interno de coxa preenchido e firme é manutenção ativa da aparência de pernas grossas e sólidas — sem ele, esse volume vai sendo perdido mesmo mantendo os outros treinos.",
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
            narrative: "Pés bem abertos, pontas para fora, barra no centro. Desça com os joelhos seguindo os pés — coxa paralela ao chão. Suba contraindo o interno de coxa e o glúteo juntos. Você levanta esse peso com confiança agora. Dez reps sólidas.",
            why: "O sumo pesado é a âncora do interno de coxa — sem ele, a espessura das coxas construída ao longo de quase um ano começa a se dissipar. Manter é também uma conquista.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f4-side-lunge",
            name: "Afundo Lateral com Halteres",
            sets: 3,
            reps: "10 cada lado",
            rest: "60seg",
            weight: "12-18 kg cada",
            tip: "Manutenção do plano lateral. Esquerdo primeiro.",
            videoKey: "side-lunge",
            unilateral: false,
            startLeft: true,
            narrative: "Passo largo pro lado com halteres, flexionar o joelho e empurrar o quadril pra trás. Coxa paralela ao chão, perna oposta esticada. Empurre pelo calcanhar pra voltar. Você já domina esse movimento — mantenha a qualidade e a carga.",
            why: "Manter o afundo lateral preserva o volume do interno de coxa e a curva lateral do quadril construída nas fases anteriores. O plano lateral é o primeiro a perder definição se parar de treinar."
          },
          {
            id: "f4-leg-press",
            name: "Leg Press (pés altos e abertos)",
            sets: 3,
            reps: "12",
            rest: "90seg",
            weight: "60-100 kg",
            tip: "Ativa glúteo mais que quadríceps.",
            narrative: "Pés na parte de cima da plataforma, afastados na largura dos ombros ou um pouco mais. Desça a plataforma até as coxas ficarem paralelas ou um pouco além — sem deixar a lombar sair do banco. Empurre pelo calcanhar e pela parte de cima do pé. Com essa posição de pé, você sente o glúteo dominar.",
            why: "O leg press com pés altos é uma das poucas formas de carregar muito peso com foco direto no glúteo — uma adição poderosa à fase de manutenção que permite progressão de carga contínua sem tanto estresse na coluna.",
            videoKey: "leg-press",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-lower-b", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Expire tudo. Pulmões vazios — puxe o umbigo para a coluna e para cima, como se fosse encolher. Segure 30 segundos. Você já sabe fazer isso bem — agora é manter o hábito que define a cintura para sempre.", why: "O vacuum é a prática de manutenção mais eficiente para a cintura: nenhum exercício trabalha o transverso com tanta especificidade, mantendo a compressão interna que preserva o contraste cintura-quadril.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
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
            narrative: "Halteres pesados à frente, pernas quase estendidas. Empurre o quadril pra trás em 3 segundos — sinta o alongamento do isquiotibial e do glúteo baixo. Suba contraindo tudo em 1 segundo. Você executa isso com perfeição agora: a técnica está no músculo, não na memória.",
            why: "O stiff mantém o volume e o arredondamento da parte inferior do glúteo — o detalhe que cria a curvatura na junção bunda-coxa, uma das assinaturas visuais mais marcantes da silhueta amazona.",
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
            narrative: "Em quatro apoios, caneleira na perna de trabalho. Comece pelo esquerdo — estenda a perna para trás e para cima, com o joelho levemente dobrado, espremendo o glúteo no topo. Desça controlado. Não balanço, não compensação lombar. Você sabe isolar o glúteo agora — use essa habilidade.",
            why: "O kickback isola o glúteo máximo no pico da extensão do quadril — um estímulo que complementa os compostos pesados e refina o shape do glúteo, mantendo ele firme e projetado.",
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
            weight: "3-8 kg caneleira",
            tip: "Sempre comece pelo lado esquerdo.",
            narrative: "Deitada de lado, caneleira na perna de cima. Sempre começa pelo esquerdo. Eleve a perna devagar — 2 segundos subindo — segure 1 segundo no topo e desça com controle. O glúteo médio já conhece esse movimento muito bem: vinte reps fluidas e intensas.",
            why: "A abdução deitada lateral mantém o glúteo médio ativo e arredondado, preservando a projeção lateral da bunda — o que faz o quadril parecer largo e curvilíneo visto de frente.",
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
            narrative: "Alterne entre prancha frontal e prancha lateral a cada set. Na frontal: antebraços no chão, corpo reto, abdômen contraído — não deixe o quadril subir nem afundar. Na lateral: um antebraço, empilhe os pés, mantenha o quadril alto. Quarenta e cinco segundos de tensão controlada.",
            why: "O core forte não é só estético — ele estabiliza cada levantamento pesado que você faz e mantém a postura que projeta o glúteo e a cintura corretamente em qualquer posição.",
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
            narrative: "Esteira inclinada a 8-12%, velocidade de caminhada rápida entre 5-6 km/h. Mantenha a postura ereta — não se incline para a frente nem segure na barra. Deixe o glúteo e o posterior de coxa trabalharem em cada passada. Vinte a trinta minutos fluidos e poderosos.",
            why: "O cardio inclinado na manutenção gerencia a composição corporal sem sacrificar músculo — e a inclinação alta garante que o glúteo seja ativado a cada passo, reforçando o trabalho do treino mesmo no cardio.",
            videoKey: "cardio-esteira",
            unilateral: false,
            startLeft: false
          },
          { id: "f4-vacuum-gluteo", name: "Vacuum Abdominal", sets: 3, reps: "30seg", rest: "30seg", weight: "0 kg", tip: "Soltar TODO o ar, puxar umbigo pra dentro e cima. Marca a cintura.", narrative: "Expire tudo. Pulmões vazios — puxe o umbigo para a coluna e para cima, como se fosse encolher. Segure 30 segundos. Você já sabe fazer isso bem — agora é manter o hábito que define a cintura para sempre.", why: "O vacuum é a prática de manutenção mais eficiente para a cintura: nenhum exercício trabalha o transverso com tanta especificidade, mantendo a compressão interna que preserva o contraste cintura-quadril.", videoKey: "vacuum", unilateral: false, startLeft: false, type: "vacuum" }
        ]
      }
    }
  }
};

// ─── WARMUP_LOWER ────────────────────────────────────────────
const WARMUP_LOWER = [
  {
    name: "Alongamento hip flexor ajoelhado",
    desc: "Ajoelhar, uma perna à frente 90°. Empurrar quadril pra frente suavemente. Destravar 8h sentada.",
    time: "30seg cada lado",
    narrative: "Ajoelhe com o joelho direito no chão e o pé esquerdo à frente, joelho a 90°. Mantenha o tronco ereto, coloque as mãos na coxa da frente e empurre o quadril lentamente para frente até sentir um alongamento na parte superior da coxa de trás. Respire fundo e, a cada expiração, aprofunde um pouco mais o avanço sem arquejar a lombar.",
    why: "Após horas sentada, o psoas e o reto femoral ficam encurtados e literalmente 'desligam' os glúteos — esse alongamento é o primeiro passo para reativar o glúteo antes do treino e prevenir dor lombar durante os exercícios."
  },
  {
    name: "Torção torácica deitada",
    desc: "Deitada de lado, joelhos dobrados. Abrir braço de cima pra trás, olhar seguir a mão. Soltar ombros e costas.",
    time: "5x cada lado",
    narrative: "Deite de lado no chão com os joelhos dobrados em 90° e os braços estendidos à frente, um sobre o outro. Devagar, leve o braço de cima em arco pelo teto até o outro lado, deixando o olhar seguir a mão e o ombro cair para trás. Pause na posição mais aberta por 2 respirações e retorne com controle.",
    why: "A coluna torácica travada por postura sedentária limita o alcance nos exercícios de pernas e sobrecarrega a lombar — essa rotação restaura a mobilidade que você vai precisar no agachamento e no hip thrust."
  },
  {
    name: "Rotação pescoço + ombros",
    desc: "Girar pescoço devagar 5x cada lado. Depois subir ombros até orelhas e soltar com força 10x. Soltar tensão.",
    time: "1 min",
    narrative: "Em pé ou sentada, gire o pescoço suavemente desenhando meio círculo de um ombro ao outro — nunca jogue a cabeça para trás. Em seguida, encolha os dois ombros até as orelhas contando 3 segundos, e solte de uma vez com uma expiração forçada. Repita 10 vezes sentindo a tensão escapar a cada soltura.",
    why: "Liberar o pescoço e os trapézios antes do treino de pernas pode parecer óbvio, mas a tensão acumulada nessa região distorce o alinhamento durante agachamentos — soltar agora protege a postura durante todo o treino."
  },
  {
    name: "Marcha elevando joelho",
    desc: "Ativa circulação e aquece quadril",
    time: "2 min",
    narrative: "Em pé, comece a marchar no lugar elevando os joelhos alternadamente até a altura do quadril, com os braços balançando em ritmo oposto. Mantenha o tronco estável, o abdômen levemente contraído e o ritmo constante — não precisa correr, mas mantenha energia. Use os 2 minutos para ir aumentando gradualmente a amplitude.",
    why: "Eleva a frequência cardíaca, aumenta o fluxo sanguíneo para quadríceps, isquiotibiais e glúteos, e ativa o padrão de flexão de quadril que você vai usar em exercícios como o step-up — tudo isso sem estressar articulações frias."
  },
  {
    name: "Círculos de quadril",
    desc: "Mãos na cintura, círculos amplos",
    time: "1 min cada sentido",
    narrative: "Fique em pé com os pés na largura dos ombros e as mãos na cintura. Mantenha os ombros completamente parados enquanto desenha círculos grandes e lentos com o quadril — imagine que está passando o arco de hula-hoop. Complete 1 minuto girando no sentido horário, depois 1 minuto no anti-horário.",
    why: "Lubrifica a articulação do quadril com líquido sinovial e mobiliza ativamente a cápsula articular, reduzindo o risco de impingimento durante exercícios de amplitude profunda como o agachamento e o sumo."
  },
  {
    name: "Leg swing frente/trás",
    desc: "Pêndulo solto — não forçar",
    time: "15x cada perna",
    narrative: "Apoie uma mão numa parede para equilíbrio e balance a perna livre como um pêndulo — para frente e para trás, de forma relaxada e progressivamente maior. Nos primeiros 5 balanços vá devagar para aquecer a amplitude; nos últimos 5 você pode ir um pouco mais alto, mas nunca force nem segure o movimento.",
    why: "Trabalha a mobilidade dinâmica do flexor e extensor do quadril, preparando o hip flexor para não restringir o glúteo durante o hip thrust — se o flexor travar, o glúteo não consegue contrair no pico do movimento."
  },
  {
    name: "Leg swing lateral",
    desc: "Plano lateral — abre o quadril",
    time: "15x cada perna",
    narrative: "Com a mão na parede para equilíbrio, balance a perna livre lateralmente — cruzando levemente na frente do corpo e depois abrindo para o lado o máximo confortável. Mantenha o tronco e a pélvis estáveis; se o quadril girar muito, reduza a amplitude.",
    why: "Ativa e mobiliza o glúteo médio e o TFL no plano frontal — o mesmo plano em que o clamshell trabalha — despertando os músculos abdutores que ficam dormentes em quem fica muito tempo sentada."
  },
  {
    name: "Agachamento com pausa no fundo",
    desc: "3s no fundo, mobilidade de tornozelo e quadril",
    time: "10 reps",
    narrative: "Desça para a posição mais funda de agachamento que conseguir sem os calcanhares levantarem — os pés podem estar um pouco abertos. Segure 3 segundos no fundo respirando, com as mãos juntas à frente para contrapeso se precisar. Ao subir, empurre forte o chão e aperte os glúteos no topo.",
    why: "Prepara tornozelo, joelho e quadril para amplitude total antes do treino com carga, enquanto já começa a criar a conexão mente-glúteo no padrão de empurrar o chão — fazer isso sem peso é a forma mais segura de calibrar o movimento."
  },
  {
    name: "Frog Pump (ativação borboleta) ⭐",
    desc: "Solas dos pés juntas, joelhos abertos. Empurre quadril pro teto. Isola o glúteo 100%.",
    time: "2x15",
    narrative: "Deita de costas, junta as solas dos pés e deixa os joelhos abertos pros lados (posição borboleta). Empurra o quadril pro teto apertando o glúteo com força no topo por 2 segundos, depois desce devagar. A posição dos pés elimina a ajuda das pernas — o glúteo trabalha sozinho.",
    why: "O frog pump é a ativação mais eficiente de glúteo que existe — a posição borboleta dos pés impede os isquiotibiais e quadríceps de compensarem, garantindo que o glúteo desperta de verdade antes do treino pesado. Fazer isso antes dos clamshells e do treino principal muda completamente a qualidade da contração."
  },
  {
    name: "Clamshell esquerdo com caneleira ⭐",
    desc: "Ativa o glúteo esq antes do treino — crítico. Caneleira no joelho",
    time: "2x15",
    narrative: "Deite de lado no chão sobre o lado direito, quadril levemente dobrado a 45°, joelhos dobrados. Coloque a caneleira no joelho esquerdo e, mantendo os pés juntos, abra o joelho de cima em direção ao teto o máximo possível sem deixar o quadril girar para trás. Segure 1 segundo no topo, sinta o glúteo médio esquerdo contrair, e baixe com controle.",
    why: "Seu glúteo esquerdo é o mais fraco e o mais propenso a se apagar durante exercícios bilaterais — fazer esse movimento antes do treino principal cria uma 'impressão neurológica' que força o glúteo esquerdo a participar ativamente em vez de deixar o direito assumir tudo."
  },
  {
    name: "Clamshell bilateral com caneleira",
    desc: "Dois lados, ativa glúteo médio. Caneleira no joelho",
    time: "2x20",
    narrative: "Repita o clamshell, agora para os dois lados alternando, com a caneleira. Faça 10 repetições de cada lado por série, começando sempre pelo esquerdo. O movimento deve ser lento e controlado: 2 segundos para abrir, 1 segundo de pausa, 2 segundos para fechar — sem pressa.",
    why: "Ativa o glúteo médio bilateralmente, essencial para estabilizar o quadril durante agachamentos e evitar que os joelhos caiam para dentro (valgo) — esse colapso é a principal causa de dor no joelho em pessoas com glúteo médio fraco."
  },
  {
    name: "Cat-cow no quadrupede",
    desc: "Mobilidade lombar — arquear e curvar devagar",
    time: "10 lentos",
    narrative: "No quadrupede (mãos sob os ombros, joelhos sob o quadril), inspire enquanto deixa a barriga afundar e ergue a cabeça levemente (cow); expire esvaziando o pulmão enquanto arredonda toda a coluna empurrando o chão e tucando o queixo no peito (cat). Cada repetição deve durar pelo menos 4 segundos.",
    why: "Lubrifica os discos lombares e mobiliza a articulação sacroilíaca — a região que conecta a coluna ao quadril e que fica completamente travada após longas horas sentada, limitando a amplitude do hip thrust e do agachamento."
  },
];

// ─── WARMUP_UPPER ────────────────────────────────────────────
const WARMUP_UPPER = [
  {
    name: "Alongamento hip flexor ajoelhado",
    desc: "Ajoelhar, uma perna à frente 90°. Empurrar quadril pra frente suavemente. Destravar 8h sentada.",
    time: "30seg cada lado",
    narrative: "Ajoelhe com o joelho direito no chão e o pé esquerdo à frente, joelho a 90°. Mantenha o tronco ereto, coloque as mãos na coxa da frente e empurre o quadril lentamente para frente até sentir um alongamento na parte superior da coxa de trás. Respire fundo e, a cada expiração, aprofunde um pouco mais o avanço sem arquejar a lombar.",
    why: "Mesmo no treino de membros superiores, liberar os flexores do quadril melhora a postura geral — um quadril travado inclina a pélvis para frente, arqueando a lombar e comprometendo a posição do ombro durante o supino e o pullover."
  },
  {
    name: "Torção torácica deitada",
    desc: "Deitada de lado, joelhos dobrados. Abrir braço de cima pra trás, olhar seguir a mão. Soltar ombros e costas.",
    time: "5x cada lado",
    narrative: "Deite de lado no chão com os joelhos dobrados em 90° e os braços estendidos à frente, um sobre o outro. Devagar, leve o braço de cima em arco pelo teto até o outro lado, deixando o olhar seguir a mão e o ombro cair para trás. Pause na posição mais aberta por 2 respirações e retorne com controle.",
    why: "Abertura torácica é fundamental para o ombro ter amplitude total no supino e no pullover — sem essa mobilidade, o corpo compensa forçando o ombro em posição perigosa, o que é a principal causa de lesão no manguito rotador."
  },
  {
    name: "Rotação pescoço + ombros",
    desc: "Girar pescoço devagar 5x cada lado. Depois subir ombros até orelhas e soltar com força 10x. Soltar tensão.",
    time: "1 min",
    narrative: "Em pé ou sentada, gire o pescoço suavemente desenhando meio círculo de um ombro ao outro — nunca jogue a cabeça para trás. Em seguida, encolha os dois ombros até as orelhas contando 3 segundos, e solte de uma vez com uma expiração forçada. Repita 10 vezes sentindo a tensão escapar a cada soltura.",
    why: "Libera o trapézio superior e o levantador da escápula — músculos que ficam cronicamente tensos em quem trabalha no computador — aliviando a sobrecarga no ombro antes de qualquer exercício de pressão ou puxada."
  },
  {
    name: "Jumping jack ou pular corda",
    desc: "Elevar frequência cardíaca base",
    time: "2 min",
    narrative: "Faça polichinelos em ritmo constante por 2 minutos — pés juntos ao fechar, pés na largura dos ombros ao abrir, braços subindo acima da cabeça e descendo em sincronia com as pernas. Se preferir pular corda, mantenha os pulos baixos e o ritmo cadenciado. O objetivo é sentir o coração acelerar e um leve calor no corpo.",
    why: "Eleva a temperatura muscular em todo o corpo, incluindo ombros e peitorais, o que aumenta a elasticidade dos tecidos conectivos e melhora a condução nervosa — músculos quentes são até 20% mais eficientes do que músculos frios."
  },
  {
    name: "Círculos de ombro",
    desc: "Braços estendidos, amplos — frente e trás",
    time: "15x cada direção",
    narrative: "Em pé, estenda os braços para os lados na altura dos ombros e comece a fazer círculos — pequenos a princípio, aumentando progressivamente até usar toda a amplitude. Faça 15 círculos para frente e 15 para trás, mantendo o tronco estável e os cotovelos leves.",
    why: "Lubrifica a articulação glenoumeral com líquido sinovial e aquece os quatro músculos do manguito rotador — a 'manga' de estabilizadores que protege o ombro de lesões durante movimentos com carga, como o supino e o remada."
  },
  {
    name: "T-spine rotation",
    desc: "Deitado de lado, joelhos dobrados: abrir o braço pra trás",
    time: "10x cada lado",
    narrative: "Deite de lado com joelhos dobrados e os dois braços estendidos à frente, em nível do ombro. Leve o braço de cima em direção ao teto e continue até o outro lado — deixe o olhar seguir a mão e o ombro pousar suavemente no chão se conseguir. Pause 2 segundos no máximo da abertura e retorne devagar.",
    why: "A rotação torácica específica aquece e mobiliza a coluna média que fica travada na postura sentada — sem essa mobilidade, o ombro precisa compensar em todos os movimentos de empurrar e puxar, aumentando exponencialmente o risco de tendinite."
  },
  {
    name: "Crucifixo inverso leve (halteres ou garrafas)",
    desc: "Curvada pra frente, abrir braços pros lados. Escápulas juntas",
    time: "2x15",
    narrative: "Fique em pé com o tronco inclinado a 45°, halteres leves (ou garrafas d'água) nas mãos com palmas voltadas para dentro. Mantenha os cotovelos levemente dobrados e abra os braços para os lados até sentirem o movimento das escápulas se aproximando — como se quisesse segurar um lápis entre elas. Baixe com controle.",
    why: "Ativa os deltoides posteriores e os retratores de escápula antes do treino principal, equilibrando o trabalho entre os músculos do peito (dominantes) e as costas (estabilizadores) — essa ativação prévia previne o encurtamento postural do ombro após o supino."
  },
  {
    name: "Supino com peso leve (50%)",
    desc: "Aquecimento específico do padrão de empurrar",
    time: "2x15",
    narrative: "Pegue um peso equivalente a 50% do que você usará no treino principal e faça 2 séries de 15 repetições no padrão normal de supino — deite no banco, cotovelos a 45° do tronco, desça controlado até sentir o alongamento no peitoral e suba empurrando. O foco aqui é sentir o movimento e calibrar a técnica, não criar fadiga.",
    why: "O aquecimento específico do padrão de empurrar com carga reduzida sinaliza ao sistema nervoso qual recrutamento muscular será necessário, melhorando a conexão mente-músculo nas séries pesadas e reduzindo o risco de lesão na primeira série a frio."
  },
];

// ─── COOLDOWN_LOWER ──────────────────────────────────────────
const COOLDOWN_LOWER = [
  {
    name: "Pigeon Pose",
    desc: "Joelho dobrado na frente, perna trás estendida. Relaxar quadril pro chão. Se doer no joelho da frente: afastar mais o pé.",
    time: "2 min cada lado",
    narrative: "Do quadrupede, deslize o joelho direito para frente posicionando-o atrás do pulso direito, com o pé direito apontando levemente para a esquerda. Estenda a perna esquerda para trás completamente e, enquanto respira fundo, deixe o quadril direito afundar em direção ao chão. Pode apoiar os antebraços ou a testa no chão — deixe o peso do corpo fazer o trabalho a cada expiração.",
    why: "O pigeon é o alongamento mais completo para o piriforme e o glúteo profundo — músculos que contraem intensamente durante o hip thrust e o agachamento e que, se ficarem encurtados, comprimem o nervo ciático e geram dor lombar no dia seguinte."
  },
  {
    name: "Lizard Pose",
    desc: "Avanço fundo, antebraço no chão. Respirar fundo, afundar mais a cada expiração. Não forçar se lombar reclamar.",
    time: "90seg cada lado",
    narrative: "Parta para um avanço fundo com o pé esquerdo à frente, joelho a 90°. Desça os dois antebraços para dentro do pé esquerdo, mantendo as mãos paralelas. Deixe o quadril direito afundar em direção ao chão a cada expiração — você vai sentir um alongamento intenso na virilha direita e na coxa. Se a lombar protestar, não force: diminua a amplitude.",
    why: "Alonga o psoas iliaco e o adutor magno que contraem excentricamente em todos os exercícios de pernas — soltar esses músculos pós-treino é o que determina se você vai conseguir amplitude total na próxima sessão, especialmente no sumo."
  },
  {
    name: "Borboleta sentada",
    desc: "Pés juntos, joelhos abertos, inclinar devagar. Puxar pés mais perto = mais intenso. Dor no joelho = soltar.",
    time: "2 min",
    narrative: "Sente no chão com a coluna ereta, junte as plantas dos pés e deixe os joelhos caírem para os lados. Segure os pés ou tornozelos com as mãos e incline o tronco levemente para frente a partir do quadril — não curve as costas. Quanto mais você puxa os pés em direção ao corpo, mais intenso fica o alongamento na virilha.",
    why: "Abre os adutores e a cápsula interna do quadril que ficam comprimidos durante agachamentos e elevações de perna — melhorar a amplitude dessa abertura ao longo do tempo aumenta diretamente a profundidade do seu agachamento sumo."
  },
  {
    name: "Happy Baby",
    desc: "Deitada, segurar plantas dos pés, joelhos abertos. Balançar suave lado a lado. Pescoço no chão.",
    time: "2 min",
    narrative: "Deite de costas, dobre os joelhos em direção ao peito e abra-os para os lados além da largura do tronco. Segure as plantas dos pés ou os calcanhares com as mãos e puxe levemente para baixo, mantendo os calcanhares acima dos joelhos. Mantenha o pescoço relaxado no chão e balance suavemente de lado a lado como se fosse uma criança brincando.",
    why: "Descomprime a articulação sacroilíaca e libera a lombar após exercícios pesados — o balanço lateral mobiliza ativamente a articulação do quadril enquanto o peso do corpo alonga passivamente os glúteos e a região lombar."
  },
  {
    name: "Círculos de quadril em pé",
    desc: "Mãos na cintura, círculos amplos e lentos. Tronco PARADO, só quadril move. Se tronco mexer, círculo menor.",
    time: "1 min (30seg cada sentido)",
    narrative: "Fique em pé com os pés na largura dos ombros e as mãos nos quadris. Mantenha o tronco absolutamente estável enquanto desenha círculos grandes e lentos somente com o quadril — imagine que você está usando um bambolê. Se perceber que os ombros se mexem junto, diminua o círculo até conseguir o isolamento. Faça 30 segundos em cada sentido.",
    why: "Mobilidade ativa do quadril pós-treino — diferente do alongamento passivo, esse movimento mantém o fluxo sanguíneo na região enquanto restaura a amplitude de movimento, acelerando a recuperação e preparando o quadril para movimentos mais expressivos como rebolar."
  },
  {
    name: "Isolamento quadril frente/trás",
    desc: "Pés paralelos, empurrar quadril frente e trás sem mover tronco. Imaginar parede na frente e atrás. Joelhos levemente flexionados.",
    time: "1 min",
    narrative: "Em pé com os joelhos levemente flexionados, imagine que existe uma parede fina na frente e uma atrás de você. Empurre o quadril para frente tentando 'tocar' a parede da frente, pause, e depois empurre para trás tocando a parede de trás — apenas o quadril se move, o tronco fica completamente estático. Vá devagar e sinta a diferença entre anteversão e retroversão pélvica.",
    why: "Restaura a consciência corporal da pélvis após o treino, que é o fundamento do controle de quadril para além do fitness — esse isolamento é o mesmo movimento base do rebolar e da expressão corporal feminina, sendo tanto recovery quanto treino de mobilidade funcional."
  },
];

// ─── COOLDOWN_UPPER ──────────────────────────────────────────
const COOLDOWN_UPPER = [
  {
    name: "Peitoral na porta",
    desc: "Braço dobrado 90° na porta, girar suavemente. Sentir abertura no peito.",
    time: "1 min cada lado",
    narrative: "Fique na soleira de uma porta e apoie o antebraço direito na parede ou batente com o cotovelo na altura do ombro, formando um ângulo de 90°. Dê um pequeno passo para frente com o pé direito e gire lentamente o tronco para a esquerda até sentir o alongamento no peitoral direito. Respire profundo e aumente o giro um pouco a cada expiração — sem forçar o ombro.",
    why: "O peitoral é o músculo mais encurtado por trabalho no computador e pelo supino — se não for alongado depois do treino, ele 'puxa' o ombro para frente progressivamente, criando a postura curvada que é exatamente o oposto do porte ereto e do peito aberto que você quer desenvolver."
  },
  {
    name: "Torção espinhal sentada",
    desc: "Perna cruzada, torcer o tronco devagar. Olhar por cima do ombro.",
    time: "1 min cada lado",
    narrative: "Sente no chão com as pernas cruzadas (ou com a perna direita dobrada sobre a esquerda). Coloque a mão esquerda no joelho direito e a mão direita atrás de você no chão. Inspire crescendo a coluna e, ao expirar, gire o tronco para a direita olhando por cima do ombro direito. A cada respiração, tente alongar um pouco mais — sinta as vértebras se separando.",
    why: "Descomprime os discos intervertebrais e libera a tensão nos músculos paravertebrais que trabalham isometricamente durante o supino e as remadas — essa rotação é especialmente importante para prevenir dor lombar após treinos de costa e peito."
  },
  {
    name: "Child's Pose",
    desc: "Joelhos abertos, braços à frente, testa no chão. Respirar profundo.",
    time: "2 min",
    narrative: "Sente sobre os calcanhares (ou coloque um travesseiro entre as coxas e os calcanhares se não alcançar), abra os joelhos na largura do tapete e estenda os braços à frente, apoiando a testa no chão. Deixe os ombros pesados, afundando em direção ao chão a cada expiração. Fique completamente passiva e deixe a gravidade fazer o trabalho.",
    why: "Alonga o grande dorsal, o trapézio médio e os músculos intercostais que ficam contraídos durante puxadas e supinos — dois minutos nessa posição reduz significativamente a tensão muscular pós-treino e ativa o sistema nervoso parassimpático, acelerando a recuperação."
  },
  {
    name: "Ondulação de coluna em pé",
    desc: "Da cintura pra cima, ondular como cobra. Começar pela pélvis, passar por lombar, torácica, pescoço. Tensão no pescoço = parar antes.",
    time: "1 min",
    narrative: "Em pé com os joelhos levemente dobrados, comece a ondulação pela pélvis empurrando-a levemente para frente, depois deixe a onda subir pela lombar, pela coluna torácica e por fim pelo pescoço e cabeça. Na descida, desfaça a onda do pescoço de volta à pélvis. O movimento deve ser fluido e lento — como se uma onda passasse pelo seu corpo de baixo para cima.",
    why: "Mobiliza cada segmento da coluna de forma articular e dinâmica após o treino, restaurando a curva natural das costas que fica comprometida pela carga dos exercícios — além de ser exatamente o movimento base da dança e da expressão corporal sensual que você quer desenvolver."
  },
  {
    name: "Rotação de ombros fluida",
    desc: "Círculos amplos com os ombros, devagar, sentir soltar.",
    time: "1 min",
    narrative: "Em pé ou sentada, eleve os ombros em direção às orelhas, depois leve-os para trás abrindo o peito, depois abaixe e por fim traga para frente — descrevendo um círculo completo e amplo. Faça 30 segundos nessa direção e inverta por mais 30 segundos. O ritmo deve ser lento e intencional — sinta cada fase do círculo.",
    why: "Descomprime a articulação acromioclavicular e mobiliza o manguito rotador que trabalhou sob carga durante o treino — fazer isso com lentidão e amplitude máxima pós-treino é o que previne a rigidez matinal no ombro no dia seguinte."
  },
];

// ─── GLUTE_FIX_PROTOCOL ──────────────────────────────────────
const GLUTE_FIX_PROTOCOL = {
  explanation: "Desequilíbrio de glúteo é quase universal em sedentários. O lado dominante assume o trabalho. O esquerdo vai ficando dormido. É um problema de conexão nervo-músculo, não de tamanho.",
  daily_exercises: [
    { name: "Clamshell com caneleira — ESQUERDO", sets: "3x20 lentos", desc: "Deitado de lado, caneleira no joelho. Abrir e fechar como concha. Só o esquerdo neste bloco." },
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
  iniciante: [
    { name: "Pigeon Pose", time: "2 min cada lado", narrative: "De quatro apoios, traga o joelho direito pra frente entre as mãos. A perna de trás fica esticada atrás. Desça o tronco devagar sobre a perna da frente. Respire fundo e relaxe o peso do corpo na posição. Segure 2 minutos. Troque de lado.", why: "Abre profundamente o quadril e alonga o glúteo. Quadril travado = glúteo que não ativa direito. Essa pose desfaz horas sentada." },
    { name: "Happy Baby", time: "2 min", narrative: "Deite de costas. Segure a parte de fora dos pés com as mãos, joelhos dobrados puxados em direção às axilas. Balance suavemente de um lado pro outro. Mantenha a lombar no chão.", why: "Alonga adutores, quadril e lombar ao mesmo tempo. Posição de relaxamento profundo que descomprime a coluna." },
    { name: "Borboleta", time: "2 min", narrative: "Sente no chão, junte as solas dos pés, joelhos caindo pros lados. Segure os pés com as mãos e empurre os joelhos suavemente pra baixo. Mantenha a coluna ereta. Se quiser intensificar, incline o tronco pra frente devagar.", why: "Abre os adutores e o quadril — essencial pra amplitude nos agachamentos e pra flexibilidade do rebolar." },
    { name: "Cat-Cow", time: "2 min", narrative: "De quatro apoios (mãos embaixo dos ombros, joelhos embaixo do quadril). GATO: arredonde as costas pra cima, queixo no peito, contraia o abdômen. VACA: deixe a barriga cair, olhe pra cima, empine o bumbum. Alterne uma respiração completa em cada posição.", why: "Mobiliza toda a coluna vertebra por vertebra. Alivia tensão das costas e ensina o corpo a se mover com fluidez — base pra body wave." },
    { name: "Torção sentada", time: "1 min cada lado", narrative: "Sente com as pernas esticadas. Cruze o pé direito por cima da perna esquerda, joelho apontando pro teto. Gire o tronco pra direita, cotovelo esquerdo do lado de fora do joelho direito. Olhe por cima do ombro direito. Respire e aprofunde a torção a cada expiração.", why: "Alonga oblíquos e mobiliza a coluna torácica. Melhora a rotação do tronco — importante pra postura e pra movimentos de dança." }
  ],
  intermediario: [
    { name: "Lizard Pose", time: "2 min cada lado", narrative: "Do avanço (lunge), coloque as duas mãos do lado de dentro do pé da frente. Desça pros antebraços se conseguir. A perna de trás fica esticada, joelho pode tocar o chão. Sinta o alongamento profundo no hip flexor e na virilha.", why: "Alongamento avançado do hip flexor — vai mais fundo que o alongamento ajoelhado. Libera tensão acumulada de ficar sentada e permite maior amplitude no agachamento." },
    { name: "Malasana (agachamento profundo)", time: "2 min", narrative: "Pés um pouco mais largos que o quadril, dedos levemente pra fora. Desça num agachamento profundo, cotovelos empurrando os joelhos pra fora. Mãos em posição de prece na frente do peito. Mantenha os calcanhares no chão (se não conseguir, coloque algo embaixo).", why: "O agachamento profundo é a posição mais natural do corpo humano. Abre quadril, fortalece tornozelos e prepara pra agachamentos pesados com amplitude total." },
    { name: "Frog Pose", time: "2 min", narrative: "De quatro apoios, abra os joelhos o máximo que conseguir, pés pra fora. Desça os quadris em direção ao chão mantendo os joelhos abertos. Apoie nos antebraços. Não force — deixe a gravidade fazer o trabalho. Respire.", why: "O alongamento mais intenso pra adutores (interno da coxa). Melhora amplitude pra sumo squat e cria espaço no quadril pra movimentos de rebolar." },
    { name: "Forward Fold sentado", time: "2 min", narrative: "Sente com as pernas juntas e esticadas à frente. Incline o tronco pra frente tentando alcançar os pés. Mantenha as costas o mais retas possível — não arredonde. Se não alcançar os pés, segure nos tornozelos ou canelas.", why: "Alonga toda a cadeia posterior (costas, glúteo, posterior de coxa). Flexibilidade do posterior é essencial pra stiff e RDL com amplitude completa." },
    { name: "Low Lunge com abertura", time: "2 min cada lado", narrative: "Em posição de avanço, joelho de trás no chão. Levante o braço do mesmo lado do joelho de trás e incline o tronco pro lado oposto. Sinta o alongamento subindo pelo hip flexor até o oblíquo. Abra o peito pro teto.", why: "Combina alongamento de hip flexor com abertura lateral — esculpe a cintura enquanto libera o quadril. Dois benefícios num movimento." }
  ],
  avancado: [
    { name: "Dragon Pose", time: "3 min cada lado", narrative: "Do avanço profundo, pé da frente bem à frente (joelho ultrapassa o tornozelo). Perna de trás esticada, parte de cima do pé no chão. Mãos no chão dos dois lados do pé. Afunde o quadril em direção ao chão. Se conseguir, apoie nos antebraços. Fique e respire — 3 minutos longos.", why: "O alongamento de hip flexor mais profundo que existe. Desfaz anos de sentar. Quando esse movimento ficar confortável, seus glúteos vão ativar como nunca antes." },
    { name: "Splits progressivos", time: "trabalhar devagar", narrative: "De joelhos, estenda a perna da frente à frente e deslize a perna de trás pra trás. Use blocos ou livros embaixo das mãos pra apoio. Desça só até onde for confortável — NUNCA force. A cada sessão tente ir 1cm mais fundo. Segure 1-2 minutos na posição mais profunda que conseguir.", why: "O splits é o ápice da flexibilidade de quadril. O caminho até lá é mais importante que chegar — cada centímetro de progresso melhora todos os outros movimentos." },
    { name: "Standing Split", time: "1 min cada lado", narrative: "De pé, incline o tronco pra frente apoiando as mãos no chão (ou em blocos). Levante uma perna esticada pra trás o máximo que conseguir, mantendo os quadris nivelados (não abra o quadril). A perna de apoio pode ter um leve dobra no joelho.", why: "Trabalha equilíbrio + flexibilidade simultaneamente. Fortalece a perna de apoio enquanto alonga o posterior da perna levantada." },
    { name: "Pancake Stretch", time: "3 min", narrative: "Sente com as pernas abertas em V o máximo que conseguir. Mantenha as costas retas e incline o tronco pra frente, tentando descer o peito em direção ao chão. Mãos à frente deslizando no chão. Não arredonde as costas. Respire e afunde a cada expiração.", why: "O pancake é o teste definitivo de flexibilidade dos adutores e posterior. Dominar essa posição significa amplitude total em QUALQUER exercício de perna e total controle de quadril pro rebolar." }
  ]
};

// ─── REBOLAR_STEPS ───────────────────────────────────────────
const REBOLAR_STEPS = [
  { fase: "Semanas 1-2 · Isolamento Base", steps: ["Pé paralelo, mãos na cintura — mover SÓ o quadril frente/trás sem mover o tronco. 3x30 reps.","Quadril esquerda/direita isolado: 3x30 reps.","Círculos lentos: 3x20 em cada sentido.","Objetivo real: o tronco não mexe. Só o quadril."] },
  { fase: "Semanas 3-4 · Ritmo", steps: ["Mesmos movimentos com música — funk, pagode, baile funk.","Adicionar leve balanço nos joelhos enquanto move o quadril.","Figura de 8 / infinito com o quadril: 3x20.","Praticar frente ao espelho — feedback visual acelera muito."] },
  { fase: "Mês 2+ · Expressão", steps: ["Adicionar movimento dos braços e expressão corporal.","YouTube: 'aprenda a rebolar do zero' — boas aulas gratuitas.","Bachata para iniciantes no YouTube — ensina isolamento naturalmente.","Gravar e comparar com semanas anteriores."] },
  { fase: "Mês 6+ · Livre", steps: [
    "Agora você tem controle e ritmo. Bota a música e deixa o corpo guiar.",
    "Misture tudo: círculos, figura 8, ondulação, body wave, braços.",
    "Grave e compare com os primeiros vídeos — a evolução vai te impressionar.",
    "Dance sem espelho — sinta ao invés de ver. Confiança vem de dentro."
  ]},
];

const YOGA_PHASE_MAP = {
  1: "iniciante",
  2: "intermediario",
  3: "avancado",
  4: "avancado"
};

const REBOLAR_PHASE_MAP = {
  1: 0,
  2: 1,
  3: 2,
  4: 3
};

const SENSUAL_BONUS = {
  1: {
    title: "Movimento Sensual — Básico",
    duration: "10min",
    intro: "Coloque uma música que te faça sentir poderosa. Esses exercícios constroem controle de quadril e consciência corporal. Sem julgamento — é só você e a música.",
    steps: [
      { name: "Círculos de quadril", description: "De pé, mãos na cintura, pés na largura do quadril. Faça círculos amplos e lentos com o quadril — como se estivesse desenhando um círculo grande no chão. 10 pra cada lado.", duration: "2min", why: "Ensina o quadril a se mover independente do tronco. Base de todo movimento sensual." },
      { name: "Ondulação frente/trás", description: "Mesma posição. Empurre o quadril pra frente (contraia o glúteo) e depois pra trás (empine). Devagar, sentindo cada posição. 20 repetições.", duration: "2min", why: "Isola o movimento pélvico. Melhora conexão mente-corpo na região do quadril." },
      { name: "Ondulação lateral", description: "Agora mova o quadril pro lado direito e depois pro esquerdo. Joelhos levemente flexionados. O tronco fica parado. 20 repetições.", duration: "2min", why: "Completa os 4 eixos de movimento do quadril. Prepara pra movimentos mais complexos." },
      { name: "Movimento livre", description: "Bota a música no volume e mexe como sentir vontade. Não tem certo ou errado. Misture os movimentos que aprendeu. Se olhe no espelho se tiver.", duration: "4min", why: "Aqui você sai do modo 'exercício' pro modo 'expressão'. A confiança corporal se constrói fazendo, não pensando." }
    ]
  },
  2: {
    title: "Movimento Sensual — Com Ritmo",
    duration: "12min",
    intro: "Você já sabe isolar o quadril. Agora vamos adicionar ritmo e novos movimentos. Coloque funk, pagode, reggaeton — o que te fizer mexer.",
    steps: [
      { name: "Body wave", description: "De pé, comece pelo peito empurrando pra frente, depois deixe a 'onda' descer pelo abdômen e quadril. Como uma onda do mar passando pelo corpo. Devagar primeiro, depois no ritmo da música. 10 repetições.", duration: "3min", why: "O body wave é o movimento mais sensual que existe. Trabalha fluidez corporal e consciência de cada segmento do corpo." },
      { name: "Figura de 8 com quadril", description: "Imagine um 8 deitado (infinito) no chão. Desenhe esse 8 com o quadril. Pra frente-direita, pra trás-esquerda, e volta. Mantenha o tronco parado. 10 pra cada direção.", duration: "3min", why: "A figura de 8 é a base do rebolar. Quando esse movimento ficar natural, todo o resto fica fácil." },
      { name: "Rebolar com música", description: "Junte tudo: círculos, ondulação, body wave, figura 8. Deixe a música guiar. Foque em mover o quadril no ritmo. Não precisa ser rápido — sensual é devagar e controlado.", duration: "4min", why: "Treina ritmo e expressão. O segredo não é velocidade, é controle e intenção em cada movimento." },
      { name: "Passada sensual", description: "Caminhe devagar pelo quarto com postura ereta, quadril balançando naturalmente a cada passo. Ombros pra trás, queixo levemente erguido. Imagina que está numa passarela.", duration: "2min", why: "A forma como você anda comunica confiança. Treinar a passada muda a postura no dia a dia." }
    ]
  },
  3: {
    title: "Movimento Sensual — Coreografia",
    duration: "15min",
    intro: "Você já tem controle e ritmo. Agora vamos combinar movimentos em sequências e adicionar braços e expressão corporal. A meta é se sentir poderosa.",
    steps: [
      { name: "Sequência: wave + rebolar + pose", description: "Faça um body wave completo, emende com 4 círculos de quadril, termine numa pose com as mãos no cabelo ou na cintura. Segure a pose 3 segundos. Repita 5 vezes variando as poses.", duration: "4min", why: "Combinar movimentos cria fluidez. As poses constroem confiança — você aprende a 'parar' em posições que te valorizam." },
      { name: "Movimentos de braços", description: "Enquanto o quadril se move, adicione: mãos subindo pelo corpo, dedos passando pelo cabelo, braços abrindo pro lado. O braço acompanha o quadril — quando o quadril vai pra direita, o braço oposto sobe.", duration: "3min", why: "Braços transformam um exercício em dança. Sem braços, parece treino. Com braços, parece arte." },
      { name: "Dança no chão (floorwork)", description: "De joelhos, ondule o tronco pra frente e pra trás. Sente nos calcanhares e volte. Se sentir segura, deite de costas e faça ondulação deitada. Tudo devagar.", duration: "4min", why: "Floorwork trabalha músculos que não são ativados de pé. Também desenvolve sensualidade e confiança com o chão." },
      { name: "Freestyle completo", description: "Música favorita, quarto fechado, você e o espelho. Misture TUDO: wave, rebolar, chão, braços, passada. Grave se quiser comparar depois.", duration: "4min", why: "Esse é o momento de ser você. Sem regras, sem coreografia. Confiança se constrói repetindo até se sentir natural." }
    ]
  },
  4: {
    title: "Movimento Sensual — Expressão Livre",
    duration: "15min",
    intro: "Você já sabe se mover. Agora é sobre expressão pessoal e sensualidade natural. Não existe mais 'exercício' — existe você dançando.",
    steps: [
      { name: "Aquecimento sensual", description: "Coloque uma música lenta. Feche os olhos. Mova o corpo como ele quiser. Sem pensar em técnica — sinta a música no corpo. 3 minutos de olhos fechados.", duration: "3min", why: "Desconectar a visão conecta você com as sensações. Sensualidade real vem de sentir, não de parecer." },
      { name: "Sua coreografia", description: "Escolha uma música que você ama. Crie sua própria sequência de movimentos. Use tudo que aprendeu. Repita até decorar. Essa é SUA dança.", duration: "5min", why: "Criar sua própria coreografia é o nível máximo de confiança corporal. Ninguém dança como você." },
      { name: "Performance", description: "Faça sua coreografia como se estivesse se apresentando. Com expressão facial, com intenção, com atitude. Grave se quiser. Dance pra sua namorada se sentir confiante.", duration: "4min", why: "A diferença entre mover o corpo e dançar é a intenção. Aqui você pratica a intenção." },
      { name: "Cool down sensual", description: "Música lenta de novo. Movimentos suaves, alongamento com ondulação. Agradeça seu corpo por tudo que ele faz por você.", duration: "3min", why: "Fechar com gratidão pelo corpo muda a relação com ele. Você não treina PRA mudar — treina PORQUE se ama." }
    ]
  }
};

const FLEXIBILITY_MILESTONES = [
  { id: "pombo-sem-dor", label: "Pombo sem dor (ambos os lados)", fase: 1 },
  { id: "agachamento-profundo", label: "Agachamento profundo com calcanhar no chão", fase: 1 },
  { id: "borboleta-joelhos-chao", label: "Borboleta com joelhos perto do chão", fase: 2 },
  { id: "splits-50", label: "Splits 50% do caminho", fase: 2 },
  { id: "frog-pose-confortavel", label: "Frog Pose confortável por 2min", fase: 2 },
  { id: "splits-75", label: "Splits 75% do caminho", fase: 3 },
  { id: "pancake-peito-chao", label: "Pancake com peito próximo ao chão", fase: 3 },
  { id: "splits-completo", label: "Splits completo!", fase: 4 }
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
    { item: "DIM 100mg (extrato de brócolis)", qty: "1 pote (mensal)", checked: false },
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
      { item: "Multivitamínico", qty: "1 pote", category: "suplemento" },
      { item: "Colágeno hidrolisado", qty: "1 pote", category: "suplemento" },
      { item: "Melatonina", qty: "1 pote", category: "suplemento" },
      { item: "Biotina 5000mcg (cabelo)", qty: "1 pote", category: "suplemento" },
      { item: "DIM 100mg (extrato de brócolis)", qty: "1 pote", category: "suplemento" },
      { item: "Magnésio bisglicerinato 300mg", qty: "1 pote", category: "suplemento" },
      { item: "Zinco quelado 30mg", qty: "1 pote", category: "suplemento" },
      { item: "Ashwagandha 300mg", qty: "1 pote", category: "suplemento" },
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
      { item: "Hortelã-verde fresca (spearmint)", qty: "1 maço", category: "geladeira" },
    ]
  },
  skincare: {
    label: "Skincare — repor quando acabar",
    items: [
      { item: "Sabonete facial (Cerave ou Cetaphil)", qty: "1", category: "rosto" },
      { item: "Vitamina C sérum", qty: "1", category: "rosto" },
      { item: "Hidratante facial (Cerave ou Neutrogena)", qty: "1", category: "rosto" },
      { item: "Protetor solar FPS 50+ (sem white cast)", qty: "1", category: "rosto" },
      { item: "Água micelar", qty: "1", category: "rosto" },
      { item: "Niacinamida sérum", qty: "1", category: "rosto" },
      { item: "Retinol sérum", qty: "1", category: "rosto" },
      { item: "Sabonete ácido salicílico (corpo)", qty: "1", category: "corpo" },
      { item: "Hidratante com ureia (corpo)", qty: "1", category: "corpo" },
      { item: "Niacinamida corpo (axilas/íntima)", qty: "1", category: "corpo" },
    ]
  },
  cabelo: {
    label: "Cabelo — repor quando acabar",
    items: [
      { item: "Shampoo Juba (Widi Care)", qty: "1", category: "lavagem" },
      { item: "Condicionador Juba (Widi Care)", qty: "1", category: "lavagem" },
      { item: "Máscara Hidro-nutritiva Juba (ou Salon Line SOS Cachos)", qty: "1", category: "tratamento" },
      { item: "Creme de pentear Juba (Widi Care)", qty: "1", category: "finalização" },
      { item: "Gelatina Super Definição Juba (Widi Care)", qty: "1", category: "finalização" },
      { item: "Pente de dentes largos (plástico simples)", qty: "1", category: "acessórios" },
      { item: "Touca de cetim pra dormir", qty: "1", category: "acessórios" },
      { item: "Borrifador de água (spray)", qty: "1", category: "acessórios" },
    ]
  },
  depilacao: {
    label: "Depilação — itens de apoio",
    items: [
      { item: "Refil de cabeça do epilador (se precisar)", qty: "1", category: "equipamento" },
      { item: "Loção pós-depilação ou aloe vera", qty: "1", category: "pos-depilacao" },
      { item: "Esfoliante corporal suave", qty: "1", category: "pos-depilacao" },
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
  danca: {
    label: "Mini-treino de dança (2-3min)",
    icon: "💃",
    moves: [
      { name: "Arch & Tuck (base do twerk)", how: "Em pé, mãos na cintura ou na parede. Empinar o quadril (arch) e recolher (tuck). 20x devagar, sentir o glúteo contrair no arch.", result: "Ativação de glúteo + aprende o movimento base do twerk.", alert: "Se a lombar doer, diminuir a amplitude. O movimento é no quadril, não na lombar." },
      { name: "Wine de quadril (dancehall)", how: "Pés afastados, joelhos levemente dobrados. Fazer círculos contínuos com o quadril no ritmo de uma música. 1min sem parar.", result: "Fluidez de quadril. Depois de 2 semanas fazendo todo dia, o movimento fica automático.", alert: "Tronco fica parado. Se tiver mexendo os ombros junto, o círculo tá grande demais." },
      { name: "Body wave (bachata sensual)", how: "Em pé, iniciar a onda no peito (empurrar pra frente), passar pela barriga, quadril, e voltar. Como uma onda passando pelo corpo. 10x devagar.", result: "Flexibilidade de coluna + movimento mais sensual que existe. Se aplica na cama também.", alert: "Se travar no meio, dividir: fazer só peito→barriga, depois só barriga→quadril. Juntar depois." },
      { name: "Passada cruzada (lady style)", how: "Andar cruzando levemente um pé na frente do outro, como passarela. Quadril balança naturalmente. 10 passos ida, 10 volta.", result: "Gingado feminino ao andar. Depois de praticar, aparece sem pensar.", alert: null },
      { name: "Tick de quadril (reggaeton)", how: "Em pé, bater o quadril pro lado no ritmo — esquerda, direita, esquerda, direita. Seco e rápido. 30 ticks.", result: "Coordenação de quadril no ritmo. Base de reggaeton e funk.", alert: "Se os joelhos reclamarem, diminuir a velocidade. O movimento vem do quadril, joelhos só acompanham." },
      { name: "Mãos e cabelo (expressão)", how: "Passar a mão no cabelo/nuca com fluidez. Deslizar a mão da cintura até a coxa. Praticar na frente do espelho até parecer natural.", result: "Expressão corporal feminina. O tipo de gesto que vira natural e aparece em tudo.", alert: null },
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
