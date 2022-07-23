const {Schema, model} = require('mongoose');

const CuadroSchema= new Schema(
    {
        src:{type:String, required:true},
        autor:{type:String, required:true},
        redSocial:{type:String, required:true},
})
module.exports = model('cuadro',CuadroSchema)