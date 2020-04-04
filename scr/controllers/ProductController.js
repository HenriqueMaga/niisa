const Product = require('../models/Products');

module.exports = {
    //router.post('/product', async (request, response) =>{
    async create(request, response) {    
        try {
            const product = await Product.create(request.body);
    
            return response.send({ product });
        } catch (err) {
            return response.status(400).send({ error: 'Insert Failed' });
        }
    },

    async index (request, response) {
        console.log('Vou pesquisar produtos');
        const products = await Product.find('*');
        return response.json(products);
    }

}