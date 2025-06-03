import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, FreeMode, Thumbs } from "swiper/modules";
import { useState } from "react";

export default function ImageSlider({ images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2 !hidden lg:!block"
            >
                {images?.map((image, index) => (
                    <SwiperSlide
                        key={index + 1}
                        className="!flex !justify-center max-w-full h-max-[250px]"
                    >
                        <img
                            className="h-[250px] max-h-[250px] w-[250px] rounded-lg"
                            src={image}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={1}
                pagination={true}
                modules={[Pagination, FreeMode, Thumbs]}
                className="ImageSlider__wrapper"
                breakpoints={{
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                        pagination: false,
                        freeMode: true,
                        watchSlidesProgress: true,
                    },
                }}
            >
                {images?.map((image, index) => (
                    <SwiperSlide
                        key={index + 1}
                        className="!flex !justify-center max-w-full h-max-[250px] lg:!w-[70px]"
                    >
                        <img
                            className="h-[250px] max-h-[250px] w-[250px] lg:h-[70px] lg:w-[70px] rounded-sm"
                            src={image}
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
