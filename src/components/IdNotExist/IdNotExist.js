import React from 'react';
import './IdNotExist.css';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Link } from 'react-router-dom';

export const IdNotExist = () => {
    return (
        <div className='containerNotExist'>
            <p className='textNotExist'>Este producto no existe.</p>
            <RemoveShoppingCartOutlinedIcon style={{ fontSize: "10vw" }} />
            <p className='textNotExist'>Puedes visualizar otros productos.</p>
            <Link to={"/"} className='textLink'><button className='btnNotExits'>Presiona Aqui</button></Link>

        </div>
    )
}
