
export default function ProductsList(props) {

    const products = props.products
    console.log(products);
    const ListDisplay = () => {
    return (
    products.map((product, index) => {
        return(
        <div key={product._id}  className="products-container">   
           <div className="product-card"  >
           <img src={product.image} width={250} height={250} className="product-image"/>
           <p className="product-name">{product.name}</p>
           <p className="product-name">{product.category}</p>
           <p className="product-price">${product.buyNow}</p>
           <p className="product-price">${product.startBuy}</p>
           </div>
        </div>
        )
    
    }))}
return(
    <>{ListDisplay(props)}</>
)
}