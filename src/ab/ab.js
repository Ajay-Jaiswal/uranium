const express = require('express');
const router = express.Router();

let jay = router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       
    
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
   res.send(  {"Abe bhut ni ke nahi samjta toh kyu enter kiya" }  )
})
   
  
module.exports.jay = jay;
