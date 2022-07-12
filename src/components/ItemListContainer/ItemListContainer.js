import React from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
// import { data } from '../../Data/Data';


const ItemListContainer = () => {

    // const [items, setItems] = useState([]);

    // useEffect(() => {

    //     setTimeout(() => { setItems(data); }, 2000);

    // }, []);




    return (
        <div className='itemListContainer'>
            <ItemList />
        </div>
    )

};

export default ItemListContainer;