import React, { useState } from 'react';
import './ItemCount.css';



const ItemCount = () => {
    const [counter, setcounter] = useState(1);


const handlerCounterUp = () => {
    setcounter(counter + 1);
}

const handlerCounterMinus = () => {
    setcounter(counter - 1);
}

    return (
        <div className='ItemCount'>
            <button onClick={handlerCounterUp}>+</button>
            <p>{counter}</p>
            <button onClick={handlerCounterMinus}>-</button>
        </div>
    )
}




export default ItemCount;