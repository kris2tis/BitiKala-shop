import { Swiper, SwiperSlide } from "swiper/react";

import percentage from "../assets/image/brand/percentage.svg";
import { IoIosArrowBack } from "react-icons/io";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Navigation , FreeMode } from "swiper/modules";

import amagzing_offer from "../assets/image/amagzingoffer.webp";
import { useEffect, useState } from "react";

import axios from "axios";

import AmagzingOfferCard from "../components/AmagzingOfferCard";
import { Link } from "react-router-dom";
export default function AmagzingOfferCarousel() {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/products").then((response) => {
            setProduct(response.data);
        });
    }, []);
    return (
        <div className="flex w-full justify-center gap-x-5 px-5">
            <div className="flex justify-center items-center w-full py-10">
                <div className="w-full bg-[#313131] py-5 rounded-2xl">
                {/* کاروسل پیشناد شگفت انگیز */}
                    <Swiper
                        className="w-full flex items-center !mx-0 md:max-w-[900px] lg:max-w-[1000px] 2xl:max-w-[1500px]"
                        slidesPerView="auto"
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation, FreeMode]}
                    >
                        <SwiperSlide className="ml-5 !w-[180px]">
                            <div className="mx-auto flex w-max h-[250px] flex-col items-center justify-between py-2 gap-y-2">
                                <img
                                    className="w-[88px] h-[88px]"
                                    src={amagzing_offer}
                                    alt=""
                                />
                                <div className="flex">
                                    <span className="bg-white px-1.5 text-black">
                                        15
                                    </span>
                                    :
                                    <span className="bg-white px-1.5 text-black">
                                        15
                                    </span>
                                    :
                                    <span className="bg-white px-1.5 text-black">
                                        56
                                    </span>
                                </div>

                                <img
                                    className="w-[70px] h-[70px]"
                                    src={percentage}
                                    alt=""
                                />
                                <Link to="/shop">
                                    <span className="flex items-center">
                                        مشاهده همه <IoIosArrowBack />
                                    </span>
                                </Link>
                            </div>
                        </SwiperSlide>
                        {product.map((p) => (
                            <SwiperSlide className="!w-max" key={p.id}>
                                <AmagzingOfferCard {...p} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
