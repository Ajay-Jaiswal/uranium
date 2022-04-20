const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://jayvision:KQK8eFQqxCASWGRF@cluster0.6lmc5.mongodb.net/ajay1234", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}))

//////////////////////( Question (1) )///////////////////
//Write a middleware that logs (console.log) some data everytime any API is hit
//Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
//For this first figure out how to get the route location being requested, how to get current timestamp and how to get the IP.
//NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)

//////////////////(Global Middleware)///////////////////
                                                      //
app.use(                                              //
    function mid(req ,res , next){                    //
    let date = new Date();                            //
    let ip = req.ip                                   //
    let url = req.url                                 //
    console.log(date,ip,url)                          //
    next()                                            //
}                                                     //
)                                                     //
////////////////////////////////////////////////////////


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
