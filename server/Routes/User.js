const router = require('express').Router();
const mongo = require('mongoose')
const User = require('../Models/User');
const bcrypt = require('bcryptjs');


mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.post('/register',async (req,res)=>{
    
    try{
        const fname = req.body.fname;
        const lname = req.body.lname;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const confirmpassword = req.body.confirmPassword;
    
    if(password === confirmpassword){
        const RegisterUser = new User({
            firstname:fname,
            lastname:lname,
            username:username,
            email:email,
            password:password,
            confirm_password:confirmpassword
        })

        const token = await RegisterUser.generateAuthToken();
    
        const registered  = await RegisterUser.save();
        res.send(registered);
    }
    else{
        res.send("Passwords are not matching.");
    }
        
    }catch(err){
        console.log(err);
    }
    
})

router.post("/login",async(req,res)=>{
    
    try{
        let token;
        const username = req.body.userName;
        const password = req.body.Password;

        const dbuser = await User.findOne({username:username});

    if(dbuser){
        const isMatch = await bcrypt.compare(password,dbuser.password);
        token = await dbuser.generateAuthToken();
        
        console.log(token);

        if(isMatch){
            res.status(200).send({dbuser,token});    
        }
        else{
            res.status(400).json({ error : "Invalid Login credentials"});
        }
    }
    else{
            res.status(400).json({ error : "Invalid Login Credentials"});
    }
    
}catch(err){
        res.send(err);
    }

})

module.exports = router;