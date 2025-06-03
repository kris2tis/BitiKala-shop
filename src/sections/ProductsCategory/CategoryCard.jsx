export default function CategoryCard({ CategoryPicture, CategoryName }) {
    return (
        <div className="flex flex-col gap-y-2.5 justify-center items-center">
            <img
                className="max-w-[100px] rounded-2xl max-h-[100px]"
                src={CategoryPicture}
                alt=""
            />
            <span className="text-sm">{CategoryName}</span>
        </div>
    );
}
