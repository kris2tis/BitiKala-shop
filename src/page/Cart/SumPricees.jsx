import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import useMessage from "../../Hooks/useMessage";

import { Button } from "@/components/ui/button";
import loginAuthGuard from "../../components/auth/loginAuthGuard";

import { MdOutlineDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function SumPricees() {
    const { sumPrices, cleareCart } = useContext(CartContext);
    const { messageWithIcon , messageWithAction } = useMessage();

    const navigate = useNavigate()
    const placeOrder = () => {
        if (loginAuthGuard()) {
            messageWithIcon(
                "خرید با موفقیت انجام شد",
                <MdOutlineDownloadDone fontSize={25} />
            );
            cleareCart();
        } else {
            messageWithAction("برای خرید باید وارد شوید !" , "ورود"  , navigateToShop)
        }
    };

    const navigateToShop =  () => {
        navigate("/auth")
    }
    return (
        <div className="w-full fixed bottom-15 left-0 lg:static bg-black z-30 lg:w-1/4">
            <div className="px-2 py-4 border-[1px] h-max sticky top-5 lg:rounded-sm border-[#323232]">
                <div className="flex w-full justify-between">
                    <span>قیمت کالا :</span>
                    <div className="flex gap-x-2 items-center text-xs">
                        <span>{Number(sumPrices).toLocaleString()}</span>
                        <span>تومان</span>
                    </div>
                </div>

                <div>
                    <Button onClick={placeOrder} className="w-full mt-4">
                        تکمیل خرید
                    </Button>
                </div>
            </div>
        </div>
    );
}
