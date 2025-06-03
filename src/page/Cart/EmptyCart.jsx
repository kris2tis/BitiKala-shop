import { MdRemoveShoppingCart } from "react-icons/md";
import {Link} from "react-router-dom"
export default function EmptyCart() {
    return (
        <div className="my-10">
            <div className="flex items-center flex-col gap-y-5">
                <div><MdRemoveShoppingCart fontSize={120} /></div>
                <h1 className="font-bold  text-lg">سبد خرید شما خالی است !</h1>
                <div>
                    <p className="text-xs text-[#434343]">
                        می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                    </p>
                    <Link className="text-xs" to="/shop">
                        فروشگاه
                    </Link>

                </div>
            </div>
        </div>
    );
}
