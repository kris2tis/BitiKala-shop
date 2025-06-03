import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination , Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import PromotionalBanner from "./PromotionalBanner";

export default function PromotionalBannerSlider() {
    let [imageBanner, setImageBanner] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/PromotionalBanner")
            .then((response) => {
                setImageBanner(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    return (
        <div className="mt-10">
            <Swiper
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                {imageBanner.map((banner) => (
                    <SwiperSlide className="!max-w-full" key={banner.id}>
                        <PromotionalBanner {...banner} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
