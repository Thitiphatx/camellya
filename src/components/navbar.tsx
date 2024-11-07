import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
    NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export const Navbar = () => {

    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <p className="font-extrabold bg-gradient-to-l from-white to-rose-500 bg-clip-text text-transparent leading-normal">Camellya</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink color="foreground" href={item.href}>
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>
        </NextUINavbar>
    );
};
