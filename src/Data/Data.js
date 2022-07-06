export const data = [
    {
        id: 1,
        name: "Paisaje",
        precio: 15,
        stock: 10,
        descripcion: "Foto tomada 12-05-2022",
        Url: "https://i.ibb.co/txstJWM/sin-t-tulo-10-de-16.jpg",
        categoria: "Naturaleza",
        categoriaId: 1,
        quantity: 0
    },
    {
        id: 2,
        name: "Auto",
        precio: 15,
        stock: 10,
        descripcion: "Foto tomada 12-05-2022",
        Url: "https://i.ibb.co/PxvXgwW/sin-t-tulo-4-de-16.jpg",
        categoria: "Vintage",
        categoriaId: 2,
        quantity: 0
    },
    {
        id: 3,
        name: "Niebla",
        precio: 15,
        stock: 10,
        descripcion: "Foto tomada 12-05-2022",
        Url: "https://i.ibb.co/8zdhS97/sin-t-tulo-8-de-16.jpg",
        categoria: "Cielo",
        categoriaId: 3,
        quantity: 0
    },
    {
        id: 4,
        name: "Vista",
        precio: 15,
        stock: 10,
        descripcion: "Foto tomada 12-05-2022",
        Url: "https://i.ibb.co/jZTycNV/sin-t-tulo-12-de-16.jpg",
        categoria: "Cielo",
        categoriaId: 4,
        quantity: 0
    },
    {
        id: 5,
        name: "Estacion",
        precio: 15,
        stock: 10,
        descripcion: "Foto tomada 12-05-2022",
        Url: "https://i.ibb.co/DQYspdv/sin-t-tulo-1-de-16.jpg",
        categoria: "Vintage",
        categoriaId: 5,
        quantity: 0
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