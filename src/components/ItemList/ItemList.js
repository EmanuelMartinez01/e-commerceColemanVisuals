import React, { useState, useEffect } from 'react';
import Item from '../Item/Item.js'
import './ItemList.css'

// Firebase
import { db } from '../../firebase/firabaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';




const ItemList = () => {

    const [photosData, setPhotosData] = useState([]);

    const getPhotos = async () => {
        const q = query(collection(db, 'data'));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, '=>', doc.data());
            docs.push({ ...doc.data(), id: doc.id })
        });
        setPhotosData(docs);
    };

    useEffect(() => {
        getPhotos();
    }, []);


    return (
        <div className='cardList'>
            {photosData.map((item, idx) => (
                <Item items={item} key={idx} />
            ))}
        </div>

    );
}






export default ItemList;