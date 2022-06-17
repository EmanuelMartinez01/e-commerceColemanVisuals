import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = (props) =>{

    
const onAdd = (counter) => {
        
        console.log(counter);
    }

    return (
        <div className='itemListContainer'>
            <h1 className="tittle">{props.greeting}</h1>
            <h2 className="tittle">{props.intro}</h2>
            <ItemCount stock={10} min={1} onAdd={onAdd}/>
            
            
        </div>
    )

};

export default ItemListContainer;