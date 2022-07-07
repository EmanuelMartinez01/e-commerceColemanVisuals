import React, { useState, createContext } from 'react';
import { data } from '../../Data/Data';


export const CartContext = createContext();

export const ProductProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    function isInCart(id) {
        return cartList.some(item => item.id === id);
    }

    function addCart(data, quantity) {
        if (quantity === 0) {
            return;
        }

        let existe = isInCart(data.id);

        if (existe) {
            let itemCart = cartList.find(item => item.id === data.id);
            itemCart.quantity += quantity;
            setCartList([...cartList]);
        }
        else {
            setCartList([...cartList, { ...data, quantity }]);
        }
    }

    function cantidadItems() {
        return cartList.reduce((total, item) => total + item.quantity, 0);
    }






    return (
        <CartContext.Provider value={[cartList, setCartList, addCart, cantidadItems]}>
            {children}
        </CartContext.Provider>
    )
}


