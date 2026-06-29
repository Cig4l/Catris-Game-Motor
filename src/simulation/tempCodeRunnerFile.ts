if (Math.random() < 0.1) {
      const m = moves[Math.floor(Math.random() * moves.length)];
      engine.actions[m]();
    }