import { Link, useLocation } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { IoGrid } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import MobileCategorySheet from "../components/mobileCategorySheet";

export default function MobileHeader() {
    let location = useLocation();

    let hideMobileHeaderPathe = ["/product"];
    let shouldShowMonileHeader = !hideMobileHeaderPathe.includes(
        location.pathname.slice(0, 8)
    );

    return (
        <div>
            {shouldShowMonileHeader && (
                <div className="w-full bg-[#151515] shadow-[0px_0px_0.9px_#fff] fixed bottom-0 left-0 z-50 lg:hidden">
                    <div className="grid grid-cols-5 py-2">
                        <Link to="/">
                            <div className="flex items-center flex-col gap-y-3">
                                <GoHomeFill fontSize={20} />
                                <span className="text-xs">خانه</span>
                            </div>
                        </Link>
                        <MobileCategorySheet
                            text={"دسته بندی"}
                            icon={<IoGrid fontSize={20} />}
                        />
                        <Link to="/cart">
                            <div className="flex items-center flex-col gap-y-3">
                                <FaShoppingCart fontSize={20} />
                                <span className="text-xs">سبد خرید</span>
                            </div>
                        </Link>
                        <Link to="/shop">
                            <div className="flex items-center flex-col gap-y-3">
                                <FaShop fontSize={20} />
                                <span className="text-xs">فروشگاه</span>
                            </div>
                        </Link>
                        <Link to="/dashboard">
                            <div className="flex items-center flex-col gap-y-3">
                                <FaUser fontSize={20} />
                                <span className="text-xs">دیجی کالا من</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
