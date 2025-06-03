import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ArticleCard({ mainImage, description }) {
    return (
        <Card className="!p-0 flex-col border-0 border-none w-full h-full shadow-[0px_0px_0px_0.3px_#fff] bg-[#151515] rounded-[10px_10px_0px_0px] overflow-hidden">
            <CardHeader className="px-0 lg:h-4/6">
                <img className="h-full" src={mainImage} alt="article-picture" />
            </CardHeader>
            <CardContent className="w-full pb-4 lg:pb-0 lg:mt-5 px-3 mt-3">
                <p className="text-lg lg:text-xs text-right">{description}</p>
            </CardContent>
        </Card>
    );
}
