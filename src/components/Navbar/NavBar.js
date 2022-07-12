import React, { useContext, useState } from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget.js';
import { Link } from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../views/Cart';
import { CartContext } from '../Context/CartContext';
import { Section } from '../Pages/Section';
import { Contact } from '../Pages/Contact';

//Logo 
import img from '../Navbar/logo2.png'



const NavBar = () => {

    const [cartList, addCart, cantidadItems] = useContext(CartContext);

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
        <header>
            <div className='NavBar'>
                <div className='logoBar' >
                    <img src={img} alt="logo" />
                </div>
                <nav>
                    <ul className={active}>
                        <li className='nav__item'><Link className='nav__link' to={"/"} element={<ItemListContainer />}>Home</Link></li>
                        <li className='nav__item'><Link className='nav__link' to={"/section"} element={<Section />}>Section</Link></li>
                        <li className='nav__item'><Link className='nav__link' to={"/contact"} element={<Contact />}>Contact</Link></li>

                        {
                            cartList.length === 0 ? null : <Link to={"/Cart"} element={<Cart />}><CardWidget className='nav__item' /></Link>
                        }
                    </ul>

                    <div onClick={navToggle} className={toggleIcon}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;