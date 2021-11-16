const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    dish:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    desc:{
        type:Number,
        required:true
    },
    price:{
        type:Date,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

const Menu = new mongoose.model("Menu",menuSchema);

module.exports = Menu;