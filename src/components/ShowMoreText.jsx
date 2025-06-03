import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function ShowMoreText({text}) {
    let [sliceText , setSliceText] = useState(false)
    return (
        <div className={`pt-7 h-[180px] sm:h-[150px] ${sliceText && "!h-[250px] sm:!h-[190px] "}`} >
            <div className="flex flex-col items-center w-full relative">
                <p className={`text-xs text-justify ${!sliceText && "after:absolute after:inset-0 after:h-full after:w-full before:content-[''] after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#000000] after:z-10"}`}>
                    {sliceText ? text : text.slice(0 , 228) + "..."}
                </p>
                <div className="w-full absolute -bottom-10 bg-black px-5 z-10">
                    <p onClick={() => setSliceText(prev => !prev)} className="flex text-xs items-center gap-x-2 mt-3 w-max">
                        {sliceText ? "بستن" : "مشاهده بیشتر"} <IoIosArrowBack />
                    </p>
                </div>
            </div>
        </div>
    );
}
