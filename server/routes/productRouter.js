const express = require('express');
const router = express.Router()
const Product = require(`../models.js/product`)
const data = require('../data.JS');
const { newProduct } = require('../controllers/productController');

router.get('/products', async (req, res)=>{
    // res.send(data.products)
  try{
    const products = await Product.find()
    res.status(200).json(products)
  }
  catch (err){
     res.status(500).json(err)
  }
  })
router.get('/products/:id', (req, res)=>{
    const { id }  = req.params
    const product = data.products.find(product => product._id === id)
    res.send(product)
  })
router.post('/new', newProduct)


router.delete(`/product/:id`, (req, res, next) => {
    Product.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
  });
  
  router.post(`/new` , (req, res, next)=>{
    console.log(req.body);
      req.body ?
      Product.create(req.body)
              .then((data)=> res.json(data))
              .catch(next)
              : res.json({error: `Please enter all fields`})
  });
  module.exports = router;