import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { CartContext } from '../Context/CartContext'



const ItemDetail = ({ item }) => {
    const [cartList, addCart] = useContext(CartContext);

    const onAdd = (quantity) => {
        console.log(quantity)
        addCart(item, quantity);
    }

    return (

        <div className='wrapper'>
            <div className='product-img' id={item.id} key={item.id}>
                <img src={item.Url} height={420} width={327} alt='avatar' />
            </div>
            <div className='product-info'>
                <div className='product-text'>
                    <h3 className='product-h3'>{item.name}</h3>
                    <h4 className='product-h4'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum </h4>
                    <p className='price'><span className='price-span'>$ {item.precio}</span></p>
                </div>
                <div className='product-price-btn'>
                    <ItemCount stock={item.stock} min={0} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )

}



export default ItemDetail;



