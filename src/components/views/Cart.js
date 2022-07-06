import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const { items, addItem } = useContext(CartContext);



    return (
        <div>
            <h1>Cart</h1>
        </div>
    )
}


export default Cart; 
