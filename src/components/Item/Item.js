import React from 'react';
import './Item.css';


const Item = (items) => {
    console.log(items)
    return (
        <div className='card'>
            <h1 className='tittle'><span>Nombre {items.id}</span></h1>
            <ul className='subTittle'>
                <li className='texto'>Imagen {items.pageURL}</li>
                <li className='texto'>Fotografo</li>
            </ul>

        </div>
    )
}



export default Item;