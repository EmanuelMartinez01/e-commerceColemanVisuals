import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../src/components/Header/Header.js';
import NavBar from '../src/components/Navbar/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from '../src/components/views/Cart'
import { ProductProvider } from '../src/components/CartContext/CartContext.js';






function App() {




	return (

		<ProductProvider >
			<Router>
				<div className='App'>
					<Header />
					<NavBar />
					<Routes>
						<Route path='/' element={<ItemListContainer className='cart' />} />
						<Route path='/item/:id' element={<ItemDetailContainer greetings='Hola' />} />
						<Route path='/category/:categoryId' element={<ItemListContainer />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</Router>
		</ProductProvider>
	);
}



export default App;
