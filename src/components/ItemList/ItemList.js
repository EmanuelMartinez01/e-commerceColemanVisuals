const ItemList = ({ item }) => {

    return (
    <div className="ItemList">
        <h1>Nombre : {item.tittle}</h1>
        <p>Precio : {item.price}</p>
    </div>
);
}




export default ItemList;