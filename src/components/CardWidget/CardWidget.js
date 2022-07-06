import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../Navbar/NavBar.css'
import { Link } from 'react-router-dom';
import Cart from '../views/Cart';

const CardWidget = () => {
    return (
        <div>
            <Link to={"/cart"} element={<Cart />}><li className='NavBar'><ShoppingCartOutlinedIcon /></li></Link>
            <p>{2}</p>
        </div>
    )

}


export default CardWidget;



