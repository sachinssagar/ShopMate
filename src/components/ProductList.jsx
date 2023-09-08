import "./ProductList.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All Products
        </button>
        <button
          onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
        >
          In Stock
        </button>
      </div>
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {products &&
        products.map((product) => (
          <div className="product" key={product.id}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>
              <span>${product.price}</span>
              <span className={product.in_stock ? "in-stock" : "out-of-stock"}>
                {product.in_stock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
