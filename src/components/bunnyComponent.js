import { Sprite } from 'pixi.js';
import bunnyTexture from '../textures/bunnyTexture';
import appConstants from '../constants/app';

class BunnyComponent extends Sprite {
  constructor() {
    super(bunnyTexture);
    this.x = Math.random() * (appConstants.width - this.width);
    this.y = Math.random() * (appConstants.height - this.height);
    this.increasingX = true;
    this.increasingY = true;
  }

  render() {
    if (this.x <= 0) {
      this.increasingX = true;
    } else if (this.x + this.width >= appConstants.width) {
      this.increasingX = false;
    }

    if (this.y <= 0) {
      this.increasingY = true;
    } else if (this.y + this.height >= appConstants.height) {
      this.increasingY = false;
    }

    if (this.increasingX) {
      this.x++;
    } else {
      this.x--;
    }

    if (this.increasingY) {
      this.y++;
    } else {
      this.y--;
    }
  }
}

export default BunnyComponent;