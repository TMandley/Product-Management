const Product = require('../models/product.js')
const mongoose = require('mongoose');

module.exports = {
    index: function (req, res) {
        Product.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    findone: function (req, res) {
        Product.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Product.create(req.body)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            });
    },
    edit: function (req, res) {
        Product.findByIdAndUpdate(req.params.id, {
            $set: {title: req.body.title, price: req.body.price, image: req.body.image}
        }, {new: true})
            .then(result => {
                console.log(result)
                res.json(result)
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Product.remove({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    },
}