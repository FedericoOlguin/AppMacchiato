const { response } = require('express');
const Product = require('../models/product');

const ProductController = {
    getAllProducts: async (req, res) => {
        let products;
        let error = null;

        try {
            products = await Product.find();

        } catch (err) {
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : { products },
            success: error ? false : true,
            error: error
        })
    },
    loadProduct: async (req, res) => {
        const { name, image, category, price, stock, description, flag, sale } = req.body.objProd;
        try {

            new Product({
                name,
                image,
                category,
                price,
                stock,
                description,
                flag,
                sale
            })
                .save()
            res.json({
                success: true,
                reponse: name,
                message: "Producto " + name + " cargado exitosamente"
            })
        } catch (err) {
            res.json({
                success: false,
                reponse: name,
                message: "Producto " + name + " no se pudeo cargar"
            })
        }
    },
    getOneProduct: async (req, res) => {
        const id = req.params.id
        let product;
        let error = null;
        try {
            product = await Product.findOne({ _id: id })

        } catch (err) {
            error = err
            console.log(error);
        }
        res.json({
            response: error ? 'ERROR' : { product },
            success: error ? false : true,
            error: error
        })
    },
    scoreProduct: async (req, res) => {
        const id = req.params.id;
        const user = (req.user._id).toString()

        let product;
        let error = null;
        let allProducts;

        try {
            product = await Product.findOne({ _id: id })
            let product = product._id
            if (product.score.includes(user)) {
                await Product.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                allProducts = await Product.find({ product: product })
                res.json({ success: true, response: allProducts })

            } else {
                await Product.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                allProducts = await Product.find({ product: product })
                res.json({ success: true, response: allProducts })
            }
        } catch (err) {
            error = err
            res.json({ success: false, response: error, message: 'You must be logged in first in order to rate this product' })
        }
    },

    modifyProduct: async (req, res) => {
        const id = req.params.id;


        let product = await Product.findOneAndUpdate({ _id: req.params.id }, product);
        console.log(product);
    },
    //modifyStock
    modifyStock: async (req, res) => {
        const { productId, stock } = req.body.product
        const user = req.user._id
        try {
            const newStock = await Product.findOneAndUpdate({ 'product.id': productId }, { $set: { 'products.$.stock': stock } }, { new: true })
            res.json({ success: true, response: { newStock }, message: 'The stock has been modified' })
        } catch (err) {
            res.json({ success: true, message: 'Something went wrong, please try again in a few minutes' })
        }
    }
}

module.exports = ProductController