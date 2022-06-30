import React from 'react';
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    console.log(items)
    return (
        <Link to={`/item/${items.id}`}>
            <div>

                <div className="card-text">
                    <div className="card-meta">Photos</div>
                    <h2 className="card-title">{items.name}</h2>
                </div>
                <img className="card-image" src={items.Url} alt="imagen" />
            </div>
        </Link>

    )
}





export default Item;