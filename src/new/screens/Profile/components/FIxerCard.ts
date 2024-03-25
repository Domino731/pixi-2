import { Container, Graphics, Text } from "pixi.js";
import { GAME_COLORS } from "../../../../const/styles";
import { Button, } from "@pixi/ui";

interface IFixerCard {
    width: number;
    x: number;
    y: number;
    label: string;
    onClick: () => void;
}

export class FixerCard extends Container {
    constructor({width,x ,y, label}: IFixerCard){
        super()
        this.position.set(x,y);
        this.setStyles(width, label)
    }


    private setStyles(width: number, label: string){
        const g = new Graphics();
        g.beginFill()
        g.lineStyle(1, GAME_COLORS.yellow)
        g.drawRect(0,0,width,50)
        g.endFill();

        const text = new Text(label, {
           fill: GAME_COLORS.yellow,
           fontSize: 20
        })
    
        g.addChild(text)
        const button = new Button(g);

        this.addChild(button.view);
    }


}