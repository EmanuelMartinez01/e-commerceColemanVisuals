import React, { useContext, useState } from 'react';
import './cartSummary.css'
import { TextField } from '@mui/material';
import { CartContext } from '../Context/CartContext';
import MessageOrder from '../MessageOrder/MessageOrder';

// Firebase 
import { db } from '../../firebase/firabaseConfig';
import { collection, addDoc } from "firebase/firestore";
import OrderItem from '../OrderItem/OrderItem';

const products = [];

const initialState = {
    name: '',
    phone: '',
    email: '',
    products: products,
    date: new Date(),
};



export const CartSummary = () => {

    const [cartList, addCart, cantidadItems, totalPrice] = useContext(CartContext);


    const [values, setValues] = useState(initialState);

    //Estado que guarda ID de compra
    const [purchaseID, setPurchaseID] = useState('');


    const generarOrden = () => {
        //nuevo objeto de orders           
        let items = [];
        cartList.forEach((item) => items.push({ id: item.id, title: item.name, price: item.precio, quantity: item.quantity }));
        setValues({ ...values, products: items });
    }


    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = async (e) => {
        console.log(values);
        //Datos Comprador
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'ordenes'), {
            values,
        });
        setPurchaseID(docRef.id);
        setValues(initialState);
    }



    return (
        <div className='cartSummary'>
            <h2 className='text-Resumen'>Resumen</h2>
            <div className='cart-Resumen'>
                {cartList.map((item, idx) => (
                    <OrderItem items={item} key={idx} />
                ))}
            </div>
            <div>
                <p className='priceSummary'><span className='priceSpanSummary'>Total: ${totalPrice()}</span></p>
            </div>
            <h3>Contacto</h3>
            <div>
                <form onSubmit={onSubmit}>
                    <TextField
                        margin='dense'
                        className='input-Name'
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name='name'
                        value={values.name}
                        onChange={handleOnChange} />

                    <TextField
                        margin='dense'
                        className='input-Email'
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        name='phone'
                        value={values.phone}
                        onChange={handleOnChange} />

                    <TextField
                        margin='dense'
                        className='input-Number'
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange} />
                    <button className='send-btn' onClick={generarOrden} >Finalizar Compra</button>

                </form>
                {purchaseID && <MessageOrder purchaseID={purchaseID} />}
            </div>



        </div>
    )
}


