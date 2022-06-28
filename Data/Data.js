export const data = [
    {
        id: 1,
        name: "Paisaje",
        precio: 15,
        Url: "asd"
    },
    {
        id: 2,
        name: "Vintage",
        precio: 15,
        Url: "asddas"
    },
    {
        id: 3,
        name: "Nubes",
        precio: 15,
        Url: "asdada"
    }
    {
        id: 4,
        name: "Cielo",
        precio: 15,
        Url: "adsad"
    }
    {
        id: 5,
        name: "Calle",
        precio: 15,
        Url: "asdad"
    }
];

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products.find(unProducto => unProducto.id === parseInt(id)))
            }
            else {
                reject('No hay productos')
            }
        }, 100);
    })
}

export const getProductByCategory = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products.length > 0) {
                resolve(products.filter(unaCategoria => unaCategoria.id === parseInt(categoria)))
            }
            else {
                reject('No hay productos')
            }
        }, 100);
    })
}