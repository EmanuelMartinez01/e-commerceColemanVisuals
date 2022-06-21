import React from 'react';
import './Item.css';


const Item = (items) => {
    console.log(items)
    return (
        <div className='card'>
            <h1>Nombre: {items.id}</h1>
            <p>Imagen: {items.pageURL}</p>
        </div>
    )
}



export default Item;