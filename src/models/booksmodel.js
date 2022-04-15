const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
    name: String, 
    author_id: Number, 
    price: Number,
    ratings: Number,
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
   // summary :  mongoose.Schema.Types.Mixed,
    //isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Books', booksSchema) //users












