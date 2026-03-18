# TP 7 — Comprendre JSX, la composition avancée et les tests React

## 📚 Cours
Développement Front-End moderne avec React

---

## Contexte
#### Ce TP s'inscrit dans le cadre du cours Développement Front-End moderne avec React.  
#### Il permet de comprendre JSX, créer des composants réutilisables avec HOC et Render Props, et écrire des tests unitaires et d’intégration avec Jest et Testing Library.  
#### Le but est de pratiquer la composition de composants et de garantir la qualité du code via des tests automatisés.

---

## Objectifs
#### - Comprendre ce qu’est JSX et comment il est transformé en JavaScript pur
#### - Créer des composants réutilisables avec Higher-Order Components (HOC) et Render Props
#### - Écrire des tests unitaires et d’intégration pour vérifier le fonctionnement des composants

---

## Technologies utilisées
#### - React 18
#### - JavaScript ES6+
#### - Jest
#### - React Testing Library
#### - Node.js & npm
#### - Create React App

---

## 📁 Structure du projet

<img width="1364" height="866" alt="image" src="https://github.com/user-attachments/assets/f8f93bf4-c90c-4ab6-b5d6-4e17b5ce0eb0" />

## Installation et lancement
#### - Cloner le projet :
git clone https://github.com/nassima-brina/TP-7-Comprendre-JSX-la-composition-avanc-e-et-les-tests-React/tree/main

#### - Entrer dans le dossier :
 cd mon-tp-react-jsx-tests
#### - Installer les dépendances :
npm install

#### - Lancer le serveur de développement :
npm start

#### - L’application démarre sur : http://localhost:3000

## Composants et fonctionnalités créés
### JSXDemo.js

#### Affiche un titre avec JSX et un autre avec React.createElement pour montrer la transformation de JSX.

### Button.js & withLogging.js

#### withLogging : HOC qui affiche les props dans la console avant de rendre le composant.

#### ButtonWithLogging : Bouton utilisant le HOC pour le logging.

### DataLoader.js

### Composant utilisant Render Props pour afficher dynamiquement une liste de données.

### Greeting.js & Greeting.test.js

#### Composant qui affiche un message de bienvenue.

#### Test unitaire vérifiant le rendu correct du message.

### Counter.js & Counter.test.js

### Composant compteur avec bouton d’incrémentation.

#### Test d’intégration vérifiant que le compteur s’incrémente au clic.

## Aperçu de l’application
<img width="1827" height="842" alt="image" src="https://github.com/user-attachments/assets/ed3a4689-36e4-459d-bbac-2d688cff6b0a" />

<img width="1882" height="862" alt="image" src="https://github.com/user-attachments/assets/8271a2e3-561e-4746-a6cd-4bb17c01a5df" />

<img width="1840" height="779" alt="image" src="https://github.com/user-attachments/assets/606888ed-909c-4ad1-b476-106f7cd1b4a5" />

<img width="1745" height="737" alt="image" src="https://github.com/user-attachments/assets/b71556d2-3a3d-4f62-bc80-3070234136c2" />

<img width="1697" height="483" alt="image" src="https://github.com/user-attachments/assets/dd41e0b0-8402-4e0d-8aa7-bc458288abef" />


#### Affichage JSX et JavaScript pur dans JSXDemo

#### Bouton avec logging des props dans la console

#### Liste dynamique avec DataLoader

#### Composants testés automatiquement via Jest et Testing Library


## Conclusion

#### Ce TP a permis de :

#### - Comprendre la structure interne de JSX

#### - Créer des composants réutilisables avec HOC et Render Props

#### - Écrire des tests unitaires et d’intégration pour garantir la qualité du code
