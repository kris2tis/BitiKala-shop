import BreadCrumb from "./Breadcrumb";
import ImageSlider from "../../sections/ProductDetails/imageSlider";
import AddToCart from "../../sections/productDetails/addToCart";

import { RiGeminiFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

import { useParams } from "react-router-dom";
import { useProduct } from "../../Hooks/getData";
import { useContext, useEffect } from "react";

import {Button} from "@/components/ui/button"
import { CartContext } from "../../contexts/CartContext";

import useMessage from "../../Hooks/useMessage";

import { MdOutlineDownloadDone } from "react-icons/md";

export default function ProductDetails() {
    const { data, getSingleData } = useProduct();
    const { updateCartData } = useContext(CartContext);
    const { productId } = useParams()
    const { messageWithIcon } = useMessage();

    useEffect(() => {
        getSingleData(`http://localhost:3000/products?id=${productId}`);
    }, [])
    
     const addToCartOperation = (product , id) => {
            updateCartData(product, id);
            messageWithIcon("محصول به سبد اضافه شد", <MdOutlineDownloadDone fontSize={25} />, "/cart" , true , "برای مشاهده سبد خرید");
        }; 
    return (
        <div className="flex flex-col gap-y-3 w-full px-5 py-10">
            <div className="flex flex-col lg:flex-row gap-y-4 justify-between gap-x-3">
                {/* عکس محصول */}
                <div className="w-full lg:w-1/4">
                    <ImageSlider images={data?.images} />
                </div>
                {/* اطلاعات محصول */}
                <div className="w-full lg:w-3/4 h-full">
                    <div>
                        <div>
                            <BreadCrumb />
                            <h1 className="text-sm lg:text-lg font-black text-justify mt-2">
                                {data.description}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 gap-x-2 w-full lg:flex-row h-full mt-4">
                        <div className="w-full lg:w-2/3 border-[1px] border-[#161616] rounded-sm py-4 px-2">
                            <div>
                                <p className="text-sm text-[#6b6a6a]">
                                    Apple iPhone 16 CH Dual SIM Storage 128GB
                                    And RAM 8GB Mobile Phone
                                </p>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <div className="flex gap-x-2 mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <RiGeminiFill fontSize={14} />
                                        <span className="text-xs">
                                            خلاصه دیدگاه ها
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <IoIosArrowBack fontSize={14} />
                                        <span className="text-xs">
                                            231 دیدگاه
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 mt-4">
                                    <div className="flex items-center gap-x-2">
                                        <IoIosArrowBack fontSize={14} />
                                        <span className="text-xs">
                                            354 پرسش و پاسخ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* سکشن افزودن به سبد (دسکتاپ) */}
                        <div className="hidden lg:block w-full lg:w-1/3 border-[1px] border-[#161616] rounded-sm">
                            <div className="py-4 px-2">
                                <div className="w-2/5 lg:w-full justify-between items-center">
                                    <div className="flex justify-between w-full items-center">
                                        <div className="flex items-center gap-x-1">
                                            <h2>
                                                {Number(
                                                    data?.priceDetails?.dicCount
                                                ).toLocaleString()}
                                            </h2>
                                            <span className="text-sm text-[#767676]">
                                                تومان
                                            </span>
                                        </div>
                                        <RiErrorWarningLine />
                                    </div>
                                    <Button
                                        onClick={() =>
                                            addToCartOperation(data, data.id)
                                        }
                                        className="text-xs w-full mt-5"
                                    >
                                        افزودن به سبد
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* سکشن افزودن به سبد (موبایل) */}
                    <div className="lg:hidden">
                        <AddToCart product={{ ...data }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
