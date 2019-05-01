const mongoose = require('mongoose');
let config = require('config');
const MONGO_PATH = process.env.MONGO_PATH || config.get("MONGO_PATH");
const MONGO_PORT = process.env.MONGO_PORT || config.get("MONGO_PORT");

const connection = mongoose.createConnection(`mongodb://${MONGO_PATH}:${MONGO_PORT}/node-03`, {useNewUrlParser : true}, function (error) {
    if (error)
        console.log(error);
    else console.log ('Connected successfully to server');
});
module.exports = connection;

