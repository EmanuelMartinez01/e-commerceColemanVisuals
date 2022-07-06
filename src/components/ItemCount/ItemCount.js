import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './ItemCount.css';
import Cart from '../views/Cart.js';


<<<<<<< HEAD

const ItemCount = ({ item, stock, min, addItem }) => {
=======
const ItemCount = ({ stock, min, onAdd }) => {
>>>>>>> parent of 24b8ece (Sin terminar)
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

<<<<<<< HEAD


    /*  function PushCarrito() {
 
         onAdd(counter);
         setAdd(counter);
         
 
     } */
=======
    function PushCarrito() {
        onAdd(counter)
        setAdd(counter)
    }
>>>>>>> parent of 24b8ece (Sin terminar)





    return (
        <div className='ItemCount'>
            <button className='btn-count' onClick={handlerCounterUp}>+</button>
<<<<<<< HEAD
    <Link to={"/cart"} element={<Cart />}><button className='btn-count' onClick={() => addItem(item, qty)}><ShoppingCartOutlinedIcon /></button></Link>
=======
            <div className='celda-count'>{counter}</div>
            <button className='btn-count' onClick={handlerCounterMinus}>-</button>
            <Link to={"/cart"} element={<Cart />}><button className='btn-count' onClick={PushCarrito}><ShoppingCartOutlinedIcon /></button></Link>
>>>>>>> parent of 24b8ece (Sin terminar)
        </div >

    )
}




export default ItemCount;