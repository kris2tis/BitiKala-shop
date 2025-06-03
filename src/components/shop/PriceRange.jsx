import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useProduct } from "../../Hooks/getData";

import {Button} from "@/components/ui/button"

export default function PriceRange({ newProducts }) {
    let {data} = useProduct();
    let [priceRange, setPriceRange] = useState([0, 0]);
    let [minAndMax, setMinMax] = useState([]);

    useEffect(() => {
        if (!data.length) return;

        const dicCountPrice = data.map(
            (product) => product.priceDetails.dicCount
        );
        
        const minPrice = Math.min(...dicCountPrice);
        const maxPrice = Math.max(...dicCountPrice);

        setPriceRange([minPrice, maxPrice]);
        setMinMax([minPrice, maxPrice]);
    }, [data]);
     

    return (
        <>
            <div className="flex flex-col gap-y-3 w-full">
                <div className="flex justify-between">
                    <span>از</span>
                    <div className="flex gap-x-3">
                        <span>{Number(priceRange[0]).toLocaleString()}</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>تا</span>
                    <div className="flex gap-x-3">
                        <span>{Number(priceRange[1]).toLocaleString()}</span>
                        <span className="text-xs">تومان</span>
                    </div>
                </div>
            </div>
            <Slider
                value={priceRange}
                defaultValue={minAndMax[0]}
                min={minAndMax[0]}
                max={minAndMax[1]}
                onValueChange={setPriceRange}
                className={cn("w-[100%] mt-5")}
            />
            <Button
                onClick={() =>
                    newProducts(
                        ` http://localhost:3000/products?priceDetails.dicCount_gte=${priceRange[0]}&priceDetails.dicCount_lte=${priceRange[1]}`
                    )
                }
                className="mt-5 border-[1px] border-[#545252]"
            >
                نمایش محصولات
            </Button>
        </>
    );
}
