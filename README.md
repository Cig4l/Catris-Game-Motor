# 🎮 Game Engine (Core)

## 📌 Description
Moteur de jeu (logique métier uniquement).  
Simulation console temporaire.  
Prévu pour intégration future avec front + backend.

---

## 🧱 Architecture
src/
- core/
- models/
- services/
- utils/
- simulation/
- types/

---

## ⚙️ Prérequis
- Node.js >= 18
- npm ou yarn

---

## ▶️ Lancement
npm run sim

---

## 🧪 Principes
- logique indépendante
- code testable
- séparation des responsabilités

---

## 🧹 Style
- TypeScript strict
- pas de `any`

Nommage :
- camelCase → variables / fonctions
- PascalCase → classes
- kebab-case → fichiers
- UPPER_CASE → constantes

---

## 🔀 Git

Branches :
- feature/...
- fix/...
- refactor/...
- chore/...

Commits :
type(scope): message

Exemples :
feat(engine): add loop  
fix(damage): correct calc  
refactor(core): simplify logic  

---

## 🧠 Règles
OK :
- modulaire
- fonctions pures  

KO :
- pas de UI
- pas de global
- pas de logique dans simulation  

---

## 🔌 Évolution
Branché plus tard à front (React Native / Expo) + backend.