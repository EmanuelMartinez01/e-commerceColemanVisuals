import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Router = () => {
    return (
        <>
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
        </>
    )
}


export default Router
