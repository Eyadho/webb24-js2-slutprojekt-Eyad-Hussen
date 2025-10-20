import React from "react";

function Navbar({ cartCount, onNavigate }) {
  return (
    <nav
      style={{
        background: "#333",
        color: "white",
        padding: "25px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "50px"
      }}
    >
      
      <a href="products" style={{color: "white", textDecoration: "none", fontSize: "25px", fontWeight: "bold"}}>
        My Shop
        </a>

      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => onNavigate("products")} style={{fontSize: "16px",
    padding: "12px 30px",
    color: "white",
    borderRadius: "40px",
    border: "none",
    backgroundColor: "#c70e0e",
    }}>Produkter</button>
        <button onClick={() => onNavigate("cart")} style={{    fontSize: "16px",
    padding: "12px 20px",
    color: "white",
    borderRadius: "40px",
    border: "none",
    backgroundColor: "#c70e0e"
    }}>
          Kundvagn ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
