const res = require("express/lib/response")
const UserModel= require("../models/userModel")



try{
const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.status(200).send({ msg: "This is coming from controller (handler)"})
    }
  }
  catch(err){
    console.log(err.message)
    res.status(500).send({error: "err.message"})
  }



















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const loginuser = async function(req ,res){

let user = await UserModel.findOne({ emailId: userName, password: password });
if (!user)
  return res.send({
    status: false,
    msg: "username or the password is not corerct",
  });
let token = jwt.sign(
  {
    userId: user._id.toString(),
    batch: "thorium",
    organisation: "FUnctionUp",
  },
  "functionup-thorium"
);
res.setHeader("x-auth-token", token);
res.send({ status: true, data: token });
};

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode


module.exports.loginuser= loginuser