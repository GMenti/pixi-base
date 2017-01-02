import { autoDetectRenderer } from 'pixi.js';
import appConstants from './constants/app';
import screenHelper from './helpers/screenHelper';

const renderer = autoDetectRenderer(appConstants.width, appConstants.height, {
  backgroundColor : 0x1099bb,
});

renderer.autoResize = true;

document.body.appendChild(renderer.view);

window.addEventListener('resize', () => {
  appConstants.width = screenHelper.getWidth();
  appConstants.height = screenHelper.getHeight();

  renderer.resize(
    screenHelper.getWidth(),
    screenHelper.getHeight()
  );
});

export default renderer;