import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../src/components/Header/Header.js';
import NavBar from '../src/components/Navbar/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer.js';







function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<NavBar />
				<ItemListContainer className='cart' />
				<Routes>
					<Route path='/users/' element={<ItemDetailContainer greetings='Hola' />} />
				</Routes>

			</div>
		</Router>
	);
}


export default App;
