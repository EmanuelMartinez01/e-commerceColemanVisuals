import React, { useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

//Item
import { item } from '../Item/Item';

const ItemListContainer = (props) => {

    useEffect(() => {
        //llamada api ? 
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => (json));
    })

    const onAdd = (counter) => {

        console.log(counter);
    }

    return (
        <div className='itemListContainer'>
            <h1 className="tittle">{props.greeting}</h1>
            <h2 className="tittle">{props.intro}</h2>
            {item.map((items, idx) => (
                <ItemList item={items} key={idx} />
            ))}

            <ItemCount stock={10} min={1} onAdd={onAdd} />


        </div>
    )

};

export default ItemListContainer;