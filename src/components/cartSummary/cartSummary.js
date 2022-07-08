import React, { useContext } from 'react';
import './cartSummary.css'
import { CartContext } from '../Context/CartContext';



export const CartSummary = () => {

    const [cartList, setCartList, addCart, cantidadItems, clear, totalPrice] = useContext(CartContext);

    return (
        <div className='cartSummary'>
            <h2>Resumen</h2>
            <div>
                <p className='priceSummary'><span className='priceSpanSummary'>Total: ${totalPrice()}</span></p>
            </div>
        </div>
    )
}


