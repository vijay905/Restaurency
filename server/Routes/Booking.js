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

router.get("/user/get/:userId",async(req,res)=>{
try{

    const userId  = req.params.userId;

    const bookings = await Booking.find({user_Id:userId});

    res.send(bookings);

}catch(err){
    res.status(400).send(err);
}
})

router.get("/status/:date/:time",async(req,res)=>{
    try{

        let tables = 10;
        let seats = 60;

        const date = req.params.date;
        const time = req.params.time;

            const shours = time.slice(0,2);
            const smin = time.slice(3,5);
    
            let hours = Number(shours);
            let min = Number(smin);

        const bookings = await Booking.find({date:date});

        for(let i = 0;i<bookings.length;i++){
            let sbhours = bookings[i].time.slice(0,2);
            let sbmins = bookings[i].time.slice(3,5);

            let bhours = Number(sbhours);
            let bmins = Number(sbmins);

            if(hours < bhours + 1 && hours > bhours - 1){
                seats = seats - bookings[i].guests;
                tables = Math.floor(seats/6);
                
        }


        }

        res.send({tables,seats});


    }catch(err){
        res.status(400).send(err);
    }
})

router.post("/insert",async (req,res)=>{

    try{

        const date = req.body.date;
        const time = req.body.time;

        let tables = 10;
        let seats = 60;

        const shours = time.slice(0,2);
        const smin = time.slice(3,5);

        let hours = Number(shours);
        let min = Number(smin);

        let flag = true;

        const bookings = await Booking.find({date:date});

        for(let i = 0;i<bookings.length;i++){
            let sbhours = bookings[i].time.slice(0,2);
            let sbmins = bookings[i].time.slice(3,5);

            let bhours = Number(sbhours);
            let bmins = Number(sbmins);

            if(hours < bhours + 1 && hours > bhours - 1){
                seats = seats - bookings[i].guests;
                tables = Math.floor(seats/6);
                
        }


        }

        

        for(let i  = 0;i<bookings.length;i++){

            let sbhours = bookings[i].time.slice(0,2);
            let sbmins = bookings[i].time.slice(3,5);

            let bhours = Number(sbhours);
            let bmins = Number(sbmins);

            if(hours < bhours + 1 && hours > bhours - 1 ){
                if(tables * 6 < bookings[i].guests){
                    flag = false;
                    break;
                }
                    
            }
        }

        if(!flag){
            res.send("NA");
        }else{
            const newbooking = new Booking(req.body);

            const saveBooking = await newbooking.save();
    
            res.send(saveBooking);
        }

       

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