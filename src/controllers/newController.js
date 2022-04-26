let axios = require("axios");
const res = require("express/lib/response");




// Assignment 1)   WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
let getappointment = async function (req, res) {
    try {
        let district = req.query.district_id
        let date =req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

/*Assignment  2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
Create API's to do each of the following:
                    - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
                    - then change the above to get the temperature only( of London)
                    - Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
                    result should look something like this
                    [
                    {city:"London", temp: 280},
                    {city:"Moscow", temp: 290},
                    {city:"Bangalore", temp: 301.2},
                    .......
                    ]
*/


let getweather = async function (req, res){
    try{
    let options = {
        method:"get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=16b629bad8e12e6d8ca960ce3e82845d"
    }
    let result = await axios(options)
    res.status(200).send({status:true, data:result.data})}
    
catch(err){
    console.log(err.message)
    res.status(500).send({message: err.message})
}
}

let gettemp = async function (req, res){
    try{
    let options = {
        method:"get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=16b629bad8e12e6d8ca960ce3e82845d"
    }
    let result = await axios(options)
    res.status(200).send({status:true, data:result.data.main.temp})}
    
catch(err){
    console.log(err.message)
    res.status(500).send({error: "err.message"})
}
}




let citiesSorted = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityobjectArray = []
        for (i = 0; i < cities.length; i++) {
            let object = { city: cities[i] }
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=16b629bad8e12e6d8ca960ce3e82845d`)
            console.log(response.data.main.temp)
            object.temp = response.data.main.temp
            cityobjectArray.push(object)
        }
        let sorted = cityobjectArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

let getcity = async function(req , res){
    let city = req.params.city_id
    let option = {
        method: "get",
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=16b629bad8e12e6d8ca960ce3e82845d"
    }
    let result = await axios(option)
    let data = result.data.find({city:"London"})
    res.status(200).send({status:true, data:data})
}

/*
Assignment 3. Axios POST request assignment

            1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
            2. Pick a memeId you want (Eg 129242436) for the POST request
            3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
            template_id <meme_id>
            text0 <text you want as a caption>
            text1 <optional>
            username chewie12345
            password meme@123

  Assignment 4. Return a response with a body like this
            "data": {
                    "url": "https://i.imgflip.com/5mvxax.jpg",
                    "page_url": "https://imgflip.com/i/5mvxax"
                }
*/
let getmemes = async function (req, res){
    {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
}
}


module.exports.getmemes = getmemes

let creatmemes = async function(req,res){
    let template =req.query.template_id
    let text0  =req.query.text0 
    let text1 =req.query.text1
    let username =req.query.username
    let password =req.query.password
    let options = {
        method: 'get',
        url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(options);
    res.send(result.data)
}


module.exports.creatmemes = creatmemes
module.exports.getappointment = getappointment
module.exports.getweather = getweather
module.exports.citiesSorted = citiesSorted
module.exports.getcity = getcity
module.exports.gettemp = gettemp
