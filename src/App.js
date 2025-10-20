import React, { useState } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";


function App() {
  const [page, setPage] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onNavigate={setPage}
      />

      {page === "products" && <Products addToCart={addToCart} />}
      {page === "cart" && (
        <Cart cart={cart} setCart={setCart} onNavigate={setPage} />
      )}
    </div>
  );
}

export default App;
