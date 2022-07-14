import React, { useContext, useState } from 'react';
import CardWidget from '../CardWidget/CardWidget.js';
import { Button } from './Button/Button.js';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Dropdown from './Dropdown/Dropdown.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../views/Cart/Cart';
import { CartContext } from '../Context/CartContext';
import { Contact } from '../views/Contact/Contact';
import CategoryList from '../views/CategoryList/CategoryList';


//Logo
import img from '../Navbar/logo2.png'


function Navbar() {

    const [cartList, addCart, cantidadItems] = useContext(CartContext);
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={img} alt="logo" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to={"/"} element={<ItemListContainer />} className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to={"/categorylist/Sessions"} element={<CategoryList />}
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Sessions <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to={"/contact"} element={<Contact />}
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                    {
                        cartList.length === 0 ? null : <Link to={"/Cart"} element={<Cart />}><CardWidget /></Link>
                    }
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;