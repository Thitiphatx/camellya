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
};

export type Skill = {
    name: string;
    description: string;
    multipliers: SkillDetail
};

export type Character = {
    name: string;
    level: number;
    baseStat: Stat;
    element: Element;
    skill: {
        active: {
            basic: Skill;
            skill: Skill;
            liberation: Skill;
        };
        passive: {
            forte: Skill;
            inherent: Skill[];
        };
        concerto: {
            intro: Skill;
            outro: Skill;
        };
        minor: Stat[];
        chain: Stat[];
    };
};
