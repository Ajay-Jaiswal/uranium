const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    catagory: String,
    year: Number
    
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //users



// String, Number
// Boolean, Object/json, array