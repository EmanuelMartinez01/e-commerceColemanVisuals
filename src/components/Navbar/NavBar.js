import React, { useState } from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget.js';




const NavBar = () => {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");


    const navToggle = () => {
        active === 'nav__menu'
            ? setActive('nav__menu nav__active')
            : setActive('nav__menu');

        // TogglerIcon
        toggleIcon === 'nav__toggler'
            ? setToggleIcon('nav__toggler toggle')
            : setToggleIcon('nav__toggler')
    }
    return (
        <nav className='NavBar'>
            <ul className={active}>
                <li className='nav__item'>
                    <a href="#/" className='nav__link'>Home</a>
                </li>
                <li className='nav__item'>
                    <a href="#/" className='nav__link'>Section</a>
                </li>
                <li className='nav__item'>
                    <a href="#/" className='nav__link'>Contact</a>
                </li>

                <CardWidget className='nav__item' />



            </ul>

            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}

export default NavBar;