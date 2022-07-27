import React, { useContext, useState } from 'react';
import { CartSummary } from '../../cartSummary/cartSummary.js';
import { CartContext } from '../../Context/CartContext.js';
import './Cart.css'


const Cart = () => {

    const [cartList, addCart, cantidadItems, totalPrice, clear, eliminarItem] = useContext(CartContext);

    const [summary, setSummary] = useState(false);


    function changeBoolean() {
        setSummary(summary => !summary);
        console.log(summary)
    }


    return (
        <div>
            <h1 className='textTitleCart'>Cart</h1>
            {cartList.map((item, indice) => (
                <div className='wrapperCart' key={item.id}>
                    <img className='imgCart' src={item.Url} alt='imagen' />
                    <div className='productInfoCart'>
                        <div className='productTexCart'>
                            <h3 className='productH3Cart'>{item.name}</h3>
                            <h4 className='productH4Cart'> Lorem ipsum</h4>
                            <p className='textoCart'>Quantity: {item.quantity}</p>
                        </div>
                        <div className='product-price-btn-cart'>
                            <button className='noselect' onClick={() => eliminarItem(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <div style={{ margin: 15 }}>
                <button className='CheckOut-btn' setSummary={true} onClick={changeBoolean}>Checkout</button>
                {summary && <CartSummary style={{ display: 'block' }} />}
            </div>
        </div>
    )
}


export default Cart;

