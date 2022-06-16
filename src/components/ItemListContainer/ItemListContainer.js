import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = (props) =>{

    return (
        <div className='itemListContainer'>
            <h1 className="tittle">{props.greeting}</h1>
            <h2 className="tittle">{props.intro}</h2>
            <ItemCount />
            
            
        </div>
    )

};

export default ItemListContainer;