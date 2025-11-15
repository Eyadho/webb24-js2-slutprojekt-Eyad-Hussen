import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{marginBottom: "60px"}}>Produkter</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", alignItems: "center", }}>
        {products.map((product) => (<>
          <div
            key={product.id}
            style={{
            //   border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%",height:"140px", borderRadius: "8px" }}
            />
            <h4 style={{textTransform: "capitalize" }}>{product.name}</h4>
            <p>Pris: {product.price} kr</p>
            <p>Lagersaldo: {product.number}</p>
            {product.number > 0 ? (
              <button
              onClick={() => addToCart(product)}
              // disabled={product.number <= 0}
              style={{    fontSize: "16px",
    padding: "12px 30px",
    color: "white",
    borderRadius: "40px",
    border: "none",
    background: "#c70e0e"
    }}
            >
              Lägg till i kundvagn
            </button>
          </div>
        </>))}
      </div>
    </div>
  );
}

export default ProductPage;


