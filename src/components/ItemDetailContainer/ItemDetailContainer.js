import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../Data/Data';
import { Link } from "react-router-dom";


const ItemDetailContainer = (props) => {
    const [producto, setProducto] = useState({});
    let { id } = useParams();
    console.log(id)

    useEffect(() => {

        getProductById(id)
            .then(res => {
                setProducto(res);
            })
    }, [id]);


    return (
        <div className='ItemListContainer'>
            <h3>{props.greetings}</h3>
            <ItemDetail producto={producto} />
        </div >
    )

}


{/* <Link to={`/item/${id}`}> <ItemDetail producto={producto} /></Link> */ }

export default ItemDetailContainer; 