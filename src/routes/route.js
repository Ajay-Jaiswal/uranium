const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newController= require("../controllers/newController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


/////////////////////////////////////////////////////////////////////////
router.post("/batches", newController.batches  )

router.get("/getbatch", newController.getbatch)

router.post("/developer", newController.developer  )

router.get("/getdeveloper", newController.getdeveloper)

router.get("/getBatchsWithDeveloper", newController.getBatchsWithDeveloper)

router.get("/scholarshipdevelopers", newController.scholarshipdevelopers)

router.get("/getdevelopers", newController.getdevelopers)

module.exports = router;