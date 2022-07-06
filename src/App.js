import React from 'react';
import './App.css';

//Componentes 
import Router from '../src/components/Router/Router'
import { ProductProvider } from '../src/components/Context/CartContext'






function App() {


	return (
		<ProductProvider>
			<Router />
		</ProductProvider>
	);
}


export default App;
