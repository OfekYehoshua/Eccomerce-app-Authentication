import * as React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";


const getProducts = (set) => { axios.get("api/products").then((res) => res.data && set(res.data));
};
console.log(getProducts.data)
const products = getProducts.data
const today = new Date();

export default function ProductCard() {
  const renderList = products.map((product) => {
    return (
      <div>
        <Link to={`/product/${product._id}`}>
          <div className="product-card">
            <img
              src={product.image}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-name">{product.brand}</p>
            <p className="product-price">${product.price}</p>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}
