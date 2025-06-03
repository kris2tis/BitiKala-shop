import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileCategorySheet({icon, text}) {
    return (
        <Drawer>
            <DrawerTrigger>
                <div className="flex items-center flex-col gap-y-3">
                    {/* icon */}
                    {icon}
                    <span className="text-xs">{text}</span>
                    {/* text */}
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <ul class="w-full text-xs md:text-sm divide-y divide-gray-100">
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        فناوری
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        سلامت و پزشکی
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        سبک زندگی
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        کسب‌و‌کار
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        ورزش
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        گردشگری
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        فرهنگ و هنر
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        آموزش
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        علمی
                    </li>
                    <li class="px-6 py-5 hover:bg-[#171717] cursor-pointer transition-colors duration-200">
                        خودرو
                    </li>
                </ul>
            </DrawerContent>
        </Drawer>
    );
}
