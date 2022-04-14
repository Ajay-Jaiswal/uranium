const mongoose = require('mongoose');

const BookModel = new mongoose.Schema( {
    bookName: {
        type: String,
        require: true},
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {
        type: Number,
        default: 2021,
    },
    stockAvailable: Boolean,
    pages: Number,
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', BookModel) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

   
    
    