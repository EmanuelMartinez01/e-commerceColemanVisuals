import React, { Component } from 'react';
import './App.css';

// Components
import NavBar from "./components/NavBar/NavBar.js";

class App extends Component {
	render () {
		return (
		<div className='App'>
			<h1>Coleman Visuals</h1>
			<NavBar />
			<p>Gallery Stocks</p>
			<p>Fotografo</p>
		</div>
		);
	}
}

export default App;
