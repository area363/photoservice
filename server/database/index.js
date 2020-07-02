const mongoose = require('mongoose');
//const mongoUri = 'mongodb://test:test@52.79.61.49:27017/campsite';

mongoose.connect('mongodb://52.79.61.49:27017/', {
    auth: {
        user:'test',
        password:'test'
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const db = mongoose.connection;

module.exports = db;

