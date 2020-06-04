const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    nombre:{
        type: String, 
        rquired: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);