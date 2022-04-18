const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    ObjectId: String,
    price: Number,
    ratings: Number,
    publisher: String,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    },
    publisher: {
        type: ObjectId,
        ref: "newpublisher"
 },
    isHardCover: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', newBookSchema)
