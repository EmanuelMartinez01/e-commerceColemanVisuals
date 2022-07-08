import React, { useContext } from 'react';
import './cartSummary.css'
import { CartContext } from '../Context/CartContext';



export const CartSummary = () => {

    const [cartList, addCart, cantidadItems, totalPrice] = useContext(CartContext);

    return (
        <div className='cartSummary'>
            <h2>Resumen</h2>
            <div>
                <p className='priceSummary'><span className='priceSpanSummary'>Total: ${totalPrice()}</span></p>
            </div>
            <button className='compraFinalizada'>Finalizar Compra</button>
        </div>
    )
}


