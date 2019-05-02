let mongoose = require('mongoose');
let config = require('config');
let MONGO_PATH = process.env.MONGO_PATH || config.get("MONGO_PATH");
let MONGO_PORT = process.env.MONGO_PORT || config.get("MONGO_PORT");

let connection = mongoose.createConnection(`mongodb://${MONGO_PATH}:${MONGO_PORT}/todo`, {useNewUrlParser : true}, function (error) {
    if (error)
        console.log(error);
    else console.log ('Connected successfully to server');
});
module.exports = connection;

