import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let timeout;

        function delay() {
            timeout = setTimeout(alertdelay, 2000);
        }

        function alertdelay() {
            //llamada API 
            fetch('https://api.github.com/users')
                .then((response) => response.json())
                .then((json) => setItems(json));
        }

        delay();

    }, []);

    const onAdd = (counter) => {

        console.log(counter);
    }



    return (
        <div className='itemListContainer'>

            <ItemList items={items} />

            <ItemCount stock={10} min={1} onAdd={onAdd} />


        </div>
    )

};

export default ItemListContainer;