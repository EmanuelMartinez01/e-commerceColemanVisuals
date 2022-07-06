import React, { useContext } from 'react';
import Item from '../Item/Item.js'
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const { items, addItem } = useContext(CartContext);
    console.log(items);


    return (
        <div>

        </div>
    )
}


export default Cart;