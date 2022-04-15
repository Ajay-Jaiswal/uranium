const { count } = require("console")
const authorschema= require("../models/authormodel")
const booksSchema= require("../models/booksmodel")
const userModel = require("../models/userModel")
// Q1) Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry
//(in neither the author collection nor the books collection)

const createBooks= async function (req, res) {
    let data= req.body
    if(data.author_id) {
    let savedData= await booksSchema.create(data)
    res.send({msg: savedData})
    } else {
        res.send({msg: 'author_id must be present'})
    }
}

const createauthor = async function (req, res) {
    let data= req.body
    if(data.author_id) {
    let savedData= await authorschema.create(data)
    res.send({msg: savedData})
    } else {
        res.send({msg: 'author_id must be present'})
    }
}

//Q2 List out the books written by "Chetan Bhagat"
//( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )



const getBookData= async function (req, res) {
    let savedData= await booksSchema.findOne( {author_name :"Chetan Bhagat"})
    res.send({msg: savedData})
}


const ListBook = async function (req, res) {
    let savedData= await authorschema.findOne({"Authoe_id": "6257f862c8eaafb688b9c8db"})
    res.send({msg: savedData})
}


//Q3 find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  
//( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const update = async function (req, res) {
    let savedData= await booksSchema.findOneAndUpdate( { name: "Two states"} , //condition
    { $set: {price:50} }, //update in data
    { new: true , upsert: true})
    res.send({msg: savedData})
}

//Q4 Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
//bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
//bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) 
//loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const between = async function (req, res) {
    let savedData= await booksSchema.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}) //..run a map(or forEach)
    res.send({msg: savedData})
}



const getauthorData= async function (req, res) {
    let savedData= await authorschema.find()
    res.send({msg: savedData})
}



/*
const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    (id :6257f771c8eaafb688b9c8d5)
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})*/


/*

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}
*/



module.exports.createBooks= createBooks
module.exports.getBookData= getBookData
module.exports.createauthor= createauthor
module.exports.getauthorData= getauthorData

module.exports.ListBook=ListBook
module.exports.update=update
module.exports.between=between