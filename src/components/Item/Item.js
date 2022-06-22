import React from 'react';
import './Item.css';


const Item = (items) => {
    console.log(items)
    return (
        <div className='card'>
            <h1 className='tittle'>Nombre {items.id}</h1>
            <figcaption className='subTittle'>
                <h3 className='cardImage'>Imagen {items.pageURL}</h3>
                <p className='texto'>Fotografo</p>
                <button className='btn-item'>Add to Cart</button>
            </figcaption>

        </div>
    )
}



export default Item;