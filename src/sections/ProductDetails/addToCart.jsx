import { Button } from "@/components/ui/button";

import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import useMessage from "../../Hooks/useMessage"

import { MdOutlineDownloadDone } from "react-icons/md";


export default function AddToCart({ product }) {
    const { messageWithIcon } = useMessage();
    const { priceDetails } = product;

    const { updateCartData } = useContext(CartContext);

    const addToCartOperation = () => {
        updateCartData(product, product.id);
        messageWithIcon("محصول به سبد اضافه شد", <MdOutlineDownloadDone fontSize={25} />, "/cart" , true , "برای مشاهده سبد خرید");
    };

    return (
        <div>
            <div className="fixed z-20 bottom-0 left-0 w-screen py-3 px-5 bg-[#151515] border-t-[1px] border-[#4d4d4d]">
                <div className="flex justify-between">
                    <div className="w-1/2">
                        {/*  */}
                        <Button
                            onClick={() => addToCartOperation()}
                            className="w-full h-full text-xs border-[1px] border-[#585656]"
                        >
                            افزودن به سبد
                        </Button>
                    </div>
                    <div className="w-1/2 flex flex-col items-end">
                        <div className="flex items-center gap-x-1">
                            <span className="text-[#444343] line-through text-[12px]">
                                {Number(
                                    priceDetails?.currentPrice
                                ).toLocaleString()}
                            </span>
                            <span className="text-[8px] bg-red-500 rounded-full px-2">
                                {Number(
                                    priceDetails?.DiscountPercentage
                                ).toLocaleString()}
                            </span>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <h3>
                                {Number(
                                    priceDetails?.dicCount
                                ).toLocaleString()}
                            </h3>
                            <span className="text-[10px]">تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
