// ============================================================
// data/warmup-cooldown.js — Aquecimento, desaquecimento e protocolos
// Contém: WARMUP_LOWER, WARMUP_UPPER, COOLDOWN_LOWER, COOLDOWN_UPPER,
//         GLUTE_FIX_PROTOCOL, YOGA_LEVELS, REBOLAR_STEPS
// ============================================================

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
