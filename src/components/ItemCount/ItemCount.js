import React, { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ItemCount.css';


const ItemCount = ({ stock, min, onAdd }) => {
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
            <button className='btn-count' onClick={handlerCounterUp}>+</button>
            <div className='celda-count'>{counter}</div>
            <button className='btn-count' onClick={handlerCounterMinus}>-</button>
            <button className='btn-count' onClick={() => onAdd(counter)}><ShoppingCartOutlinedIcon /></button>
        </div>

    )
}




export default ItemCount;