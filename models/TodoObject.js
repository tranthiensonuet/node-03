let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let db = require('../database/db');

let todoSchema = new Schema({
    title:
        {
            type: String
        },
    completed:
        {
            type: Boolean,
            default: false
        },
    created:
        {
            type: Date,
            default: Date.now
        }
});
module.exports = db.model('todo', todoSchema);