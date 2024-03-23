import { Container, Graphics, Text } from "pixi.js";
import { GAME_COLORS } from "../../../../const/styles";

export class SectionTitle extends Container {
    private containerWidth: number;
    private fontSize = 26;

    constructor(){
        super();
        this.position.set(800, 800);
          this.containerWidth = 200;
        this.setText();
        this.setLine();
    }


    private setText(){
        const text = new Text('Statictics', {
            fontFamily: 'Arial',
            fontSize: this.fontSize,
            fill: GAME_COLORS.yellow,
            align: 'center',
            fontWeight: 'bold',
            letterSpacing: 2
        });
        text.position.set(0, 0);
        this.addChild(text);
    }

    private setLine(){
        const x = 0;
        const y = this.fontSize + 6;
        
        // line
        const g = new Graphics();
        g.beginFill(GAME_COLORS.yellow);
        g.drawRect(x,y, this.containerWidth, 1)
        g.endFill();
        // decoration
        const g2 = new Graphics();
        g2.beginFill(GAME_COLORS.yellow);
        const points = [
            x, y, 
            x, y + 6, 
            x + 100 - 20, y + 6, 
            x + 100, y
        ];
        g2.drawPolygon(points)
        g2.endFill();

        this.addChild(g);
        this.addChild(g2)
    }
}