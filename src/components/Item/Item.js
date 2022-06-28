import React from 'react';
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    console.log(items)
    return (
        <Link to={`/item/${items.id}`}>
            <div className='card'>
                <h1 className='tittle'>{items.name}</h1>
                <figcaption className='subTittle'>
                    <img className='cardImage' src={items.Url} alt="imagen" />
                    <p className='texto'>Fotografo</p>
                    <button className='btn-item'>Add to Cart</button>
                </figcaption>

            </div>
        </Link>

    )
}



export default Item;