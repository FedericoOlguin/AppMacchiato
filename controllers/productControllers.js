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

    modifyProduct: async (req, res) => {

        try {
            const { name, image, category, price, stock, description, flag } = req.body.objProd;
            let product = await Product.findById(req.params.id);

            if (!product) {
                res.status(404).json({ message: "the product does not exist" })
            }
            product.name = name;
            product.image = image;
            product.category = category;
            product.price = price;
            product.stock = stock;
            product.description = description;
            product.flag = flag;

            product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new: true })
            // res.json(product)
            res.json({
                success: true,
                reponse: product,
                message: "Product modified"
            })

        }

        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }



    },
    deleteProduct: async (req, res) => {
        console.log(req.params.id);
        try {
            let product = await Product.findById(req.params.id);

            if (!product) {
                res.status(404).json({ message: "the product does not exist" })
            }

            await Product.findOneAndRemove({ _id: req.params.id })
            res.json({ success: true, message: "Product removed successfully" })
        }

        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },
}

module.exports = ProductController