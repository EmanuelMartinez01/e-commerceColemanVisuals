<<<<<<< HEAD
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
=======
import React from 'react';
>>>>>>> parent of 24b8ece (Sin terminar)
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'



const ItemDetail = ({ item }) => {

<<<<<<< HEAD


    const { addItem } = useContext(CartContext)


    /*    const onAdd = (add) => {
           console.log(add);
       } */
=======
    const onAdd = (add) => {
        console.log(add);
    }
>>>>>>> parent of 24b8ece (Sin terminar)




    return (

        <div>
            <div id={item.id} key={item.id}>
                <h3>{item.name}</h3>
                <img className='' src={item.Url} alt='avatar' />
                <p>Lorem ipsum</p>
                <p className='price'>$ {item.precio}</p>
            </div>
<<<<<<< HEAD
            <ItemCount item={item} stock={item.stock} min={0} addItem={addItem} />
=======
            <ItemCount stock={item.stock} min={0} onAdd={onAdd} />
>>>>>>> parent of 24b8ece (Sin terminar)
        </div>
    )

}





export default ItemDetail;