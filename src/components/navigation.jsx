import { cn } from "@/lib/utils";

import { FaBars } from "react-icons/fa6";
import { TbCirclePercentage } from "react-icons/tb";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaFire } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";

import "./navigation.css";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-x-4">
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        {" "}
                        ! در دیجی کالا بفروشید
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>سوالی دارید ؟</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        خرید کالای کار کرده <FaMobile />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        پرفروش ترین ها <FaFire />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        سوپر مارکت <TbCirclePercentage />
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        شگفت انگیز <LiaShoppingBasketSolid />
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex gap-x-3">
                        دسته بندی <FaBars />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        dir="rtl"
                        className="bg-black w-64"
                    >
                        <ul class="w-full  border border-gray-200 text-xs divide-y divide-gray-100">
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                فناوری
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                سلامت و پزشکی
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                سبک زندگی
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                کسب‌و‌کار
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                ورزش
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                گردشگری
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                فرهنگ و هنر
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                آموزش
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                علمی
                            </li>
                            <li class="px-4 py-3 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                                خودرو
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = ({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
};
