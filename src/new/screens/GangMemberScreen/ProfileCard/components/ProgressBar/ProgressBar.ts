import { CONFIG, ProgressBarUnion } from "./ProgressBar.const";
import { ProgressBarOptions } from "./ProgressBar.types";
import { Container, Graphics, Text } from "pixi.js";

export class ProgresBar extends Container {
    constructor({width, variant, progress}: ProgressBarOptions){
        super();
        this.addChild(this.createBackground(width, variant, progress));
        this.addChild(this.createText(width));
    }

    private createText(width: number){
        const text = new Text("100 / 1000",{
            fill: 'white',
            stroke: 'black',
            strokeThickness: 1,
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'italic'
        })
        const x =  Math.floor(width / 2) - Math.floor(text.width / 2);
        const y = Math.floor(CONFIG.HEIGHT / 2) - Math.floor(text.height / 2);
        text.position.set(x,y);
        return text;
    }

    private createBackground(width: number, variant: ProgressBarUnion, progress: number){
        const g = new Graphics();
        const variantPalette = CONFIG.VARIANTS[variant];
        g.beginFill(CONFIG.BACKGROUND);
        g.lineStyle(CONFIG.BORDER_WIDTH, variantPalette.BORDER_COLOR)
        g.drawRect(0,0,  width, CONFIG.HEIGHT)
        g.endFill();

        g.beginFill(variantPalette.BACKGROUND);
        g.drawRect(0,0,  (progress / 100) * width, CONFIG.HEIGHT)
        g.endFill();


        return g;
    }
}