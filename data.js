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

// ─── 3b. WEIGHT_GUIDE — Pesos sugeridos por fase ────────────
const WEIGHT_GUIDE = {
  "glute-bridge": {
    fase1: { suggestedKg: "Sem peso ou 5-8kg", progression: "Quando segurar 3seg no topo ficar fácil" },
    fase2: { suggestedKg: "8-12kg", progression: "Quando 15 reps ficarem fáceis" },
    fase3: { suggestedKg: "12-20kg", progression: "Quando completar todas as séries sem dificuldade" },
    fase4: { suggestedKg: "20-30kg", progression: "Aumente 2kg quando completar todas as séries com forma perfeita" }
  },
  "sumo-squat": {
    fase1: { suggestedKg: "8-10kg", progression: "Quando 12 reps ficarem fáceis com forma perfeita" },
    fase2: { suggestedKg: "10-14kg", progression: "Quando completar 4x12 sem dificuldade" },
    fase3: { suggestedKg: "14-20kg", progression: "Quando manter forma perfeita em todas as séries" },
    fase4: { suggestedKg: "20-26kg", progression: "Aumente 2kg quando completar todas as séries controlado" }
  },
  "leg-press": {
    fase1: { suggestedKg: "30-50kg", progression: "Quando 12 reps ficarem fáceis" },
    fase2: { suggestedKg: "50-70kg", progression: "Quando completar 4x12 controlado" },
    fase3: { suggestedKg: "70-100kg", progression: "Quando manter amplitude completa em todas as séries" },
    fase4: { suggestedKg: "100-130kg", progression: "Aumente 10kg quando completar todas as séries com controle" }
  },
  "abdutora": {
    fase1: { suggestedKg: "15-25kg", progression: "Quando segurar 1seg aberto ficar fácil" },
    fase2: { suggestedKg: "25-35kg", progression: "Quando 15 reps ficarem fáceis" },
    fase3: { suggestedKg: "35-45kg", progression: "Quando completar todas as séries controlado" },
    fase4: { suggestedKg: "45-60kg", progression: "Aumente 5kg quando completar todas as séries" }
  },
  "adutora": {
    fase1: { suggestedKg: "15-25kg", progression: "Quando 15 reps ficarem fáceis" },
    fase2: { suggestedKg: "25-35kg", progression: "Quando completar 4x15 controlado" },
    fase3: { suggestedKg: "35-45kg", progression: "Quando manter controle na volta em todas as séries" },
    fase4: { suggestedKg: "45-60kg", progression: "Aumente 5kg quando completar todas as séries" }
  },
  "pullover": {
    fase1: { suggestedKg: "6-8kg", progression: "Quando 12 reps ficarem fáceis sem dor" },
    fase2: { suggestedKg: "8-10kg", progression: "Quando completar 3x12 com amplitude completa" },
    fase3: { suggestedKg: "10-14kg", progression: "Quando manter controle total do movimento" },
    fase4: { suggestedKg: "14-18kg", progression: "Aumente 2kg quando completar todas as séries com forma perfeita" }
  },
  "vacuum": {
    fase1: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 20seg → 30seg quando ficar fácil" },
    fase2: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 30seg → 40seg" },
    fase3: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 40seg → 50seg" },
    fase4: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 50seg → 60seg" }
  },
  "abducao-deitada": {
    fase1: { suggestedKg: "Sem caneleira ou 1kg", progression: "Quando 15 reps ficarem fáceis sem compensar" },
    fase2: { suggestedKg: "2-3kg (caneleira)", progression: "Quando completar 3x15 com controle" },
    fase3: { suggestedKg: "3-4kg (caneleira)", progression: "Quando manter quadril estável em todas as reps" },
    fase4: { suggestedKg: "4-5kg (caneleira)", progression: "Quando completar todas as séries sem compensação" }
  },
  "abducao-pe": {
    fase1: { suggestedKg: "Sem caneleira ou 1kg", progression: "Quando 15 reps ficarem fáceis sem inclinar" },
    fase2: { suggestedKg: "2-3kg (caneleira)", progression: "Quando completar 3x15 com tronco reto" },
    fase3: { suggestedKg: "3-4kg (caneleira)", progression: "Quando manter equilíbrio perfeito" },
    fase4: { suggestedKg: "4-5kg (caneleira)", progression: "Quando completar todas as séries com controle total" }
  },
  "fire-hydrant": {
    fase1: { suggestedKg: "Sem caneleira", progression: "Quando 15 reps ficarem fáceis com controle" },
    fase2: { suggestedKg: "1-2kg (caneleira)", progression: "Quando completar 3x15 sem girar o tronco" },
    fase3: { suggestedKg: "2-3kg (caneleira)", progression: "Quando manter core estável em todas as reps" },
    fase4: { suggestedKg: "3-4kg (caneleira)", progression: "Quando completar todas as séries com forma perfeita" }
  },
  "stiff": {
    fase1: { suggestedKg: "6-8kg (cada halter)", progression: "Quando 12 reps ficarem fáceis sentindo posterior" },
    fase2: { suggestedKg: "8-12kg (cada halter)", progression: "Quando completar 4x12 com controle" },
    fase3: { suggestedKg: "12-16kg (cada halter)", progression: "Quando manter costas retas em toda amplitude" },
    fase4: { suggestedKg: "16-20kg (cada halter)", progression: "Aumente 2kg quando completar todas as séries" }
  },
  "hip-thrust": {
    fase2: { suggestedKg: "20-30kg", progression: "Quando 12 reps ficarem fáceis com squeeze no topo" },
    fase3: { suggestedKg: "30-50kg", progression: "Quando completar 4x12 controlado" },
    fase4: { suggestedKg: "50-70kg", progression: "Aumente 5kg quando completar todas as séries com forma perfeita" }
  },
  "bulgarian-split-squat": {
    fase2: { suggestedKg: "6-8kg (cada halter)", progression: "Quando 10 reps ficarem fáceis com equilíbrio" },
    fase3: { suggestedKg: "8-12kg (cada halter)", progression: "Quando completar 4x10 com controle" },
    fase4: { suggestedKg: "12-16kg (cada halter)", progression: "Aumente 2kg quando completar todas as séries" }
  },
  "step-up": {
    fase2: { suggestedKg: "6-8kg (cada halter)", progression: "Quando 12 reps ficarem fáceis empurrando pelo calcanhar" },
    fase3: { suggestedKg: "8-12kg (cada halter)", progression: "Quando completar 3x12 sem usar pé de baixo" },
    fase4: { suggestedKg: "12-16kg (cada halter)", progression: "Aumente 2kg quando completar todas as séries" }
  },
  "good-morning": {
    fase3: { suggestedKg: "10-15kg (barra)", progression: "Quando 12 reps ficarem fáceis com costas retas" },
    fase4: { suggestedKg: "15-25kg (barra)", progression: "Aumente 2.5kg quando completar todas as séries" }
  },
  "kickback-polia": {
    fase3: { suggestedKg: "10-15kg", progression: "Quando 12 reps ficarem fáceis sem arquear lombar" },
    fase4: { suggestedKg: "15-25kg", progression: "Aumente 2.5kg quando completar todas as séries com controle" }
  },
  "elevacao-pelvica": {
    fase3: { suggestedKg: "Sem peso ou 5-10kg", progression: "Quando 15 reps ficarem fáceis" },
    fase4: { suggestedKg: "10-20kg", progression: "Aumente 2kg quando completar todas as séries" }
  },
  "dead-bug": {
    fase3: { suggestedKg: "Sem peso", progression: "Aumente reps: 10 → 12 → 15 quando ficar fácil" },
    fase4: { suggestedKg: "Sem peso", progression: "Aumente reps ou adicione caneleira leve (1-2kg)" }
  },
  "cable-pull-through": {
    fase4: { suggestedKg: "15-25kg", progression: "Aumente 2.5kg quando completar todas as séries com forma perfeita" }
  },
  "glute-ham-raise": {
    fase4: { suggestedKg: "Sem peso", progression: "Quando controlar a descida completa, adicione peso no peito (5kg)" }
  },
  "prancha": {
    fase1: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 20seg → 30seg → 45seg" },
    fase2: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 30seg → 45seg → 60seg" },
    fase3: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 45seg → 60seg" },
    fase4: { suggestedKg: "Sem peso", progression: "Mantenha 60seg com forma perfeita" }
  },
  "prancha-lateral": {
    fase2: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 20seg → 30seg cada lado" },
    fase3: { suggestedKg: "Sem peso", progression: "Aumente o tempo: 30seg → 45seg cada lado" },
    fase4: { suggestedKg: "Sem peso", progression: "Mantenha 45seg+ com quadril alto" }
  },
  "cardio-esteira": {
    fase1: { suggestedKg: "Sem peso", progression: "Aumente inclinação: 8% → 10% → 12%" },
    fase2: { suggestedKg: "Sem peso", progression: "Aumente duração: 15min → 20min → 25min" },
    fase3: { suggestedKg: "Sem peso", progression: "Aumente velocidade: 5 → 5.5 → 6km/h" },
    fase4: { suggestedKg: "Sem peso", progression: "Mantenha 25-30min a 6km/h inclinação 12%" }
  },
  "kegel": {
    fase1: { suggestedKg: "Sem peso", progression: "Aumente contrações: 5seg → 8seg → 10seg" },
    fase2: { suggestedKg: "Sem peso", progression: "Aumente séries e duração das contrações" },
    fase3: { suggestedKg: "Sem peso", progression: "Aumente séries e duração das contrações" },
    fase4: { suggestedKg: "Sem peso", progression: "Mantenha 3x15 contrações de 10seg" }
  }
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

// ─── 5. WORKOUTS ─────────────────────────────────────────────
const WORKOUTS = {

  // ═══════════════════════════════════════════════════════════
  // FASE 1 — FUNDAÇÃO (Semanas 1-6)
  // ═══════════════════════════════════════════════════════════
  fase1: {
    name: "Fase 1 — Fundação",
    weeks: "Semanas 1-6",
    objective: "Aprender movimentos, ativar glúteo, corrigir postura, criar hábito",
    days: {

      segunda: {
        name: "Glúteo Máximo + Peito",
        exercises: [
          {
            id: "f1-seg-1",
            name: "Glute Bridge (segurar 2-3seg no topo)",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Empurre o quadril pro TETO. Aperte forte no topo",
            details: "Deite de costas, joelhos dobrados, pés no chão na largura do quadril. Empurre o quadril pra cima contraindo o glúteo. Segure 2-3 segundos no topo apertando forte. Desça devagar. Não hiperextenda a lombar.",
            videoKey: "glute-bridge",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-seg-2",
            name: "Sumo Squat com halter",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Pés bem abertos, dedos pra fora, desça devagar",
            details: "Pés mais largos que os ombros, dedos apontando pra fora (45 graus). Segure o halter com as duas mãos entre as pernas. Desça controlado até as coxas ficarem paralelas ao chão. Suba empurrando pelo calcanhar, apertando o glúteo no topo.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-seg-3",
            name: "Leg Press (pés altos e largos)",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Pés no TOPO da plataforma = mais glúteo",
            details: "Posicione os pés na parte ALTA da plataforma, largura do quadril ou mais. Isso ativa mais glúteo e posterior. Desça controlado até os joelhos formarem 90 graus. Empurre pela plataforma inteira do pé, focando no calcanhar.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-seg-4",
            name: "Abdutora",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Segure 1seg na abertura máxima",
            details: "Sente na máquina abdutora com as costas bem apoiadas. Abra as pernas empurrando contra as almofadas. Segure 1 segundo na abertura máxima, apertando o glúteo. Volte devagar resistindo ao peso.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-seg-5",
            name: "Pullover com halter",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Abre a caixa torácica, silhueta ampulheta",
            details: "Deite no banco com apenas a parte superior das costas apoiada. Segure o halter com as duas mãos acima do peito, braços quase estendidos. Leve o halter pra trás da cabeça devagar, sentindo o peitoral e costas abrirem. Volte à posição inicial.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-seg-6",
            name: "Vacuum",
            sets: 5, reps: "20-30seg", rest: "30seg",
            tip: "Solte TODO o ar, puxe umbigo pra dentro e pra cima",
            details: "Em pé ou de quatro apoios. Expire TODO o ar dos pulmões. Sem inspirar, puxe o umbigo pra dentro e pra cima como se quisesse encostar na coluna. Segure 20-30 segundos. Respire e repita.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      terca: {
        name: "Glúteo Médio + Cardio",
        exercises: [
          {
            id: "f1-ter-1",
            name: "Abdução lateral deitada com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "SEMPRE comece pelo lado ESQUERDO",
            details: "Deite de lado, caneleira no tornozelo. Pernas estendidas e alinhadas. Levante a perna de cima até ~45 graus, controlando a subida e descida. Foque na contração do glúteo médio. SEMPRE comece pelo lado esquerdo.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-ter-2",
            name: "Abdução em pé com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Tronco reto, não incline",
            details: "Em pé com caneleira no tornozelo. Mantenha o tronco reto e o core ativado. Leve uma perna pro lado, controlando o movimento. Não incline o tronco pro lado oposto. Comece pelo lado esquerdo.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-ter-3",
            name: "Fire Hydrant com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "De quatro apoios, levante o joelho pro lado. Core ativado!",
            details: "De quatro apoios (mãos sob ombros, joelhos sob quadril), caneleira no tornozelo. Levante o joelho pro lado mantendo 90 graus, como um cachorro no hidrante. Suba até a altura do quadril e desça devagar. Não gire o tronco. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-ter-4",
            name: "Abdutora (máquina)",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Segure 1seg aberto",
            details: "Na máquina abdutora. Abra as pernas empurrando contra as almofadas. Segure 1 segundo na abertura máxima. Volte devagar. Costas apoiadas no encosto.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-ter-5",
            name: "Adutora (máquina)",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Interno de coxa = feminiza silhueta",
            details: "Na máquina adutora. Feche as pernas apertando contra as almofadas. Foco no interno da coxa. Volte devagar resistindo. Este exercício feminiza a silhueta das coxas.",
            videoKey: "adutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-ter-6",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "20min", rest: "-",
            tip: "Inclinação 8-12%, velocidade 5-6km/h. Ativa glúteo!",
            details: "Coloque a esteira em inclinação de 8-12% e velocidade de 5-6km/h. Caminhe sem segurar nas barras laterais. Essa inclinação ativa muito mais o glúteo do que caminhar no plano. Mantenha postura ereta.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quarta: {
        name: "Posterior + Glúteo + Cardio",
        exercises: [
          {
            id: "f1-qua-1",
            name: "Stiff com halteres",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Empurre o quadril PRA TRÁS, sinta atrás da coxa",
            details: "Em pé segurando halteres. Empurre o quadril pra trás enquanto inclina o tronco pra frente. Mantenha as costas retas e joelhos levemente dobrados. Desça até sentir o alongamento atrás da coxa. Suba apertando o glúteo.",
            videoKey: "stiff",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qua-2",
            name: "Glute Bridge com halter",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Halter apoiado no quadril, empurre pro teto",
            details: "Mesmo movimento do glute bridge mas com halter apoiado no quadril. Segure o halter com as mãos pra não escorregar. Empurre o quadril pro teto, aperte forte o glúteo no topo. Desça controlado.",
            videoKey: "glute-bridge",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qua-3",
            name: "Leg Press (pés altos)",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Desça controlado (3seg descendo)",
            details: "Pés na parte alta da plataforma. Foque na fase excêntrica: conte 3 segundos descendo. Isso aumenta o tempo sob tensão e ativa mais fibras musculares. Suba com força.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qua-4",
            name: "Sumo Squat",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Foco no glúteo ao subir",
            details: "Pés bem abertos, dedos pra fora. Desça controlado. Ao subir, foque em apertar o glúteo no topo do movimento. Mantenha o peito aberto e coluna neutra.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qua-5",
            name: "Vacuum",
            sets: 5, reps: "20-30seg", rest: "30seg",
            tip: "Pode fazer em pé ou de 4 apoios",
            details: "Expire todo o ar e puxe o umbigo pra dentro e pra cima. A posição de 4 apoios (de gatinho) facilita pra iniciantes por causa da gravidade. Em pé é mais desafiador.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qua-6",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "15min", rest: "-",
            tip: "Inclinação 8-12%, velocidade 5-6km/h",
            details: "Esteira inclinada com 8-12% de inclinação, velocidade 5-6km/h. Caminhada ativando glúteo. Não segure nas barras. Postura ereta.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quinta: {
        name: "Glúteo Médio + Core",
        exercises: [
          {
            id: "f1-qui-1",
            name: "Abdução lateral deitada com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Lado ESQUERDO primeiro",
            details: "Deite de lado, caneleira no tornozelo. Levante a perna de cima controlando o movimento. Foque na contração do glúteo médio. Sempre comece pelo lado esquerdo.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-qui-2",
            name: "Abdução em pé com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Movimento controlado",
            details: "Em pé, caneleira no tornozelo. Leve a perna pro lado com controle total. Sem balançar o tronco. Comece pelo esquerdo.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-qui-3",
            name: "Fire Hydrant com caneleira",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Core ativado, não gire o tronco",
            details: "De quatro apoios, caneleira no tornozelo. Levante o joelho pro lado mantendo 90 graus. Suba até a altura do quadril. Controle a descida. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f1-qui-4",
            name: "Abdutora (máquina)",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Aumente peso quando ficar fácil",
            details: "Na máquina abdutora. Se conseguir fazer 15 reps fácil, aumente o peso na próxima vez. Progressão de carga é fundamental pra resultados.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qui-5",
            name: "Prancha (pode ser de joelhos)",
            sets: 3, reps: "20-30seg", rest: "30seg",
            tip: "Aperte abdômen e glúteo, corpo RETO",
            details: "Antebraços no chão, corpo reto da cabeça aos pés (ou joelhos se iniciante). Aperte o abdômen e o glúteo. Não deixe o quadril cair ou subir. Respire normalmente.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-qui-6",
            name: "Vacuum",
            sets: 5, reps: "20-30seg", rest: "30seg",
            tip: "Concentre-se em puxar umbigo pra coluna",
            details: "Expire todo o ar, puxe o umbigo em direção à coluna. Mantenha segurando sem respirar. Quando precisar, respire e repita. Concentre-se na conexão mente-músculo.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sexta: {
        name: "Glúteo FOCO + Peito",
        exercises: [
          {
            id: "f1-sex-1",
            name: "Glute Bridge (segurar 3seg)",
            sets: 4, reps: "15", rest: "45seg",
            tip: "4 séries! Dia de foco = volume maior",
            details: "Dia de foco no glúteo = mais volume. 4 séries em vez de 3. Segure 3 segundos no topo de cada repetição apertando o glúteo ao máximo. Desça devagar.",
            videoKey: "glute-bridge",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sex-2",
            name: "Sumo Squat com halter",
            sets: 3, reps: "15", rest: "60seg",
            tip: "Mais reps que segunda = mais queima",
            details: "Mesmo movimento de segunda mas com 15 reps em vez de 12. Mais repetições = mais tempo sob tensão = mais estímulo pro glúteo. Mantenha a forma mesmo cansada.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sex-3",
            name: "Leg Press (pés altos e largos)",
            sets: 3, reps: "15", rest: "60seg",
            tip: "Mais reps, foco na contração do glúteo",
            details: "15 reps com pés altos e largos na plataforma. Foque em sentir o glúteo trabalhando em cada repetição. Se não sentir o glúteo, diminua o peso.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sex-4",
            name: "Abdutora",
            sets: 3, reps: "20", rest: "45seg",
            tip: "Mais reps, segure 1seg",
            details: "20 repetições com pausa de 1 segundo na abertura máxima. Volume alto pra finalizar o glúteo. Se precisar, diminua o peso pra conseguir as 20 reps com boa forma.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sex-5",
            name: "Pullover com halter",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Silhueta ampulheta",
            details: "Pullover pra abrir a caixa torácica. Isso contribui pra silhueta de ampulheta: ombros/peito mais largos + cintura fina (vacuum) = proporção feminina.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sex-6",
            name: "Vacuum",
            sets: 5, reps: "20-30seg", rest: "30seg",
            tip: "Dia forte de vacuum",
            details: "Sexta é dia forte de vacuum. Tente manter por mais tempo se conseguir. Pode fazer em pé, sentada ou de 4 apoios. Foque na qualidade da contração.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sabado: {
        name: "Cardio + Recuperação",
        exercises: [
          {
            id: "f1-sab-1",
            name: "Esteira inclinada",
            sets: 1, reps: "30-40min", rest: "-",
            tip: "Inclinação 8-12%, velocidade 5-6km/h",
            details: "Caminhada longa na esteira inclinada. Inclinação de 8-12%, velocidade 5-6km/h. Não segure nas barras. Ótimo pra queima de gordura e ativação de glúteo sem impacto nas articulações.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sab-1b",
            name: "🔄 OU Escada do Prédio",
            sets: 1, reps: "20-25min", rest: "-",
            tip: "Alternativa à esteira — sobe escada, desce de elevador",
            details: "ALTERNATIVA À ESTEIRA: Use a escada do prédio!\n\n🔑 TÉCNICA (faz toda a diferença):\n• Incline o tronco levemente pra frente — ativa glúteo em vez de quadríceps\n• Empurre pelo CALCANHAR, não pela ponta do pé\n• Aperte o glúteo no topo de cada degrau\n• Não se apoie no corrimão (só pra equilíbrio)\n\n📋 EXECUÇÃO (Fase 1 — Steady State):\n• Sobe a escada toda em ritmo constante e moderado\n• Desce de elevador (descer não trabalha glúteo e pega o joelho)\n• Repete por 20-25 minutos\n• Ritmo: conseguir falar frases curtas mas não conversar de boa\n\n🍑 Por que escada > sprint: queima gordura da barriga enquanto CONSTRÓI glúteo ao mesmo tempo. Sprint é quadríceps-dominante.",
            videoKey: null,
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sab-2",
            name: "Alongamento completo",
            sets: 1, reps: "10min", rest: "-",
            tip: "Todos os alongamentos + flexor 60seg cada",
            details: "Faça todos os alongamentos do cooldown com mais calma. Flexor do quadril 60seg cada lado (obrigatório), pombo 30seg cada lado, borboleta 30seg. Adicione qualquer outro que sentir necessidade.",
            videoKey: "alongamento-flexor",
            unilateral: false, startLeft: false
          },
          {
            id: "f1-sab-3",
            name: "Vacuum",
            sets: 5, reps: "20-30seg", rest: "30seg",
            tip: "Aproveite pra fazer com calma",
            details: "Dia mais tranquilo. Aproveite pra fazer o vacuum com calma e foco total. Concentre-se na técnica e na conexão mente-músculo.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      domingo: {
        name: "Descanso Total",
        exercises: [],
        restDay: true,
        restMessage: "Dia de descanso completo. Faça apenas alongamento leve se quiser. Foque em skincare, hidratação e autocuidado. Seu corpo cresce no descanso! 🌸"
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // FASE 2 — CONSTRUÇÃO (Semanas 7-14)
  // ═══════════════════════════════════════════════════════════
  fase2: {
    name: "Fase 2 — Construção",
    weeks: "Semanas 7-14",
    objective: "Aumentar carga, mais volume, introduzir exercícios intermediários",
    days: {

      segunda: {
        name: "Glúteo Máximo + Peito",
        exercises: [
          {
            id: "f2-seg-1",
            name: "Hip Thrust (banco + halter)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Apoie as costas no banco, empurre o quadril pro teto",
            details: "Apoie a parte superior das costas no banco. Halter no quadril. Pés na largura do quadril, joelhos a 90 graus. Empurre o quadril pro teto, aperte o glúteo 2seg no topo. Desça controlado.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-seg-2",
            name: "Bulgarian Split Squat",
            sets: 3, reps: "10 cada", rest: "60seg",
            tip: "Pé traseiro no banco, foque no glúteo ao subir",
            details: "Pé traseiro apoiado no banco atrás de você. Desça até o joelho da frente formar 90 graus. Foque em empurrar pelo calcanhar da frente e apertar o glúteo ao subir. Comece pelo lado esquerdo.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-seg-3",
            name: "Sumo Squat pesado",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Aumente a carga, desça controlado",
            details: "Mesmo movimento da Fase 1, mas com mais carga (~20-30% a mais). 4 séries em vez de 3. Desça controlado e suba com potência. Mantenha a forma mesmo com mais peso.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-seg-4",
            name: "Leg Press (pés altos)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Mais carga que Fase 1",
            details: "Progressão de carga em relação à Fase 1. Pés na parte alta da plataforma. 4 séries. Desça controlado e empurre com força pelo calcanhar.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-seg-5",
            name: "Abdutora pesada",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Aumente peso, segure 2seg aberto",
            details: "Aumente o peso da máquina abdutora. Segure 2 segundos na abertura máxima (progressão do 1seg da Fase 1). Controle a volta.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-seg-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Pode aumentar halter",
            details: "Pullover com halter mais pesado que na Fase 1. Mantenha a amplitude completa. Sinta o peitoral e o dorsal trabalhando.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-seg-7",
            name: "Vacuum",
            sets: 5, reps: "30seg", rest: "30seg",
            tip: "Progressão: 30seg mínimo",
            details: "Progressão da Fase 1: agora o mínimo é 30 segundos por série. Se conseguir mais, ótimo. O vacuum reduz a cintura e melhora a postura.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      terca: {
        name: "Glúteo Médio + Cardio",
        exercises: [
          {
            id: "f2-ter-1",
            name: "Abdução lateral deitada (caneleira mais pesada)",
            sets: 3, reps: "20 cada", rest: "30seg",
            tip: "Lado ESQUERDO primeiro",
            details: "Caneleira mais pesada que na Fase 1. 20 reps em vez de 15. Deite de lado, levante a perna controlando o movimento. Lado esquerdo sempre primeiro.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-ter-2",
            name: "Abdução em pé (caneleira mais pesada)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Controle total",
            details: "Caneleira mais pesada no tornozelo. Mantenha controle total do movimento, sem balançar. Tronco reto. Comece pelo esquerdo.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-ter-3",
            name: "Fire Hydrant (caneleira mais pesada)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Core firme, não gire o tronco",
            details: "Caneleira mais pesada. De quatro apoios, levante o joelho pro lado. 15 reps cada lado (progressão). Controle total. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-ter-4",
            name: "Abdutora (máquina, mais peso)",
            sets: 4, reps: "15", rest: "45seg",
            tip: "Progressão de carga",
            details: "4 séries (progressão). Mais peso na máquina. Segure 1-2seg na abertura máxima. Se o peso ficar fácil, aumente.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-ter-5",
            name: "Adutora (mais peso)",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Coxas torneadas",
            details: "Progressão de carga na adutora. Interno de coxa tonificado feminiza a silhueta. Controle a volta (fase excêntrica).",
            videoKey: "adutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-ter-6",
            name: "Step Up com halter",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Banco médio, empurre pelo calcanhar",
            details: "NOVO na Fase 2. Use um banco de altura média. Segure halteres nas mãos. Suba empurrando pelo calcanhar, aperte o glúteo no topo. Desça controlado. Comece pelo esquerdo.",
            videoKey: "step-up",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-ter-7",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "25min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "Progressão: 25 minutos (era 20 na Fase 1) e inclinação de 10-12%. Mantenha postura ereta, não segure nas barras.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quarta: {
        name: "Posterior + Glúteo + Cardio",
        exercises: [
          {
            id: "f2-qua-1",
            name: "Stiff com halteres (mais pesados)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Sinta o alongamento na posterior",
            details: "4 séries (progressão). Halteres mais pesados. Empurre o quadril pra trás, sinta o alongamento atrás da coxa. Costas retas, joelhos levemente dobrados.",
            videoKey: "stiff",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qua-2",
            name: "Hip Thrust",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Foco na contração no topo",
            details: "Hip Thrust com halter ou barra. Apoie costas no banco. Empurre quadril pro teto. Foque em apertar forte o glúteo no topo por 2 segundos. Desça controlado.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qua-3",
            name: "Leg Press",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Desça 3-4seg (excêntrico)",
            details: "Foque na fase excêntrica: conte 3-4 segundos descendo. Isso aumenta o tempo sob tensão. Pés altos na plataforma. Suba com potência.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qua-4",
            name: "Good Morning com barra",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Barra atrás do pescoço, flexione no quadril",
            details: "NOVO na Fase 2. Barra apoiada nos trapézios (atrás do pescoço). Flexione no quadril empurrando pra trás, costas retas. Sinta a posterior e o glúteo. Volte apertando o glúteo.",
            videoKey: "good-morning",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qua-5",
            name: "Vacuum",
            sets: 5, reps: "30seg", rest: "30seg",
            tip: "Mantenha consistência",
            details: "30 segundos por série. Mantenha a consistência diária. Pode variar entre posição em pé e de 4 apoios.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qua-6",
            name: "Cardio: Esteira",
            sets: 1, reps: "20min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "20 minutos na esteira com inclinação de 10-12%. Velocidade 5-6km/h. Postura ereta.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quinta: {
        name: "Glúteo Médio + Core",
        exercises: [
          {
            id: "f2-qui-1",
            name: "Abdução lateral deitada (caneleira)",
            sets: 3, reps: "20 cada", rest: "30seg",
            tip: "Esquerdo primeiro",
            details: "Caneleira no tornozelo, 20 reps. Foco na contração do glúteo médio. Esquerdo sempre primeiro pra corrigir assimetria.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-qui-2",
            name: "Abdução em pé (caneleira)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Controle",
            details: "Caneleira no tornozelo, movimento controlado. Sem balançar o corpo. Foque no glúteo médio.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-qui-3",
            name: "Fire Hydrant (caneleira)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Core ativado, controle total",
            details: "De quatro apoios, caneleira no tornozelo. Levante o joelho pro lado. 15 reps cada lado. Controle total. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-qui-4",
            name: "Abdutora (pesada)",
            sets: 4, reps: "15", rest: "45seg",
            tip: "Segure 2seg",
            details: "4 séries, peso pesado. Segure 2 segundos na abertura máxima. Progressão constante de carga.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qui-5",
            name: "Prancha",
            sets: 3, reps: "30-45seg", rest: "30seg",
            tip: "Progressão: tente sem joelhos",
            details: "Progressão da Fase 1: 30-45seg em vez de 20-30seg. Tente fazer na ponta dos pés (sem apoio nos joelhos). Corpo reto, core ativado.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-qui-6",
            name: "Prancha lateral",
            sets: 2, reps: "20seg cada", rest: "30seg",
            tip: "NOVO: marca a cintura",
            details: "NOVO na Fase 2. Deite de lado, apoie no antebraço. Levante o quadril formando linha reta. Segure 20seg cada lado. Trabalha os oblíquos = marca a cintura.",
            videoKey: "prancha-lateral",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-qui-7",
            name: "Vacuum",
            sets: 5, reps: "30seg", rest: "30seg",
            tip: "Core completo",
            details: "Vacuum pra completar o trabalho de core do dia. 30seg por série. Foque na qualidade.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sexta: {
        name: "Glúteo FOCO + Peito",
        exercises: [
          {
            id: "f2-sex-1",
            name: "Hip Thrust pesado",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Dia de volume = mais reps",
            details: "Dia de foco! 4 séries de 15 reps com carga pesada. Aperte forte o glúteo no topo por 2seg. Desça controlado.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sex-2",
            name: "Bulgarian Split Squat",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Mais reps que segunda",
            details: "12 reps cada perna (mais que as 10 de segunda). Foque em profundidade e contração do glúteo. Esquerdo primeiro.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f2-sex-3",
            name: "Sumo Squat",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Queima total",
            details: "4 séries de 15 reps. Volume alto pra queima total do glúteo. Mantenha boa forma mesmo cansada.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sex-4",
            name: "Leg Press",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Reps altas, foco na contração",
            details: "4x15 no leg press pés altos. Foque em sentir o glúteo em cada rep. Se perder a conexão, diminua o peso.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sex-5",
            name: "Abdutora",
            sets: 4, reps: "20", rest: "45seg",
            tip: "Volume máximo",
            details: "4 séries de 20 reps. Volume máximo na abdutora. Segure 1-2seg na abertura. Finalize o glúteo.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sex-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Ampulheta",
            details: "Pullover pra trabalhar a caixa torácica. Contribui pra silhueta ampulheta. Amplitude completa.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sex-7",
            name: "Vacuum",
            sets: 5, reps: "30seg", rest: "30seg",
            tip: "Vacuum forte",
            details: "Dia forte de vacuum. Tente manter pelo máximo de tempo possível. 30seg mínimo por série.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sabado: {
        name: "HIIT + Cardio",
        exercises: [
          {
            id: "f2-sab-1",
            name: "HIIT Esteira",
            sets: 1, reps: "20min", rest: "-",
            tip: "30seg sprint (velocidade 10-12) + 60seg caminhada. Repita 12-15x",
            details: "NOVO na Fase 2: HIIT! 30 segundos correndo (velocidade 10-12km/h) seguidos de 60 segundos caminhando (5km/h). Repita 12-15 ciclos = ~20 minutos. Aquece 3min antes.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sab-1b",
            name: "🔄 OU Escada Intervalada",
            sets: 8, reps: "2-3 andares", rest: "descida elevador",
            tip: "Alternativa ao HIIT — sobe rápido 2-3 andares, desce de elevador",
            details: "ALTERNATIVA AO HIIT: Escada intervalada!\n\n🔑 TÉCNICA:\n• Incline o tronco levemente pra frente\n• Empurre pelo CALCANHAR\n• Aperte o glúteo no topo de cada degrau\n• Tente subir 2 degraus de uma vez (passada longa = mais glúteo)\n\n📋 EXECUÇÃO (Fase 2 — Intervalado):\n• Sobe RÁPIDO 2-3 andares (ritmo forte, 2 degraus de vez)\n• Desce de elevador (recuperação)\n• Repete 8-10 rounds\n• ~25 minutos total\n\n🍑 Mais intenso que Fase 1: ritmo forte na subida, foco em potência do glúteo.",
            videoKey: null,
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sab-2",
            name: "Esteira inclinada",
            sets: 1, reps: "15min", rest: "-",
            tip: "Cooldown: inclinação 8%, velocidade 5km/h",
            details: "Cooldown pós-HIIT. 15 minutos de caminhada inclinada (8%, 5km/h). Diminua a frequência cardíaca gradualmente.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f2-sab-3",
            name: "Alongamento completo",
            sets: 1, reps: "10min", rest: "-",
            tip: "Flexor 60seg cada + todos os alongamentos",
            details: "Alongamento completo. Flexor do quadril 60seg cada lado, pombo 30seg cada, borboleta 30seg. Aproveite pra relaxar e recuperar.",
            videoKey: "alongamento-flexor",
            unilateral: false, startLeft: false
          }
        ]
      },

      domingo: {
        name: "Descanso Total",
        exercises: [],
        restDay: true,
        restMessage: "Dia de descanso completo. Alongamento leve se quiser. Skincare, hidratação e autocuidado. Prepare as marmitas da semana! 🌸"
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // FASE 3 — DEFINIÇÃO (Semanas 15-24)
  // ═══════════════════════════════════════════════════════════
  fase3: {
    name: "Fase 3 — Definição",
    weeks: "Semanas 15-24",
    objective: "Aumentar intensidade, técnicas avançadas, mais definição",
    days: {

      segunda: {
        name: "Glúteo Máximo + Peito",
        exercises: [
          {
            id: "f3-seg-1",
            name: "Hip Thrust pesado",
            sets: 5, reps: "15", rest: "60seg",
            tip: "Volume aumentado: 5 séries! Pausa 3seg no topo",
            details: "Hip Thrust com pausa de 3 segundos no topo de cada rep. Isso aumenta o tempo sob tensão e força a contração máxima do glúteo. Carga pesada. Volume aumentado pra 5 séries nesta fase.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-seg-2",
            name: "Bulgarian Split Squat deficit",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Pé em step, mais profundo",
            details: "NOVO: Pé da frente em um step ou disco pra aumentar a amplitude. Desce mais fundo = mais glúteo. Mantenha tronco levemente inclinado pra frente. Esquerdo primeiro.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-seg-3",
            name: "Sumo Squat",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Pausa 2seg no fundo",
            details: "Agachamento sumo com pausa de 2 segundos na posição mais baixa. Elimina o impulso e força o músculo a trabalhar mais. Suba com potência.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-seg-4",
            name: "Kickback na polia",
            sets: 3, reps: "15 cada", rest: "45seg",
            tip: "Esquerdo primeiro!",
            details: "NOVO na Fase 3. Na polia baixa, prenda a caneleira. Incline levemente o tronco pra frente. Empurre a perna pra trás usando o glúteo. Não arquee a lombar. Esquerdo primeiro.",
            videoKey: "kickback-polia",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-seg-5",
            name: "Leg Press (drop set)",
            sets: 3, reps: "12 + drop", rest: "90seg",
            tip: "Última série: drop set",
            details: "3 séries normais de 12 reps. Na última série: faça 12 reps, reduza o peso em 30%, faça mais reps até a falha. Drop set = máximo estímulo. Pés altos na plataforma.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-seg-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Ampulheta",
            details: "Pullover com halter. Amplitude completa. Silhueta ampulheta: peito aberto + cintura fina.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-seg-7",
            name: "Vacuum",
            sets: 5, reps: "30-45seg", rest: "30seg",
            tip: "Progressão de tempo",
            details: "Progressão: 30-45 segundos por série. Tente chegar nos 45seg. A cintura já deve estar marcando resultado nessa fase.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      terca: {
        name: "Glúteo Médio + Cardio",
        exercises: [
          {
            id: "f3-ter-1",
            name: "Abdução lateral deitada (caneleira pesada)",
            sets: 3, reps: "20 cada", rest: "30seg",
            tip: "Lado ESQUERDO primeiro, pausa 2seg",
            details: "Caneleira pesada. 20 reps com pausa de 2seg no topo. Foco na ativação do glúteo médio. Esquerdo primeiro.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-ter-2",
            name: "Abdução em pé (caneleira pesada)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Controle e pausa no topo",
            details: "Caneleira pesada no tornozelo. Pause 1-2seg no ponto máximo de abdução. Controle total do movimento. Tronco reto.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-ter-3",
            name: "Fire Hydrant (caneleira pesada)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Core firme, squeeze no topo",
            details: "Caneleira pesada. De quatro apoios, levante o joelho pro lado. Pause 1seg no topo apertando o glúteo. 15 reps cada lado. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-ter-4",
            name: "Abdutora (pesada, drop set)",
            sets: 4, reps: "15 + drop", rest: "45seg",
            tip: "Última série: drop set",
            details: "4 séries de 15. Na última série: faça 15, reduza 30% do peso, faça até a falha. Segure 2seg na abertura.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-ter-5",
            name: "Adutora",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Interno de coxa tonificado",
            details: "Progressão de carga. Aperte forte no fechamento máximo. Interno de coxa feminiza a silhueta.",
            videoKey: "adutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-ter-6",
            name: "Step Up com halter",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Banco mais alto, mais desafio",
            details: "Banco mais alto que Fase 2. Halteres mais pesados. Empurre pelo calcanhar, aperte glúteo no topo. Esquerdo primeiro.",
            videoKey: "step-up",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-ter-7",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "25min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "25 minutos de caminhada inclinada. Inclinação 10-12%, velocidade 5-6km/h.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quarta: {
        name: "Posterior + Glúteo + Core",
        exercises: [
          {
            id: "f3-qua-1",
            name: "Stiff com halteres pesados",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Excêntrico lento (3-4seg descendo)",
            details: "4 séries com halteres pesados. Fase excêntrica lenta: 3-4 segundos descendo. Sinta o alongamento na posterior de coxa. Costas retas.",
            videoKey: "stiff",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-2",
            name: "Hip Thrust (pausa 3seg)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Pausa no topo, carga pesada",
            details: "Hip Thrust com pausa de 3seg no topo. Carga pesada. Aperte o glúteo ao máximo durante a pausa.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-3",
            name: "Leg Press (pausa 2seg no fundo)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Pausa embaixo elimina o impulso",
            details: "Leg Press com pausa de 2 segundos na posição mais baixa. Pés altos. Elimina o impulso elástico. Suba com potência.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-4",
            name: "Elevação Pélvica pés elevados",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Pés no banco, mais amplitude",
            details: "NOVO na Fase 3. Deite no chão com os pés apoiados em um banco. Empurre o quadril pro teto. A elevação dos pés aumenta a amplitude e a ativação do glúteo.",
            videoKey: "elevacao-pelvica",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-5",
            name: "Prancha",
            sets: 3, reps: "45-60seg", rest: "30seg",
            tip: "Progressão: 45-60seg",
            details: "Prancha na ponta dos pés, 45-60 segundos. Core ativado, corpo reto. Progressão significativa da Fase 1.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-6",
            name: "Prancha lateral",
            sets: 3, reps: "30seg cada", rest: "30seg",
            tip: "Marca a cintura, 30seg cada lado",
            details: "Prancha lateral 30seg cada lado. Quadril alto, corpo em linha reta. Oblíquos fortes = cintura marcada.",
            videoKey: "prancha-lateral",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qua-7",
            name: "Dead Bug",
            sets: 3, reps: "10", rest: "30seg",
            tip: "Lombar colada no chão",
            details: "NOVO na Fase 3. Deite de costas, braços pra cima, joelhos a 90 graus. Estenda braço oposto + perna simultaneamente. Lombar SEMPRE colada no chão. Core profundo.",
            videoKey: "dead-bug",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qua-8",
            name: "Vacuum",
            sets: 5, reps: "30-45seg", rest: "30seg",
            tip: "Core completo",
            details: "Vacuum pra finalizar o core. 30-45seg por série.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      quinta: {
        name: "Glúteo Médio + Core + Cardio",
        exercises: [
          {
            id: "f3-qui-1",
            name: "Abdução lateral deitada (caneleira, pausa)",
            sets: 3, reps: "20 cada", rest: "30seg",
            tip: "Esquerdo primeiro, pausa 2seg",
            details: "Caneleira pesada, 20 reps com pausa de 2seg no topo. Esquerdo primeiro.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qui-2",
            name: "Abdução em pé (caneleira)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Controle máximo",
            details: "Caneleira pesada no tornozelo. Controle total. Pausa no topo do movimento. Esquerdo primeiro.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qui-3",
            name: "Fire Hydrant (caneleira)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Pausa no topo, core firme",
            details: "De quatro apoios, caneleira pesada. Levante o joelho pro lado com pausa de 1seg no topo. 15 reps cada lado. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qui-4",
            name: "Abdutora (pesada)",
            sets: 4, reps: "15", rest: "45seg",
            tip: "Segure 2seg, carga alta",
            details: "4 séries pesadas. Segure 2seg na abertura. Progressão de carga.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qui-5",
            name: "Kickback na polia",
            sets: 3, reps: "15 cada", rest: "45seg",
            tip: "Esquerdo primeiro, não arque a lombar",
            details: "Kickback na polia baixa. Foco no glúteo. Não arque a lombar. Esquerdo primeiro.",
            videoKey: "kickback-polia",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qui-6",
            name: "Prancha",
            sets: 3, reps: "45-60seg", rest: "30seg",
            tip: "Core forte",
            details: "Prancha completa 45-60seg. Aperte abdômen e glúteo. Corpo reto.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qui-7",
            name: "Prancha lateral",
            sets: 3, reps: "30seg cada", rest: "30seg",
            tip: "Marca a cintura",
            details: "30seg cada lado. Quadril alto, corpo alinhado.",
            videoKey: "prancha-lateral",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-qui-8",
            name: "Dead Bug",
            sets: 3, reps: "10", rest: "30seg",
            tip: "Lombar colada no chão",
            details: "Braço e perna opostos. Lombar no chão. Core profundo ativado.",
            videoKey: "dead-bug",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-qui-9",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "20min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "20 minutos de caminhada inclinada. Terceira sessão de cardio da semana.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      sexta: {
        name: "Glúteo FOCO + Peito",
        exercises: [
          {
            id: "f3-sex-1",
            name: "Hip Thrust pesado (pausa 3seg)",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Volume + pausa = máximo estímulo",
            details: "Dia de foco. 4x15 com pausa de 3seg no topo. Carga máxima mantendo boa forma. Glúteo em chamas.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sex-2",
            name: "Bulgarian Split Squat deficit",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Pé em step, profundidade máxima",
            details: "Bulgarian com deficit. 12 reps cada perna. Máxima profundidade. Esquerdo primeiro.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-sex-3",
            name: "Sumo Squat (pausa 2seg)",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Pausa no fundo + reps altas",
            details: "4x15 com pausa de 2seg no fundo. Volume alto + técnica avançada = queima intensa.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sex-4",
            name: "Kickback na polia",
            sets: 3, reps: "15 cada", rest: "45seg",
            tip: "Esquerdo primeiro",
            details: "Kickback na polia. 15 reps cada perna. Esquerdo primeiro. Foco na contração do glúteo.",
            videoKey: "kickback-polia",
            unilateral: true, startLeft: true
          },
          {
            id: "f3-sex-5",
            name: "Leg Press (drop set)",
            sets: 3, reps: "15 + drop", rest: "90seg",
            tip: "Última série: drop set até a falha",
            details: "3x15, última série com drop set. Reduza 30% do peso e vá até a falha. Finalize o glúteo.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sex-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Ampulheta",
            details: "Pullover com halter. Caixa torácica aberta. Silhueta ampulheta.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sex-7",
            name: "Vacuum",
            sets: 5, reps: "30-45seg", rest: "30seg",
            tip: "Dia forte de vacuum",
            details: "Vacuum forte. Tente chegar nos 45seg. Cintura fina é construída com consistência.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sabado: {
        name: "HIIT + Cardio + Recuperação",
        exercises: [
          {
            id: "f3-sab-1",
            name: "HIIT Esteira",
            sets: 1, reps: "20min", rest: "-",
            tip: "30seg sprint + 60seg caminhada",
            details: "HIIT: 30seg sprint (velocidade 10-12km/h) + 60seg caminhada (5km/h). 12-15 ciclos. Aquecimento de 3min antes.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sab-1b",
            name: "🔄 OU Escada Intervalada+",
            sets: 10, reps: "2-3 andares", rest: "descida elevador",
            tip: "Alternativa ao HIIT — mais rounds e mais intenso que Fase 2",
            details: "ALTERNATIVA AO HIIT: Escada intervalada intensificada!\n\n🔑 TÉCNICA:\n• Incline o tronco levemente pra frente\n• Empurre pelo CALCANHAR, aperte glúteo em cada degrau\n• 2 degraus de uma vez SEMPRE (passada longa)\n• Não se apoie no corrimão\n\n📋 EXECUÇÃO (Fase 3 — Intervalado Intenso):\n• Sobe RÁPIDO 2-3 andares (ritmo máximo, 2 degraus)\n• Desce de elevador (recuperação mais curta — desça logo)\n• Repete 10-12 rounds\n• ~25 minutos total\n\n🔥 Progressão: mais rounds que Fase 2 + recuperação mais curta. A subida deve ser explosiva.",
            videoKey: null,
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sab-2",
            name: "Esteira inclinada",
            sets: 1, reps: "15min", rest: "-",
            tip: "Cooldown inclinado",
            details: "Cooldown de 15 minutos. Inclinação 8%, velocidade 5km/h. Recuperação ativa.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f3-sab-3",
            name: "Alongamento completo + Yoga básico",
            sets: 1, reps: "15min", rest: "-",
            tip: "Flexor 60seg cada + poses de yoga básicas",
            details: "NOVO: 15 minutos de alongamento e yoga básica. Flexor 60seg cada lado, pombo 30seg cada, borboleta 30seg. Adicione: cachorro olhando pra baixo, cobra, criança. Relaxe e respire fundo.",
            videoKey: "alongamento-flexor",
            unilateral: false, startLeft: false
          }
        ]
      },

      domingo: {
        name: "Descanso Total",
        exercises: [],
        restDay: true,
        restMessage: "Dia de descanso e autocuidado. Alongamento leve ou yoga se quiser. Skincare completa, hidratação, preparar marmitas. Você merece descansar! 🌸"
      }
    }
  },

  // ═══════════════════════════════════════════════════════════
  // FASE 4 — AVANÇADO (Semana 25+)
  // ═══════════════════════════════════════════════════════════
  fase4: {
    name: "Fase 4 — Avançado",
    weeks: "Semana 25+",
    objective: "Periodização, supersets, volume alto, refinamento e manutenção",
    days: {

      segunda: {
        name: "Glúteo Máximo + Peito (Pesado)",
        exercises: [
          {
            id: "f4-seg-1",
            name: "Hip Thrust pesado",
            sets: 6, reps: "12", rest: "90seg",
            tip: "Volume MÁXIMO: 6 séries! Carga máxima, pausa 3seg",
            details: "6 séries pesadas de 12 reps com pausa de 3seg no topo — volume máximo da fase avançada. Carga máxima mantendo boa forma. Periodização: alterne semanas pesadas/leves/moderadas.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-seg-2",
            name: "SUPERSET: Bulgarian Split Squat + Abdutora",
            sets: 4, reps: "12 cada + 15", rest: "90seg",
            tip: "Sem descanso entre os dois exercícios",
            details: "SUPERSET: Faça 12 reps de Bulgarian (cada perna) e vá DIRETO pra abdutora (15 reps) sem descanso. Descanse 90seg depois de completar ambos. 4 rodadas. Esquerdo primeiro no Bulgarian.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-seg-3",
            name: "Sumo Squat (pausa 2seg + drop set)",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Pausa no fundo, drop set na última",
            details: "Pausa de 2seg no fundo de cada rep. Na última série: drop set — reduza 30%, faça até a falha. Técnica avançada pra máximo estímulo.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-seg-4",
            name: "Cable Pull Through",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Puxe com o quadril, não com os braços",
            details: "NOVO na Fase 4. Fique de costas pra polia baixa. Passe o cabo entre as pernas. Flexione no quadril (como stiff) e estenda empurrando o quadril pra frente. Glúteo e posterior.",
            videoKey: "cable-pull-through",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-seg-5",
            name: "Leg Press (rest-pause)",
            sets: 3, reps: "12 + rest-pause", rest: "90seg",
            tip: "Faz 12, descansa 10seg, faz mais até falha",
            details: "Rest-pause: faça 12 reps, descanse 10 segundos (sem sair da máquina), faça mais reps até a falha. Isso recruta fibras que normalmente não seriam ativadas.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-seg-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Caixa torácica aberta, ampulheta",
            details: "Pullover com halter pesado. Amplitude completa. Silhueta ampulheta.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-seg-7",
            name: "Vacuum",
            sets: 5, reps: "45-60seg", rest: "30seg",
            tip: "Nível avançado: 45-60seg",
            details: "Vacuum avançado: 45-60 segundos por série. Se chegou aqui, sua cintura já mudou. Mantenha a consistência.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      terca: {
        name: "Glúteo Médio + Cardio",
        exercises: [
          {
            id: "f4-ter-1",
            name: "SUPERSET: Abdução deitada + Abdução em pé",
            sets: 3, reps: "20 cada + 15 cada", rest: "45seg",
            tip: "Sem descanso entre exercícios, esquerdo primeiro",
            details: "SUPERSET: 20 reps Abdução deitada com caneleira (cada lado) direto pra 15 reps Abdução em pé com caneleira (cada lado). Sem descanso entre eles. Esquerdo primeiro. Caneleira pesada.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-ter-2",
            name: "Fire Hydrant (caneleira pesada)",
            sets: 3, reps: "20 cada", rest: "30seg",
            tip: "Pausa 2seg no topo, core firme",
            details: "20 reps cada lado (progressão). Caneleira pesada. Pausa de 2seg no topo apertando o glúteo. Queima intensa. Comece pelo esquerdo.",
            videoKey: "fire-hydrant",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-ter-3",
            name: "Abdutora (drop set + rest-pause)",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Última série: drop set + rest-pause",
            details: "4 séries de 15. Na última: faça 15, reduza peso 30% (drop), faça até falha, descanse 10seg (rest-pause), faça mais. Técnica avançada.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-ter-4",
            name: "Adutora",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Coxas torneadas, carga alta",
            details: "Progressão de carga máxima. Aperte forte no fechamento. Interno de coxa feminizado.",
            videoKey: "adutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-ter-5",
            name: "Step Up com halter pesado",
            sets: 3, reps: "12 cada", rest: "60seg",
            tip: "Banco alto, halteres pesados",
            details: "Banco alto, halteres pesados. Empurre pelo calcanhar. Aperte glúteo no topo. Esquerdo primeiro.",
            videoKey: "step-up",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-ter-6",
            name: "Kickback na polia",
            sets: 3, reps: "15 cada", rest: "45seg",
            tip: "Esquerdo primeiro",
            details: "Kickback na polia. Foco no glúteo. Sem arquear lombar. Esquerdo primeiro.",
            videoKey: "kickback-polia",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-ter-7",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "25min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "25 minutos de caminhada inclinada. Manter como cardio de baixa intensidade pra queima de gordura.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      quarta: {
        name: "Posterior + Glúteo + Core Avançado",
        exercises: [
          {
            id: "f4-qua-1",
            name: "Stiff com halteres pesados",
            sets: 4, reps: "12", rest: "60seg",
            tip: "Excêntrico 4seg, carga alta",
            details: "Excêntrico de 4 segundos. Halteres pesados. Sinta o alongamento profundo na posterior. Costas retas.",
            videoKey: "stiff",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-2",
            name: "Glute Ham Raise",
            sets: 3, reps: "8-10", rest: "60seg",
            tip: "Controle a descida, exercício avançado",
            details: "NOVO na Fase 4. Exercício avançado pra posterior e glúteo. Prenda os pés, desça controlando com a posterior de coxa. Se não conseguir o movimento completo, faça excêntrica (só a descida controlada).",
            videoKey: "glute-ham-raise",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-3",
            name: "SUPERSET: Hip Thrust + Elevação Pélvica",
            sets: 4, reps: "12 + 15", rest: "90seg",
            tip: "Sem descanso entre exercícios",
            details: "SUPERSET: 12 reps Hip Thrust pesado direto pra 15 reps Elevação Pélvica pés elevados. Sem descanso entre eles. 90seg após completar ambos.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-4",
            name: "Good Morning",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Flexione no quadril, costas retas",
            details: "Barra nos trapézios. Flexione no quadril empurrando pra trás. Costas retas. Sinta posterior e glúteo.",
            videoKey: "good-morning",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-5",
            name: "Prancha",
            sets: 3, reps: "60seg", rest: "30seg",
            tip: "1 minuto completo",
            details: "Prancha de 60 segundos. Nível avançado. Corpo reto, core totalmente ativado.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-6",
            name: "Prancha lateral",
            sets: 3, reps: "30-45seg cada", rest: "30seg",
            tip: "Progressão: 30-45seg cada lado",
            details: "Prancha lateral avançada. 30-45seg cada lado. Pode adicionar elevação de quadril (subir e descer) pra mais desafio.",
            videoKey: "prancha-lateral",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-qua-7",
            name: "Dead Bug",
            sets: 3, reps: "12", rest: "30seg",
            tip: "Lombar colada, movimento lento",
            details: "Dead Bug com 12 reps. Movimento lento e controlado. Lombar sempre colada no chão. Core profundo.",
            videoKey: "dead-bug",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qua-8",
            name: "Vacuum",
            sets: 5, reps: "45-60seg", rest: "30seg",
            tip: "Nível avançado",
            details: "Vacuum avançado. 45-60seg por série. Combine com respiração controlada.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      quinta: {
        name: "Glúteo Médio + Core + Cardio",
        exercises: [
          {
            id: "f4-qui-1",
            name: "SUPERSET: Abdução deitada + Fire Hydrant",
            sets: 3, reps: "20 cada + 15 cada", rest: "45seg",
            tip: "Sem descanso, esquerdo primeiro",
            details: "SUPERSET: 20 reps Abdução deitada com caneleira cada lado + 15 reps Fire Hydrant com caneleira cada lado. Sem descanso entre eles. Esquerdo primeiro.",
            videoKey: "abducao-deitada",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-qui-2",
            name: "Abdução em pé (caneleira pesada)",
            sets: 3, reps: "15 cada", rest: "30seg",
            tip: "Pausa 2seg no topo",
            details: "Caneleira pesada. Pausa de 2seg no ponto máximo de abdução. Controle total.",
            videoKey: "abducao-pe",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-qui-3",
            name: "Abdutora (pesada)",
            sets: 4, reps: "15", rest: "45seg",
            tip: "Carga máxima, segure 2seg",
            details: "Carga máxima. 2seg de pausa na abertura. 4 séries pesadas.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qui-4",
            name: "Kickback na polia",
            sets: 3, reps: "15 cada", rest: "45seg",
            tip: "Esquerdo primeiro",
            details: "Kickback na polia. Carga progressiva. Esquerdo primeiro. Glúteo isolado.",
            videoKey: "kickback-polia",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-qui-5",
            name: "Cable Pull Through",
            sets: 3, reps: "15", rest: "45seg",
            tip: "Quadril puxa, não os braços",
            details: "Cable Pull Through. Foque em empurrar o quadril pra frente usando o glúteo. Braços apenas seguram o cabo.",
            videoKey: "cable-pull-through",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qui-6",
            name: "Prancha",
            sets: 3, reps: "60seg", rest: "30seg",
            tip: "1 minuto, core forte",
            details: "Prancha 60seg. Pode adicionar variações: tocar ombros alternados, elevação de perna.",
            videoKey: "prancha",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qui-7",
            name: "Prancha lateral",
            sets: 3, reps: "30-45seg cada", rest: "30seg",
            tip: "Cintura marcada",
            details: "Prancha lateral avançada. Pode adicionar elevação de quadril.",
            videoKey: "prancha-lateral",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-qui-8",
            name: "Dead Bug",
            sets: 3, reps: "12", rest: "30seg",
            tip: "Core profundo",
            details: "Dead Bug controlado. Lombar no chão. Core profundo ativado.",
            videoKey: "dead-bug",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-qui-9",
            name: "Cardio: Esteira inclinada",
            sets: 1, reps: "20min", rest: "-",
            tip: "Inclinação 10-12%",
            details: "Cardio de baixa intensidade. 20min inclinada.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          }
        ]
      },

      sexta: {
        name: "Glúteo FOCO Total (Volume)",
        exercises: [
          {
            id: "f4-sex-1",
            name: "Hip Thrust (rest-pause)",
            sets: 5, reps: "12 + rest-pause", rest: "90seg",
            tip: "5 séries! Rest-pause na última",
            details: "5 séries pesadas. Na última: 12 reps, descansa 10seg, mais reps até falha. Volume máximo pro glúteo.",
            videoKey: "hip-thrust",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sex-2",
            name: "SUPERSET: Bulgarian deficit + Kickback polia",
            sets: 4, reps: "12 cada + 15 cada", rest: "90seg",
            tip: "Sem descanso entre exercícios",
            details: "SUPERSET: Bulgarian com deficit (12 cada perna) + Kickback na polia (15 cada perna). Sem descanso entre eles. Esquerdo primeiro em ambos.",
            videoKey: "bulgarian-split-squat",
            unilateral: true, startLeft: true
          },
          {
            id: "f4-sex-3",
            name: "Sumo Squat (pausa + drop set)",
            sets: 4, reps: "15", rest: "60seg",
            tip: "Pausa 2seg no fundo, drop set na última",
            details: "Pausa de 2seg no fundo. Última série com drop set. Volume alto + técnicas avançadas.",
            videoKey: "sumo-squat",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sex-4",
            name: "Leg Press (drop set + rest-pause)",
            sets: 3, reps: "15 + drop + rest-pause", rest: "120seg",
            tip: "Técnica avançada: tudo junto na última série",
            details: "3 séries de 15. Na última: 15 reps → drop 30% → até falha → descansa 10seg → mais reps. Técnica avançada extrema. Pés altos.",
            videoKey: "leg-press",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sex-5",
            name: "Abdutora (drop set)",
            sets: 4, reps: "20 + drop", rest: "45seg",
            tip: "Volume máximo, drop set na última",
            details: "4x20, drop set na última série. Glúteo completamente esgotado.",
            videoKey: "abdutora",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sex-6",
            name: "Pullover",
            sets: 3, reps: "12", rest: "60seg",
            tip: "Ampulheta final",
            details: "Pullover com halter. Silhueta ampulheta completa.",
            videoKey: "pullover",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sex-7",
            name: "Vacuum",
            sets: 5, reps: "45-60seg", rest: "30seg",
            tip: "Dia forte de vacuum avançado",
            details: "Vacuum avançado. 45-60seg. Sua cintura agradece toda essa dedicação.",
            videoKey: "vacuum",
            unilateral: false, startLeft: false
          }
        ]
      },

      sabado: {
        name: "HIIT + Cardio + Yoga",
        exercises: [
          {
            id: "f4-sab-1",
            name: "HIIT Esteira",
            sets: 1, reps: "20min", rest: "-",
            tip: "30seg sprint + 45seg caminhada (mais intenso)",
            details: "HIIT avançado: 30seg sprint (velocidade 11-13km/h) + 45seg caminhada (5km/h). Menos descanso = mais intenso. 15-18 ciclos.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sab-1b",
            name: "🔄 OU Escada Mix Avançado",
            sets: 4, reps: "circuito completo", rest: "descida elevador",
            tip: "Alternativa avançada — circuito com variações na escada",
            details: "ALTERNATIVA AO HIIT: Circuito avançado na escada!\n\n🔑 TÉCNICA:\n• Tronco inclinado pra frente, calcanhar, glúteo apertado\n• Cada round tem 3 variações diferentes\n\n📋 CIRCUITO (repete 3-4x):\n\n1️⃣ SUBIDA NORMAL — 3 andares\n   • 1 degrau por vez, ritmo moderado constante\n\n2️⃣ SUBIDA PASSADA LONGA — 3 andares\n   • 2 degraus de vez, foco total no glúteo, ritmo forte\n\n3️⃣ SUBIDA LATERAL — 2 andares cada lado\n   • De lado na escada, perna de cima puxa o corpo\n   • Troca o lado na metade\n\n⬇️ DESCE de elevador (recuperação ~2min)\n\nRepete 3-4 rounds = ~25-30 min total\n\n🔥 Fase 4: as variações atacam o glúteo de ângulos diferentes (máximo, médio, lateral). Muito mais completo que sprint.",
            videoKey: null,
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sab-2",
            name: "Esteira inclinada",
            sets: 1, reps: "15min", rest: "-",
            tip: "Cooldown ativo",
            details: "15min de cooldown inclinado. 8%, 5km/h. Recuperação.",
            videoKey: "cardio-esteira",
            unilateral: false, startLeft: false
          },
          {
            id: "f4-sab-3",
            name: "Yoga + Alongamento",
            sets: 1, reps: "20min", rest: "-",
            tip: "Sessão completa de yoga e alongamento",
            details: "NOVO: 20 minutos de yoga e alongamento. Cachorro olhando pra baixo, cobra, guerreiro 1 e 2, pombo, flexor do quadril 60seg cada. Foque na respiração e na consciência corporal.",
            videoKey: "alongamento-flexor",
            unilateral: false, startLeft: false
          }
        ]
      },

      domingo: {
        name: "Descanso Total",
        exercises: [],
        restDay: true,
        restMessage: "Descanso total. Yoga leve se quiser. Skincare premium, hidratação profunda. Prepare marmitas. Você chegou na Fase 4 — você é uma AMAZONA! 👑"
      }
    }
  }

}; // END WORKOUTS

// ─── 6. WARMUP ──────────────────────────────────────────────
const WARMUP = {
  name: "AQUECIMENTO + MOBILIDADE",
  duration: "7 min",
  required: true,
  sections: [
    {
      name: "Liberação Miofascial (Foam Roller)",
      duration: "3-5 min",
      required: false,
      note: "Especialmente importante pra quem fica sentada 8h+. Liberar antes de treinar ativa MUITO mais o glúteo.",
      exercises: [
        {
          name: "Rolo no Quadríceps",
          reps: "30-60seg cada perna",
          tip: "Deite de bruços, rolo na frente da coxa. Role devagar do quadril até o joelho. Pare nos pontos doloridos.",
          gifUrl: null
        },
        {
          name: "Rolo no TFL (lateral do quadril)",
          reps: "30-60seg cada lado",
          tip: "De lado, rolo na parte lateral do quadril/coxa. Essa região fica MUITO tensa em quem senta o dia todo.",
          gifUrl: null
        },
        {
          name: "Rolo no Piriforme (glúteo profundo)",
          reps: "30-60seg cada lado",
          tip: "Sentada no rolo, cruze uma perna sobre a outra e role devagar sobre o glúteo. Libera o piriforme e melhora ativação.",
          gifUrl: null
        }
      ]
    },
    {
      name: "Cardio Leve",
      duration: "3-5min",
      exercises: [
        { name: "Caminhada rápida, polichinelo ou marcha no lugar", duration: "3-5min", videoKey: "polichinelo" }
      ]
    },
    {
      name: "Mobilidade",
      exercises: [
        { name: "Círculos de quadril", reps: "10 cada lado", tip: "Mãos na cintura, gira o quadril", videoKey: "circulos-quadril" },
        { name: "Balanço de perna", reps: "10 frente/trás + 10 lateral", tip: "Segure em algo", videoKey: "balanco-perna" },
        { name: "Agachamento profundo", duration: "30seg", tip: "Segure lá embaixo, segure em algo se precisar", videoKey: "agachamento-profundo" },
        { name: "World's Greatest Stretch", reps: "3 cada lado", tip: "Passo largo, mão no chão, outra gira pro teto, segure 5seg", videoKey: "worlds-greatest-stretch" }
      ]
    },
    {
      name: "ATIVAÇÃO GLÚTEO ESQUERDO",
      duration: "3 min",
      required: true,
      exercises: [
        { name: "Toque e aperte: mão no glúteo esquerdo", reps: "10x", tip: "Aperte consciente" },
        { name: "Fire Hydrant SÓ esquerdo", reps: "10 reps lento", tip: "Só o lado esquerdo, sem caneleira!", videoKey: "fire-hydrant-ativacao" },
        { name: "Glute Bridge bilateral", reps: "10 reps", tip: "Foco em sentir o ESQUERDO", videoKey: "glute-bridge-ativacao" }
      ]
    }
  ]
};

// ─── 7. COOLDOWN ─────────────────────────────────────────────
const COOLDOWN = {
  name: "ALONGAMENTO",
  duration: "5 min",
  required: true,
  exercises: [
    { name: "Flexor do quadril", duration: "60seg cada lado", required: true, tip: "Posição de avanço, joelho traseiro no chão. Empurre o quadril pra frente suavemente.", videoKey: "alongamento-flexor", sides: true },
    { name: "Pombo", duration: "30seg cada lado", tip: "Perna da frente cruzada, desça o tronco devagar", videoKey: "pombo-alongamento", sides: true },
    { name: "Borboleta", duration: "30seg", tip: "Solas dos pés juntas, pressione joelhos pra baixo com cotovelos", videoKey: "borboleta-alongamento" }
  ]
};

// ─── 8. MEALS ────────────────────────────────────────────────
const MEALS = {
  treino: {
    label: "Dia de Treino (Seg-Sex)",
    totalCalories: "~2.300-2.500 kcal",
    totalProtein: "~165-172g",
    meals: [
      {
        name: "Café da Manhã",
        time: "06:30",
        emoji: "☀️",
        optionA: {
          name: "Shake Proteico",
          description: "1 scoop whey (30g) + 40g aveia + 1 banana + 5g creatina + 1 col. pasta de amendoim (15g) + 200ml leite",
          macros: "~480 kcal, 38g prot, 52g carb, 14g gord"
        },
        optionB: {
          name: "Ovos + Pão Integral",
          description: "3 ovos mexidos + 2 fatias pão integral (50g) + 1 fatia queijo muçarela (20g)",
          macros: "~420 kcal, 28g prot, 30g carb, 22g gord"
        }
      },
      {
        name: "Lanche da Manhã",
        time: "10:00",
        emoji: "🍎",
        optionA: {
          name: "Fruta + Castanhas",
          description: "1 banana ou maçã + 20g castanhas (10 unidades) + 1 col. mel (opcional)",
          macros: "~220 kcal, 5g prot, 30g carb, 10g gord"
        },
        optionB: {
          name: "Iogurte + Granola",
          description: "170g iogurte natural + 30g granola + 1 col. mel",
          macros: "~230 kcal, 10g prot, 32g carb, 7g gord"
        }
      },
      {
        name: "Almoço",
        time: "12:30",
        emoji: "🍽️",
        optionA: {
          name: "Frango + Arroz + Feijão",
          description: "150g frango grelhado + 100g arroz branco (cozido) + 1 concha feijão (80g) + salada à vontade + 1 fio azeite",
          macros: "~580 kcal, 45g prot, 55g carb, 16g gord"
        },
        optionB: {
          name: "Carne Moída + Arroz + Feijão",
          description: "150g carne moída refogada + 100g arroz branco + 1 concha feijão (80g) + salada à vontade + 1 fio azeite",
          macros: "~620 kcal, 42g prot, 55g carb, 22g gord"
        }
      },
      {
        name: "Lanche/Pré-Treino",
        time: "16:30",
        emoji: "💪",
        optionA: {
          name: "Patê de Frango com Cottage",
          description: "Patê de frango com cottage e milho (1 porção) + 2 fatias pão integral (50g)",
          macros: "~390 kcal, 32g prot, 38g carb, 10g gord"
        },
        optionB: {
          name: "Tapioca + Ovo + Banana",
          description: "2 col. goma de tapioca (40g) + 2 ovos mexidos + 1 banana",
          macros: "~370 kcal, 18g prot, 45g carb, 12g gord"
        }
      },
      {
        name: "Jantar (Pós-Treino)",
        time: "20:00",
        emoji: "🌙",
        optionA: {
          name: "Frango + Batata Doce",
          description: "150g frango grelhado + 150g batata doce + salada completa + 1 fio azeite",
          macros: "~480 kcal, 42g prot, 45g carb, 12g gord"
        },
        optionB: {
          name: "Carne Moída + Arroz Integral",
          description: "150g carne moída + 80g arroz integral (cozido) + legumes refogados (brócolis, cenoura)",
          macros: "~520 kcal, 40g prot, 40g carb, 20g gord"
        }
      },
      {
        name: "Ceia",
        time: "22:00",
        emoji: "😴",
        optionA: {
          name: "Queijo Cottage + Fruta",
          description: "100g queijo cottage + 1 fruta (morango, kiwi ou banana) + canela",
          macros: "~160 kcal, 14g prot, 15g carb, 4g gord"
        },
        optionB: {
          name: "Iogurte Grego + Castanhas",
          description: "120g iogurte grego natural + 15g castanhas + 1 col. mel",
          macros: "~180 kcal, 12g prot, 14g carb, 8g gord"
        }
      }
    ]
  },
  descanso: {
    label: "Dia de Descanso (Sáb-Dom)",
    totalCalories: "~2.000-2.200 kcal",
    totalProtein: "~150-160g",
    meals: [
      {
        name: "Café da Manhã",
        time: "08:00",
        emoji: "☀️",
        optionA: {
          name: "Shake Proteico",
          description: "1 scoop whey (30g) + 40g aveia + 1 banana + 5g creatina + 1 col. pasta de amendoim (15g) + 200ml leite",
          macros: "~480 kcal, 38g prot, 52g carb, 14g gord"
        },
        optionB: {
          name: "Ovos + Pão Integral",
          description: "3 ovos mexidos + 2 fatias pão integral (50g) + 1 fatia queijo muçarela (20g)",
          macros: "~420 kcal, 28g prot, 30g carb, 22g gord"
        }
      },
      {
        name: "Lanche da Manhã",
        time: "10:30",
        emoji: "🍎",
        optionA: {
          name: "Fruta + Castanhas",
          description: "1 banana ou maçã + 20g castanhas (10 unidades) + 1 col. mel (opcional)",
          macros: "~220 kcal, 5g prot, 30g carb, 10g gord"
        },
        optionB: {
          name: "Iogurte + Granola",
          description: "170g iogurte natural + 30g granola + 1 col. mel",
          macros: "~230 kcal, 10g prot, 32g carb, 7g gord"
        }
      },
      {
        name: "Almoço",
        time: "12:30",
        emoji: "🍽️",
        optionA: {
          name: "Frango + Arroz + Feijão",
          description: "130g frango grelhado + 80g arroz branco (cozido) + 1 concha feijão (80g) + salada à vontade",
          macros: "~480 kcal, 38g prot, 48g carb, 12g gord"
        },
        optionB: {
          name: "Refeição Livre (Sábado)",
          description: "Refeição livre com moderação — pizza, hambúrguer, etc.",
          macros: "~700 kcal (moderado)"
        }
      },
      {
        name: "Lanche da Tarde",
        time: "16:00",
        emoji: "🍌",
        optionA: {
          name: "Fruta + Castanhas",
          description: "1 maçã ou pera + 20g castanhas (10 unidades)",
          macros: "~200 kcal, 5g prot, 28g carb, 10g gord"
        },
        optionB: {
          name: "Iogurte + Fruta",
          description: "170g iogurte natural + fruta picada",
          macros: "~180 kcal, 8g prot, 22g carb, 5g gord"
        }
      },
      {
        name: "Jantar",
        time: "20:00",
        emoji: "🌙",
        optionA: {
          name: "Omelete Leve",
          description: "Omelete (3 ovos + vegetais) + salada completa",
          macros: "~350 kcal, 30g prot, 8g carb, 22g gord"
        },
        optionB: {
          name: "Sopa Proteica",
          description: "Sopa de legumes com 100g frango desfiado + batata",
          macros: "~300 kcal, 28g prot, 25g carb, 8g gord"
        }
      },
      {
        name: "Ceia",
        time: "22:00",
        emoji: "😴",
        optionA: {
          name: "Queijo Cottage + Fruta",
          description: "100g queijo cottage + 1 fruta (morango, kiwi ou banana) + canela",
          macros: "~160 kcal, 14g prot, 15g carb, 4g gord"
        },
        optionB: {
          name: "Iogurte Grego + Castanhas",
          description: "120g iogurte grego natural + 15g castanhas + 1 col. mel",
          macros: "~180 kcal, 12g prot, 14g carb, 8g gord"
        }
      }
    ]
  }
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

// ─── 10. SHOPPING_LIST ───────────────────────────────────────
const SHOPPING_LIST = {
  proteinas: {
    label: "Proteínas",
    emoji: "🥩",
    items: [
      { name: "Peito de frango", quantity: "1kg", price: "R$15-20", checked: false },
      { name: "Ovos", quantity: "2 dúzias", price: "R$15-18", checked: false },
      { name: "Carne moída magra", quantity: "500g", price: "R$20-25", checked: false },
      { name: "Whey protein", quantity: "1 pote (dura ~1 mês)", price: "R$80-120", checked: false },
      { name: "Queijo cottage", quantity: "200g", price: "R$8-12", checked: false },
      { name: "Atum em lata (em água)", quantity: "2 latas", price: "R$8-12", checked: false },
      { name: "Requeijão light", quantity: "1 pote", price: "R$6-9", checked: false },
      { name: "Filé de tilápia congelado", quantity: "1kg", price: "~R$25-35", checked: false },
      { name: "Sardinha em lata", quantity: "3 unidades", price: "~R$15-20", checked: false }
    ]
  },
  carboidratos: {
    label: "Carboidratos",
    emoji: "🍚",
    items: [
      { name: "Arroz integral", quantity: "1kg", price: "R$8-10", checked: false },
      { name: "Batata doce", quantity: "1kg", price: "R$5-8", checked: false },
      { name: "Aveia em flocos", quantity: "500g", price: "R$5-7", checked: false },
      { name: "Pão integral", quantity: "1 pacote", price: "R$7-10", checked: false },
      { name: "Feijão carioca", quantity: "1kg", price: "R$8-10", checked: false },
      { name: "Tapioca/goma", quantity: "500g", price: "R$5-8", checked: false },
      { name: "Milho verde", quantity: "1 lata", price: "R$4", checked: false }
    ]
  },
  vegetais_frutas: {
    label: "Vegetais e Frutas",
    emoji: "🥬",
    items: [
      { name: "Alface ou rúcula", quantity: "1 pé", price: "R$3-5", checked: false },
      { name: "Tomates", quantity: "6 unidades", price: "R$5-8", checked: false },
      { name: "Pepinos", quantity: "3 unidades", price: "R$3-5", checked: false },
      { name: "Cenouras", quantity: "3 unidades", price: "R$2-3", checked: false },
      { name: "Cebolas roxas", quantity: "2 unidades", price: "R$3-4", checked: false },
      { name: "Alho", quantity: "1 cabeça", price: "R$2", checked: false },
      { name: "Bananas", quantity: "6-8 unidades", price: "R$3-5", checked: false },
      { name: "Limões", quantity: "4 unidades", price: "R$2-3", checked: false },
      { name: "Frutas da estação", quantity: "morango, maçã, etc.", price: "R$8-12", checked: false }
    ]
  },
  gorduras: {
    label: "Gorduras Boas",
    emoji: "🥑",
    items: [
      { name: "Azeite extra virgem", quantity: "1 vidro (dura 2+ semanas)", price: "R$15-20", checked: false },
      { name: "Pasta de amendoim", quantity: "1 pote (dura 2+ semanas)", price: "R$12-15", checked: false },
      { name: "Castanhas", quantity: "200g (dura 2 semanas)", price: "R$10-15", checked: false }
    ]
  },
  laticinios: {
    label: "Laticínios",
    emoji: "🥛",
    items: [
      { name: "Leite desnatado", quantity: "2L", price: "R$8-10", checked: false },
      { name: "Queijo muçarela", quantity: "200g", price: "R$8-10", checked: false },
      { name: "Iogurte natural", quantity: "1 pote", price: "R$5-7", checked: false },
      { name: "Iogurte grego natural", quantity: "1 pote", price: "R$7-10", checked: false }
    ]
  },
  temperos: {
    label: "Temperos e Outros",
    emoji: "🧂",
    items: [
      { name: "Orégano, páprica, pimenta do reino", quantity: "1x (dura meses)", price: "R$5-10", checked: false },
      { name: "Granola", quantity: "1 pacote", price: "R$8-12", checked: false },
      { name: "Louro (folhas)", quantity: "1 pacote", price: "R$3-5", checked: false },
      { name: "Cominho", quantity: "1 pote", price: "R$3-5", checked: false },
      { name: "Salsinha", quantity: "1 maço", price: "R$2-3", checked: false }
    ]
  },
  higiene_skincare: {
    label: "Higiene e Skincare",
    emoji: "🧴",
    items: [
      { name: "Água micelar (Garnier ou Simple)", quantity: "1 frasco", price: "~R$20-30", checked: false }
    ]
  }
};

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

// ─── 16. CHECKLIST_ITEMS ─────────────────────────────────────
const CHECKLIST_ITEMS = [
  { id: "skincare-manha", label: "Skincare manhã", time: "06:15", emoji: "☀️", days: null, link: "cuidados" },
  { id: "vacuum", label: "Vacuum (5x20-30seg)", time: null, emoji: "💨", days: null, link: "treino" },
  { id: "alongar-flexor", label: "Alongar flexor (60seg cada lado)", time: null, emoji: "🦵", days: null, link: "treino" },
  { id: "agua", label: "Beber 2.5L água", time: null, emoji: "💧", days: null, link: null },
  { id: "treino", label: "Treino do dia", time: "18:00", emoji: "🏋️", days: [1, 2, 3, 4, 5, 6], link: "treino" },
  { id: "skincare-noite", label: "Skincare noite", time: "19:30", emoji: "🌙", days: null, link: "cuidados" },
  { id: "kegel", label: "Kegel (10 reps)", time: "22:00", emoji: "💪", days: null, link: "cuidados" },
  { id: "depilacao", label: "Depilação", time: null, emoji: "🪒", days: [6], link: "cuidados" }
];

// ─── 17. DAILY_ROUTINE ───────────────────────────────────────
const DAILY_ROUTINE = [
  { time: "06:00", activity: "Acordar", emoji: "⏰" },
  { time: "06:15", activity: "Skincare manhã", emoji: "☀️" },
  { time: "06:30", activity: "Café da manhã", emoji: "🍳" },
  { time: "10:00", activity: "Lanche da manhã", emoji: "🍎" },
  { time: "12:30", activity: "Almoço", emoji: "🍽️" },
  { time: "16:00", activity: "Pré-treino (lanche)", emoji: "🍌" },
  { time: "18:00", activity: "TREINO (academia)", emoji: "🏋️" },
  { time: "19:30", activity: "Banho + Skincare noite + Cuidados corpo", emoji: "🚿" },
  { time: "20:00", activity: "Jantar (pós-treino)", emoji: "🌙" },
  { time: "22:00", activity: "Kegel + rotina de dormir", emoji: "💪" },
  { time: "22:30", activity: "Dormir", emoji: "😴" }
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

// ─── 19. NIGHT_ROUTINE ──────────────────────────────────────
const NIGHT_ROUTINE = {
  name: "Rotina Noturna",
  emoji: "🌙",
  steps: [
    {
      name: "Skincare Noturno",
      emoji: "✨",
      items: [
        "Remover protetor com água micelar (double cleansing)",
        "Limpar o rosto com sabonete facial",
        "Aplicar Niacinamida (uniformizar tom)",
        "Aplicar Retinol (renovação celular) — 2-3x por semana",
        "Hidratante facial"
      ],
      videoKey: "retinol",
      videoSource: "skincare"
    },
    {
      name: "Clareamento de Regiões",
      emoji: "🧴",
      items: [
        "Aplicar creme clareador nas axilas",
        "Aplicar nas virilhas",
        "Aplicar nos cotovelos e joelhos"
      ]
    },
    {
      name: "Kegel",
      emoji: "💪",
      items: [
        "10 contrações de 5 segundos",
        "10 contrações rápidas (1seg)",
        "Descansar 30seg entre séries"
      ],
      videoKey: "kegel",
      videoSource: "exercise"
    },
    {
      name: "Alongamento Noturno",
      emoji: "🧘",
      items: [
        "Flexor do quadril: 60seg cada lado",
        "Borboleta: 30seg",
        "Cat-cow: 10 repetições lentas"
      ],
      videoKey: "alongamento-flexor",
      videoSource: "exercise"
    },
    {
      name: "Preparar pra Dormir",
      emoji: "😴",
      items: [
        "Touca de cetim no cabelo",
        "Sem tela 30min antes de dormir",
        "Quarto escuro e fresco",
        "Meta: 7-8 horas de sono"
      ]
    }
  ]
};

const DAILY_TIMELINE = {
  treino: [
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️", items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)"] },
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
    { id: "acordar", time: "6:00", label: "☀️ Acordar", icon: "☀️", items: ["Kegel matinal (3 tipos)", "1ª garrafinha de água (700ml)"] },
    { id: "cafe", time: "7:00", label: "☕ Café da manhã", icon: "☕", type: "meal", mealId: "cafe", items: ["Suplementos: multivitamínico"] },
    { id: "lanche1", time: "10:00", label: "🍎 Lanche manhã", icon: "🍎", type: "meal", mealId: "lanche1", items: ["Chá de spearmint — 1ª xícara 🌿"] },
    { id: "almoco", time: "12:00", label: "🍽️ Almoço", icon: "🍽️", type: "meal", mealId: "almoco", items: ["Ômega-3 com a refeição"] },
    { id: "lanche2", time: "16:00", label: "🍎 Lanche tarde", icon: "🍎", type: "meal", mealId: "pretreino", items: ["Chá de spearmint — 2ª xícara 🌿"] },
    { id: "atividade", time: "17:40", label: "🚶 Atividade leve", icon: "🚶", items: ["Caminhada 25-30min ou protocolo ativação glúteo esq (10min)", "Yoga de quadril (20min)"] },
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

// ─── WORKOUTS_NEW — Rotina Amazona (4 Fases) ─────────────────
const WORKOUTS_NEW = {
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
          {
            id: "f1-hip-thrust",
            name: "Hip Thrust (peso corporal ou haltere)",
            sets: 3,
            reps: "20",
            rest: "60seg",
            weight: "0-15 kg",
            tip: "Squeeze consciente dos dois lados. Sentir os dois trabalhando.",
            videoKey: "hip-thrust",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f1-agachamento",
            name: "Agachamento (peso corporal)",
            sets: 3,
            reps: "15",
            rest: "60seg",
            weight: "0 kg",
            tip: "Descer devagar em 3s, subir normal.",
            videoKey: "sumo-squat",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f1-elevacao-pelvica-esq",
            name: "Elevação Pélvica Unilateral ESQUERDA",
            sets: 3,
            reps: "15",
            rest: "45seg",
            weight: "0 kg",
            tip: "Esquerdo primeiro, sempre.",
            videoKey: "elevacao-pelvica",
            unilateral: true,
            startLeft: true
          },
          {
            id: "f1-elevacao-pelvica-dir",
            name: "Elevação Pélvica Unilateral DIREITA",
            sets: 3,
            reps: "15",
            rest: "45seg",
            weight: "0 kg",
            tip: "Só depois do esquerdo.",
            videoKey: "elevacao-pelvica",
            unilateral: true,
            startLeft: false
          },
          {
            id: "f1-abducao-elastico",
            name: "Abdução Lateral com Elástico",
            sets: 3,
            reps: "20",
            rest: "45seg",
            weight: "elástico leve/médio",
            tip: "Apertar o elástico para fora consciente.",
            videoKey: "abdutora",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f1-rdl",
            name: "RDL com Halteres (leves)",
            sets: 3,
            reps: "12",
            rest: "60seg",
            weight: "5-10 kg cada",
            tip: "Sentir o posterior da coxa.",
            videoKey: "stiff",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f1-prancha",
            name: "Prancha",
            sets: 3,
            reps: "30seg",
            rest: "30seg",
            weight: "0 kg",
            tip: "Core estabilizado.",
            videoKey: "prancha",
            unilateral: false,
            startLeft: false
          },
          {
            id: "f1-caminhada",
            name: "Caminhada Leve",
            sets: 1,
            reps: "20-30min",
            rest: "0seg",
            weight: "0 kg",
            tip: "Finalizar, não substituir o treino.",
            videoKey: "cardio-esteira",
            unilateral: false,
            startLeft: false
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
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
          }
        ]
      }
    }
  }
};
