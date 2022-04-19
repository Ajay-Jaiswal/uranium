const batchSchema = require("../models/batches")
const developerSchema= require("../models/developer")

const batches= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchSchema.create(batch)
    res.send({data: batchCreated})
}

const getbatch= async function (req, res) {
    let batch = await batchSchema.find()
    res.send({data: batch})
}



/////////////////////////////////////////////////////////////////////////////////////////////////////
const developer= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerSchema.create(developer)
    res.send({data: developerCreated})
}

const getdeveloper= async function (req, res) {
    let developer = await developerSchema.find()
    res.send({data: developer})
}

const getBatchsWithDeveloper = async function (req, res) {
    let fullbatch = await developerSchema.find().populate('batch')
    res.send({data: fullbatch})

}
//////////////////////////////////////////////////////////
const getdevelopers= async function (req, res) {
    let getpercentage = req.query.percentage;
    let getprograme = req.query.programe;
    let cond = await developerSchema.find({name: getprograme})
    let con = await developerSchema.find({programe:getprograme , percentage:{$gte : getpercentage}})
    res.send({data:  con})
}
//////////////////////////////////////////////////////////////////

const scholarshipdevelopers= async function (req, res) {
    let developer = await developerSchema.find({gender:"female", percentage:{$gte:70}})
    res.send({data: developer})
}

module.exports.batches= batches
module.exports.getbatch= getbatch
module.exports.getBatchsWithDeveloper = getBatchsWithDeveloper

////////////////////////////////////////////////////////////////////////////////////
module.exports.developer= developer
module.exports.getdeveloper= getdeveloper

module.exports.scholarshipdevelopers= scholarshipdevelopers
module.exports.getdevelopers= getdevelopers
