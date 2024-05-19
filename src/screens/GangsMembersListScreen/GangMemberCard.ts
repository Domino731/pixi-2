import { Container, Graphics, Sprite, Text, Texture } from 'pixi.js';
import { GAME_COLORS } from '../../config/styles';
import { Button } from '@pixi/ui';
import { createAppTexture, navigation } from '../../main';
import { LvlIcon } from '../../components/LvlIcon';
import { LVL_ICON_VARIANT } from '../../components/LvlIcon/LvlIcon.const';
import { GangMemberCardOptions } from './GangMemberCard.types';
import { GangMemberScreen } from '../GangMemberScreen';

const imageHeight = 500;
const width = 400;

export class GangMemberCard extends Container {
    private readonly memberCard: Graphics;
    private readonly detailsCard: Graphics;
    private areDetailsActive: boolean;
    private readonly memberId: GangMemberCardOptions['id'];
    private readonly memberName: GangMemberCardOptions['name'];
    private readonly memberPowerLvl: GangMemberCardOptions['powerLvl'];
    private readonly memberOverallLvl: GangMemberCardOptions['overallLvl'];


    constructor({ id, name, powerLvl, overallLvl }: GangMemberCardOptions) {
        super();
        this.memberName = name;
        this.memberId = id;
        this.memberPowerLvl = powerLvl;
        this.memberOverallLvl = overallLvl;
        this.areDetailsActive = false;
        this.memberCard = this.createGangMemberCard();
        this.detailsCard = this.createDetailsCard();
        this.addChild(this.memberCard);
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
        g.addChild(this.createLevelsBar());
        g.addChild(this.createDetailsNick());
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
        text.position.set(10, imageHeight - 40);
        return text;
    }

    private createGangMemberCard() {
        const x = 0;
        const y = 0;
        const width = 400;
        const imageHeight = 500;
        const sharpOffset = 30;
        const nickHeigth = 50;
        const nickY = imageHeight - nickHeigth;
        const nickX = x;
        const imageFramePoints = [
            x + sharpOffset, y,
            x, y + sharpOffset,
            x, y + imageHeight,

            x + width - sharpOffset, y + imageHeight,
            x + width, y + imageHeight - sharpOffset,
            x + width, y,
        ];

        const g = new Graphics();


        // frame
        g.beginFill(0xFF0000, 0);
        g.lineStyle(2, GAME_COLORS.red1);
        const imageUrl = 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2d961a96-b47f-4f2d-be69-7b2b965755bd/width=450/ComfyUI_02485_.jpeg';
        Texture.fromURL(imageUrl).then(texture => {
            const sprite = new Sprite(texture);
            sprite.width = 400;
            sprite.height = 400;
            const texture2 = createAppTexture(sprite);
            g.beginTextureFill({ texture: texture2 });
            g.drawPolygon(imageFramePoints);
        });
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
            navigation.showScreen(GangMemberScreen);
        });

        // g.addChild(this.createToggleBtn());
        g.addChild(btn.view);
        g.addChild(new LvlIcon({
            x: 15,
            y: 30,
            variant: LVL_ICON_VARIANT.OVERALL,
            lvl: this.memberOverallLvl,
            graphicsStyle: 1,
        }));
        g.addChild(new LvlIcon({
            x: 15,
            y: 80,
            variant: LVL_ICON_VARIANT.POWER,
            lvl: this.memberPowerLvl,
            graphicsStyle: 2,
        }));
        return g;
    }

    private createLevelsBar() {
        const sharpOffset = 40;
        const overallLvlX = 15;
        const overallLvlY = 15;
        const height = 40;
        const width = 160;
        const gap = 4;

        const powerLvlX = overallLvlX + width + gap;
        const powerLvlY = overallLvlY;

        const g = new Graphics();
        g.beginFill(GAME_COLORS.green1);
        g.drawPolygon(
            overallLvlX + sharpOffset, overallLvlY,
            overallLvlX, overallLvlY + height,
            overallLvlX + width, overallLvlY + height,
            overallLvlX + width, overallLvlY,
        );
        g.endFill();
        const overallLvlTxt = new Text('9', {
            fill: GAME_COLORS.black2,
            fontSize: 30,
            fontWeight: 'bolder',
        });
        overallLvlTxt.position.set(100, overallLvlY + 2);
        g.addChild(overallLvlTxt);
        g.beginFill(GAME_COLORS.lightBlue);
        g.drawPolygon(
            powerLvlX, powerLvlY,
            powerLvlX, powerLvlY + height,
            powerLvlX + width, powerLvlY + height,
            powerLvlX + width, powerLvlY,
        );
        g.endFill();
        const powerLvlTxt = new Text('11', {
            fill: GAME_COLORS.black2,
            fontSize: 30,
            fontWeight: 'bolder',
        });
        powerLvlTxt.position.set(powerLvlX + 60, overallLvlY + 2);
        g.addChild(powerLvlTxt);
        return g;
    }

    private createDetailsNick() {
        const g = new Graphics();
        const nick = new Text(this.memberName, {
            fontSize: 33,
            fill: GAME_COLORS.white,
        });
        g.position.set(15, 0);
        g.beginFill();
        g.lineStyle(2, GAME_COLORS.red1);
        g.endFill();
        g.addChild(nick);
        return g;
    }
}