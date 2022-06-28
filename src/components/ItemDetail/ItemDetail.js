import React from 'react';
import ItemCount from '../ItemCount/ItemCount';




const ItemDetail = ({ item }) => {
    console.log(item)
    return (

        <div>
            <div id={item.id} key={item.id}>
                <h3>{item.name}</h3>
                <img src={item.Url} alt='avatar' />
                <p>Lorem ipsum</p>
                <p>$ {item.precio}</p>

            </div>
            <ItemCount stock={item.stock} min={0} />
        </div>
    )

}





export default ItemDetail;