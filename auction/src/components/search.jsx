import ResponsiveAppBar from "./navbar";
import React, { useState } from "react";
// import "./Archive.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

function Search(props) {
  const products = props.products
//   const deleteProduct = props.products
  console.log(products);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ResponsiveAppBar]);
  const Render = ()=>{

    return (       
                <>
      <ResponsiveAppBar />
      <div className="template-container">
        <div className="search-input-container">
          <input
            id="search-input"
            type="text"
            placeholder="Search in archive..."
            onChange={(event) => {
            setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template-container">
            {products.filter((val) => {
                    if(searchTerm == ""){
                      return val;
                    }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                })
              .map((val) => {
                return(
                    <div key={val._id}  className="products-container">   
                    <div className="product-card"  >
                    <img src={val.image} width={250} height={250} className="product-image"/>
                    <p className="product-name">{val.name}</p>
                    <p className="product-name">{val.category}</p>
                    <p className="product-price">${val.buyNow}</p>
                    <p className="product-price">${val.startBuy}</p>
                    </div>
                 </div>
                );}
            )}
        </div>
      </div>
    </>
  );}

return(
    <>{Render(props)}</>
)
}

export default Search;