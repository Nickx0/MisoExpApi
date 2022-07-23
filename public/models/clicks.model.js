const {Schema, model} = require('mongoose');

const ClickerSchema= new Schema({
    counter: Number,
})
module.exports = model('counter',ClickerSchema)