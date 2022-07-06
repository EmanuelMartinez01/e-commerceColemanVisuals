import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ItemCount.css';
import Cart from '../views/Cart.js';



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

    const [add, setAdd] = useState(1);



    function PushCarrito() {

        onAdd(counter);
        setAdd(counter);

    }



    return (
        <div className='ItemCount'>
            <button className='btn-count' onClick={handlerCounterMinus}>-</button>
            <div className='celda-count'>{counter}</div>
            <button className='btn-count' onClick={handlerCounterUp}>+</button>
            <Link to={"/cart"} element={<Cart />}><button className='btn-count' onClick={PushCarrito}><ShoppingCartOutlinedIcon /></button></Link>
            {/* <button onClick={Delete}>Delete</button>  */}
        </div>

    )
}




export default ItemCount;