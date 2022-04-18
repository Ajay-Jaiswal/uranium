const newBookSchema= require("../models/newBookmodules")
const newAuthorSchema = require("../models/newAuthormodule")
const newPublisherSchema = require("../models/newPublishermodule")
const bookModel = require("../models/bookModel")
const res = require("express/lib/response")

/*const createnewBook= async function (req, res) {
    let book = req.body
    let bookCreated = await newBookSchema.create(book)
    res.send({data: bookCreated})
        }*/

const createnewBook1= async function (req, res) {
    let data = req.body
   if(data.author && data.publisher){
       let aCheck= await newAuthorSchema.find({_id:data.author}).select("_id")
       let pCheck= await newPublisherSchema.find({_id:data.publisher}).select("_id").lean()
       if(!aCheck.length &&!pCheck.length)
       res.send({msg:"author and publisher id field is not match the data,hence invalid!"})
       else if(!aCheck.length && pCheck.length)
       res.send({msg:"author id doesn't match our data, hence invalid!"})
       else if(aCheck.length && !pCheck.length)
       res.send({msg:"publisher id doesn't match to our data, hence invalid!"})
       else{
           if(!await newBookSchema.exists(req.body)){
               let saveData=await newBookSchema.create(req.body)
               res.send({msg: saveData})
           } else res.send({msg: "this book already present in the collection!"})
       }
   }
}
    


const getnewBooksData= async function (req, res) {
    let getbooks = await newBookSchema.find().populate(['author', 'publisher'])
    res.send({data: getbooks})
}

//const getBooksWithAuthorDetails = async function (req, res) {
  //  let specificBook = await bookModel.find().populate('author_id')
    //res.send({data: specificBook})

//}
const createnewAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await newAuthorSchema.create(book)
    res.send({data: bookCreated})
}

const createnewPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await newPublisherSchema.create(book)
    res.send({data: bookCreated})
}

const updateBook=async function(req,res){
    let pId = await newPublisherSchema.findOne({publisherName: req.body.publisher})
    let data = await newBookSchema.updateMany(
        {publisher:pId} ,
        {$set:{isHardCover:true}},
        )
        res.send({msg:data})
}

const updateB= async function(req ,res){
    let a_filter= await newAuthorSchema.find({rating:{$gt: 3.5}})
    await newBookSchema.updateMany({author:a_filter},{$inc:{price:10}})
    let data = await newBookSchema.find()
    res.send({msg:data})
}




/*const getnewpopulatedata= async function (req, res) {
    let books = await newBookSchema.find()
    res.send({data: books})
}*/


//module.exports.createnewBook= createnewBook
module.exports.getnewBooksData= getnewBooksData
//module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createnewAuthor= createnewAuthor
module.exports.createnewPublisher= createnewPublisher
/*module.exports.getnewpopulatedata= getnewpopulatedata*/

module.exports.createnewBook1= createnewBook1

module.exports.updateBook= updateBook
module.exports.updateB= updateB