# Treino App — Guia para o Claude

## Visao Geral

App PWA de treino pessoal (HTML/CSS/JS puro, sem framework). Arquivos principais:

- `data.js` — dados de exercicios, receitas, skincare, etc.
- `app.js` — logica do app (VideoModal, Timer, StorageManager, etc.)
- `index.html` — markup + CSS inline
- `sw.js` — Service Worker com cache
- `firebase-config.js` — config Firebase

---

## Como Adicionar GIFs nos Exercicios

### 1. Encontrar o GIF no ExerciseDB

Os GIFs vem do **ExerciseDB** (https://exercisedb.io). O padrao de URL eh:

```
https://static.exercisedb.dev/media/{ID}.gif
```

Onde `{ID}` eh o identificador unico do exercicio (ex: `u0cNiij`, `dzz6BiV`).

**Como achar o ID:**
- Acesse https://exercisedb.io e busque o exercicio pelo nome em ingles
- O ID do GIF fica na URL da midia do exercicio
- Exemplo: para "glute bridge", o GIF eh `https://static.exercisedb.dev/media/u0cNiij.gif`

### 2. Editar `data.js` — Campo `gifUrl`

Cada exercicio fica no objeto `EXERCISE_VIDEOS` (linha ~72 do `data.js`). A estrutura eh:

```js
"nome-do-exercicio": {
  youtubeId: "VIDEO_ID",      // ID do video no YouTube (fallback)
  gifUrl: "URL_DO_GIF",       // URL do GIF do ExerciseDB (ou null se nao tem)
  title: "Nome do Exercicio",
  tips: "Dica principal",
  commonMistakes: "Erros comuns separados por ponto."
}
```

**Para adicionar um GIF:** troque `gifUrl: null` pela URL completa:

```js
// Antes
"polichinelo": { youtubeId: "yDSMdd8hiFg", gifUrl: null, ... }

// Depois
"polichinelo": { youtubeId: "yDSMdd8hiFg", gifUrl: "https://static.exercisedb.dev/media/HtfCpfi.gif", ... }
```

### 3. Como Funciona o Sistema GIF/YouTube (app.js)

O `VideoModal` (app.js ~686) tem logica de prioridade:

1. **Se `gifUrl` existe** → mostra o GIF como demonstracao principal
   - Link "Ver video no YouTube" aparece como secundario
2. **Se `gifUrl` eh null** → mostra o iframe do YouTube diretamente
3. **Se o GIF falha ao carregar** → fallback automatico pro YouTube

Elementos no HTML (`index.html` ~3119):
```html
<div id="gif-container" class="gif-container hidden">
  <img id="gif-image" src="" alt="" class="gif-image" loading="lazy">
  <div class="gif-loading" id="gif-loading">Carregando...</div>
</div>
```

### 4. Cache de GIFs no Service Worker (sw.js)

O `sw.js` usa estrategia **cache-first** para GIFs do ExerciseDB:

```js
// Cache-first for ExerciseDB GIFs
if (url.hostname.includes('exercisedb.dev') || url.pathname.endsWith('.gif')) {
  // Busca no cache primeiro, se nao tem faz fetch e guarda no cache
}
```

Isso significa que depois do primeiro carregamento, os GIFs ficam disponiveis offline.

### 5. Checklist para Adicionar um Novo GIF

1. Buscar o exercicio no ExerciseDB e copiar o ID do GIF
2. No `data.js`, localizar o exercicio em `EXERCISE_VIDEOS`
3. Trocar `gifUrl: null` por `gifUrl: "https://static.exercisedb.dev/media/{ID}.gif"`
4. Manter o `youtubeId` como fallback (nao remover)
5. Testar se o GIF carrega abrindo o modal do exercicio no app

### 6. Exercicios que NAO Tem GIF no ExerciseDB

Alguns exercicios nao existem no ExerciseDB v1. Estes ficam com `gifUrl: null` e usam YouTube como primario. Exemplos:
- fire hydrant, donkey kick, cat-cow, pombo
- hip flexor, hip circles, leg swings, deep squat
- vacuum, prancha, prancha lateral, hip thrust, kegel

---

## Convencoes do Projeto

- JavaScript puro (ES5/ES6 misto) — sem frameworks, sem bundler
- CSS inline no `index.html` (dentro de `<style>`)
- Commits em portugues, prefixo `feat:` / `fix:` / `refactor:`
- Sem acentos nos nomes de arquivos ou IDs de exercicio (usar kebab-case)
- IDs de exercicio sao kebab-case: `glute-bridge`, `worlds-greatest-stretch`
