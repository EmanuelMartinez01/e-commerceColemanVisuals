export const data = [
    {
        id: 1,
        name: "Paisaje",
        precio: 15,
        stock: 10,
        Url: "asd",
        categoria: "Naturaleza",
        categoriaId: 1
    },
    {
        id: 2,
        name: "Auto",
        precio: 15,
        stock: 10,
        Url: "https://i.ibb.co/PxvXgwW/sin-t-tulo-4-de-16.jpg",
        categoria: "Vintage",
        categoriaId: 2
    },
    {
        id: 3,
        name: "Nubes",
        precio: 15,
        stock: 10,
        Url: "asdada",
        categoria: "Cielo",
        categoriaId: 3
    },
    {
        id: 4,
        name: "Vista",
        precio: 15,
        stock: 10,
        Url: "adsad",
        categoria: "Cielo",
        categoriaId: 4
    },
    {
        id: 5,
        name: "Calle",
        precio: 15,
        stock: 10,
        Url: "asdad",
        categoria: "Vintage",
        categoriaId: 5
    }
];

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.length > 0) {
                resolve(data.find(unProducto => unProducto.id === parseInt(id)))
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
            if (data.length > 0) {
                resolve(data.filter(unaCategoria => unaCategoria.id === parseInt(categoria)))
            }
            else {
                reject('No hay productos')
            }
        }, 100);
    })
}