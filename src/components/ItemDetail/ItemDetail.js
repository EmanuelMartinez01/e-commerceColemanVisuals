import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {


    const { addItem } = useContext(CartContext)


    /*    const onAdd = (add) => {
           console.log(add);
       } */









    return (

        <div>
            <div id={item.id} key={item.id}>
                <h3>{item.name}</h3>
                <img className='' src={item.Url} alt='avatar' />
                <p>Lorem ipsum</p>
                <p className='price'>$ {item.precio}</p>
            </div>

            <ItemCount item={item} stock={item.stock} min={0} addItem={addItem} />
        </div>
    )

}





export default ItemDetail;