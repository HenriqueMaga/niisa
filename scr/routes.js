const express = require('express');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

routes.post('/product', ProductController.create);
//routes.get('/product', ProductController.index);

module.exports = routes;