import React, { useContext } from 'react';
import Item from '../Item/Item.js'
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const { items, addItem } = useContext(CartContext);



    return (
        <div>
            {
                items.map((item) => {
                    <div key={item.id}>
                        <h1>{item.tittle}</h1>
                    </div>
                })
            }
        </div>
    )
}


export default Cart;