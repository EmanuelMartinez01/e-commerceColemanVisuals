import React, { useState } from 'react';
import './ItemCount.css';


import CardComponent from '../CardComponent/CardComponent'

// Variable
let Productos = [
    {
        id: 1,
        name: 'Niebla',
        price: 15,
        stock: 10,
        activo: true
    }
]

const ItemCount = () => {

    const [counter, setcounter] = useState(0)

    
const handlerCounterUp = () => {
    setcounter(counter + 1)
};

const handlerCounterMinus = () => {
    setcounter(counter - 1)
};

    return (
                <div className='ItemCount'>
                    <CardComponent />
                    <p>Cantidad: {counter}</p>
                    <div className='btn-section'>
                        <button onClick={handlerCounterUp}>+</button>
                        <button onClick={handlerCounterMinus}>-</button>
                    </div>
                </div>
            )
        
    
}

export default ItemCount;