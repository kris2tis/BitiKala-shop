export default function PromotionalBanner({ img }) {
    return (
        <div className="h-[180px] lg:h-[300px]">
            <img
                src={img}
                className="w-full px-2 rounded-2xl lg:rounded-none lg:px-0"
                alt="image banner"
            />
        </div>
    );
}
