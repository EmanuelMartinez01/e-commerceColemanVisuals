import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div className='form-Contact'>
                <form>
                    <TextField className='input-Name' id="outlined-basic" label="Name" variant="outlined" />
                    <TextField className='input-Email' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField className='input-Number' id="outlined-basic" label="Number" variant="outlined" />
                </form>
            </div>
            <div><Button variant="contained">Enviar</Button></div>
        </div>
    )
}
