const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
<<<<<<< HEAD
const newcontroller= require("../controllers/newcontroller")
=======
const authorController = require('../controllers/authorController')
>>>>>>> 1bf35ec27de1c98332f68a2ec3430c7854749cc2

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)

//                   //                            //
router.post("/createBooks", newcontroller.createBooks  )
router.get("/getBookData", newcontroller.getBookData)
router.post("/createauthor", newcontroller.createauthor)
router.get("/getauthorData", newcontroller.getauthorData)

router.get("/ListBook", newcontroller.ListBook)
router.get("/update", newcontroller.update)
router.get("/between", newcontroller.between)

//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment(); between
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

router.post('/create-author', authorController.createAuthor)

module.exports = router;