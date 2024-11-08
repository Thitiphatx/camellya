"use client"
import { Image } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card"
import atkIcon from '../assets/icons/stat_atk.webp';
import hpIcon from '../assets/icons/stat_hp.webp';
import defIcon from '../assets/icons/stat_def.webp';
import energyIcon from '../assets/icons/stat_energy.webp'
import critRateIcon from '../assets/icons/stat_crit.webp'
import critDMGIcon from '../assets/icons/stat_critdmg.webp'
import healIcon from '../assets/icons/stat_heal.webp'
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/react";
import { IconRefresh } from "@/styles/icon";

const stats = [
    { icon: hpIcon, label: 'HP', value: 10388 },
    { icon: atkIcon, label: 'ATK', value: 463 },
    { icon: defIcon, label: 'DEF', value: 1100 },
    { icon: energyIcon, label: 'Energy regen', value: 125 },
    { icon: critRateIcon, label: 'CRIT Rate', value: '5%' },
    { icon: critDMGIcon, label: 'CRIT Damage', value: '150%' },
    { icon: healIcon, label: 'Healing Bonus', value: '0%' },
];

export default function CharactersCard() {
    return (
        <div className="space-y-2">
            <Button fullWidth color="danger"><IconRefresh />Camellya</Button>
            <Card>
                <Image
                    src="https://www.prydwen.gg/static/fa50106c1d7d6d2f02033da9c00628f1/b26e2/card_cam.webp"
                    alt="Character Card"
                    className="w-full -z-0 rounded-lg" // Optional: add rounded corners or other styles
                />
                <CardBody className="space-y-1 absolute bg-zinc-900 bg-opacity-50 h-full">
                    <div>
                        <Slider
                            size="md"
                            step={10}
                            color="foreground"
                            label="Level"
                            showSteps={true}
                            maxValue={80}
                            minValue={0}
                            defaultValue={80}
                            className="max-w-md"
                        />
                        <Slider
                            size="md"
                            step={1}
                            color="foreground"
                            label="Resonance Chain (S0-6)"
                            showSteps={true}
                            maxValue={6}
                            minValue={0}
                            defaultValue={0}
                            className="max-w-md"
                        />
                    </div>
                    {stats.map((stat, index) => (
                        <div key={index} className="flex justify-between">
                            <div className="flex items-center">
                                <Image
                                    alt={`${stat.label} icon`}
                                    src={stat.icon.src}
                                    width={20}  // Adjust to the desired icon size
                                    height={20}
                                    className="w-5"
                                />
                                {stat.label}
                            </div>
                            <p>{stat.value}</p>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </div>
    )
}
