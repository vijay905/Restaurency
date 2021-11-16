const router = require('express').Router()
const mongo = require('mongoose')
const Booking = require('../Models/Booking')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.post("/insert",(req,res)=>{

})

module.exports = router;