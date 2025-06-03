import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function BottomSheetDialog({
    buttonText,
    icon = null,
    children,
}) {
    return (
        <Drawer>
            <DrawerTrigger className="flex items-center text-[10px] bg-[#1A1A1A] py-1 px-4 rounded-full">
                <div className="inline-flex items-center gap-x-2">
                    {icon}
                    <span>{buttonText}</span>
                </div>
            </DrawerTrigger>
            <DrawerContent>{children}</DrawerContent>
        </Drawer>
    );
}
