const router = require('express').Router()
const mongo = require('mongoose')
const Booking = require('../Models/Booking')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/get",async (req,res)=>{
    try{

        const bookingData = await Booking.find();
        res.send(bookingData);

    }catch(err){
        res.send(err);
    }
});

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const bookingData = await Booking.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(bookingData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async (req,res)=>{

    try{
        const newbooking = new Booking(req.body);

        const saveBooking = await newbooking.save();

        res.send(saveBooking);

    }catch(err){
        res.send(err);
    }
    

})
router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateBooking = await Booking.findByIdAndUpdate(_id,req.body,{
            new :true
        })

        res.send(updateBooking);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteBooking = await Booking.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteBooking);

    }catch(err){
        res.send(err);
    }

})


module.exports = router;