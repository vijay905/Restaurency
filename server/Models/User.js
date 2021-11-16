const mongoose = require('mongoose');


const userSchema  = new mongoose.Schema({
    firstname:{
        type : String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    confirm_password:{
        type:String,
        required:true
    },
    tables:[{
        tables:{
            type:Number,
        }
    }],
    orders:[{
        dish_id:{
            type:String,
        }
    }
    ],
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

const User = new mongoose.model("User",userSchema);

module.exports = User;