import axios from "axios";

import { useProductAdmin } from "../../Hooks/getData";
import useMessage from "../../Hooks/useMessage";

import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import AccessToSection from "../../components/AccessToSection";

import { MdOutlineDownloadDone } from "react-icons/md";

export default function AdminPanel() {
    const { data } = useProductAdmin();
    const { messageWithIcon } = useMessage();
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:3000/products/${productId}`);
    };

    const deleteProductOpration = (id) => {
        deleteProduct(id);
        messageWithIcon(
            "محصول با موفقیت حذف شد",
            <MdOutlineDownloadDone fontSize={25} />,
            "/cart",
            false
        );
    };
    return (
        <div>
            {/* سکشن پیغام دسترسی نداشتن */}
            <AccessToSection />
            {/* سکشن اطلاعات مصحلو */}
            <div className="hidden md:flex flex-col gap-y-5 justify-center px-5 mt-8">
                <div>
                    <Link to="/addproduct">
                        <Button>ساخت محصول جدید</Button>
                    </Link>
                </div>
                <div className="flex justify-between mt-10">
                    <h3 className="w-1/4 text-center">آیدی محصول</h3>
                    <h3 className="w-1/4 text-center">نام محصول</h3>
                    <h3 className="w-1/4 text-center">قیمت</h3>
                    <h3 className="w-1/4 text-center"> آیدی دسته بندی</h3>
                </div>
                <div className="flex flex-col gap-y-10">
                    {data.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col justify-between gap-y-4 border-[1px] border-[#474747] py-6 px-4 rounded-sm"
                        >
                            <div className="flex justify-between">
                                <div className="w-1/4 text-center">
                                    <span>{product.id}</span>
                                </div>
                                <div className="w-1/4 text-center">
                                    <p>{product.description.slice(0, 20)}</p>
                                </div>
                                <div className="w-1/4 text-center">
                                    <span>
                                        {Number(
                                            product.priceDetails.dicCount
                                        ).toLocaleString()}{" "}
                                        تومان
                                    </span>
                                </div>
                                <div className="w-1/4 text-center">
                                    <span>{product.brandId}</span>
                                </div>
                            </div>
                            <div className="flex justify-end gap-x-3">
                                <Link to={`/editproduct/${product.id}`}>
                                    <Button className="border-[1px] border-[#4c4c4c] text-xs">
                                        ویرایش محصول
                                    </Button>
                                </Link>
                                <Button
                                    onClick={() =>
                                        deleteProductOpration(product.id)
                                    }
                                    className="border-[1px] border-[#4c4c4c] text-xs bg-red-500"
                                >
                                    حذف محصول
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
