import { IoIosArrowBack } from "react-icons/io";
import ArticleCard from "./ArticlesCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Articles() {

    let [articleData, setArticleData] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:3000/articles?_limit=4").then((response) => {
            setArticleData(response.data)
        }).catch((err) => {
            console.error(err.message)
        });;
    })

    return (
        <div className="row-flex-center gap-y-7 w-full px-5 lg:h-[350px]">
            <div className="flex justify-between w-full">
                <h1>مقالات</h1>
                <div className="column-flex-center">
                    مطالب بیشتر <IoIosArrowBack />
                </div>
            </div>
            <div className="w-full grid gap-y-5 lg:grid-cols-4 lg:gap-x-4">
                {articleData.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                ))}
            </div>
        </div>
    );
}
