# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

markdown# 🌱 Plant Shop App

Une application React moderne pour acheter des plantes avec un système de panier interactif.

## ✨ Fonctionnalités

- 🏪 Catalogue de plantes avec filtrage par catégorie
- 🛒 Panier d'achat interactif
- 💧 Indicateurs de soins (eau, lumière)
- 📱 Design responsive et moderne
- 🎨 Interface utilisateur élégante avec animations

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/USERNAME/plant-shop-app.git

# Installer les dépendances
cd plant-shop-app
npm install

# Lancer l'application
npm start
🛠️ Technologies utilisées

React (avec Hooks)
CSS3 avec animations
JavaScript ES6+

📁 Structure du projet
src/
├── components/          # Composants React
│   ├── PlantItem.js
│   ├── ShoppingList.js
│   ├── Cart.js
│   └── Categories.js
├── styles/             # Fichiers CSS
├── datas/              # Données des plantes
└── App.js              # Composant principal
