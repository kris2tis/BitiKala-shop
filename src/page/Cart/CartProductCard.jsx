import Counter from "./counter";

import { TiTick } from "react-icons/ti";
import { FaTruck } from "react-icons/fa6";

export default function CartProductCard({ id, amout,  mainImage, description, priceDetails }) {
    return (
        <div className="grid grid-cols-[116px_1fr] gap-y-4 gap-x-8 py-3">
            {/* عکس محصول */}
            <div className="flex items-center flex-col gap-y-4">
                <img
                    className="w-[114px] h-[114px]"
                    src={mainImage}
                    alt="product picture"
                />
                <span className="text-lg text-red-500">فروش ویژه</span>
            </div>
            {/* مشخصات محصول */}
            <div>
                <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold">{description}</h3>
                    <div className="flex items-center gap-x-2">
                        <div className="w-5 h-5 bg-[#1f1f1f] rounded-full"></div>
                        <span className="font-light text-xs">
                            تیتانیوم مشکی
                        </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <TiTick fontSize={18} />
                        <span className="font-light text-xs">
                            گرارنتی تعویض
                        </span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <FaTruck fontSize={18} />
                        <span className="font-light text-xs">دیجی کالا</span>
                    </div>
                </div>
            </div>
            {/* تعداد محصول */}
            <div>
                <Counter numberCount={amout} productId={id} />
            </div>
            {/* قیمت محصول */}
            <div className="flex items-center gap-x-2">
                <h3>{Number(priceDetails?.dicCount).toLocaleString()}</h3>
                <span className="text-xs">تومان</span>
            </div>
        </div>
    );
}
