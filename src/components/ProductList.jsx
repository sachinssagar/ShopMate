import "./ProductList.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  const [url, setUrl] = useState(
    "https://my-json-server.typicode.com/sachinssagar/json/products"
  );
  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div className="button">
        <button
          onClick={() =>
            setUrl(
              "https://my-json-server.typicode.com/sachinssagar/json/products"
            )
          }
        >
          All Products
        </button>
        <button
          onClick={() =>
            setUrl(
              "https://my-json-server.typicode.com/sachinssagar/json/products?in_stock=true"
            )
          }
        >
          In Stock
        </button>
      </div>
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="product-container">
        {products &&
          products.map((product) => (
            <div className="product" key={product.id}>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p className="list">
                <span>${product.price}</span>
                <span
                  className={product.in_stock ? "in-stock" : "out-of-stock"}
                >
                  {product.in_stock ? "In Stock" : "Out of Stock"}
                </span>
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};
