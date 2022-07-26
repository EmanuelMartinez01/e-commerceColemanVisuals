import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { getProductById, data } from '../../Data/Data';
import { IdNotExist } from '../IdNotExist/IdNotExist.js';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const [idItem, setIdItem] = useState();

    let { id } = useParams();

    useEffect(() => {
        if (id > data.length) {
            console.log("Producto no existe")

        } else {
            getProductById(id)
                .then(res => {
                    setItem(res);
                    setIdItem(id)
                })
        }


    }, [id]);


    return (
        <div className='ItemListContainer'>
            {idItem ? <ItemDetail item={item} /> : <IdNotExist />}
        </div >
    );
};


export default ItemDetailContainer; 