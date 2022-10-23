const Product = require(`../models.js/product`);
const asyncHandler = require('express-async-handler')

const newProduct = asyncHandler(async (req, res) => {
    const { name, category, startBuy , buyNow , image } = req.body

    if (!name ||  !buyNow) {
        res.status(400)
        throw new Error('Please add all fields')
}

const product  = await Product.create({
    name, category, startBuy , buyNow , image 
})
if (product){
    res.status(201).json({
        _id: product.id,
        name: product.name,
        category: product.category,
        startBuy: product.startBuy,
        buyNow: product.buyNow,
        image: product.image
    })
} else{
    res.status(400)
    throw new Error( 'Invalid user data' )
}
})



module.exports = {newProduct}