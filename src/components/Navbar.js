import React from 'react'; //importera React



const Navbar = ({counter, ProductList, Cart})=> {
    return (
        <nav>
            <h1>My webbshop</h1>
            <button onClick={ProductList}>Produkter</button>
            <button onClick={Cart}>Kundvagn ({counter})</button>
        </nav>
    );
};


export default Navbar;