const UserModel= require("../models/userModel")
const bookschema = require("../Books/bookschema")//

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


const createBooksData = async function (req, res) {
    let data= req.body
    let savedData= await bookschema.create(data)
    res.send({msg: savedData})
}//

const getBooksData= async function (req, res) {
    let allUsers= await bookschema.find()
    res.send({msg: allUsers})
}//


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.createBooksData= createBooksData //
module.exports.getBooksData= getBooksData //