import React from 'react';
import './Header.css';

// Logo
import img from '../Header/logoColeman.png'

const Header = (props) => {
    console.log (props)
        return (
            <div className='Header'>
              <img className='logo__coleman' src={img} alt="logo" />
                <h1>{props.title}</h1>
                
            </div>
        );
};


export default Header;