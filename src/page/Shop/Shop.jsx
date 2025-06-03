import { FaSortAlphaDownAlt } from "react-icons/fa";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { useProduct } from "../../Hooks/getData";
import ShopCard from "../../components/ShopCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";

import { FaFilter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import BottomSheetDialog from "../../components/BottomSheetDialog";
import Brand from "../../components/shop/brand";
import Sort from "../../components/shop/sort";
import Category from "../../components/shop/category";
import PriceRange from "../../components/shop/PriceRange";

export default function Product() {
    let { data, getNewData } = useProduct();
    
    return (
        <div className="flex flex-col lg:flex-row px-5 gap-x-5 justify-center">
            {/* فیلتر */}
            <div className="hidden w-2/6 flex-col border-[1px] border-[#202020] rounded-xs px-2 py-4 lg:flex 2xl:w-1/6">
                <div className="sticky top-5 w-full">
                    <div>
                        <h3>فیلتر ها</h3>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>دسته بندی</AccordionTrigger>
                                <AccordionContent className="row-flex-center !items-start gap-y-3 ">
                                    <Category newData={getNewData} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="airplane-mode">ارسال امروز</Label>
                            <Switch id="airplane-mode" />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="airplane-mode">
                                فقط سوپر مارکتی
                            </Label>
                            <Switch id="airplane-mode" />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <Label htmlFor="airplane-mode">ارسال فروشنده</Label>
                            <Switch id="airplane-mode" />
                        </div>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>محدوده قیمت</AccordionTrigger>
                                <AccordionContent className="py-4">
                                    <PriceRange newProducts={getNewData} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            {/* فیلتر موبایل */}
            <div className="lg:hidden">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={5}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog
                            icon={<FaSortAlphaDownAlt fontSize={10} />}
                            buttonText={"مرتب سازی"}
                        >
                            <div className="flex flex-col gap-y-3 px-4 py-5">
                                <h1>مرتب سازی بر اساس</h1>
                                <Sort newData={getNewData} />
                            </div>
                        </BottomSheetDialog>
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog
                            icon={<FaFilter fontSize={10} />}
                            buttonText={"فیلتر"}
                        >
                            <div className="px-5 py-5">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            <h1 className="font-bold text-lg">
                                                برند ها
                                            </h1>
                                        </AccordionTrigger>

                                        <AccordionContent>
                                            <Brand NewData={getNewData} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </BottomSheetDialog>
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog
                            icon={<IoIosArrowDown fontSize={10} />}
                            buttonText={"دسته بندی"}
                        >
                            <div className="flex flex-col gap-y-3 px-4 py-5">
                                <div>
                                    <h3>دسته بندی</h3>
                                </div>
                                <Category newData={getNewData} />
                            </div>
                        </BottomSheetDialog>
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog
                            icon={<IoIosArrowDown fontSize={10} />}
                            buttonText={"محدود قیمت"}
                        >
                            <div className="py-3 px-8">

                                <PriceRange newProducts={getNewData} />
                            </div>
                        </BottomSheetDialog>
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog buttonText={"ارسال امروز"} />
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog buttonText={"فقط سوپر مارکتی"} />
                    </SwiperSlide>
                    <SwiperSlide className="!w-max">
                        <BottomSheetDialog buttonText={"ارسال فروشنده"} />
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* محصولات */}
            <div className="w-full lg:w-4/6 2xl:w-5/6">
                {/* مرتب  سازی */}
                <div className="py-4 ">
                    <div className="flex">
                        <div className="hidden items-center gap-x-4 lg:flex lg:w-5/6">
                            <div className="flex items-center gap-x-2">
                                <FaSortAlphaDownAlt />
                                <span>مرتب سازی :</span>
                            </div>

                            <div className="flex gap-x-3">
                                <Sort newData={getNewData} />
                            </div>
                        </div>
                        <div className="flex w-full justify-between lg:justify-end lg:w-1/6">
                            <span className="text-xs lg:hidden">
                                همه کالاها
                            </span>
                            <div className="flex items-center gap-x-1 text-[#555555]">
                                <span className="text-xs">
                                    {data.length}
                                </span>
                                <span className="text-xs">کالا</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* محصولات */}
                <div className="gap-y-3 border-t-[1px] border-[#202020]">
                    <div className="grid grid-cols-1 gap-x-2 w-full mt-5 gap-y-2 md:grid-cols-2 lg:gap-x-0 2xl:grid-cols-3">
                        {data.map((product) => (
                            <ShopCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
