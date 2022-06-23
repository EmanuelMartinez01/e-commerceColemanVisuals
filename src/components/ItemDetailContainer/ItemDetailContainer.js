import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = (props) => {
    const [user, setUser] = useState([]);
    let { id } = useParams();
    console.log(id)
    useEffect(() => {

        function axiosFunction() {

            axios(`https://api.github.com/users/${id}`)
                .then((res) => console.log(res.data))
        }

        setTimeout(axiosFunction, 2000);

    }, [id]);


    return (
        <div className='ItemListContainer'>
            <h3>{props.greetings}</h3>
            <ItemDetail user={user} />
        </div>
    )

}


export default ItemDetailContainer; 