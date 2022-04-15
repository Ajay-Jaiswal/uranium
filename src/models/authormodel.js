const mongoose = require('mongoose');

const authorschema = new mongoose.Schema( {
    author_id: String, 
    author_name: String, 
    age: Number,
    address: String,
    
    //summary :  mongoose.Schema.Types.Mixed,
    //isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('author', authorschema) 
