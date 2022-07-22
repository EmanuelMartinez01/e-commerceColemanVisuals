import React, { useContext, useState } from 'react';
import './cartSummary.css'
import { TextField } from '@mui/material';
import { CartContext } from '../Context/CartContext';
import MessageOrder from '../MessageOrder/MessageOrder';

// Firebase 
import { db } from '../../firebase/firabaseConfig';
import { collection, addDoc } from "firebase/firestore";
import OrderItem from '../OrderItem/OrderItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const products = [];

const initialState = {
    name: '',
    phone: '',
    email: '',
    reEmail: '',
    products: products,
    date: new Date(),
};



export const CartSummary = () => {

    const [cartList, addCart, cantidadItems, totalPrice] = useContext(CartContext);

    const [values, setValues] = useState(initialState);

    //Estado que guarda ID de compra
    const [purchaseID, setPurchaseID] = useState('');

    //Estado Mensaje de Error Email
    const [errorMail, setErrorMail] = useState(false);

    const [finishOrderButton, setFinishOrderButton] = useState(false);

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
        if (values.email === values.reEmail) {
            const docRef = await addDoc(collection(db, 'ordenes'), {
                values,
            });
            setPurchaseID(docRef.id);
            setValues(initialState);
            setErrorMail(errorMail => false)
        } else {
            setErrorMail(errorMail => !errorMail)
        }
    }



    return (
        <div className='cartSummary'>
            {errorMail && <ErrorMessage />}
            <h2 className='text-Resumen'>Resumen</h2>
            <div className='cart-Resumen'>
                {cartList.map((item, idx) => (
                    <OrderItem items={item} key={idx} />
                ))}
            </div>
            <div>
                <p className='priceSummary'><span className='priceSpanSummary'>Total: ${totalPrice()}</span></p>
            </div>
            <h3 className='text-Resumen'>Contacto</h3>
            <div>
                <form onSubmit={onSubmit}>
                    <TextField
                        margin='dense'
                        className='input-Name'
                        id="outlined-basic"
                        label="Nombre y apellido"
                        variant="outlined"
                        name='name'
                        value={values.name}
                        onChange={handleOnChange} />

                    <TextField
                        margin='dense'
                        className='input-Email'
                        id="outlined-basic"
                        label="Numero de telefono"
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

                    <TextField
                        margin='dense'
                        className='input-Number'
                        id="outlined-basic"
                        label="reEmail"
                        variant="outlined"
                        name='reEmail'
                        value={values.reEmail}
                        onChange={handleOnChange} />

                    <div className='btn-container'>
                        {values.name.length && values.phone.length && values.email.length && values.reEmail.length > 5 ? <button className='send-btn' onClick={generarOrden} >Finalizar Compra</button> : null}
                    </div>
                </form>
                {purchaseID && <MessageOrder purchaseID={purchaseID} />}
            </div>
        </div>
    )
}


