export const data = [
    {
        id: 1,
        name: "Tree",
        precio: 3200,
        stock: 10,
        Url: "https://i.ibb.co/txstJWM/sin-t-tulo-10-de-16.jpg",
        category: "Session-Night",
        detail: "Diego Coleman",
        quantity: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: "Cold",
        precio: 3200,
        stock: 10,
        Url: "https://i.ibb.co/PxvXgwW/sin-t-tulo-4-de-16.jpg",
        category: "Session-Night",
        detail: "Diego Coleman",
        quantity: 0,
        categoryId: 2
    },
    {
        id: 3,
        name: "Light",
        precio: 3200,
        stock: 10,
        Url: "https://i.ibb.co/8zdhS97/sin-t-tulo-8-de-16.jpg",
        category: "Session-Night",
        detail: "Diego Coleman",
        quantity: 0,
        categoryId: 3
    },
    {
        id: 4,
        name: "Away",
        precio: 3200,
        stock: 10,
        Url: "https://i.ibb.co/jZTycNV/sin-t-tulo-12-de-16.jpg",
        category: "Session-Night",
        detail: "Diego Coleman",
        quantity: 0,
        categoryId: 4
    },
    {
        id: 5,
        name: "Neon",
        precio: 3200,
        stock: 10,
        Url: "https://i.ibb.co/DQYspdv/sin-t-tulo-1-de-16.jpg",
        category: "Session-Night",
        detail: "Diego Coleman",
        quantity: 0,
        categoryId: 5
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

// export const getProductByCategory = (categoria) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (data.length > 0) {
//                 resolve(data.filter(unaCategoria => unaCategoria.id === parseInt(categoria)))
//             }
//             else {
//                 reject('No hay productos')
//             }
//         }, 100);
//     })
// }