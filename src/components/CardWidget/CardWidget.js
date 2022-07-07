import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './cartWidget.css'
import { CartContext } from '../Context/CartContext'
import { Link } from "react-router-dom";



const CardWidget = () => {

    const [cartList, setCartList, clear] = useContext(CartContext);


    return (
        <>
            <Link to={"/Cart"} className='cartWidget'>
                < ShoppingCartOutlinedIcon />
                <p>0</p>
            </Link>
        </>
    )

}


export default CardWidget;



