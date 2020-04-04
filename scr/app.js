const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('Hello World!');
});

module.exports = app;