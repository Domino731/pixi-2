export interface GangMemberModel {
    id: string;
    name: string;
    nick: string;
    image: string;
    level: number;
    streetLevel: number;
    attributes: {
        reflexes: number;
        body: number;
        intelligence: number;
        cool: number;
        technicalAbility: number;
    },
    skills: {
        athletics: number;
        annihilation: number;
        streetBrawler: number;
        handguns: number;
        blades: number;
        assault: number;
        stealth: number;
        coldBlood: number;
        breachProtocol: number;
        quickHacking: number;
        crafting: number;
        engineering: number;
    },
    baseStats: {
        health: number;
        stamina: number;
        armor: number;
        armorPenetration: number;
        adrenaline: number;
        resistances: number;
        mitigationChance: number;
        mitigationStrength: number;
        critChange: number;
        critDamage: number;
        cyberwareCapacity: number;
        headshotDamageMultiplier: number;
        bonusRicochetDamage: number;
        chargeDamageMultiplier: number;
    }
}