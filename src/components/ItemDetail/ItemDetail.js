import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { CartContext } from '../Context/CartContext'



const ItemDetail = ({ item }) => {
    const [cartList, setCartList, addCart] = useContext(CartContext);

    const onAdd = (quantity) => {
        console.log(quantity)
        addCart(item, quantity);
    }

    return (

        <div>
            <div id={item.id} key={item.id}>
                <h3>{item.name}</h3>
                <img className='' src={item.Url} alt='avatar' />
                <p>Lorem ipsum</p>
                <p className='price'>$ {item.precio}</p>
            </div>
            <ItemCount stock={item.stock} min={0} onAdd={onAdd} />
        </div>
    )

}




export default ItemDetail;