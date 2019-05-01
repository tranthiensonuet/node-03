const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('mongodb/db.js');

const todoSchema = new Schema({
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
            type: String,
            default: Date.now
        }
});
module.exports = db.model('TodoObject', todoSchema);