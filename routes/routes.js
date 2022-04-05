const Router = require('express').Router()
//const passport 
//const validator



//Rutas de productos
const {getAllProducts, loadProduct, getOneProduct} = require('../controllers/productControllers')

Router.route('/allproducts')
.get(getAllProducts)
.post(loadProduct)

Router.route('/allproducts/:id')
.get(getOneProduct)