const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    tables:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

const Menu = new mongoose.model("Menu",menuSchema);

module.exports = Menu;