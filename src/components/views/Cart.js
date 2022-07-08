import React, { useContext } from 'react';
import { CartSummary } from '../cartSummary/cartSummary.js';
import { CartContext } from '../Context/CartContext.js';
import './Cart.css'


const Cart = () => {

    const [cartList, addCart, cantidadItems, clear, totalPrice] = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cartList.map((item, indice) => (
                <div className='wrapperCart' key={item.id}>

                    <div className='productImgCart'>
                        <img src={item.Url} height={420} width={327} alt='imagen' />
                    </div>
                    <div className='productInfoCart'>
                        <div className='productTexCart'>
                            <h3 className='productH3Cart'>{item.name}</h3>
                            <h4 className='productH4Cart'> Lorem ipsum</h4>
                            <p className='textoCart'>Cantidad: {item.quantity}</p>
                        </div>
                        <div className='product-price-btn-cart'>
                            <CartSummary />
                            <button className='noselect' onClick={clear()}><span className='textoEliminar'>Eliminar</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></span></button>
                        </div>
                    </div>
                </div>

            ))}

        </div>

    )
}


export default Cart;

