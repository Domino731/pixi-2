import { Container, Text } from 'pixi.js';


interface CenterTextOptions {
    text: Text;
    wrapperWidth: number;
    wrapperHeight: number;
    x: number;
    y: number;
}

const centerText = ({
                        text,
                        wrapperWidth,
                        wrapperHeight, x = 0, y = 0,
                    }: CenterTextOptions) => {
    const textX = x + (Math.floor(wrapperWidth / 2) - Math.floor(text.width / 2));
    const textY = y + (Math.floor(wrapperHeight / 2) - Math.floor(text.height / 2));
    text.position.set(textX, textY);
};


export const textUtils = {
    centerText,
};