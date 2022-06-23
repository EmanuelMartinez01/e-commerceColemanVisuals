import React from 'react';
import './Header.css';

//Logo 
import img from '../Header/logoColeman.png'

const Header = () => {

    return (
        <div className='Header'>
            <img src={img} alt="logo" />
        </div>
    );
}


export default Header;