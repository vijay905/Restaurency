const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema  = new mongoose.Schema({
    name:{
        type : String,
        required: true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required: true,
        
        
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

//generating tokens
userSchema.methods.generateAuthToken = async function(){
    try{

        const token = jwt.sign({_id : this._id},process.env.secret_key);
        
        this.tokens = this.tokens.concat({token:token});
        await(this.save());
        return token;

    }catch(err){
        console.log(err);
    }
}

userSchema.pre("save",async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
        this.confirm_password  = await bcrypt.hash(this.password,10);
    }
    next();
})

const User = new mongoose.model("User",userSchema);

module.exports = User;