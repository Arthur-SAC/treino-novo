# Aba "Meu Dia" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Inicio" tab with a "Meu Dia" tab that shows the user's complete daily routine as narrative cards organized by time period, with collapse/expand functionality.

**Architecture:** New `DAILY_CARDS` data object in data.js defines narrative content for each card. New `DAY_CARD_LAYOUTS` maps day types to card lists. New `DayManager` in app.js replaces `Dashboard`, rendering a mini-dashboard header + collapsible cards. `WEEK_SCHEDULE` gains 4 day types. Existing data (`MEAL_OPTIONS`, `SKINCARE_ROUTINE`, `WORKOUTS`, `KEGEL_PROTOCOL_TYPES`) is reused inside cards.

**Tech Stack:** Vanilla HTML/CSS/JS (ES5/ES6 mix), no frameworks, inline CSS in index.html

**Spec:** `docs/superpowers/specs/2026-03-23-aba-meu-dia-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `data.js` | Modify (lines 1741-1774) | Add `DAILY_CARDS`, `DAY_CARD_LAYOUTS`, update `WEEK_SCHEDULE`, remove `DAILY_TIMELINE` |
| `app.js` | Modify (lines 1120-1430) | Replace `Dashboard` with `DayManager`, update `App.init()` |
| `index.html` | Modify (nav label ~line 3443, CSS ~line 29+) | Change "Inicio" label to "Meu Dia", add `.day-card-*` CSS |

---

### Task 1: Update `WEEK_SCHEDULE` to 4 day types

**Files:**
- Modify: `data.js:1766-1774`

- [ ] **Step 1: Update WEEK_SCHEDULE**

Replace the existing `WEEK_SCHEDULE` (data.js lines 1766-1774) with 4 day types:

```js
const WEEK_SCHEDULE = {
  1: { type: "treino", workout: "Lower A", label: "\ud83d\udcaa Lower A (Gl\u00fateo heavy)", warmup: "lower", cooldown: "lower" },
  2: { type: "descanso-ativo", workout: null, label: "\ud83e\uddd8 Yoga + Rebolar", warmup: null, cooldown: null },
  3: { type: "treino", workout: "Upper", label: "\ud83d\udcaa Upper Body", warmup: "upper", cooldown: "upper" },
  4: { type: "ativacao-leve", workout: null, label: "\ud83d\udfe1 Ativa\u00e7\u00e3o + Caminhada", warmup: null, cooldown: null },
  5: { type: "treino", workout: "Lower B", label: "\ud83d\udcaa Lower B (Coxas + Quadril)", warmup: "lower", cooldown: "lower" },
  6: { type: "treino", workout: "Gluteo Isolado", label: "\ud83d\udcaa Gl\u00fateo Isolado + Core", warmup: "lower", cooldown: "lower" },
  0: { type: "descanso-total", workout: null, label: "\ud83d\ude34 Descanso total", warmup: null, cooldown: null }
};
```

- [ ] **Step 2: Update `Dashboard.getTimelineType()` for backwards compat**

In app.js line 1178-1182, update the method to map the new types back to `treino`/`descanso` for the existing `DAILY_TIMELINE` lookup (temporary — will be removed in Task 5):

```js
getTimelineType() {
  var dayOfWeek = new Date().getDay();
  var schedule = WEEK_SCHEDULE[dayOfWeek];
  if (!schedule) return 'descanso';
  // Map new types to old timeline types for backwards compat
  return schedule.type === 'treino' ? 'treino' : 'descanso';
},
```

- [ ] **Step 3: Verify app still works**

Open the app in browser, check that the Inicio tab loads without errors. Console should be clean.

- [ ] **Step 4: Commit**

```bash
git add data.js app.js
git commit -m "refactor: WEEK_SCHEDULE com 4 tipos de dia (treino, descanso-ativo, ativacao-leve, descanso-total)"
```

---

### Task 2: Add `DAILY_CARDS` and `DAY_CARD_LAYOUTS` data

**Files:**
- Modify: `data.js` (add after WEEK_SCHEDULE, before KEGEL_PROTOCOL_TYPES)

- [ ] **Step 1: Add `DAY_CARD_LAYOUTS` object**

Add after `WEEK_SCHEDULE` (after line 1774):

```js
const DAY_CARD_LAYOUTS = {
  "treino": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "pre_treino", "treino", "pos_treino", "jantar", "rotina_noturna"],
  "descanso-ativo": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "yoga_rebolar", "pos_atividade", "jantar", "rotina_noturna"],
  "ativacao-leve": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "lanche_tarde", "ativacao_leve", "jantar", "rotina_noturna"],
  "descanso-total": ["acordar", "skincare_manha", "cafe", "lanche_manha", "almoco", "descanso", "jantar", "rotina_noturna"]
};
```

- [ ] **Step 2: Add `DAILY_CARDS` object — shared cards (acordar, rotina_noturna)**

Add after `DAY_CARD_LAYOUTS`. Start with the cards that have the most custom narrative content:

```js
const DAILY_CARDS = {
  acordar: {
    icon: "\u2600\ufe0f",
    time: "06:00",
    title: "Ao Acordar",
    content: {
      intro: "O jeito que voc\u00ea come\u00e7a o dia define o resto dele. Esses primeiros minutos s\u00e3o sagrados \u2014 cada passo aqui prepara seu corpo pra render o dia todo.",
      steps: [
        {
          name: "Hidrata\u00e7\u00e3o em jejum",
          description: "Beba uma garrafa inteira de \u00e1gua (700ml) ANTES de qualquer coisa. N\u00e3o precisa ser gelada \u2014 temperatura ambiente ou morna est\u00e1 \u00f3timo. Beba com calma, em goles grandes.",
          why: "Ap\u00f3s 7-8h de sono, seu corpo est\u00e1 desidratado. A \u00e1gua em jejum reativa o metabolismo, ajuda os rins a filtrar, e faz sua pele come\u00e7ar o dia hidratada de dentro pra fora.",
          duration: "2min"
        },
        {
          name: "Kegel Matinal \u2014 Protocolo R\u00e1pido",
          description: "Sente na cama ou fique de p\u00e9. Contraia o m\u00fasculo do assoalho p\u00e9lvico (como se fosse segurar o xixi) rapidamente: contraia 1 segundo, solte 1 segundo. Fa\u00e7a 10 contra\u00e7\u00f5es seguidas. Descanse 10 segundos. Repita mais 2 vezes (total: 3 s\u00e9ries de 10).",
          why: "O Kegel fortalece o assoalho p\u00e9lvico, melhora o controle, intensifica sensa\u00e7\u00f5es \u00edntimas e previne problemas futuros. Fazer de manh\u00e3 cria o h\u00e1bito e come\u00e7a o dia ativando essa musculatura.",
          duration: "2min"
        },
        {
          name: "Vacuum Abdominal",
          description: "De p\u00e9 ou de quatro apoios. Solte TODO o ar dos pulm\u00f5es pela boca. Com os pulm\u00f5es vazios, puxe o umbigo pra dentro e pra cima, como se quisesse encostar o umbigo nas costas. Segure 20 segundos (ou o quanto aguentar). Solte, respire normal. Repita 3 vezes.",
          why: "O vacuum trabalha o transverso abdominal \u2014 o m\u00fasculo mais profundo do abd\u00f4men, que funciona como um 'espartilho natural'. Com o tempo, ele afina a cintura e melhora a postura. \u00c9 assim que se marca a silhueta ampulheta.",
          duration: "2min"
        },
        {
          name: "Mobilidade Matinal (5 minutos)",
          description: "Fa\u00e7a cada movimento devagar, sem for\u00e7ar:\n\n1. **Alongamento do flexor do quadril** (30s cada lado) \u2014 Ajoelhe com um p\u00e9 \u00e0 frente, empurre o quadril pra frente suavemente. Voc\u00ea sente na frente da coxa de tr\u00e1s.\n\n2. **Tor\u00e7\u00e3o tor\u00e1cica** (30s cada lado) \u2014 De quatro apoios, coloque uma m\u00e3o atr\u00e1s da cabe\u00e7a e gire o tronco pro lado, abrindo o peito pro teto. Volte devagar.\n\n3. **C\u00edrculos de quadril** (30s cada dire\u00e7\u00e3o) \u2014 De p\u00e9, m\u00e3os na cintura, fa\u00e7a c\u00edrculos amplos com o quadril. 10 pra cada lado.\n\n4. **Cat-Cow** (1 min) \u2014 De quatro apoios, arqueie as costas pra cima (gato) e depois deixe a barriga cair e olhe pra cima (vaca). Uma respira\u00e7\u00e3o completa em cada posi\u00e7\u00e3o.\n\n5. **Rota\u00e7\u00e3o de pesco\u00e7o** (30s) \u2014 C\u00edrculos lentos com a cabe\u00e7a. 5 pra cada lado.",
          why: "Voc\u00ea fica 8h+ sentada por dia. Isso encurta o flexor do quadril (que DESLIGA o gl\u00fateo), trava a coluna tor\u00e1cica e enrijece o pesco\u00e7o. 5 minutos de manh\u00e3 desfaz o estrago e prepara o corpo pro treino.",
          duration: "5min"
        }
      ]
    }
  },

  rotina_noturna: {
    icon: "\ud83c\udf1b",
    time: "22:00",
    title: "Rotina Noturna",
    content: {
      intro: "A noite \u00e9 quando seu corpo recupera, constr\u00f3i m\u00fasculo e renova a pele. Uma rotina noturna bem feita multiplica os resultados de tudo que voc\u00ea fez durante o dia.",
      steps: [
        {
          name: "Skincare Noite",
          description: "dynamic:skincare_night",
          why: "A pele se regenera durante o sono. Os ativos noturnos (niacinamida, retinol) s\u00f3 funcionam de noite, sem interfer\u00eancia do sol.",
          duration: "5min"
        },
        {
          name: "Kegel Noturno \u2014 Protocolo Longo",
          description: "Deite na cama, relaxe o corpo. Contraia o assoalho p\u00e9lvico com for\u00e7a m\u00e1xima e SEGURE por 10 segundos. Solte e descanse 10 segundos. Repita 5 vezes. Depois, fa\u00e7a o 'elevador': contraia progressivamente em 3 n\u00edveis (t\u00e9rreo \u2192 1\u00ba andar \u2192 2\u00ba andar), segure 5s no topo, e desça devagar. Repita 3 vezes.",
          why: "O protocolo longo \u00e0 noite desenvolve resist\u00eancia do assoalho p\u00e9lvico. Combinado com o r\u00e1pido da manh\u00e3, voc\u00ea treina tanto velocidade quanto for\u00e7a da musculatura. Resultados vis\u00edveis em 4-8 semanas.",
          duration: "3min"
        },
        {
          name: "Suplementos Noturnos",
          description: "Tome a melatonina (0.5-1mg) 30-60 minutos ANTES de deitar. Se tomar col\u00e1geno, \u00e9 agora tamb\u00e9m \u2014 10g dissolvido em \u00e1gua.",
          why: "Melatonina regula o ciclo do sono. N\u00e3o \u00e9 sonifero \u2014 \u00e9 um sinal pro corpo de que est\u00e1 na hora de desacelerar. Col\u00e1geno \u00e9 melhor absorvido em jejum/estomago vazio.",
          duration: "1min"
        },
        {
          name: "Preparo pro Sono",
          description: "Meta: largar o celular \u00e0s 22h e dormir \u00e0s 22:30.\n\n\u2022 Diminua as luzes do quarto (ou use modo noturno no celular se precisar)\n\u2022 Evite telas brilhantes \u2014 a luz azul bloqueia a melatonina natural\n\u2022 Temperatura ideal: quarto fresco (se poss\u00edvel)\n\u2022 Se a mente estiver agitada: 5 respira\u00e7\u00f5es diafragm\u00e1ticas (inspira 4s, segura 4s, solta 6s)",
          why: "Sono \u00e9 o fator #1 de recupera\u00e7\u00e3o muscular, sa\u00fade da pele e regula\u00e7\u00e3o hormonal. Menos de 7h = cortisol alto = mais gordura abdominal + menos ganho muscular. N\u00e3o existe treino que compense sono ruim.",
          duration: null
        }
      ]
    }
  }
};
```

- [ ] **Step 3: Add `DAILY_CARDS` — skincare morning card**

Add to `DAILY_CARDS`:

```js
  skincare_manha: {
    icon: "\ud83e\uddf4",
    time: "06:15",
    title: "Skincare Manh\u00e3",
    content: {
      intro: "A ordem dos produtos importa! Cada camada prepara a pele pra pr\u00f3xima. Pule um passo e os outros perdem efic\u00e1cia.",
      steps: "dynamic:skincare_morning"
    }
  },
```

Note: `"dynamic:skincare_morning"` means DayManager will read from `SKINCARE_ROUTINE.morning.steps` and render each step with its `product`, `howTo`, `why` fields.

- [ ] **Step 4: Add `DAILY_CARDS` — meal cards**

Add to `DAILY_CARDS`:

```js
  cafe: {
    icon: "\u2615",
    time: "07:00",
    title: "Caf\u00e9 da Manh\u00e3",
    mealId: "cafe",
    content: {
      intro: "Primeira refei\u00e7\u00e3o do dia \u2014 combina prote\u00edna + carboidrato pra come\u00e7ar com energia e saciedade. Tome o ch\u00e1 de spearmint junto (1\u00aa x\u00edcara do dia).",
      supplements: "Suplementos agora: multivitam\u00ednico + creatina (se for no shake)"
    }
  },
  lanche_manha: {
    icon: "\ud83c\udf4e",
    time: "10:00",
    title: "Lanche da Manh\u00e3",
    mealId: "lanche1",
    content: {
      intro: "Comer a cada 3h mant\u00e9m o metabolismo ativo e evita que voc\u00ea chegue com fome demais no almo\u00e7o. N\u00e3o pule esse lanche!",
      supplements: "Ch\u00e1 de spearmint \u2014 1\u00aa x\u00edcara \ud83c\udf3f"
    }
  },
  almoco: {
    icon: "\ud83c\udf7d\ufe0f",
    time: "12:00",
    title: "Almo\u00e7o",
    mealId: "almoco",
    content: {
      intro: "Refei\u00e7\u00e3o principal do dia. Monte o prato com: \u00bd de vegetal/salada, \u00bc de prote\u00edna, \u00bc de carboidrato. Coma devagar \u2014 leva 20min pro c\u00e9rebro registrar saciedade.",
      supplements: "\u00d4mega-3 agora (absorve melhor com gordura da refei\u00e7\u00e3o)"
    }
  },
  jantar: {
    icon: "\ud83c\udf19",
    time: "20:00",
    title: "Jantar",
    mealId: "jantar",
    content: {
      intro: "\u00daltima refei\u00e7\u00e3o grande do dia. Prote\u00edna \u00e9 essencial aqui \u2014 seu corpo vai usar durante o sono pra reconstruir m\u00fasculo.",
      supplements: "Vitamina D3+K2 com a refei\u00e7\u00e3o"
    }
  },
```

- [ ] **Step 5: Add `DAILY_CARDS` — activity-specific cards**

Add to `DAILY_CARDS`:

```js
  // Training day specific
  pre_treino: {
    icon: "\u26a1",
    time: "16:00",
    title: "Pr\u00e9-Treino",
    mealId: "pretreino",
    content: {
      intro: "Coma 45-60 minutos antes do treino. Carboidrato aqui \u00e9 combust\u00edvel puro \u2014 vai direto pro m\u00fasculo durante o exerc\u00edcio.",
      supplements: "Ch\u00e1 de spearmint \u2014 2\u00aa x\u00edcara \ud83c\udf3f\nCreatina (5g) se n\u00e3o tomou no caf\u00e9"
    }
  },
  treino: {
    icon: "\ud83d\udcaa",
    time: "17:40",
    title: "Treino do Dia",
    content: {
      intro: "dynamic:workout_intro",
      steps: "dynamic:workout"
    }
  },
  pos_treino: {
    icon: "\ud83d\udc15",
    time: "19:00",
    title: "P\u00f3s-Treino",
    content: {
      intro: "A janela p\u00f3s-treino \u00e9 quando seu corpo est\u00e1 mais receptivo a nutrientes. Aproveite!",
      steps: [
        {
          name: "Shake P\u00f3s-Treino",
          description: "Whey protein (1 dose/30g) + banana + \u00e1gua ou leite. Beba nos primeiros 30min ap\u00f3s o treino.",
          why: "Prote\u00edna r\u00e1pida pro m\u00fasculo que acabou de ser estimulado. A banana repoe glicog\u00eanio.",
          duration: "5min"
        },
        {
          name: "Passeio com os C\u00e3es",
          description: "Caminhada tranquila de ~25 minutos. Ritmo leve, sem pressa.",
          why: "Cardio leve p\u00f3s-treino ajuda na recupera\u00e7\u00e3o ativa \u2014 aumenta fluxo sangu\u00edneo pros m\u00fasculos sem sobrecarregar. Tamb\u00e9m baixa o cortisol do treino.",
          duration: "25min"
        },
        {
          name: "Alongamento P\u00f3s-Treino",
          description: "dynamic:cooldown",
          why: "Alongar ap\u00f3s o treino reduz dor muscular do dia seguinte (DOMS), melhora flexibilidade e ajuda o corpo a sair do modo 'luta' pro modo 'recupera\u00e7\u00e3o'.",
          duration: "5-8min"
        }
      ]
    }
  },

  // Descanso ativo (terca)
  lanche_tarde: {
    icon: "\ud83c\udf4c",
    time: "16:00",
    title: "Lanche da Tarde",
    mealId: "pretreino",
    content: {
      intro: "Em dia sem treino pesado, esse lanche \u00e9 mais leve. Mantenha a prote\u00edna pra n\u00e3o perder m\u00fasculo.",
      supplements: "Ch\u00e1 de spearmint \u2014 2\u00aa x\u00edcara \ud83c\udf3f"
    }
  },
  yoga_rebolar: {
    icon: "\ud83e\uddd8",
    time: "17:00",
    title: "Yoga + Rebolar",
    content: {
      intro: "Hoje \u00e9 dia de mobilidade e movimento. Yoga trabalha flexibilidade e consci\u00eancia corporal. Rebolar treina isolamento de quadril \u2014 fundamental pra dan\u00e7a e pra postura feminina.",
      steps: [
        {
          name: "Yoga de Quadril (20min)",
          description: "Siga a sequ\u00eancia de yoga da aba Treino > Yoga. Foque nas posi\u00e7\u00f5es de abertura de quadril: Pombo, Borboleta, Guerreiro 2, Lagarto. Segure cada posi\u00e7\u00e3o por 5-8 respira\u00e7\u00f5es profundas.",
          why: "Quadril flexivel = gl\u00fateo mais ativo nos treinos + menos dor lombar + mais amplitude de movimento. Tudo conectado.",
          duration: "20min"
        },
        {
          name: "Rebolar / Movimento de Quadril (15min)",
          description: "V\u00e1 pra aba Treino > Rebolar e siga os exerc\u00edcios do dia. Pratique ondula\u00e7\u00f5es, c\u00edrculos de quadril, body wave, e isolamento. Coloque uma m\u00fasica que voc\u00ea goste!",
          why: "Rebolar treina controle motor fino do quadril, ativa m\u00fasculos estabilizadores que n\u00e3o s\u00e3o pegos na muscula\u00e7\u00e3o, e constr\u00f3i confian\u00e7a corporal.",
          duration: "15min"
        },
        {
          name: "Ativa\u00e7\u00e3o Gl\u00fateo Esquerdo",
          description: "OBRIGAT\u00d3RIO todo dia. Deite de lado esquerdo pra cima. Fa\u00e7a 15 abdu\u00e7\u00f5es lentas com a perna esquerda. Coloque a m\u00e3o no gl\u00fateo esq pra sentir a contra\u00e7\u00e3o. Depois: 15 fire hydrants do lado esquerdo. Descanse 30s. Repita 2x.",
          why: "O gl\u00fateo esquerdo \u00e9 mais fraco que o direito (assimetria comum). Se n\u00e3o corrigir, o corpo compensa e a diferen\u00e7a aumenta. Esse trabalho isolado equilibra os dois lados.",
          duration: "10min"
        }
      ]
    }
  },
  pos_atividade: {
    icon: "\ud83d\udeb6",
    time: "18:30",
    title: "P\u00f3s-Atividade",
    content: {
      intro: "Atividade leve de hoje finalizada. Hora de desacelerar.",
      steps: [
        {
          name: "Passeio com os C\u00e3es",
          description: "Caminhada tranquila de ~25 minutos com os dogs.",
          why: "Movimento leve p\u00f3s-yoga ajuda a integrar os alongamentos e mant\u00e9m o corpo ativo sem sobrecarregar.",
          duration: "25min"
        }
      ]
    }
  },

  // Ativacao leve (quinta)
  ativacao_leve: {
    icon: "\ud83d\udfe1",
    time: "17:00",
    title: "Ativa\u00e7\u00e3o + Caminhada",
    content: {
      intro: "Quinta \u00e9 dia leve, mas N\u00c3O \u00e9 dia de ficar parada. A ativa\u00e7\u00e3o do gl\u00fateo esquerdo \u00e9 obrigat\u00f3ria. O resto voc\u00ea escolhe.",
      steps: [
        {
          name: "Ativa\u00e7\u00e3o Gl\u00fateo Esquerdo (OBRIGAT\u00d3RIO)",
          description: "Mesmo protocolo de sempre: deite de lado, 15 abdu\u00e7\u00f5es lentas com a perna esquerda, m\u00e3o no gl\u00fateo pra sentir. 15 fire hydrants. 2 s\u00e9ries. Foque na contra\u00e7\u00e3o, n\u00e3o na velocidade.",
          why: "Corrigir a assimetria entre gl\u00fateo direito e esquerdo. Mesmo em dia de descanso, isso n\u00e3o sobrecarrega \u2014 \u00e9 ativa\u00e7\u00e3o, n\u00e3o treino.",
          duration: "10min"
        },
        {
          name: "Escolha: Caminhada OU Yoga leve",
          description: "Op\u00e7\u00e3o 1: Caminhada de 25-30 minutos (pode ser passeio com os dogs mais longo)\nOp\u00e7\u00e3o 2: Yoga de quadril leve (15-20min)\nOp\u00e7\u00e3o 3: Escada do pr\u00e9dio (suba e des\u00e7a 5-10x)\n\nEscolha o que sentir vontade. O importante \u00e9 se mover.",
          why: "Dia de 'descanso ativo' ajuda na recupera\u00e7\u00e3o sem sobrecarregar. Movimento leve aumenta fluxo sangu\u00edneo pros m\u00fasculos que treinaram forte nos dias anteriores.",
          duration: "20-30min"
        }
      ]
    }
  },

  // Descanso total (domingo)
  descanso: {
    icon: "\ud83d\ude34",
    time: "15:00",
    title: "Descanso",
    content: {
      intro: "Domingo \u00e9 dia de descanso REAL. Seu corpo precisa disso pra crescer.",
      steps: [
        {
          name: "Por que descansar \u00e9 treinar",
          description: "M\u00fasculo N\u00c3O cresce durante o treino \u2014 cresce durante o descanso. Quando voc\u00ea treina, cria microles\u00f5es nas fibras musculares. Durante o descanso (especialmente o sono), seu corpo reconstr\u00f3i essas fibras MAIS FORTES e MAIORES. Sem descanso adequado = overtraining = sem resultado.",
          why: "Pular o descanso n\u00e3o acelera resultados \u2014 atrasa. Overtraining causa cortisol alto, que aumenta gordura abdominal e dificulta ganho muscular.",
          duration: null
        },
        {
          name: "Sugest\u00f5es pro dia",
          description: "\u2022 Alongamento leve e gostoso (s\u00f3 se tiver vontade)\n\u2022 Passeio tranquilo com os dogs\n\u2022 Cuidar do cabelo (m\u00e1scara de hidrata\u00e7\u00e3o se for dia)\n\u2022 Skincare caprichado\n\u2022 Ler, assistir, descansar de verdade\n\u2022 Preparar marmitas da semana (meal prep)",
          why: "Descanso n\u00e3o precisa ser produtivo. Mas se quiser aproveitar, o autocuidado conta como investimento no processo.",
          duration: null
        }
      ]
    }
  }
};
```

- [ ] **Step 6: Commit**

```bash
git add data.js
git commit -m "feat: DAILY_CARDS e DAY_CARD_LAYOUTS — conteudo narrativo dos cards do Meu Dia"
```

---

### Task 3: Add CSS for day cards

**Files:**
- Modify: `index.html` (inline CSS section, after existing styles)

- [ ] **Step 1: Add day-card CSS classes**

Add inside the `<style>` tag in index.html, before the closing `</style>`. Find an appropriate location near the existing timeline styles:

```css
/* ============================================
   DAY CARDS — Meu Dia tab
   ============================================ */
.day-mini-dashboard {
  text-align: center;
  padding: 1.2rem;
  margin-bottom: 12px;
}
.day-mini-dashboard h2 {
  font-family: var(--font-title);
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
}
.day-mini-dashboard .day-workout-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.day-mini-dashboard .day-streak {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

/* Day Cards */
.day-card {
  border-radius: var(--radius-md);
  margin-bottom: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-card);
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: margin var(--transition-normal);
}
.day-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  cursor: pointer;
  background: linear-gradient(135deg, rgba(123,45,142,0.12) 0%, rgba(194,58,58,0.08) 100%);
  user-select: none;
  -webkit-user-select: none;
  position: relative;
}
.day-card-header:active {
  background: linear-gradient(135deg, rgba(123,45,142,0.2) 0%, rgba(194,58,58,0.15) 100%);
}
.day-card-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}
.day-card-time {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
  min-width: 38px;
}
.day-card-title {
  font-family: var(--font-title);
  font-size: 0.95rem;
  flex-grow: 1;
}
.day-card-arrow {
  font-size: 0.7rem;
  color: var(--text-muted);
  transition: transform var(--transition-normal);
  flex-shrink: 0;
}
.day-card.collapsed .day-card-arrow {
  transform: rotate(-90deg);
}

/* Card body collapse */
.day-card-body {
  max-height: 2000px;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease, padding 0.35s ease;
  opacity: 1;
  padding: 0 16px 16px 16px;
}
.day-card.collapsed .day-card-body {
  max-height: 0;
  opacity: 0;
  padding: 0 16px;
}

/* Card content */
.day-card-intro {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 14px;
  font-style: italic;
}
.day-card-step {
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 3px solid var(--secondary);
}
.day-card-step-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}
.day-card-step-number {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--secondary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.day-card-step-name {
  font-weight: 600;
  font-size: 0.9rem;
}
.day-card-step-duration {
  font-size: 0.7rem;
  color: var(--accent);
  margin-left: auto;
}
.day-card-step-desc {
  font-size: 0.83rem;
  line-height: 1.65;
  color: var(--text);
  margin-bottom: 6px;
  white-space: pre-line;
}
.day-card-why {
  font-size: 0.78rem;
  color: var(--gold);
  font-style: italic;
  line-height: 1.5;
  padding: 6px 10px;
  background: rgba(196, 149, 106, 0.08);
  border-radius: var(--radius-sm);
  margin-top: 4px;
}
.day-card-why::before {
  content: "Por que? ";
  font-weight: 600;
  font-style: normal;
}

/* Meal rendering inside cards */
.day-card-meal-options {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.day-card-meal-opt {
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.78rem;
  cursor: pointer;
  font-family: var(--font-body);
  transition: all var(--transition-fast);
}
.day-card-meal-opt.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
.day-card-meal-info {
  font-size: 0.8rem;
  color: var(--text);
  line-height: 1.5;
}
.day-card-meal-macros {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 2px;
}
.day-card-supplements {
  font-size: 0.78rem;
  color: var(--success);
  margin-top: 8px;
  padding: 6px 10px;
  background: rgba(110, 203, 139, 0.08);
  border-radius: var(--radius-sm);
}

/* Skincare step in card */
.day-card-skincare-step {
  margin-bottom: 12px;
  padding-left: 12px;
  border-left: 3px solid var(--info);
}
.day-card-skincare-product {
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 3px;
}
.day-card-skincare-howto {
  font-size: 0.8rem;
  color: var(--text);
  line-height: 1.5;
}
.day-card-skincare-why {
  font-size: 0.75rem;
  color: var(--gold);
  font-style: italic;
  margin-top: 2px;
}
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: CSS dos day-cards (Meu Dia) — layout, collapse, steps, meals, skincare"
```

---

### Task 4: Build `DayManager` in app.js

**Files:**
- Modify: `app.js` (replace Dashboard object at lines 1120-1430)

- [ ] **Step 1: Write DayManager — core structure + init + render**

Replace the entire `Dashboard` object (lines 1120-1430) with `DayManager`. Keep the same position in the file between the existing code:

```js
const DayManager = {
  init() {
    var self = this;

    var container = document.getElementById('dashboard-content');
    if (container) {
      container.addEventListener('click', function(e) {
        // Card header collapse/expand
        var header = e.target.closest('.day-card-header');
        if (header) {
          var card = header.closest('.day-card');
          if (card) {
            self.toggleCard(card.dataset.cardId);
          }
          return;
        }

        // Water bottle click
        var bottle = e.target.closest('.timeline-bottle');
        if (bottle) {
          var bottleNum = parseInt(bottle.dataset.bottle);
          var currentWater = StorageManager.getForDate('water') || 0;
          if (bottleNum === currentWater) {
            StorageManager.setForDate('water', bottleNum - 1);
          } else {
            StorageManager.setForDate('water', bottleNum);
          }
          self.render();
          return;
        }

        // Meal option click in day cards
        var mealOpt = e.target.closest('.day-card-meal-opt');
        if (mealOpt) {
          e.stopPropagation();
          var mealId = mealOpt.dataset.mealId;
          var optIdx = parseInt(mealOpt.dataset.optIdx);
          StorageManager.setValue('mealChoice_' + mealId, optIdx);
          self.render();
          return;
        }

        // Workout card tap -> navigate to treino
        var workoutLink = e.target.closest('.day-card-workout-link');
        if (workoutLink) {
          Router.navigate('treino');
          return;
        }
      });
    }

    this.render();

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'inicio') self.render();
    });
  },

  getDayType() {
    var dayOfWeek = new Date().getDay();
    var schedule = WEEK_SCHEDULE[dayOfWeek];
    return schedule ? schedule.type : 'descanso-total';
  },

  getTodaySchedule() {
    var dayOfWeek = new Date().getDay();
    return WEEK_SCHEDULE[dayOfWeek] || { type: 'descanso-total', label: '\ud83d\ude34 Descanso total', workout: null };
  },

  getCardsForToday() {
    var dayType = this.getDayType();
    var layout = DAY_CARD_LAYOUTS[dayType] || DAY_CARD_LAYOUTS['descanso-total'];
    return layout;
  },

  getCollapsedState() {
    return StorageManager.getForDate('dayCardsCollapsed') || {};
  },

  toggleCard(cardId) {
    var collapsed = this.getCollapsedState();
    collapsed[cardId] = !collapsed[cardId];
    StorageManager.setForDate('dayCardsCollapsed', collapsed);
    // Animate without full re-render
    var cardEl = document.querySelector('.day-card[data-card-id="' + cardId + '"]');
    if (cardEl) {
      cardEl.classList.toggle('collapsed', !!collapsed[cardId]);
    }
  },

  getMealChoice(mealId) {
    return StorageManager.getValue('mealChoice_' + mealId, 0);
  },

  calculateDayMacros() {
    var totals = { kcal: 0, prot: 0, carb: 0, fat: 0 };
    var cardIds = this.getCardsForToday();
    for (var i = 0; i < cardIds.length; i++) {
      var card = DAILY_CARDS[cardIds[i]];
      if (card && card.mealId && MEAL_OPTIONS[card.mealId]) {
        var mealData = MEAL_OPTIONS[card.mealId];
        var choiceIdx = this.getMealChoice(card.mealId);
        if (mealData.options && mealData.options[choiceIdx]) {
          var opt = mealData.options[choiceIdx];
          totals.kcal += opt.kcal || 0;
          totals.prot += opt.prot || 0;
          totals.carb += opt.carb || 0;
          totals.fat += opt.fat || 0;
        }
      }
    }
    return totals;
  },

  calculateStreak() {
    var streak = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var date = new Date(today);
      date.setDate(date.getDate() - i);
      var dateStr = date.toISOString().split('T')[0];
      var data = StorageManager.getForDate('timeline', dateStr);
      if (!data) {
        data = StorageManager.getForDate('checklist', dateStr);
      }
      if (!data) {
        if (i === 0) continue;
        break;
      }
      var total = Object.keys(data).length;
      var checked = Object.values(data).filter(function(v) { return v; }).length;
      if (total > 0 && (checked / total) >= 0.5) {
        streak++;
      } else {
        if (i === 0) continue;
        break;
      }
    }
    return streak;
  },

  updateStreak() {
    var streak = this.calculateStreak();
    StorageManager.setValue('streak', streak);
    BadgeManager.checkAll();
  },

  render() {
    var container = document.getElementById('dashboard-content');
    if (!container) return;

    var schedule = this.getTodaySchedule();
    var dayType = schedule.type;
    var cardIds = this.getCardsForToday();
    var collapsed = this.getCollapsedState();
    var streak = this.calculateStreak();
    var waterCount = StorageManager.getForDate('water') || 0;
    var macros = this.calculateDayMacros();

    var html = '';

    // Mini Dashboard
    html += this.renderMiniDashboard(schedule, streak, waterCount, macros, dayType);

    // Cards
    for (var i = 0; i < cardIds.length; i++) {
      var cardId = cardIds[i];
      var cardData = DAILY_CARDS[cardId];
      if (!cardData) continue;
      var isCollapsed = !!collapsed[cardId];
      html += this.renderCard(cardId, cardData, isCollapsed);
    }

    container.innerHTML = html;
  },

  renderMiniDashboard(schedule, streak, waterCount, macros, dayType) {
    var html = '';

    // Greeting + workout label
    html += '<div class="card glass day-mini-dashboard">';
    html += '<h2>' + Utils.getContextGreeting() + '</h2>';
    html += '<div class="day-workout-label">' + schedule.label + '</div>';

    if (streak > 0) {
      html += '<div class="day-streak">';
      html += '<span>\ud83d\udd25</span>';
      html += '<span style="font-weight:700;">' + streak + '</span>';
      html += '<span style="color:var(--text-muted);">dias seguidos</span>';
      html += '</div>';
    }
    html += '</div>';

    // Power Move
    if (typeof POWER_MOVES !== 'undefined') {
      var cats = Object.keys(POWER_MOVES);
      var cat = POWER_MOVES[cats[Math.floor(Math.random() * cats.length)]];
      var move = cat.moves[Math.floor(Math.random() * cat.moves.length)];
      html += '<div class="card glass" style="border-left:3px solid var(--accent);margin-bottom:10px;padding:12px 14px;">';
      html += '<div style="font-size:0.7rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">' + cat.icon + ' Power Move \u00b7 ' + cat.label + '</div>';
      html += '<div style="font-weight:600;font-size:0.88rem;margin-bottom:4px;">' + move.name + '</div>';
      html += '<div style="color:var(--text-muted);font-size:0.8rem;line-height:1.5;">' + move.how + '</div>';
      if (move.result) {
        html += '<div style="color:var(--success);font-size:0.75rem;margin-top:4px;">' + move.result + '</div>';
      }
      html += '</div>';
    }

    // Macros bar
    var nutPhase = 'deficit';
    var targets = { kcal: 2300, prot: 150, carb: 230, fat: 65 };
    if (typeof NUTRITION_PHASES !== 'undefined') {
      var currentPhaseNum = StorageManager.getValue('currentPhase', 1);
      nutPhase = (currentPhaseNum <= 2) ? 'deficit' : 'construcao';
      var timelineType = (dayType === 'treino') ? 'treino' : 'descanso';
      targets = NUTRITION_PHASES[nutPhase][timelineType] || NUTRITION_PHASES[nutPhase].treino;
    }
    var nutPhaseLabel = (nutPhase === 'deficit') ? 'D\u00e9ficit' : 'Constru\u00e7\u00e3o';
    html += '<div class="timeline-macros">';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">~' + macros.kcal + ' / ' + targets.kcal + '</span><span class="timeline-macro-label">kcal \u00b7 ' + nutPhaseLabel + '</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.prot + ' / ' + targets.prot + 'g</span><span class="timeline-macro-label">prote\u00edna</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.carb + ' / ' + targets.carb + 'g</span><span class="timeline-macro-label">carb</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.fat + ' / ' + targets.fat + 'g</span><span class="timeline-macro-label">gordura</span></div>';
    html += '</div>';

    // Water tracker
    var waterGoal = 5;
    var waterMl = waterCount * 700;
    html += '<div class="timeline-water">';
    for (var w = 1; w <= waterGoal; w++) {
      html += '<div class="timeline-bottle' + (w <= waterCount ? ' filled' : '') + '" data-bottle="' + w + '"></div>';
    }
    html += '<span class="timeline-water-label">' + (waterMl / 1000).toFixed(1) + 'L / 3.5L</span>';
    html += '</div>';

    return html;
  },

  renderCard(cardId, cardData, isCollapsed) {
    var html = '';
    html += '<div class="day-card' + (isCollapsed ? ' collapsed' : '') + '" data-card-id="' + cardId + '">';

    // Header
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">' + cardData.icon + '</span>';
    html += '<span class="day-card-time">' + cardData.time + '</span>';
    html += '<span class="day-card-title">' + cardData.title + '</span>';
    html += '<span class="day-card-arrow">\u25bc</span>';
    html += '</div>';

    // Body
    html += '<div class="day-card-body">';

    // Intro
    if (cardData.content && cardData.content.intro) {
      var intro = cardData.content.intro;
      if (intro === 'dynamic:workout_intro') {
        intro = this.getWorkoutIntro();
      }
      html += '<p class="day-card-intro">' + intro + '</p>';
    }

    // Meal card
    if (cardData.mealId) {
      html += this.renderMealContent(cardData.mealId);
    }

    // Supplements
    if (cardData.content && cardData.content.supplements) {
      html += '<div class="day-card-supplements">' + cardData.content.supplements.replace(/\n/g, '<br>') + '</div>';
    }

    // Steps
    if (cardData.content && cardData.content.steps) {
      if (cardData.content.steps === 'dynamic:skincare_morning') {
        html += this.renderSkincareSteps(SKINCARE_ROUTINE.morning.steps);
      } else if (cardData.content.steps === 'dynamic:workout') {
        html += this.renderWorkoutSteps();
      } else if (Array.isArray(cardData.content.steps)) {
        html += this.renderSteps(cardData.content.steps);
      }
    }

    html += '</div>'; // end body
    html += '</div>'; // end card
    return html;
  },

  renderSteps(steps) {
    var html = '';
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name">' + step.name + '</span>';
      if (step.duration) {
        html += '<span class="day-card-step-duration">' + step.duration + '</span>';
      }
      html += '</div>';

      var desc = step.description;
      // Handle dynamic descriptions
      if (desc === 'dynamic:skincare_night') {
        html += this.renderSkincareSteps(SKINCARE_ROUTINE.night.steps);
      } else if (desc === 'dynamic:cooldown') {
        html += this.renderCooldownSteps();
      } else {
        html += '<div class="day-card-step-desc">' + desc + '</div>';
      }

      if (step.why) {
        html += '<div class="day-card-why">' + step.why + '</div>';
      }
      html += '</div>';
    }
    return html;
  },

  renderMealContent(mealId) {
    var mealData = MEAL_OPTIONS[mealId];
    if (!mealData) return '';

    var choiceIdx = this.getMealChoice(mealId);
    var html = '';

    // Option buttons
    html += '<div class="day-card-meal-options">';
    for (var i = 0; i < mealData.options.length; i++) {
      html += '<button class="day-card-meal-opt' + (i === choiceIdx ? ' active' : '') + '" ';
      html += 'data-meal-id="' + mealId + '" data-opt-idx="' + i + '">';
      html += 'Op\u00e7\u00e3o ' + (i + 1);
      html += '</button>';
    }
    html += '</div>';

    // Selected option details
    var opt = mealData.options[choiceIdx];
    if (opt) {
      html += '<div class="day-card-meal-info">';
      html += '<strong>' + opt.name + '</strong>';
      if (opt.fem) html += ' <span class="fem-tag">fem</span>';
      html += '</div>';
      html += '<div class="day-card-meal-macros">';
      html += opt.kcal + ' kcal \u00b7 ' + opt.prot + 'g prot \u00b7 ' + opt.carb + 'g carb \u00b7 ' + opt.fat + 'g fat';
      html += '</div>';

      // Ingredients
      if (opt.ingredients && opt.ingredients.length > 0) {
        html += '<div style="margin-top:8px;font-size:0.8rem;color:var(--text);line-height:1.6;">';
        for (var j = 0; j < opt.ingredients.length; j++) {
          var ing = opt.ingredients[j];
          html += '\u2022 ' + ing[0] + ' \u2014 ' + ing[1] + '<br>';
        }
        html += '</div>';
      }
    }

    return html;
  },

  renderSkincareSteps(steps) {
    var html = '';
    var dayOfWeek = new Date().getDay();
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      // Skip retinol if not the right day
      if (step.days && step.days.indexOf(dayOfWeek) === -1) {
        continue;
      }
      html += '<div class="day-card-skincare-step">';
      html += '<div class="day-card-skincare-product">' + step.emoji + ' ' + step.product + '</div>';
      html += '<div class="day-card-skincare-howto">' + step.howTo + '</div>';
      html += '<div class="day-card-skincare-why">' + step.why + '</div>';
      html += '</div>';
    }
    return html;
  },

  getWorkoutIntro() {
    var schedule = this.getTodaySchedule();
    var phase = StorageManager.getValue('currentPhase', 1);
    if (!schedule.workout) return 'Hoje n\u00e3o tem treino de muscula\u00e7\u00e3o.';
    return 'Hoje: ' + schedule.label + ' (Fase ' + phase + '). Toque abaixo pra abrir o treino completo com s\u00e9ries, reps e timer.';
  },

  renderWorkoutSteps() {
    var schedule = this.getTodaySchedule();
    var phase = StorageManager.getValue('currentPhase', 1);
    var html = '';

    if (!schedule.workout) return '<p style="color:var(--text-muted);">Sem treino hoje.</p>';

    // Link to full workout
    html += '<div class="day-card-workout-link" style="padding:14px;text-align:center;border-radius:var(--radius-sm);background:rgba(194,58,58,0.1);cursor:pointer;margin-bottom:12px;">';
    html += '<div style="font-size:1.2rem;margin-bottom:4px;">\ud83d\udcaa</div>';
    html += '<div style="font-weight:600;color:var(--primary-light);">Abrir Treino Completo</div>';
    html += '<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">' + schedule.label + ' \u2014 Fase ' + phase + '</div>';
    html += '</div>';

    // Quick summary of exercises if available
    var phaseKey = 'fase' + phase;
    if (WORKOUTS[phaseKey]) {
      var workoutKey = null;
      var workouts = WORKOUTS[phaseKey];
      // Find the workout matching today
      for (var key in workouts) {
        if (key === 'name' || key === 'objective' || key === 'frequency' || key === 'duration') continue;
        if (workouts[key] && workouts[key].name && workouts[key].name.indexOf(schedule.workout) !== -1) {
          workoutKey = key;
          break;
        }
      }
      // Fallback: try matching by workout key patterns
      if (!workoutKey) {
        var workoutMap = {
          'Lower A': 'lowerA',
          'Upper': 'upper',
          'Lower B': 'lowerB',
          'Gluteo Isolado': 'gluteoIsolado'
        };
        workoutKey = workoutMap[schedule.workout];
      }

      if (workoutKey && workouts[workoutKey] && workouts[workoutKey].exercises) {
        var exercises = workouts[workoutKey].exercises;
        html += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">Exerc\u00edcios de hoje:</div>';
        html += '<div style="font-size:0.82rem;line-height:1.7;">';
        for (var i = 0; i < exercises.length; i++) {
          var ex = exercises[i];
          html += (i + 1) + '. ' + ex.name;
          if (ex.sets && ex.reps) {
            html += ' <span style="color:var(--text-muted);">\u2014 ' + ex.sets + 'x' + ex.reps + '</span>';
          }
          html += '<br>';
        }
        html += '</div>';
      }
    }

    return html;
  },

  renderCooldownSteps() {
    var schedule = this.getTodaySchedule();
    var html = '<div style="font-size:0.83rem;line-height:1.65;">';

    if (schedule.cooldown === 'lower') {
      html += '<strong>Alongamento Lower Body:</strong><br>';
      html += '1. Flexor do quadril (30s cada lado) \u2014 ajoelhe, empurre quadril pra frente<br>';
      html += '2. Posterior de coxa (30s cada lado) \u2014 perna esticada, incline o tronco<br>';
      html += '3. Gl\u00fateo (Pombo) (30s cada lado) \u2014 perna cruzada na frente, desça o tronco<br>';
      html += '4. Quadr\u00edceps (30s cada lado) \u2014 puxe o p\u00e9 atr\u00e1s at\u00e9 o gl\u00fateo<br>';
      html += '5. Adutores (30s) \u2014 pernas abertas, incline pro lado<br>';
    } else if (schedule.cooldown === 'upper') {
      html += '<strong>Alongamento Upper Body:</strong><br>';
      html += '1. Peito (30s cada lado) \u2014 bra\u00e7o na parede, gire o corpo pro lado oposto<br>';
      html += '2. Costas (30s) \u2014 abrace os joelhos, arredonde as costas<br>';
      html += '3. Ombros (30s cada lado) \u2014 bra\u00e7o cruzado na frente, puxe com o outro<br>';
      html += '4. Tr\u00edceps (30s cada lado) \u2014 bra\u00e7o atr\u00e1s da cabe\u00e7a, puxe o cotovelo<br>';
      html += '5. Pesco\u00e7o (20s cada lado) \u2014 incline a cabe\u00e7a pro ombro suavemente<br>';
    } else {
      html += 'Alongamento leve geral: 5 minutos de movimentos suaves.<br>';
    }

    html += '</div>';
    return html;
  }
};
```

- [ ] **Step 2: Update App.init() to use DayManager**

In app.js, in the `App.init()` method (line 52), change:
```js
// Old:
Dashboard.init();
// New:
DayManager.init();
```

- [ ] **Step 3: Verify app loads without errors**

Open app in browser, confirm the Inicio tab renders with the new cards. Test collapse/expand by clicking card headers. Test meal option switching. Test water tracker.

- [ ] **Step 4: Commit**

```bash
git add app.js
git commit -m "feat: DayManager substitui Dashboard — cards narrativos com collapse/expand"
```

---

### Task 5: Update nav label + cleanup

**Files:**
- Modify: `index.html` (~line 3443)
- Modify: `data.js` (remove DAILY_TIMELINE)

- [ ] **Step 1: Change nav label from "Inicio" to "Meu Dia"**

In index.html, find the bottom nav inicio button (~line 3443) and change the label:

```html
<!-- Old -->
<span class="nav-label">Início</span>
<!-- New -->
<span class="nav-label">Meu Dia</span>
```

Also change the icon:
```html
<!-- Old -->
<span class="nav-icon">🏠</span>
<!-- New -->
<span class="nav-icon">📋</span>
```

- [ ] **Step 2: Remove DAILY_TIMELINE from data.js**

Delete lines 1741-1764 (the `DAILY_TIMELINE` object). It is fully replaced by `DAILY_CARDS` + `DAY_CARD_LAYOUTS`.

- [ ] **Step 3: Remove backwards-compat code from Task 1 Step 2**

In app.js, remove the temporary `getTimelineType()` mapping if it was added. The `DayManager` uses `getDayType()` directly and does not reference `DAILY_TIMELINE`.

- [ ] **Step 4: Verify everything works end-to-end**

Test:
- App loads, "Meu Dia" tab shows cards
- Collapse/expand works on each card
- Meal options switch correctly and macros update
- Water tracker works
- Navigate to other tabs and back — cards re-render
- Test on different simulated days if possible (change system clock or modify getDayType temporarily)
- No console errors

- [ ] **Step 5: Commit**

```bash
git add index.html data.js app.js
git commit -m "feat: aba Meu Dia completa — label atualizado, DAILY_TIMELINE removido"
```

---

### Task 6: Final polish and integration test

**Files:**
- Possibly: `index.html`, `app.js`, `data.js` (minor fixes only)

- [ ] **Step 1: Test all day types**

Temporarily set `getDayType()` to return each type and verify:
- `"treino"` — 10 cards with workout + pre-treino
- `"descanso-ativo"` — yoga + rebolar card instead of treino
- `"ativacao-leve"` — ativacao card, no pos-treino
- `"descanso-total"` — descanso card, fewer cards total

Revert `getDayType()` after testing.

- [ ] **Step 2: Test mobile responsiveness**

Open in Chrome DevTools mobile view. Cards should fill width, text readable, collapse smooth.

- [ ] **Step 3: Fix any issues found**

Apply fixes as needed.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: ajustes finais aba Meu Dia"
```
