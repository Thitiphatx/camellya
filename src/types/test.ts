import { Resonator } from "@prisma/client";
import { CharacterSkill, Stat } from "./echo";

export const resonator: Resonator[] = [
    {
        id: 1,
        baseStat: {
            hp: 10825,
            atk: 413,
            def: 1259,
            energy: 125,
            critRate: 5,
            critDMG: 150,
        } as Stat,
        element: "havoc",
        name: "Rover-havoc",
        rarity: 4,
        skill: {
            active: {
                basic: {
                    name: "Tuneslayer",
                    description: "",
                    multipliers: [
                        {
                            name: "Part 1 Damage",
                            hits: 1,
                            damagePercentage: 56.67,
                        },
                        {
                            name: "Part 2 Damage",
                            hits: 2,
                            damagePercentage: 56.67,
                        },
                        {
                            name: "Part 3 Damage",
                            hits: 1,
                            damagePercentage: 85.00,
                        },
                        {
                            name: "Part 4 Damage",
                            hits: 3,
                            damagePercentage: 40.30,
                        },
                        {
                            name: "Part 5 Damage",
                            hits: 2,
                            damagePercentage: 94.44,
                        },
                        {
                            name: "Heavy Attack Damage",
                            hits: 1,
                            damagePercentage: 95.43,
                            staminaConsumption: 25,
                        },
                        {
                            name: "Mid-Air Attack Damage",
                            hits: 1,
                            damagePercentage: 117.10,
                            staminaConsumption: 30,
                        },
                        {
                            name: "Dodge Counter Damage",
                            hits: 1,
                            damagePercentage: 179.43,
                        }
                ]
                },
                skill: {
                    name: "Wingblade",
                    description: "",
                    multipliers: [
                        {
                            name: "Skill Damage",
                            damagePercentage: 286.29,
                            hits: 2,
                            cooldown: 12,
                        }
                    ]
                },
                liberation: {
                    name: "Deadening Abyss",
                    description: "",
                    multipliers: [
                        {
                            name: "Skill Damage",
                            damagePercentage: 765,
                            cooldown: 16
                        }
                    ]
                },
            },
            passive: {
                forte: {
                    name: "Umbra Eclipse",
                    description: "",
                    multipliers: [
                        {
                            name: "Devastation Damage",
                            damagePercentage: 228.14,
                        },
                        {
                            name: "Umbra: Basic Attack Part 1 Damage",
                            damagePercentage: 56.37,
                        },
                        {
                            name: "Umbra: Basic Attack Part 2 Damage",
                            damagePercentage: 93.94,
                        },
                        {
                            name: "Umbra: Basic Attack Part 3 Damage",
                            damagePercentage: 155.67,
                        },
                        {
                            name: "Umbra: Basic Attack Part 4 Damage",
                            damagePercentage: 37.13,
                            hits: 3,
                        },
                        {
                            name: "Umbra: Basic Attack Part 4 Damage (Additional)",
                            damagePercentage: 111.39,
                        },
                        {
                            name: "Umbra: Basic Attack Part 5 Damage",
                            damagePercentage: 28.52,
                            hits: 4,
                        },
                        {
                            name: "Umbra: Basic Attack Part 5 Damage (Additional)",
                            damagePercentage: 114.07,
                        },
                        {
                            name: "Umbra: Heavy Attack Damage",
                            damagePercentage: 128.83,
                        },
                        {
                            name: "Umbra: Thwackblade Damage",
                            damagePercentage: 126.65,
                        },
                        {
                            name: "Umbra: Thwackblade Damage (Additional)",
                            damagePercentage: 9.95,
                            hits: 4,
                        },
                        {
                            name: "Umbra: Plunging Attack Damage",
                            damagePercentage: 123.27,
                        },
                        {
                            name: "Umbra: Dodge Counter Damage",
                            damagePercentage: 316.71,
                        },
                        {
                            name: "Umbra: Heavy Attack Stamina Cost",
                            staminaConsumption: 25,
                        },
                        {
                            name: "Umbra: Plunging Stamina Cost",
                            staminaConsumption: 30,
                        },
                        {
                            name: "Umbra: Lifetaker Damage",
                            damagePercentage: 276.35,
                            hits: 2,
                        },
                        {
                            name: "Umbra: Lifetaker Damage (Additional)",
                            damagePercentage: 9.95,
                            hits: 4,
                        },
                        {
                            name: "Umbra: Lifetaker Cooldown",
                            cooldown: 12,
                        },
                        {
                            name: "Lifetaker Con. Energy Regen",
                            staminaConsumption: 15,
                        },
                    ]
                },
                inherent: [
                    {
                        name: "Metamorph",
                        description: "In the Dark Surge state, Havoc DMG Bonus is increased by 20%.",
                        multipliers: [
                            {
                                statBuff: {
                                    havoc: 20
                                }
                            }
                        ]
                    },
                    {
                        name: "Bleak Crescendo",
                        description: "While in the Dark Surge state, Basic Attack recovers 1 Resonance Energy when it hits a target, and this effect can be triggered once per second.",
                    }
                ]
            },
            concerto: {
                intro: {
                    name: "Instant of Annihilation",
                    description: "Attack the target, dealing Havoc DMG.",
                    multipliers: [
                        {
                            name: "Skill Damage",
                            damagePercentage: 198.81
                        }
                    ]
                },
                outro: {
                    name: "Soundweaver",
                    description: "Summons a Havoc Field to attack a target, dealing 143.3% Havoc DMG to targets within range every 2s for 6s.",
                    multipliers: [
                        {
                            name: "Skill Damage",
                            damagePercentage: 143.3,
                            hits: 6/2
                        }
                    ]
                }
            }
        } as CharacterSkill
    }
]