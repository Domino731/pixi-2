import { Container, Text, Texture, TilingSprite } from 'pixi.js';
import { NAVIGATION_BAR_CONFIG } from '../../utils/navigation-bar';
import { CyberButton } from './Button';

export class ContentContainer extends Container {
    constructor(title: string) {
        super();
        this.width = 400;
        this.height = 400;
        this.x = NAVIGATION_BAR_CONFIG.styles.width;
        // const skeleton = Assets.cache
        // Assets.load('myTexture.png').then(texture => {
        //      const sprite = new Sprite(texture);
        //     console.log(sprite);
        // });

        this.infoButton = new CyberButton({
            label: 'Profile',
            onClick: () => console.log(123),

        });
        this.addChild(this.infoButton.container);
        this.sprite = new TilingSprite(
            Texture.from('black-red-gradient'),
            window.innerWidth - 300,
            window.innerHeight,
        );
        const scaleX = window.innerWidth / this.sprite.width; // Dla szerokości
        const scaleY = window.innerHeight / this.sprite.width; // Dla wysokości
        console.log(scaleX, scaleY);
        this.sprite.scale.set(scaleX, 1.2);
        this.addChild(this.sprite);
        const text = new Text(title, {
            fontFamily: 'Arial',
            fontSize: 26,
            fill: 0xe8132a,
            align: 'center',
        });
        text.position.set(10 + 24, 10 + 8);
        this.addChild(text);

    }

    /** Resize the screen, fired whenever window size changes  */
    public resize(width: number, height: number) {

    }

    /** Show screen with animations */
    public async show() {

    }

    /** Hide screen with animations */
    public async hide() {

    }


    private async playRevealAnimation() {

    }
}
