export enum ClothesType {
    feet = 'feet',
    head = 'head',
    face = 'face',
    innerTorso = 'innerTorso',
    legs = 'legs',
    outerTorso = 'outerTorso'
}

export type ClothesTypeUnion = keyof typeof ClothesType;

export enum ClothesStyle {
    KITSCH = 'KITSCH',
    NEOMILITARISM = 'NEOMILITARISM',
    ENTROPISM = 'ENTROPISM',
    NEOKITSCH = 'NEOKITSCH'

}

export type ClothesStyleUnion = keyof typeof ClothesStyle;

export interface ClothGeneralData {
    type: ClothesTypeUnion,
    style: ClothesStyleUnion
    rarityTier: number
}

export type ClothModifier = Record<string, any>

export interface ClothQuote {
    text: string;
    author: string | null;
}

export interface ClothOptions {
    id: string;
    generalData: ClothGeneralData;
    description: string | null;
    modifiers: ClothModifier;
    name: string;
    overview: string;
    quote: ClothQuote;
    textureFemaleSrc: string;
    textureMaleSrc: string;
}

export enum ClothSex {
    male = 'male',
    female = 'female'
}

export type ClothSexUnion = keyof typeof ClothSex;