import React, { useState, createContext } from 'react';


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

    function totalPrice() {
        return cartList.reduce((total, item) => total + item.quantity * item.precio, 0)
    }

    const clear = () => {
        setCartList([])
    }

    const eliminarItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }



    return (
        <CartContext.Provider value={[cartList, addCart, cantidadItems, totalPrice, clear, eliminarItem]}>
            {children}
        </CartContext.Provider>
    )
}


