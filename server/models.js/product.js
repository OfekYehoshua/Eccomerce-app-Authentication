const mongoose = require(`mongoose`);
const ProductSchema = mongoose.Schema([
    {
        name:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: false,
        },
        startBuy:{
            type: String,
            required: true,
        },
        buyNow:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: false,
        },
    }])
    const Product = mongoose.model('product', ProductSchema );
    module.exports = Product;