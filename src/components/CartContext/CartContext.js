import React, { useState, createContext } from 'react';


export const Cartcontext = createContext();

export const ProductProvider = ({ children }) => {
    const [items, setItems] = useState([])



    return (
        <Cartcontext.Provider value={[items, setItems]}>
            {children}
        </Cartcontext.Provider>
    );
};


