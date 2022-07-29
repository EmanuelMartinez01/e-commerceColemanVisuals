# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



//                                   Coleman Visuals - React JS 


Proyecto creado para el curso React JS - Coderhouse.

El proyecto esta ubicado en la carpeta "E-COMMERCEEMANUELMARTINEZ" contiene 4 carpetas.

1) Build: 
    Esta carpeta contiene el build del proyecto el cual se hizo deploy a traves de netlify. En el deploy encontraremos el siguiente enlace, con una version de uso de la aplicacion https://colemanvisuals.netlify.app/ 

2) node_modules: 
    Carpeta que contiene todas las dependencias que han instalado en el archivo "package.json".

3) Public: 
    La carpeta public tendra un archivo "index.html" donde se ha linkeado una font-family para el estilado de la app y "manifest.json" archivo que se creo al inicializar el proyecto con React JS, "favicon.ico" El logo de la app y "robots.txt".

4)  Archivos que se encuentran src:
    Carpeta donde se encuentra la mayor parte del proyecto. Donde cuenta con varios archivos y carpetas.

    "App.js": 
        Archivo js donde estan contenidos gran cantidad de otros componentes del mismo. Tambien contiene importacion de libreria que se usa en el proyecto "-react-router-dom": Archivo que establece las rutas de navegacion a traves de "Router". Tambien el "ProductsProvidder" para poder pasar un contexto los dos se definen como "higher-order component".
        Las rutas establecidas son "/" esta ruta nos llevara a la pagina principal donde se visualiza el componente <ItemListContainer/>.  
        "/item/:id" nos llevara al componente <ItemDetailContainer/> donde se muestra el producto segun su ID.  
        "/categoryList/:category" Muestra los productos de la lista que tenga en sus atributos en la categoria que haga match con la del params.  
        "/cart" Visualiza los productos agregados a la lista para comprar. 
        "/contact" Aqui se podra poner en contacto con el soporte de la App. 

    "app.css": 
    El estilado general de la App.

    "index.js": 
    Donde se contiene el componente app.js.

    "index.css": 
    Estilado que se genero al inicializar el proyecto React.
    
    "reportWebVitals.js": 
    Archivo js que se creo al inicializar el proyecto.

    Carpetas dentro de src:

    "assets": 
    Tiene el logo de la App. Las demas imagenes las subi a "https://imgbb.com/" para importarlas luego en la App.

    "components": 
    Aqui tendremos todos los componentes que forman a la App, exceptuando componentes como <App/> y aquel incluido dentro de la carpeta views <Cart/>, index.js no es un componente, es el script principal. Dentro de la carpeta components podemos encontrar otras carpetas (donde tienen un js y un css) para cada uno de los componentes: 
    *CardWidget: 
    Carpeta donde se encuentra el icono de "shop" con un context incluido llamado "cantidadItems".

    *cartSummary: 
    Donde estara el resumen de la compra con un formulario donde se tendra que llenar con informacion para poder finalizar la compra.

    *Context: 
    Esta carpeta contiene un Cartcontext, donde estaran las funciones tales como "isInCart, addCart, cantidadItems, totalPrice, clear, eliminarItem".

    *ErrorMessage: 
    Aca esta la alerta de error cuando los Emails no coinciden.

    *IdNotExist: 
    IdNotExist componente creado para dar un mensaje de un producto no existe ademas de contar con un button para volver al inicio de la App. 

    *Item:
    Componente donde se llama a cada Item con detalle como imagen, details y id.

    *ItemCount: 
    Contiene los botones para sumar o restar cantidad del producto.

    *ItemDetail: 
    En el "ItemDetail" se encuentra la card del producto ademas de contar con un CSS. Aqui se podra ver nombre, imagen, precio y los botones para sumar, restar cantidad de producto y el boton para llevarlo al carrito de compras.

    *ItemDetailContainer:
    Aca contenemos a otros compronentes llamados <ItemDetail/> y <IdNotExist/> con un operador ternario.

    *MessageOrder:
    Alerta de success utilizada para dar un mensaje al cliente cuando su compra alla finalizado.

    *Navbar: 
    Aca se encuentran varios componentes para formar la barra de navegacion, contiene "NavBar", "Dropdown" y "MenuItem"
    En MenuItem hay un array de objetos que tendran un tittle, path(que ira al categoryList) y cName(Para su estilado).
    Dropdown tiene la funcion de un submenu para "Sessions" donde se podra acceder a dos albums distintos.

    *OrderItem:
    Contiene cada uno de las etiquetas <p> que pone en el resumen a modo de texto.

    *views: 
    Tiene carpetas como:
    -Cart: En cart podremos ver el producto en detalle con un titulo, parrafo, imagen, cantidad, total de precio y un button para eliminar producto no deseado, ademas tambien cuenta con un button "checkout" donde se encuentra <CartSummary/>
    
    -CartegoryList:
    Se renderizan todos los productos que dentro de sus atributos coincida aquel llamado "category" con el params pasado a traves de las rutas establecidas en el "NavBar", dicha informacion debe coincidir con la informacion de los productos que se encuentren subidos a la firestore.

    -Contact: 
    Tiene un formulario de contacto.

    Tambien otras carpetas como "Home", "SessionMorning", "SessionNight" y "Sessions".

    *Firebase:
    Archivo.json creado para poder hacer uso de la firebase de google.



    "Data": 
    Carpeta con un componente js que contiene un array de objetos. Productos como: ID, name, precio, URL, category, stock, detail, quantity, categoryId.

    Librerias: 
        Las librerias que se encuentran en uso son actualmente utilizadas en el proyecto final o pueden haber quedado instaladas desde que se comenzo el proyecto al inicio de la cursada.

        -react: Es muy importante para hacer un proyecto en React JS ya que nos permite hacer casi todo lo relacionado con React JS.
        -react-router-dom: Libreria que nos permite utilizar page routing lo cual es bastante importante. Aca los elementos: BrowserRouter, Routes, Route y Link.

        -Material UI: Libreria de componentes que utilice para los componentes <OrderSummary/> <ErrorMessage/> y <CardWidget/> 
        Use alertas y iconos.

        -axios: Se uso en algun momento de la cursada para llamar a una API a traves del metodo FETCH, actualmente no esta en uso en la App se bien que lo correcto seria eliminarlo pero quisiera dejarlo para ayudarme en un futuro.


   



Video del uso de la App: 
    https://user-images.githubusercontent.com/95369230/181657348-d902c9af-1aca-4af7-8a20-bbf346c8be3e.mp4

