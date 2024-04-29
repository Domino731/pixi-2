import { ContentContainer } from '../../components/ContentContainer';
import { Graphics } from 'pixi.js';
import { GAME_COLORS } from '../../../const/styles';

export class GangsMembersListScreen extends ContentContainer {
    constructor() {
        super();
        this.addChild(this.createGangMemberCard());
    }

    private createGangMemberCard() {
        const x = 700;
        const y = 20;
        const width = 400;
        const imageHeight = 500;
        const sharpOffset = 30;
        const nickY = y + imageHeight;
        const nickX = x;
        const nickHeigth = 50;

        const g = new Graphics();
        // frame
        g.beginFill(0xFF0000, 0);
        g.lineStyle(2, GAME_COLORS.red1);
        g.drawPolygon([
            x + sharpOffset, y,
            x, y + sharpOffset,
            x, y + imageHeight,
            x + width, y + imageHeight,
            x + width, y,
        ]);
        g.endFill();
        // member's nick
        g.beginFill(GAME_COLORS.red1);
        g.drawPolygon(
            [
                nickX, nickY,
                nickX, nickY + nickHeigth,
                nickX + width - sharpOffset, nickY + nickHeigth,
                nickX + width, nickY + nickHeigth - sharpOffset,

                nickX + width, nickY - 15,
                nickX + width - (width / 3), nickY - 15,
                nickX + width - 15 - (width / 3), nickY,
            ],
        );
        g.endFill();

        return g;
    }
}