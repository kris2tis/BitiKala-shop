import { Separator } from "@/components/ui/separator";
import { MdPayment } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import ShowMoreText from "../components/ShowMoreText";

export default function Footer() {
    return (
        <div className="w-full border-t-[1px] border-[#FBE6E6]">
            <div className="w-full flex flex-col gap-y-10 px-5 py-10">
                {/* دستکتاپ */}
                <div>
                    <div className="hidden lg:flex h-5 items-center space-x-4 text-sm">
                        <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                        <Separator orientation="vertical" />
                        <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
                        <Separator orientation="vertical" />
                        <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                    </div>
                </div>
                <div className="hidden lg:grid grid-cols-4 mt-4">
                    <div className="flex flex-col items-center gap-y-3">
                        <MdPayment />
                        <span>امکان پرداخت درب محل</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-3">
                        <MdPayment />
                        <span>امکان پرداخت درب محل</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-3">
                        <MdPayment />
                        <span>امکان پرداخت درب محل</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-3">
                        <MdPayment />
                        <span>امکان پرداخت درب محل</span>
                    </div>
                </div>
                <div className="hidden lg:flex gap-x-4">
                    {/* سمت راست */}
                    <div className="grid w-4/6 justify-center grid-cols-3">
                        <div className="flex flex-col gap-y-3">
                            <p className="pb-3">با بیتی کالا</p>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                        </div>

                        <div className="flex flex-col gap-y-3">
                            <p className="pb-3">خدمات مشتریان</p>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <p className="pb-3">راهنمای خرید از بیتی کالا</p>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                            <span className="footer-text-gray">
                                اتاق خبر بیتی کالا
                            </span>
                        </div>
                    </div>
                    {/* سمت چپ */}
                    <div className="w-2/6">
                        <h3 className="footer-text-gray">همراه ما باشید</h3>
                        <div className="flex justify-between mt-5">
                            <CiInstagram fontSize={40} />{" "}
                            <FaTwitter fontSize={40} />{" "}
                            <FaLinkedin fontSize={40} />{" "}
                            <SiAparat fontSize={40} />
                        </div>
                        <p className="my-5">
                            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                        </p>
                        <div className="flex w-full items-center space-x-2">
                            <Input
                                className="rounded-xs"
                                type="email"
                                placeholder="ایمیل شما"
                            />
                            <Button type="button">ثبت</Button>
                        </div>
                    </div>
                </div>
                {/* دستکتاپ */}
                {/* موبایل */}
                <div className="lg:hidden">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-full p-2 h-max bg-gray-400">
                                <MdSupportAgent fontSize={20} />
                            </div>
                            <div className="flex flex-col gap-y-2 text-xs ">
                                <span>تماس با پشتیبانی</span>
                                <span className="footer-text-gray">
                                    ۷ روز هفته، ۲۴ ساعت
                                </span>
                            </div>
                        </div>
                        <div>
                            <Button>تماس</Button>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-between">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-full p-2 h-max bg-gray-400">
                                <FaDownload fontSize={20} />
                            </div>
                            <div className="flex flex-col gap-y-2 text-xs ">
                                <span>اپلیکیشن بیتی کالا</span>
                                <span className="footer-text-gray">
                                    تجربه خرید بهتر
                                </span>
                            </div>
                        </div>
                        <div>
                            <Drawer>
                                <div className="px-4 py-2 bg-[#151515] rounded-md text-sm">
                                    <DrawerTrigger>دانلود</DrawerTrigger>
                                </div>

                                <DrawerContent className="bg-[#151515] px-5">
                                    <div className="py-5">
                                        <div className="flex justify-between">
                                            <span>
                                                دانلود اپلیکیشن بیتی کالا
                                            </span>
                                            <DrawerClose>
                                                <IoMdClose />
                                            </DrawerClose>
                                        </div>
                                        <div className="flex gap-x-4 mt-10">
                                            <div className="w-full">
                                                <img
                                                    className="w-full inline-block"
                                                    src="https://www.digikala.com/statics/img/svg/appStores/mobile-coffe-bazzar.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="w-full">
                                                <img
                                                    className="w-full"
                                                    src="https://www.digikala.com/statics/img/svg/appStores/myket-dark.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                    <Separator className="my-4" />

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>با بیتی کالا</AccordionTrigger>
                            <AccordionContent className="text-xs">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>خدمات مشتریان</AccordionTrigger>
                            <AccordionContent className="text-xs">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                سطرآنچنان که لازم است و برای
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                راهنمای خرید از بیتی کالا
                            </AccordionTrigger>
                            <AccordionContent className="text-xs">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                                صنعت چاپ و با استفاده از طراحان گرافیک است
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                ابزارهای کاربردی می باشد
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>شرکای تجاری</AccordionTrigger>
                            <AccordionContent className="text-xs">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ا
                                سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                                مورد نیاز و کاربردهای متنوع با هدف بهبود
                                ابزارهای کاربردی می باشد
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Separator />
                    <ShowMoreText
                        text={
                            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها"
                        }
                    />
                </div>
                {/* موبایل */}
            </div>
        </div>
    );
}
