import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

//Logo 
import img from '../Header/logoColeman.png'

const Header = () => {

    return (
        <div className='Header' to={"/"}>
            <Link><img src={img} alt="logo" /></Link>
        </div>
    );
}


export default Header;