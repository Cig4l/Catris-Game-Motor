# 🎮 Tetris Engine

C'est le **cerveau du jeu** : il gère toutes les règles (déplacements, chute, lignes, score…).
Il **n'affiche rien**. Votre travail côté front : **afficher** ce qu'il calcule et **brancher
les boutons** dessus.

L'idée tient en deux phrases :
- Vous **lisez** `state` pour dessiner le jeu à l'écran.
- Vous **appelez** `actions` quand le joueur appuie sur un bouton.

C'est tout. Pas besoin de comprendre l'intérieur du moteur.

---

## 🚀 Installation

```bash
npm install github:equipe/tetris-engine
```

*(remplacez par le vrai lien du repo)*

---

## ⚡ Comment l'utiliser

Un seul outil à connaître : le hook `useTetris`.

```tsx
import { useTetris } from '@equipe/tetris-engine';

function Game() {
  const { state, actions } = useTetris();

  // state   -> à AFFICHER
  // actions -> à APPELER sur les boutons
  // La chute des pièces est automatique, vous n'avez rien à gérer pour ça.
}
```

---

## 🧩 Exemple

```tsx
import { View, Text, Pressable } from 'react-native';
import { useTetris } from '@equipe/tetris-engine';

function Game() {
  const { state, actions } = useTetris();

  return (
    <View>
      <Text>Score : {state.score}</Text>

      {/* Le plateau : on dessine chaque case */}
      {state.board.map((ligne, y) => (
        <View key={y} style={{ flexDirection: 'row' }}>
          {ligne.map((caseDuPlateau, x) => (
            <View key={x} style={{ /* couleur selon caseDuPlateau */ }} />
          ))}
        </View>
      ))}

      {/* Les boutons : on appelle une action */}
      <Pressable onPress={actions.moveLeft}><Text>◀️</Text></Pressable>
      <Pressable onPress={actions.moveRight}><Text>▶️</Text></Pressable>
      <Pressable onPress={actions.rotateCW}><Text>↻</Text></Pressable>
      <Pressable onPress={actions.hardDrop}><Text>⏬</Text></Pressable>

      {state.status === 'idle' && (
        <Pressable onPress={actions.start}><Text>Jouer</Text></Pressable>
      )}
    </View>
  );
}
```

---

## 📺 Ce que contient `state` (à afficher)

| Champ | C'est quoi |
|---|---|
| `board` | La grille du jeu. Chaque case = une couleur de pièce, ou `null` si vide. |
| `active` | La pièce qui tombe. `active.cells` = les cases à colorier. |
| `ghost` | L'ombre qui montre où la pièce va atterrir. |
| `hold` | La pièce mise de côté. |
| `queue` | Les prochaines pièces (le « NEXT »). |
| `status` | `idle` (accueil), `running` (en jeu), `paused`, `gameover`. |
| `score` / `level` / `lines` | Pour afficher les compteurs. |

⚠️ On ne **modifie jamais** `state` à la main. On passe toujours par `actions`.

---

## 🎮 Ce que vous pouvez appeler (`actions`)

| Action | Ce que ça fait |
|---|---|
| `start()` | Lance une partie. |
| `pause()` / `resume()` | Met en pause / reprend. |
| `reset()` | Retour à l'accueil. |
| `moveLeft()` / `moveRight()` | Déplace la pièce à gauche / droite. |
| `softDrop()` | Fait descendre la pièce un peu plus vite. |
| `hardDrop()` | Fait tomber la pièce d'un coup, tout en bas. |
| `rotateCW()` / `rotateCCW()` | Tourne la pièce (horaire / anti-horaire). |
| `hold()` | Met la pièce de côté pour plus tard. |

---

## 🤝 Qui fait quoi

- **Le moteur** s'occupe des règles : déplacements, chute, lignes, score.
- **Vous (le front)** vous occupez de l'écran : couleurs, boutons, sons, mise en page.
  C'est aussi vous qui décidez quel geste appelle quelle action (ex. *glisser à gauche* → `moveLeft()`).

---

## 🚦 Important : le moteur est en cours de construction

Vous pouvez **déjà commencer à brancher l'affichage**, les noms ne changeront plus.
Mais certaines règles ne sont **pas encore codées** côté moteur :

- les pièces ne se bloquent pas encore entre elles ;
- les lignes pleines ne disparaissent pas encore ;
- la rotation ne change pas encore la forme à l'écran.

👉 Si vous voyez ça, **ce n'est pas un bug de votre côté** : c'est normal pour l'instant.
Pour toute question, pinguez le responsable du moteur.
