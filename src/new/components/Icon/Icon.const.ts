export enum ICONS {
    ATTRIBUTE_BODY = 'ATTRIBUTE_BODY',
    ATTRIBUTE_COOL = 'ATTRIBUTE_COOL',
    ATTRIBUTE_INTELLIGENCE = 'ATTRIBUTE_INTELLIGENCE',
    ATTRIBUTE_REFLEXES = 'ATTRIBUTE_REFLEXES',
    ATTRIBUTE_RELIC = 'ATTRIBUTE_RELIC',
    ATTRIBUTE_TECHNICAL_ABILITY = 'ATTRIBUTE_TECHNICAL_ABILITY',

    SKILL_ATHETICS = "SKILL_ATHETICS",
    SKILL_ANNIHILATION = "SKILL_ANNIHILATION",
    SKILL_STREET_BRAWLER = "SKILL_STREET_BRAWLER",
    SKILL_HANDGUNS = "SKILL_HANDGUNS",
    SKILL_BLADES = "SKILL_BLADES",
    SKILL_ASSAULT = "SKILL_ASSAULT",
    SKILL_STEALTH = "SKILL_STEALTH",
    SKILL_COLD_BLOOD = "SKILL_COLD_BLOOD",
    SKILL_BREACH_PROTOCOL = "SKILL_BREACH_PROTOCOL",
    SKILL_QUICKHACKING = "SKILL_QUICKHACKING",
    SKILL_CRAFTING = "SKILL_CRAFTING",
    SKILL_ENGINEERING = "SKILL_ENGINEERING"
}

export type IconsUnion = keyof typeof ICONS;

export const ICON_SRC = {
    [ICONS.ATTRIBUTE_BODY]: 'icons/attributes/attribute-body',
    [ICONS.ATTRIBUTE_COOL]: 'icons/attributes/attribute-cool',
    [ICONS.ATTRIBUTE_INTELLIGENCE]: 'icons/attributes/attribute-intelligence',
    [ICONS.ATTRIBUTE_REFLEXES]: 'icons/attributes/attribute-reflexes',
    [ICONS.ATTRIBUTE_RELIC]: 'icons/attributes/attribute-relic',
    [ICONS.ATTRIBUTE_TECHNICAL_ABILITY]: 'icons/attributes/attribute-technical-ability',

    [ICONS.SKILL_ATHETICS]:"icons/skills/athletics",
    [ICONS.SKILL_ANNIHILATION]:"icons/skills/annihilation",
    [ICONS.SKILL_STREET_BRAWLER]:"icons/skills/street-brawler",
    [ICONS.SKILL_HANDGUNS]:"icons/skills/handungs",
    [ICONS.SKILL_BLADES]:"icons/skills/blades",
    [ICONS.SKILL_ASSAULT]:"icons/skills/assault",
    [ICONS.SKILL_STEALTH]:"icons/skills/stealth",
    [ICONS.SKILL_COLD_BLOOD]:"icons/skills/cold-blood",
    [ICONS.SKILL_BREACH_PROTOCOL]:"icons/skills/breach-protocol",
    [ICONS.SKILL_QUICKHACKING]:"icons/skills/quick-hacking",
    [ICONS.SKILL_CRAFTING]:"icons/skills/skill-crafting",
    [ICONS.SKILL_ENGINEERING]:"icons/skills/skill-engineering",
};