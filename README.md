# Hors Champ — Drop 01 / Outside System

Landing page de la marque fictive **Hors Champ** (atelier « Product Building End to End — Application Deployment »).
Objectif : présenter le Drop 01 et collecter des inscriptions à la liste d'accès anticipé.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée (en général http://localhost:5173).

## Structure

```
index.html        → toutes les sections de la page
src/style.css     → couleurs, polices et mise en page (Design System Hors Champ)
src/main.js       → envoi du formulaire d'accès anticipé
netlify.toml      → réglages de build pour Netlify
```

Sections : announcement bar, header, hero Drop 01, manifeste, silhouettes (lookbook), produits, détails de construction, accès anticipé, footer.

## Formulaire

Le formulaire utilise **Netlify Forms** : les inscriptions apparaissent dans Netlify, onglet *Forms*, formulaire `acces-anticipe`. En local, l'envoi ne fonctionne pas, c'est normal.

## Déploiement

Chaque `git push` sur `main` déclenche un nouveau déploiement sur Netlify. Une branche (par exemple `iteration/drop-hero`) obtient sa propre preview.

## Rappel

Marque fictive, produits de démonstration. Les prix, matières exactes, stocks et dates restent à confirmer. Les visuels sont des emplacements en attendant les vraies photos.
