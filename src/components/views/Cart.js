import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const { cartList, addCart, isInCart } = useContext(CartContext);



    return (
        <div>
            <h1>Cart</h1>
            {cartList.map((item, indice) =>
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.cantidad}</p>
                </div>
            )}
        </div>
    )
}


export default Cart; 
