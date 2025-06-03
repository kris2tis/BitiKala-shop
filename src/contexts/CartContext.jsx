import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartData, setCartData] = useState([]);
    const [sumPrices, setSumlPrices] = useState(0);

    useEffect(() => {
        let finallPrice;
        finallPrice = cartData.reduce((accumulator, currentItem) => {
            return (
                accumulator +
                currentItem.priceDetails.dicCount * currentItem.amout
            );
        }, 0);

        setSumlPrices(finallPrice);
    }, [cartData]);

    const updateCartData = (newData, id) => {
        const newItem = { ...newData, amout: 1 };

        const itemFind = cartData.find((item) => item.id === id);
        if (itemFind) {
            const samItem = cartData.map((item) => {
                if (item.id === itemFind.id) {
                    return { ...item, amout: item.amout + 1 };
                } else return item;
            });
            setCartData(samItem);
        } else {
            setCartData((prev) => [...prev, newItem]);
        }
    };

    const increaseAmout = (id) => {
        let newItems = cartData.map((item) => {
            if (item.id === id) {
                return { ...item, amout: item.amout + 1 };
            } else return item;
        });

        setCartData(newItems);
    };

    const decreaseAmout = (id) => {
        let newItems = cartData.map((item) => {
            if (item.id === id) {
                return { ...item, amout: item.amout - 1 };
            } else return item;
        });

        setCartData(newItems);
    };

    // delete Item form cart
    const deleteItem = (id) => {
        const newItems = cartData.filter((item) => item.id !== id);

        setCartData(newItems);
    };

    // Check the status of the cart
    const doesItem = () => {
        return cartData.length ? true : false
    }
    
    const cleareCart = () => {
        setCartData([])
    }
    return (
        <CartContext.Provider
            value={{
                cartData,
                updateCartData,
                sumPrices,
                decreaseAmout,
                increaseAmout,
                deleteItem,
                doesItem,
                cleareCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
