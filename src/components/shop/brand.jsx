import { useBrand } from "../../Hooks/getData";

export default function Brand({ NewData }) {
    let {data} = useBrand();
    return data.map((brand) => (
        <div className="flex justify-between items-center">
            <span
                onClick={() =>
                    NewData(
                        `http://localhost:3000/products?brandId=${brand.id}`
                    )
                }
                className="text-[#d3d3d3]"
            >
                {brand.persianName}
            </span>
            <span className="text-[#d3d3d3]">{brand.englishName}</span>
        </div>
    ));
}
