const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    }
})

const Booking = new mongoose.model("Booking",BookingSchema);

module.exports = Booking;