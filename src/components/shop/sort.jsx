import { useState } from "react";

export default function Sort({ newData }) {
    let [activeFilter, setActiveFilter] = useState(null);
    return sort.map((sort, index) => (
        <div key={index + 1}>
            <span
                onClick={() => {
                    setActiveFilter(sort.name);
                    newData(
                        `http://localhost:3000/products?_sort=${sort.type}`
                    );
                }}
                className={`text-[#8f8f8f] cursor-pointer duration-500 lg:text-sm ${
                    activeFilter == sort.name ? "text-[#f7f7f7]" : ""
                }`}
            >
                {sort.name}
            </span>
        </div>
    ));
}

const sort = [
    { name: "جدید ترین", type: "-id" },
    { name: "قدیمی ترین", type: "id" },
    { name: "ارزان ترین", type: "priceDetails.dicCount" },
    { name: "گران  ترین", type: "-priceDetails.dicCount" },
];
