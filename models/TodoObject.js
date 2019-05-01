const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
module.exports = mongoose.model('TodoObject', todoSchema);