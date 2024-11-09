export type Stat = {
    hp: number;
    atk: number;
    def: number;
    hpPercent?: number;
    atkPercent?: number;
    defPercent?: number;
    energy: number;
    critRate: number;
    critDMG: number;
    heal: number;
    aero: number;
    electro: number;
    fusion: number;
    glacio: number;
    havoc: number;
    spectro: number;
    basic: number;
    heavy: number;
    skill: number;
    liberation: number;
};

export type Element = "aero" | "electro" | "fusion" | "glacio" | "havoc" | "spectro";

export type SkillDetail = {
    name: string;                  // Name of the skill part (e.g., "Part 1 Damage")
    damagePercentage?: number;     // Percentage-based damage (optional)
    hits?: number;                 // Number of hits (for cases like "47.72%*2")
    staminaConsumption?: number;   // Stamina cost (for non-damage properties)
    statBuff?: Stat;
    cooldown?: number;
};

export type SkillMetadata = {
    name: string;
    description: string;
    multipliers: SkillDetail[]
};

export type Character = {
    name: string;
    portrait: string;
    rarity: number;
    level: number;
    baseStat: Stat;
    element: Element;
    skill: {
        active: {
            basic: SkillMetadata;
            skill: SkillMetadata;
            liberation: SkillMetadata;
        };
        passive: {
            forte: SkillMetadata;
            inherent: SkillMetadata[];
        };
        concerto: {
            intro: SkillMetadata;
            outro: SkillMetadata;
        };
        minor: Stat[];
        chain: Stat[];
    };
};

export type CharacterSkill = {
    active: {
        basic: SkillMetadata;
        skill: SkillMetadata;
        liberation: SkillMetadata;
    };
    passive: {
        forte: SkillMetadata;
        inherent: SkillMetadata[];
    };
    concerto: {
        intro: SkillMetadata;
        outro: SkillMetadata;
    };
    minor: Stat[];
    chain: Stat[];
}

export type Echo = {
    name: string;
    class: string;
    cost: number;
}