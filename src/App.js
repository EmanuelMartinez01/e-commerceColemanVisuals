import React, { Component } from 'react';
import './App.css';

// Components
import NavBar from '../src/components/Navbar/NavBar.js';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js'
import ItemCount from '../src/components/ItemCount/ItemCount.js'


class App extends Component {
	constructor() {
		super();
		this.state= {
			name: 'Diego Coleman',
		};
	}


	render () {
		return (
		<div className='App'>
			
			<NavBar />
			<div></div> <hr />
			<ItemListContainer greeting='Bienvenidos' intro='Estoy siendo llamado desde una prop' />
			<ItemCount />
			<p>Fotografo: {this.state.name}</p>
			
		</div>
		);
	}
}

export default App;
