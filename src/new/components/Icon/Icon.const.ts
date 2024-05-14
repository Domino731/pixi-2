export enum ICONS {
    ATTRIBUTE_BODY = 'ATTRIBUTE_BODY',
    ATTRIBUTE_COOL = 'ATTRIBUTE_COOL',
    ATTRIBUTE_INTELLIGENCE = 'ATTRIBUTE_INTELLIGENCE',
    ATTRIBUTE_REFLEXES = 'ATTRIBUTE_REFLEXES',
    ATTRIBUTE_RELIC = 'ATTRIBUTE_RELIC',
    ATTRIBUTE_TECHNICAL_ABILITY = 'ATTRIBUTE_TECHNICAL_ABILITY'
}

export type IconsUnion = keyof typeof ICONS;

export const ICON_SRC = {
    [ICONS.ATTRIBUTE_BODY]: 'icons/attributes/attribute-body',
    [ICONS.ATTRIBUTE_COOL]: 'icons/attributes/attribute-cool',
    [ICONS.ATTRIBUTE_INTELLIGENCE]: 'icons/attributes/attribute-intelligence',
    [ICONS.ATTRIBUTE_REFLEXES]: 'icons/attributes/attribute-reflexes',
    [ICONS.ATTRIBUTE_RELIC]: 'icons/attributes/attribute-relic',
    [ICONS.ATTRIBUTE_TECHNICAL_ABILITY]: 'icons/attributes/attribute-technical-ability',
};