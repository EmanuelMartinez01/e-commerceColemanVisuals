import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext.js';



const Cart = () => {

    const [cartList, setCartList, addCart, cantidadItems] = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map((item, indice) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <img className='' src={item.Url} alt='avatar' />
                    <p>{item.quantity}</p>
                </div>
            ))}
        </div>
    )
}


export default Cart; 
