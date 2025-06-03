import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import useMessage from "../../Hooks/useMessage";

import { MdOutlineDownloadDone } from "react-icons/md";

export default function EditProduct() {
    const { messageWithIcon } = useMessage();
    const { productId } = useParams();

    const [inputValues, setInputValues] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/products?id=${productId}`)
            .then((response) => {
                setInputValues(response.data[0]);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [productId]);

    const changeHandler = (e) => {
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    };

    const editProductHandler = () => {
        axios
            .put(`http://localhost:3000/products/${productId}`, inputValues)
            .then(() => {
                messageWithIcon(
                    "محصول با موفقیت ویرایش شد",
                    <MdOutlineDownloadDone fontSize={25} />,
                    "/shop",
                    true,
                    "برای دیدن مصحولات"
                );
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    return (
        <div className="px-5">
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className="text-lg">ویرایش اطلاعات محصول </h2>
                </div>
                <div className="flex flex-col gap-y-6 mt-6">
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="categoryID">
                            آیدی محصول
                        </Label>
                        <Input
                            value={inputValues.categoryID || ""}
                            type="number"
                            id="categoryID"
                            name="categoryID"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="brandId">
                            آیدی برند
                        </Label>
                        <Input
                            value={inputValues.brandId || ""}
                            type="number"
                            id="brandId"
                            name="brandId"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="mainImage">
                            عکس اصلی
                        </Label>
                        <Input
                            value={inputValues.mainImage || ""}
                            type="text"
                            id="mainImage"
                            name="mainImage"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="images">
                            عکس ثانویه
                        </Label>
                        <Input
                            value={inputValues.images || ""}
                            type="text"
                            id="images"
                            name="images"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="description">
                            عنوان محصول
                        </Label>
                        <Input
                            value={inputValues.description || ""}
                            type="text"
                            id="description"
                            name="description"
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label
                            className="text-[#727272]"
                            htmlFor="currentPrice"
                        >
                            قیمت محصول
                        </Label>
                        <Input
                            value={inputValues.priceDetails?.currentPrice || ""}
                            type="number"
                            id="currentPrice"
                            name="currentPrice"
                            onChange={(e) =>
                                setInputValues({
                                    ...inputValues,
                                    priceDetails: {
                                        ...inputValues.priceDetails,
                                        currentPrice: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="dicCount">
                            قیمت با تخفیف
                        </Label>
                        <Input
                            value={inputValues.priceDetails?.dicCount || ""}
                            type="number"
                            id="dicCount"
                            name="dicCount"
                            onChange={(e) =>
                                setInputValues({
                                    ...inputValues,
                                    priceDetails: {
                                        ...inputValues.priceDetails,
                                        dicCount: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="grid w-full items-center gap-3">
                        <Label
                            className="text-[#727272]"
                            htmlFor="DiscountPercentage"
                        >
                            درصد تخفیف
                        </Label>
                        <Input
                            value={
                                inputValues.priceDetails?.DiscountPercentage ||
                                ""
                            }
                            type="number"
                            id="DiscountPercentage"
                            name="DiscountPercentage"
                            onChange={(e) =>
                                setInputValues({
                                    ...inputValues,
                                    priceDetails: {
                                        ...inputValues.priceDetails,
                                        DiscountPercentage: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                </div>
                <Button
                    type="button"
                    onClick={editProductHandler}
                    className="mt-5 w-max mx-auto"
                >
                    ویرایش محصول
                </Button>
            </div>
        </div>
    );
}
