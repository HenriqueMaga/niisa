const Contact = require('../models/Contacts');

module.exports = {
    async create (request, response) {
        try {
            const contact = await Contact.create(request.body);
            
            return response.send({ contact });
        } catch (err){
            return response.status(400).send({ error: 'Insert Failed: ' + response.json(err.message) });
        }
    },

    async index (request, response) {
        const contacts = await Contact.find() ;
        return response.json(contacts);
    }
}