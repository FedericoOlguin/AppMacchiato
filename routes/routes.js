const Router = require('express').Router()
//const passport 
const validator=require("../config/validacion")


//rutas de usuarios
const { signInUser, signUpUser, signOutUser, verifyEmail, verificarToken } = require("../controllers/ususariosController")

// rutas sigIn/signUp user
Router.route("/auth/signUp")
    .post(validator, signUpUser)

Router.route("/auth/signIn")
    .post(signInUser)

Router.route("/auth/signOut")
    .post(signOutUser)

// rutas para verificar token y email
Router.route("/verify/:uniqueString")
    .get(verifyEmail)

Router.route("/auth/signInToken")
    .get(passport.authenticate("jwt", { session: false }), verificarToken)



//Rutas de productos
const { getAllProducts, loadProduct, getOneProduct } = require('../controllers/productControllers')


Router.route('/allproducts')
    .get(getAllProducts)
    .post(loadProduct)

Router.route('/allproducts/:id')
    .get(getOneProduct)