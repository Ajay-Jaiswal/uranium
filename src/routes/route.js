const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");
const newController= require("../controllers/newController");



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/findByDistrict", newController.getappointment)
router.get("/weather", newController.getweather)
router.get("/weathercity", newController.citiesSorted)
router.get("/getweathercity", newController.getcity)


router.get("/getmemes", newController.getmemes)
router.post("/creatmemes", newController.creatmemes)
router.get("/gettemp", newController.gettemp)


module.exports = router;