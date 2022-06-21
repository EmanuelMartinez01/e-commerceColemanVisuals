import React from 'react';
import Item from '../Item/Item.js'



const ItemList = ({ items }) => {

    return (
        <div>
            {[items].map((item, idx) => (
                <Item items={item} key={idx} />
            ))}
        </div>

    );
}






export default ItemList;