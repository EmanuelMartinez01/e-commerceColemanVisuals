import React from 'react';
import './ItemList.css';


const ItemList = ({ item }) => {

    return (
        <div className="card">
            <h1>Nombre : {item.nombre}</h1>
            <p>Precio : {item.price}$</p>
        </div>
    );
}




export default ItemList;