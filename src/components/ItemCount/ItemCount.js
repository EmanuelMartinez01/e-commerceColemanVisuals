import React, { useState } from 'react';
import './ItemCount.css';


const ItemCount = ({stock, min}) => {
    const [counter, setcounter] = useState(1);


const handlerCounterUp = () => {
    if (counter< stock ) {
        setcounter(counter + 1);
    } else {
        alert("No hay stock")
    }
}

const handlerCounterMinus = () => {
    if (counter> min) {
        setcounter(counter - 1);
    } else {
        alert("Elige una cantidad mayor a 0")
    }
    
}

const onAdd = () => {
    console.log("Estos productos " +  counter)
}

    return (
        <div className='ItemCount'>
            <button className='btn-count' onClick={handlerCounterUp}>+</button>
             <p className='celda-count'>{counter}</p>
            <button className='btn-count' onClick={handlerCounterMinus}>-</button>
            <button className='btn-count' onClick={onAdd}>Add to Car</button>
        </div>
      
    )
}




export default ItemCount;