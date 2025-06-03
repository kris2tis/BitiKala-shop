import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function ShopCard({ id, mainImage, description, priceDetails }) {
    return (
        <Link to={`/product/${id}`}>
            <Card className="flex items-center justify-between px-2 w-full rounded-xs transition-all bg-transparent py-1 pt-4 border-[1px] border-[#252424] md:flex-col lg:border-transparent  hover:border-[1px] hover:border-[#252424]">
                <CardHeader className="w-1/3 h-full md:w-full">
                    <img
                        className="w-full mx-auto h-full"
                        src={mainImage}
                        alt=""
                    />
                </CardHeader>
                <CardContent className="w-2/3 md:w-full px-2">
                    <div>
                        <p className="text-xs">{description.slice(0, 43)}</p>
                    </div>
                    <div>
                        <div className="flex justify-between mt-4 items-center">
                            <span className="text-xs">
                                {Number(
                                    priceDetails.dicCount
                                ).toLocaleString()}
                                تومان
                            </span>
                            <span className="bg-[#e83737] px-3 text-xs rounded-full ">
                                %{Number(priceDetails.DiscountPercentage)}
                            </span>
                        </div>
                        <div>
                            <span className="text-xs text-gray-500 line-through">
                                {Number(priceDetails.currentPrice).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
