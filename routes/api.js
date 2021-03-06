// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product')

// routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return Router
module.exports = router;
