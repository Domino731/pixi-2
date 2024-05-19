import { Container, Texture, TilingSprite } from 'pixi.js';
import { GAME } from '../../config/game';

export class ContentContainer extends Container {
    constructor() {
        super();
        const spriteBg = new TilingSprite(
            Texture.from('black-red-gradient'),
            GAME.WINDOW_WIDTH,
            GAME.WINDOW_HEIGHT,
        );
        const scaleX = window.innerWidth / spriteBg.width; // Dla szerokości
        const scaleY = 1.2;
        spriteBg.scale.set(scaleX, scaleY);
        this.addChild(spriteBg);

    }
}
