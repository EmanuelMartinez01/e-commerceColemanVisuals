import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Data/Data';



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    let { id } = useParams();

    useEffect(() => {

        getProductById(id)
            .then(res => {
                setItem(res);
            })

    }, [id]);


    return (
        <div className='ItemListContainer'>
            <ItemDetail item={item} />
        </div >
    );
};


export default ItemDetailContainer; 