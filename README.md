# Sabour Ghilas — Portfolio

Site web portfolio personnel, bilingue (FR/EN), dark mode.

**URL live :** https://Ghilas-Sab.github.io/portfolio

## Stack

| Technologie | Rôle |
|---|---|
| React 18 + TypeScript | Framework UI |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling dark mode |
| React Router (HashRouter) | Navigation SPA |
| react-i18next | Internationalisation FR/EN |
| GitHub Pages | Hébergement |

## Commandes

```bash
npm run dev       # Serveur de développement (localhost:5173/portfolio/)
npm run build     # Build production (tsc + vite)
npm run preview   # Prévisualiser le build localement
npm run lint      # ESLint
npm run format    # Prettier
npm run deploy    # Build + déploiement sur GitHub Pages
```

## Déploiement

Le script `npm run deploy` :
1. Lance `npm run build` (TypeScript + Vite)
2. Publie le dossier `dist/` sur la branche `gh-pages` via le package `gh-pages`

La branche `gh-pages` est gérée automatiquement — ne pas la modifier manuellement.
