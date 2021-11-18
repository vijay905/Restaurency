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
        
    },
    twitter:{
        type:String,
        
    },
    instagram:{
        type:String,
        
    },
    linkedin:{
        type:String,
        
    },
})

const Chef = new mongoose.model("Chef",chefSchema);

module.exports = Chef;