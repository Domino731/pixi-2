import { clothesConfigs } from './Clothes.const';

export class Cloth {
    public readonly id: string;


    constructor() {
    }
}

export class ClothesItems {
    private static clothes: Cloth[] = [];

    constructor() {
    }


    public static get(id: string) {
        console.log(clothesConfigs);
        const payload = this.clothes.find(el => el.id === id);
        return payload;
    }
}