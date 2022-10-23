// import ProductCard from "../components/productCard";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProductsList from "../components/productProp";
import Search from "../components/search";

export default function Products() {
  const [products, setProducts] = useState("");
  const auth = useSelector((state) => state.auth);

  const config = {
    headers: { Authorization: `Bearer ${auth?.accessToken}` },
  };

  const getProducts =   () => {
    axios
      .get('api/product/products', config)
      .then((res) => {
        console.log(res.data);
       setProducts(res.data)
    })
    .catch(error => console.error(`Error: ${error}`))
  };
  const deleteProduct = ()=>{
    axios.delete('api/product/:id')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch(error=>console.error(`Error: ${error}`))
  }
  useEffect(() => {
    getProducts();
  }, []);


  
  return(products?
    <div>
   
    {/* <ProductsList  products = {products} /> */}
    <Search deleteProduct = {deleteProduct} products = {products} ></Search>
    </div>
    :<></>
  )
}
