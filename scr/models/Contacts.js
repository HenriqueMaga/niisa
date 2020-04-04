const mongoose = require('../database');
require('mongoose-type-email');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    empresa: {
        type: String,
        require: true,
    },
    email: {
        type: mongoose.SchemaTypes.email,
        require: true,
    },
    telefone: {
        type: Number,
        require: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    }    
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;