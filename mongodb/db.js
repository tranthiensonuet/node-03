const mongoose = require('mongoose');

const MONGO_PATH = process.env.MONGO_PATH || '127.0.0.1';
const MONGO_PORT = process.env.MONGO_PORT || 27017;

const connection = mongoose.createConnection(`mongodb://${MONGO_PATH}:${MONGO_PORT}/node-03`, {useNewUrlParser : true}, function (error) {
    if (error)
        console.log(error);
    else console.log ('Connected successfully to server');
});
module.exports = connection;

