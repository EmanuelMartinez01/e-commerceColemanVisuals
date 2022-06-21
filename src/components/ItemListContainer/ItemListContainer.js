import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        //llamada API 
        fetch('https://pixabay.com/api/?key=28194686-08704d882809305001daf4fa9&q=yellow+flowers&image_type=photo&pretty=true').then((response) => response.json()).then((json) => setItems(json));
    }, [])

    const onAdd = (counter) => {

        console.log(counter);
    }



    return (
        <div className='itemListContainer'>
            <h1 className="tittle">{props.greeting}</h1>
            <h2 className="tittle">{props.intro}</h2>
            <ItemList items={items} />

            <ItemCount stock={10} min={1} onAdd={onAdd} />


        </div>
    )

};

export default ItemListContainer;