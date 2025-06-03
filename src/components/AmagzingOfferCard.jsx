import {
    Card,
    CardHeader,
    CardContent,
    CardDescription,
} from "@/components/ui/card";

import toman from"../assets/image/brand/toman.svg"  

export default function AmagzingOfferCard({
    mainImage,
    description,
    currentPrice,
    priceDetails,
}) {

    return (
        <div>
            <Card className="bg-[#151515] flex-col items-center justify-between px-3 rounded-none border-0 w-[180px] h-[250px] py-3">
                <CardHeader className="row-flex-center w-full">
                    <img className="w-[120px]" src={mainImage} alt="" />
                    <CardDescription className="text-xs text-justify">
                        {description.slice(0, 30)} ...
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <div className="flex flex-col items-center gap-y-1">
                        <div className="flex justify-between items-center w-full">
                            <div className="bg-red-400 text-xs px-2 rounded-full">
                                <span>14%</span>
                            </div>
                            <span className="flex justify-between items-center gap-x-1 text-xs text-gray-200">
                                {Number(priceDetails.dicCount).toLocaleString()}
                                <img src={toman} alt="" />
                            </span>
                        </div>
                        <span className="line-through text-left mr-auto text-gray-400 w-full text-xs">
                            {Number(priceDetails.currentPrice).toLocaleString()}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
