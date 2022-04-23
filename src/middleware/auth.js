const res = require("express/lib/response")

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token

    let decodetoken = jwt.verify(token ,"functionup-thorium")
    if(!decodetoken) return res.send({status:false,message : "invalid token"})
    let userloggedIn = decodetoken.userId
    let userId = req.params.userId

    if(userloggedIn !== userId) return res.sen({status:false , message: "invalid user id"})

    next()
}


const authorise =async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });


    next()
}



module.exports.authenticate = authenticate
module.exports.authorise = authorise