import BaseContainer from './baseContainer';
import TextComponent from '../components/textComponent';
import BunnyComponent from '../components/bunnyComponent';
import AppConstants from '../constants/app';

const amountTextTemplate = value => `Textures: ${value}`;
const fpsTextTemplate = value => `FPS: ${value}`;

const fontStyle = {
  fontSize: 38,
  fill: 'red',
  dropShadow: true,
  dropShadowDistance: 2,
  dropShadowBlur: 5,
};

class AppContainer extends BaseContainer {
  load() {
    this.bunnies = [];

    const textX = AppConstants.width / 2;
    const textY = AppConstants.height / 2;

    this.amountText = new TextComponent();
    this.amountText.anchor.set(0.5, 1);
    this.amountText.style = fontStyle;
    this.amountText.x = textX;
    this.amountText.y = textY;
    this.addChild(this.amountText);

    this.fpsText = new TextComponent();
    this.fpsText.anchor.set(0.5, 1);
    this.fpsText.style = fontStyle;
    this.fpsText.x = textX;
    this.fpsText.y = textY + this.fpsText.height;
    this.addChild(this.fpsText);
  }

  addBunny() {
    const bunny = new BunnyComponent();
    this.addChildAt(bunny, 0);
    this.bunnies.push(bunny);
  }

  render() {
    this.addBunny();
    this.amountText.text = amountTextTemplate(this.bunnies.length);
    this.fpsText.text = fpsTextTemplate(AppConstants.fps);

    this.bunnies.forEach((bunny) => {
      bunny.render();
    });
  }
}

export default AppContainer;