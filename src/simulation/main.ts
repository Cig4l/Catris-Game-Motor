import { createCatris } from "../services/engine";
import { render } from "./render";
import { gravityDelay } from "../services/scoring";


function main(): void {
  const engine = createCatris();
  const moves = ['moveLeft', 'moveRight', 'rotateCW', 'hardDrop'] as const;

  engine.actions.start();

  const draw = () => {
    process.stdout.write('\x1b[2J\x1b[H');
    process.stdout.write( '\n' + render(engine.getState()) + '\n');
  };
  engine.subscribe(draw);
  draw();

  let elapsed = 0;
  const interval = 60;

  const loop = setInterval(() => {
    const state = engine.getState();
    if (state.status === 'gameover') {
      clearInterval(loop);
      process.stdout.write('\nGame over.\n');
      return;
    }
    
    if (Math.random() < 0.1) {
      const m = moves[Math.floor(Math.random() * moves.length)];
      engine.actions[m]();
    }
    
    
    elapsed += interval;
    if (elapsed >= gravityDelay(state.level)) {
      elapsed = 0;
      engine.actions.tick();
    }
  }, interval);
}

main();