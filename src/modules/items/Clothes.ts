import { clothesConfigs } from './Clothes.const';
import {
    ClothGeneralData,
    ClothModifier,
    ClothOptions,
    ClothQuote, ClothSex, ClothSexUnion,
} from './Clothes.types';
import { Sprite, Texture } from 'pixi.js';

export class Cloth {
    private readonly id: string;
    private generalData: ClothGeneralData;
    private description: string | null;
    private modifiers: ClothModifier;
    private name: string;
    private overview: string;
    private quote: ClothQuote;
    private textureFemaleSrc: string;
    private textureMaleSrc: string;

    constructor(options: ClothOptions) {
        this.id = options.id;
        this.generalData = options.generalData;
        this.description = options.description;
        this.modifiers = options.modifiers;
        this.name = options.name;
        this.overview = options.overview;
        this.quote = options.quote;
        this.textureFemaleSrc = options.textureFemaleSrc;
        this.textureMaleSrc = options.textureMaleSrc;
    }

    private getTexture(sex: ClothSexUnion) {
        return Texture.from(sex === ClothSex.male ? this.textureMaleSrc : this.textureFemaleSrc);
    }

    private getSprite(sex: ClothSexUnion) {
        return new Sprite(Texture.from(sex === ClothSex.male ? this.textureMaleSrc : this.textureFemaleSrc));
    }
}

export class ClothesItems {
    private static clothes: Record<string, Cloth> = ClothesItems.createClothes();

    constructor() {
    }

    private static createClothes() {
        const clothes: Record<string, Cloth> = {};
        Object.values(clothesConfigs).map(el => {
            clothes[el.id] = new Cloth({
                id: el.id,
                // @ts-ignore
                generalData: el.general,
                modifiers: el.modifier,
                name: el.name,
                overview: el.overview,
                quote: {
                    // @ts-ignore
                    text: el.quote?.text ?? '',
                    // @ts-ignore
                    author: el.quote?.author ?? '',
                },
                textureMaleSrc: el.textureMale,
                textureFemaleSrc: el.textureFemale,
            });
        });
        return clothes;
    }

    public static get(id: string) {
        return ClothesItems.clothes[id];
    }
}