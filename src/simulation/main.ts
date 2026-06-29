import { CatrisEngine, createCatris } from "../services/engine";
import { render } from "./render";
import { gravityDelay } from "../services/scoring";

const isAuto : boolean = false;

function setupInput(engine: CatrisEngine, onQuit: () => void): void {
  const stdin = process.stdin;
  stdin.setRawMode(true); // every input is consumed immediately 
  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', (key: string) => {
    switch (key) {
      case '\u001b[D': engine.actions.moveLeft();  break; // arrow left
      case '\u001b[C': engine.actions.moveRight(); break; // arrow right
      case '\u001b[A': engine.actions.rotateCW();  break; // arrow top
      case '\u001b[B': engine.actions.tick();      break; // arrow bottom (soft drop)
      case ' ':        engine.actions.hardDrop();  break; // space 
      case 'p':        engine.actions.pause();     break;
      case 'r':        engine.actions.resume();    break;
      case '\u0003':   onQuit(); break;                   // Ctrl-C
      case 'q':        onQuit(); break;
    }
  });
}

function cleanup(loop: NodeJS.Timeout): void {
  clearInterval(loop);
  process.stdin.setRawMode(false);
  process.stdin.pause();
  process.stdout.write('\n');
  process.exit(0);
}


function main(): void {
  const engine = createCatris();

  const moves = ['moveLeft', 'moveRight', 'rotateCW', 'hardDrop'] as const;
  if(!isAuto) setupInput(engine, () => cleanup);

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
    
    if(isAuto){
      if (Math.random() < 0.1) {
        const m = moves[Math.floor(Math.random() * moves.length)];
        engine.actions[m]();
      }
    }
    
    
    elapsed += interval;
    if (elapsed >= gravityDelay(state.level)) {
      elapsed = 0;
      engine.actions.tick();
    }
  }, interval);
}

main();

