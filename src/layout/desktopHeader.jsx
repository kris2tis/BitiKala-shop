
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navigation from "../components/navigation";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { TbCameraSearch } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";
import loginAuthGuard from "../components/auth/loginAuthGuard";

import PromotionalBanner from "../components/PromotionalBanner";

export default function DesktopHeader() {
    return (
        <div className="sticky top-0 z-30 bg-black">
            {/* شکسن بنر تبلیغاتی */}
            <div className="hidden lg:block">
                <PromotionalBanner />
            </div>
            <div className="shadow-[0px_0.4px_0px_#fff] py-5">
                {/* سکشن هدر */}
                <div className="sticky top-0 z-30 flex flex-col gap-y-6 px-4 w-full">
                    <div className="flex items-center w-full justify-between gap-x-2">
                        <div className="flex items-center w-full lg:w-2/5">
                            <Input
                                className="border-none placeholder:text-xs placeholder:lg:text-sm"
                                type="text"
                                placeholder="جستجو"
                            />
                        </div>
                        <div className="w-1/8 lg:w-max">
                            <div className="flex justify-center gap-x-5 lg:hidden">
                                <div>
                                    <TbCameraSearch fontSize={20} />
                                </div>
                                <div>
                                    <BsBell fontSize={20} />
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center gap-x-2">
                                {loginAuthGuard() ? null : (
                                    <Link to="/auth">
                                        <Button className="shadow-[0px_0px_0px_0.3px_#fff] cursor-pointer">
                                            ورود | ثبت نام
                                        </Button>
                                    </Link>
                                )}

                                <Link to="/cart">
                                    <Button className="shadow-[0px_0px_0px_0.3px_#fff] cursor-pointer">
                                        <FaShoppingCart />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:w-full">
                        <Navigation />
                    </div>
                </div>
                <div className="block lg:hidden px-5 mt-2.5">
                    <div className="flex justify-between gap-x-3 w-max">
                        <FiMapPin />
                        <span className="text-xs">انتخاب شهر و استان</span>
                        <IoIosArrowBack />
                    </div>
                </div>
            </div>
        </div>
    );
}
