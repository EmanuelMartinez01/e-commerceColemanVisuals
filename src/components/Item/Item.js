import React from 'react';
import './Item.css';


const Item = (items) => {

    return (
        <div className='card'>
            <h1>Nombre: {items.id}</h1>
            <p>Image: {items.pageURL}</p>
        </div>
    )
}



export default Item;