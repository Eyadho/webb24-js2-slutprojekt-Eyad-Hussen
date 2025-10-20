import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

function CartPage({ cart, setCart, onNavigate }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePurchase = async () => {
    for (let item of cart) {
      const productRef = doc(db, "products", item.id);
      await updateDoc(productRef, {
        number: item.number - item.quantity,
      });
    }
    alert("Köpet genomfördes!");
    setCart([]);
    onNavigate("products");
  };

  const handleEmptyCart = () => {
    setCart([]);
    onNavigate("products");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Kundvagn</h2>

      {cart.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} – {item.quantity} st – {item.price * item.quantity} kr
              </li>
            ))}
          </ul>
          <h3>Totalt: {totalPrice} kr</h3>


          <div style={{width:"300px", display: "flex", justifyContent: "space-between"}}>
            <button onClick={handlePurchase} style={{fontSize: "16px", padding: "12px 15px", color: "white", borderRadius: "40px", border: "none", backgroundColor: "#c70e0e"}}>
            Genomför köp
            </button>
          <button onClick={handleEmptyCart} style={{fontSize: "16px", padding: "12px 15px", color: "white", borderRadius: "40px", border: "none", backgroundColor: "#c70e0e"}}>
          Töm kundvagnen
          </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;