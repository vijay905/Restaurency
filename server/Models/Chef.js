const mongoose = require('mongoose')

const chefSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true 
    },
    facebook:{
        type:String,
        required: true
    },
    twitter:{
        type:String,
        required: true
    },
    instagram:{
        type:String,
        required: true
    },
    linkedin:{
        type:String,
        required: true
    },
})

const Chef = new mongoose.model("Chef",chefSchema);

module.exports = Chef;