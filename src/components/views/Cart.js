<<<<<<< HEAD
<<<<<<< HEAD
import React, { useContext } from 'react';
import Item from '../Item/Item.js'
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const { items, addItem } = useContext(CartContext);
    console.log(items);

=======
import React from 'react';
>>>>>>> parent of 24b8ece (Sin terminar)
=======
import React from 'react';
>>>>>>> parent of 24b8ece (Sin terminar)

const Cart = () => {
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
            <h1>Cart</h1>
>>>>>>> parent of 24b8ece (Sin terminar)
=======
            <h1>Cart</h1>
>>>>>>> parent of 24b8ece (Sin terminar)
        </div>
    )
}


export default Cart;