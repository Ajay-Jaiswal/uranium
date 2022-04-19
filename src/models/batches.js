const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const batchSchema = new mongoose.Schema( {
    name: String,
    size: Number,
    program: {
        type: String,
        enum: ["backend" ,"frontend"]
    }

}, { timestamps: true });

module.exports = mongoose.model('batch', batchSchema)

