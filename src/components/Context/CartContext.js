import React, { useState, createContext } from 'react';


export const CartContext = createContext([]);

export const ProductProvider = ({ children }) => {
    const [items, setItems] = useState([{
        id: 1,
        tittle: "primer producto",
        qty: 5
    }])

    /*     const isInCart = (id) => {
    
        }
     */
    const addItem = (item, qty) => {
        setItems([...items, { ...item, qty: qty }]);
    }

    return (
        <CartContext.Provider value={{ items, addItem }}>
            {children}
        </CartContext.Provider>
    )
}


