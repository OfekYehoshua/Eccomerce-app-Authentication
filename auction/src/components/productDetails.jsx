import axios from "axios";
import { useParams } from "react-router-dom";

   
export default function ProductDetails() {
    const { productId } = useParams();


    const fetchProductDetail = async (id) => {
    
        const response = await axios
          .get(`/api/products/${productId}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
          console.log(response.data)
        const product = response.data
        
        
        return(
        <div>
            <h1>details</h1>
        <p> {product.name}</p>
        <p> {product.category}</p>
        <p> {product.price}</p>
        <p>{product.image}</p>
        <p> {product.brand}</p>
        <p> {product.rating}</p>
       <p> {product.countInStock}</p>
       <p>{product.numReviews}</p>
        </div>
    )
    
}
}