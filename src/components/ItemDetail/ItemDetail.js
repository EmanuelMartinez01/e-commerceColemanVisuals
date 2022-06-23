import React from 'react';
import ItemCount from '../ItemCount/ItemCount';




const ItemDetail = ({ user }) => {

    return (
        <div>
            <div id={user.id} key={user.id}>
                <h3>{user.name}</h3>
                <img src={user.avatar_url} alt='avatar' />
                <p>$ {user.id}</p>
            </div>
            <ItemCount stock={user.login} min={0} />
        </div>
    )

}





export default ItemDetail;