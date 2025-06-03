import { useCategory } from "../../Hooks/getData";

export default function Category({newData}) {
    let {data} = useCategory();
  return data.map((category) => (
      <div key={category.id}>
          <span
              onClick={() =>
                  newData(
                      `http://localhost:3000/products?categoryID=${category.id}&_limit=10`
                  )
              }
              className="text-[#8f8f8f] cursor-pointer"
          >
              {category.name}
          </span>
      </div>
  ));
}
