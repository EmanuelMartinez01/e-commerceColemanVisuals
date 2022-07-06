import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../CartContext/CartContext.js';
import './ItemDetail.css'




const ItemDetail = ({ item }) => {


    const cartContext = useContext(CartContext);
    console.log(cartContext);

    const [cart, setCart] = cartContext;
    console.log(cart)

    const onAdd = (add) => {
        console.log(add);
    }

    return (

        <div>
            <div id={item.id} key={item.id}>
                <h3>{item.name}</h3>
                <img className='' src={item.Url} alt='avatar' />
                <p>{item.descripcion}</p>
                <p className='price'>$ {item.precio}</p>
            </div>
            <ItemCount data={item} stock={item.stock} min={0} onAdd={onAdd} />
        </div>
    )

}





export default ItemDetail;