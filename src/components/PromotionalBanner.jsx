import banner from "../assets/image/banner/main-banner.webp";
export default function PromotionalBanner() {
    return (
        <div>
            <div className="relative w-full h-[35px] lg:h-[60px] overflow-hidden flex justify-center items-center">
                <img
                    src={banner}
                    alt="banner"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
