import { useContext, useEffect, useState } from "react";

import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";

export default function Counter({ numberCount , productId }) {
    const { decreaseAmout, increaseAmout , deleteItem } = useContext(CartContext);
    
    let [count, setCount] = useState(numberCount);

    let [doesIncrease, setDoesIncrease] = useState(true)
    let [doesDecrease, setDoesDecrease] = useState(false)
    useEffect(() => {
        count >= 3 ? setDoesIncrease(false) : setDoesIncrease(true);
        count > 1 ? setDoesDecrease(true) : setDoesDecrease(false); 
    }, [count])
    
    return (
        <div>
            <div className="flex gap-x-3 border-[1px] border-[#797979] items-center justify-between px-3 py-1.5 rounded-full">
                <div
                    onClick={() =>
                        setCount((prev) => (doesIncrease ? prev + 1 : prev))
                    }
                >
                    {count < 3 ? (
                        <GoPlus onClick={() => increaseAmout(productId)} />
                    ) : (
                        <span className="text-[8px]">حداکثر</span>
                    )}
                </div>
                <div>{count}</div>
                <div
                    onClick={() =>
                        setCount((prev) => (doesDecrease ? prev - 1 : prev))
                    }
                >
                    {count <= 1 ? (
                        <MdDelete onClick={() => deleteItem(productId)} />
                    ) : (
                        <FiMinus onClick={() => decreaseAmout(productId)} />
                    )}
                </div>
            </div>
        </div>
    );
}
