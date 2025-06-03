import { Outlet } from "react-router-dom";
import DesktopHeader from "./desktopHeader";
import Footer from "./footer";
import MobileHeader from "./mobileHeader";

import { Toaster } from "@/components/ui/sonner";
import PromotionalBanner from "../components/PromotionalBanner";

export default function Layout() {
    return (
        <div className="flex flex-col gap-y-5 bg-black h-max">
            <div className="lg:hidden">
                <PromotionalBanner />
            </div>
            <DesktopHeader />
            <main>
                <Outlet />
            </main>
            <Toaster
                toastOptions={{
                    classNames: {
                        toast: "toast",
                        title: "title",
                        description: "description",
                        actionButton: "action-button",
                        cancelButton: "cancel-button",
                        closeButton: "close-button",
                    },
                }}
            />
            <MobileHeader />
            <Footer />
        </div>
    );
}
