import React, { useState, useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ItemCount.css';
import { CartContext } from '../Context/CartContext'





const ItemCount = ({ stock, min, onAdd }) => {

    const [cartList, addCart] = useContext(CartContext);

    const [counter, setcounter] = useState(min);



    const handlerCounterUp = () => {
        if (counter < stock) {
            setcounter(counter + 1);
        } else {
            alert("No hay stock")
        }
    }

    const handlerCounterMinus = () => {
        if (counter > min) {
            setcounter(counter - 1);
        } else {
            alert("Elige una cantidad mayor a 0")
        }
    }


    return (
        <div className='ItemCount'>
            <button className='btn-count' onClick={handlerCounterMinus}>-</button>
            <div className='celda-count'>{counter}</div>
            <button className='btn-count' onClick={handlerCounterUp}>+</button>
            <button className='btn-cart' onClick={() => onAdd(counter)}><ShoppingCartOutlinedIcon style={{ fontSize: "2vw" }} /></button>
        </div>

    )
}




export default ItemCount;