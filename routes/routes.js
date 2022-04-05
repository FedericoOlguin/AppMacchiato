const Router = require('express').Router()
const validator=require("../config/validacion")
const passport = require("../config/passport")


//rutas de usuarios
const { signInUser, signUpUser, signOutUser, verifyEmail, verificarToken } = require("../controllers/userController")

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


    module.exports = Router;