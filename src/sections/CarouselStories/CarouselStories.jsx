import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

import axios from "axios";
import Story from "./CardStory";

export default function Stories() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users?hasStory=true").then((data) => {
            setUsers(data.data);
        });
    }, []);

    return (
        <div className="flex justify-center px-4">
            <Swiper
                className="storySwiper flex flex-col gap-y-1 relative w-full md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1200px]"
                slidesPerView="auto"
                spaceBetween={10}
                navigation={true}
                
                modules={[Navigation]}
            >
                {users.map((user) => (
                    <SwiperSlide className="storySwiperSlide !max-h-max !max-w-[95px] cursor-pointer " key={user.id}>
                        <Story {...user} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
