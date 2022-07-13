import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../../Item/Item';

// Firebase
import { db } from '../../../firebase/firabaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';


const CategoryList = () => {

    const [photosData, setPhotosData] = useState([]);


    const { category } = useParams();

    useEffect(() => {
        const getPhotosData = async () => {
            const q = query(collection(db, 'data'), where('category', '==', category));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setPhotosData(docs);
        }
        getPhotosData();
    }, [category]);



    return (
        <div className='cardList'>
            <h1>Hola</h1>
            {photosData.map((item, idx) => (
                <Item items={item} key={idx} />
            ))}
        </div>


    )
}


export default CategoryList; 