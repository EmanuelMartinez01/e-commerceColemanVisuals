import React from 'react';
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    console.log(items)
    return (
        <Link to={`/item/${items.id}`}>
            <div className='cardContent'>
                <div className="cardContainer">
                    <div className="card-meta">Photos</div>
                    <img className="card-image" src={items.Url} alt="imagen" />
                    <h2 className="card-title">{items.name}</h2>
                </div>
            </div>
        </Link>

    )
}





export default Item;