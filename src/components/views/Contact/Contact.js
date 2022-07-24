import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './Contact.css';


export const Contact = () => {
    return (
        <div className='contactBox'>
            <h2 className='textTitle'>Contact</h2>
            <div className='form-Contact'>
                <form>
                    <TextField className='input-Name' margin='dense' id="outlined-basic" label="Name" variant="outlined" />
                    <TextField className='input-Email' margin='dense' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className='input-Number' margin='dense' id="outlined-basic" label="Number" variant="outlined" />
                </form>
            </div>
            <div><Button variant="contained" >Enviar</Button></div>
        </div>
    )
}
