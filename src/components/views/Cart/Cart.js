import React, { useContext } from 'react';
import { CartSummary } from '../../cartSummary/cartSummary.js';
import { CartContext } from '../../Context/CartContext.js';
import './Cart.css'


const Cart = () => {

    const [cartList, addCart, cantidadItems, totalPrice] = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map((item, indice) => (
                <div className='wrapperCart' key={item.id}>

                    <div className='productImgCart'>
                        <img src={item.Url} alt='imagen' />
                    </div>
                    <div className='productInfoCart'>
                        <div className='productTexCart'>
                            <h3 className='productH3Cart'>{item.name}</h3>
                            <h4 className='productH4Cart'> Lorem ipsum</h4>
                            <p className='textoCart'>Cantidad: {item.quantity}</p>
                        </div>
                        <div className='product-price-btn-cart'>

                            <button className='noselect'>X</button>
                        </div>
                    </div>
                </div>
            ))}
            <div><CartSummary /></div>
        </div>

    )
}


export default Cart;

