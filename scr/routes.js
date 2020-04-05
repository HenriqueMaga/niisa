const express = require('express');
const ProductController = require('./controllers/ProductController');
const ContactController = require('./controllers/ContactController');

const routes = express.Router();

routes.post('/product', ProductController.create);
routes.get('/product', ProductController.index);

routes.post('/contact', ContactController.create);
routes.get('/contact', ContactController.index);

module.exports = routes;