import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CartProductCard from "./CartProductCard";
import EmptyCart from "./EmptyCart";
import SumPricees from "./SumPricees";

export default function Cart() {
    [];
    const { cartData, doesItem } = useContext(CartContext);
    return (
        <div className="w-full px-5 flex flex-col gap-x-3 gap-y-4">
            {/* سکشن سبد خرید و سبد بعدی */}
            <div className="w-full flex lg:gap-x-4">
                <div className="w-1/2 lg:w-max px-2 border-b-3 py-1 border-red-500 text-center">
                    <span className="text-white">سبد خرید</span>
                </div>
                <div className="w-1/2 lg:w-max px-2 border-b-3 py-1 border-transparent text-center">
                    <span className="text-[#636363]">خرید بعدی</span>
                </div>
            </div>

            {/* سکشن محصولات و جمع قمیت */}
            {doesItem() ? (
                <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-4 w-full">
                    {/* سکشن محصولات وارد شده در سبد */}
                    <div className="w-full lg:w-3/4 flex flex-col border-[1px] rounded-sm border-[#323232] px-3 py-5">
                        {cartData?.map((cart) => (
                            <CartProductCard key={cart.id} {...cart} />
                        ))}
                    </div>
                    {/* سکشن جمع قمیت محصولات */}
                    <SumPricees />
                </div>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}
