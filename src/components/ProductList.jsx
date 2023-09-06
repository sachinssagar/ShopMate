import { useCallback, useState, useEffect } from "react";
import "./ProductList.css";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section>
      <button onClick={() => setUrl("http://localhost:8000/products")}>
        All Products
      </button>
      <button
        onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
      >
        In Stock
      </button>
      {products.map((product) => (
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
