const mongoose = require('mongoose');

const db = 'mongodb://localhost/noderest';
mongoose
    .connect(db, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;