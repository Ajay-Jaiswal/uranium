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


//////////////////////////////////////////////////////////////////////////////////////////

//router.post("/createnewBook", newController.createnewBook  )

router.post("/createnewBook1", newController.createnewBook1  )

router.get("/getnewBooksData", newController.getnewBooksData  )

router.post("/createnewAuthor", newController.createnewAuthor  )

router.post("/createnewPublisher", newController.createnewPublisher  )

//router.post("/createnewBook", newController.createnewBook  )
/*router.get("/getnewpopulatedata", newController.getnewpopulatedata  )*/
router.put("/updateBook", newController.updateBook  )

router.put("/updateB", newController.updateB  )



module.exports = router;