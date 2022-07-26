import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from '../src/components/Navbar/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/views/Cart/Cart'
import { ProductProvider } from './components/Context/CartContext'
import { Contact } from './components/views/Contact/Contact';
import CategoryList from './components/views/CategoryList/CategoryList';
import Sessions from './components/views/Sessions/Sessions';
import Footer from './components/Footer/Footer';





function App() {


	return (
		<ProductProvider>
			<Router>
				<div className='App'>
					<NavBar />
					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route path='/item/:id' element={<ItemDetailContainer greetings='Hola' />} />
						<Route path='/category/:categoryId' element={<ItemListContainer />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/categorylist/' exact component={Sessions} />
						<Route path='/categorylist/:category' element={<CategoryList />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ProductProvider>
	);
}


export default App;
