import { autoDetectRenderer } from 'pixi.js';
import AppContainer from './containers/appContainer';
import AppConstants from './constants/app';
import renderer from './renderer';

const appContainer = new AppContainer();

let lastLoop = new Date();
let framesPerSecond = 0;

const gameLoop = () => {
  const actualLoop = new Date();

  if (actualLoop.getTime() >= lastLoop.getTime() + 1000) {
    AppConstants.fps = framesPerSecond;
    framesPerSecond = 0;
    lastLoop = actualLoop;
  }

  requestAnimationFrame(gameLoop);
  appContainer.render();
  renderer.render(appContainer);

  framesPerSecond++;
};

gameLoop();