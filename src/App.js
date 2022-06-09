import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';


class App extends Component {
	render () {
		return (
		<div className='App'>
			<Header />
			<NavBar />
			<div></div> <hr />
			<p>Gallery Stocks</p>
			<p>Fotografo</p>
		</div>
		);
	}
}

export default App;
