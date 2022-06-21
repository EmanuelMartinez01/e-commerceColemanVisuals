import React from 'react';
import Item from '../Item/Item.js'

import './ItemList.css'



const ItemList = ({ items }) => {

    return (
        <div className='cardList'>
            {items.map((item, idx) => (
                <Item items={item} key={idx} />
            ))}
        </div>

    );
}






export default ItemList;