import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";

import { Grid, Navigation, FreeMode } from "swiper/modules";

import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

export default function ProductsCategory() {
    let [productCategory, setProductCategory] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/ProductCategory")
            .then((response) => {
                setProductCategory(response.data);
            })
            .catch((error) => {
                console.error(error.massege);
            });
    }, []);
    return (
        <div className="flex flex-col gap-y-10 px-4 mt-10 h-[500px] items-center">
            <h1 className="text-center">خرید بر اساس دسته بندی</h1>
            <Swiper
                slidesPerView="auto"
                freeMode="true"
                grid={{
                    rows: 3,
                }}
                breakpoints={{
                    
                    768: {
                        spaceBetween : 60
                    },
                }}
                spaceBetween={20}
                navigation={true}
                modules={[Grid, Navigation, FreeMode]}
                className="w-full"
            >
                {productCategory.map((category) => (
                    <SwiperSlide className="category-slide !w-max" key={category.id}>
                        <CategoryCard {...category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
