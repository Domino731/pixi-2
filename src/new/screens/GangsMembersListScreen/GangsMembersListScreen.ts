import { ContentContainer } from '../../components/ContentContainer';
import { Graphics, Text } from 'pixi.js';
import { GAME_COLORS } from '../../../const/styles';
import { GAME } from '../../../configs/game';
import { Button } from '@pixi/ui';

const imageHeight = 500;
const width = 400;

export class GangsMembersListScreen extends ContentContainer {
    private readonly memberCard: Graphics;
    private readonly detailsCard: Graphics;
    private areDetailsActive: boolean;

    constructor() {
        super();
        this.areDetailsActive = false;
        this.memberCard = this.createGangMemberCard();
        this.detailsCard = this.createDetailsCard();
        this.addChild(this.memberCard);
        this.position.set(700, 200);
    }

    private createDetailsCard() {
        const x = 0;
        const y = 0;
        const width = 400;
        const imageHeight = 550;
        const sharpOffset = 30;
        const g = new Graphics();
        // frame
        g.beginFill(0xFF0000, 0);
        g.lineStyle(2, GAME_COLORS.red1);
        g.drawPolygon([
            x + sharpOffset, y,
            x, y + sharpOffset,
            x, y + imageHeight,
            x + width - sharpOffset, y + imageHeight,
            x + width, y + imageHeight - sharpOffset,
            x + width, y,
        ]);
        g.endFill();

        g.addChild(this.createToggleBtn());
        return g;
    }

    private toggleCardMode() {
        if (this.areDetailsActive) {
            this.removeChildAt(this.getChildIndex(this.detailsCard));
            this.addChild(this.memberCard);
            this.areDetailsActive = false;
        } else {
            this.removeChildAt(this.getChildIndex(this.memberCard));
            this.addChild(this.detailsCard);
            this.areDetailsActive = true;
        }
    }

    // TODO before release: add proper icon
    private createToggleBtn() {
        const g = new Graphics();
        g.beginFill(GAME_COLORS.red1);
        g.drawCircle(width - 20, 20, 14);
        g.endFill();

        const btn = new Button(g);
        btn.onPress.connect(() => {
            this.toggleCardMode();
        });
        return btn.view;
    }

    private createTitle() {
        const text = new Text('Johnny', {
            fontSize: 26,
            fill: GAME_COLORS.white,
            fontWeight: 'bold',
            letterSpacing: 1,
        });
        text.position.set(10, imageHeight + 8);
        return text;
    }

    private createGangMemberCard() {
        const x = 0;
        const y = 0;
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
        const gNick = new Graphics();
        // member's nick
        gNick.beginFill(GAME_COLORS.red1);
        gNick.lineStyle(2, GAME_COLORS.red1);
        gNick.drawPolygon(
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
        gNick.endFill();
        gNick.addChild(this.createTitle());
        const btn = new Button(gNick);
        btn.onPress.connect(() => {
            alert('Show member details');
        });

        g.addChild(this.createToggleBtn());
        g.addChild(btn.view);
        return g;
    }
}