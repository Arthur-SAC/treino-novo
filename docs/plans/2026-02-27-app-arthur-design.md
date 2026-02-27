# Design — App de Transformacao Corporal Arthur

## Decisoes Tecnicas

| Decisao | Escolha | Motivo |
|---------|---------|--------|
| Estrutura | Arquivos separados (HTML, JS, SW, manifest) | Organizacao e manutencao |
| Framework | Vanilla JS | Spec pede, sem dependencias |
| Graficos | Chart.js via CDN | Spec permite |
| Timer | Web Worker inline (blob URL) | Precisao com tela bloqueada |
| Navegacao | SPA com hash routing | Sem reload, funciona no GitHub Pages |
| CSS | Inline no HTML | Menos requests |
| Fontes | Google Fonts (Playfair Display + Nunito) | Spec pede |
| Videos | YouTube embed nocookie em modal | Spec pede |
| Dados local | localStorage (cache rapido) | Performance |
| Dados nuvem | Firebase Firestore (sync) | Protege contra limpeza do Brave |
| Auth | Google Sign-In | Login simples, 1 clique |
| Hospedagem | GitHub Pages | Gratis, HTTPS, PWA funciona |
| PWA | Service Worker cache-first | Offline no Poco X7 Pro |
| Backup | Export/Import JSON (extra) | Seguranca adicional |

## Estrutura de Arquivos

```
treino-novo/
├── index.html          # Estrutura HTML + CSS embutido
├── app.js              # Logica principal
├── data.js             # Dados (treinos, receitas, dicas, videos)
├── firebase-config.js  # Config Firebase + sync
├── sw.js               # Service Worker
├── manifest.json       # PWA
└── docs/plans/         # Design e planos
```

## Componentes Principais

1. Router — Navegacao por hash entre 5 abas
2. VideoModal — Modal reutilizavel com YouTube embed
3. TimerEngine — Web Worker para timer preciso + vibracao + som
4. StorageManager — localStorage + Firebase sync + export/import JSON
5. ChecklistManager — Checklist diario com reset por dia
6. ChartManager — Graficos de progresso com Chart.js
7. AuthManager — Google Sign-In via Firebase Auth

## Dispositivo Alvo

- Poco X7 Pro (Android)
- Brave browser
- Mobile-first, PWA instalavel
