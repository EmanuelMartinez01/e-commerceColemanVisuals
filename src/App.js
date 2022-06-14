import React, { Component } from 'react';
import './App.css';

// Components

import NavBar from '../src/components/Navbar/NavBar.js';


class App extends Component {
	render () {
		return (
		<div className='App'>
			
			<NavBar />
			<div></div> <hr />
			<p>Gallery Stocks</p>
			<p>Fotografo</p>
		</div>
		);
	}
}

export default App;
