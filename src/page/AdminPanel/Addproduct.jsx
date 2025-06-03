import { useState } from "react";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import AccessToSection from "../../components/AccessToSection";

import useMessage from "../../Hooks/useMessage";

import { MdOutlineDownloadDone } from "react-icons/md";

export default function Addproduct() {
    let [producFildes, setProductFildes] = useState({
        categoryID: "",
        brandId: "",
        mainImage: "",
        images: "",
        description: "",
        priceDetails: {
            currentPrice: "",
            dicCount: "",
            DiscountPercentage: "",
        },
    });

    const { messageWithIcon } = useMessage();

    const addProduct = () => {
        axios
            .post("http://localhost:3000/products", producFildes)
            .then(() => {
                messageWithIcon(
                    "محصول با موفقیت اضافه شد",
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
            <AccessToSection />
            <div className="hidden md:flex flex-col gap-y-3">
                <div>
                    <h3 className="text-xl font-bold">افزودن محصول جدید</h3>
                </div>
                <div className="flex flex-col gap-y-5">
                    <div className="grid w-full items-center gap-3">
                        <Label className="text-[#727272]" htmlFor="categoryID">
                            آیدی دسته بندی
                        </Label>
                        <Input
                            value={producFildes.categoryID}
                            type="number"
                            id="categoryID"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    categoryID: e.target.value,
                                })
                            }
                        />
                        <Label className="text-[#727272]" htmlFor="brandId">
                            آیدی برند
                        </Label>
                        <Input
                            value={producFildes.brandId}
                            type="number"
                            id="brandId"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    brandId: e.target.value,
                                })
                            }
                        />
                        <Label
                            className="text-[#727272]"
                            htmlFor="productImage"
                        >
                            عکس محصول
                        </Label>
                        <Input
                            value={producFildes.mainImage}
                            type="string"
                            id="productImage"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    mainImage: e.target.value,
                                })
                            }
                        />
                        <Label className="text-[#727272]" htmlFor="images">
                            عکس های ثانویه
                        </Label>
                        <Input
                            value={producFildes.images}
                            type="string"
                            id="images"
                            placeholder="با علامت (,) عکس هارا از هم جدا کنید "
                            onChange={(e) => {
                                setProductFildes({
                                    ...producFildes,
                                    images: e.target.value.split(","),
                                });
                            }}
                        />
                        <Label
                            className="text-[#727272]"
                            htmlFor="productTitle"
                        >
                            عنوان محصول
                        </Label>
                        <Input
                            value={producFildes.description}
                            type=" string"
                            id="productTitle"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    description: e.target.value,
                                })
                            }
                        />
                        <Label
                            className="text-[#727272]"
                            htmlFor="productPrice"
                        >
                            قیمت محصول
                        </Label>
                        <Input
                            value={producFildes.priceDetails.currentPrice}
                            type=" string"
                            id="productPrice"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    priceDetails: {
                                        ...producFildes.priceDetails,
                                        currentPrice: e.target.value,
                                    },
                                })
                            }
                        />
                        <Label className="text-[#727272]" htmlFor="dicCount">
                            قیمت با تخفیف
                        </Label>
                        <Input
                            value={producFildes.priceDetails.dicCount}
                            type="string"
                            id="dicCount"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    priceDetails: {
                                        ...producFildes.priceDetails,
                                        dicCount: e.target.value,
                                    },
                                })
                            }
                        />
                        <Label
                            className="text-[#727272]"
                            htmlFor="dicCountPercentage"
                        >
                            درصد تخفیف
                        </Label>
                        <Input
                            value={producFildes.priceDetails.DiscountPercentage}
                            type=" string"
                            id="dicCountPercentage"
                            onChange={(e) =>
                                setProductFildes({
                                    ...producFildes,
                                    priceDetails: {
                                        ...producFildes.priceDetails,
                                        DiscountPercentage: e.target.value,
                                    },
                                })
                            }
                        />

                        <Button
                            type="button"
                            onClick={(e) => addProduct(e)}
                            className="w-max mx-auto mt-5"
                        >
                            ساخت محصول جدید
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
