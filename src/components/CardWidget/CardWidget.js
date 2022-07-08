import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './cartWidget.css'
import { CartContext } from '../Context/CartContext'
import { Link } from "react-router-dom";



const CardWidget = () => {

    const [cartList, addCart, cantidadItems] = useContext(CartContext);


    return (
        <>
            <Link to={"/Cart"} className='cartWidget'>
                < ShoppingCartOutlinedIcon />
                <p>{cantidadItems()}</p>
            </Link>
        </>
    )

}


export default CardWidget;



