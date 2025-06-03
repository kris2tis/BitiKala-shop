import { useEffect, useState } from "react";
import axios from "axios";
export default function useData(url) {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    const getSingleData = (url) => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data[0]);
            })
            .catch((error) => console.error(error.message));
    };

    const getNewData = (url) => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => console.error(error.message));
    };

    const postItem = (item) => {
        axios.post(url, item).catch((error) => console.error(error.message));
    };

    return { data, getNewData, getSingleData, postItem };
}

export const useProduct = () =>
    useData("http://localhost:3000/products?_limit=10");
export const useProductAdmin = () => useData("http://localhost:3000/products");
export const useCategory = () => useData("http://localhost:3000/categories");
export const useBrand = () => useData("http://localhost:3000/brand");
export const useUsers = () => useData("http://localhost:3000/users");
