import {
    CarouselStories,
    PromotionalBannerSlider,
    ProductsCategory,
    AmagzingOfferCarousel,
    LtestArticles,
} from "../../sections/idnex";

export default function Home() {
    return (
        <div>
            <CarouselStories />
            <PromotionalBannerSlider />
            <ProductsCategory />
            <AmagzingOfferCarousel />
            <LtestArticles />
        </div>
    );
}
