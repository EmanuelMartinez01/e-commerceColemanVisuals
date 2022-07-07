import React from 'react';
import './Item.css';
import { Link } from "react-router-dom";


const Item = ({ items }) => {
    console.log(items)
    return (
        <Link to={`/item/${items.id}`}>
            <div className='box'>
                <div className="card">
                    <div className="imgBx">
                        <img src={items.Url} alt="imagen" />
                    </div>
                    <div>
                        <h2 className="details">{items.name} </h2>
                        <br></br>
                        <span>Coleman</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}





export default Item;