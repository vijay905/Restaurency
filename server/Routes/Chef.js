const router = require('express').Router()
const mongo = require('mongoose')
const Chef = require('../Models/Chef')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/get",async (req,res)=>{
    try{

        const chefData = await Chef.find();
        res.send(chefData);

    }catch(err){
        res.send(err);
    }
});

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const chefData = await Chef.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(chefData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async (req,res)=>{

    try{
        const newchef = new Chef(req.body);

        const saveChef = await newchef.save();

        res.send(saveChef);

    }catch(err){
        res.send(err);
    }
    

})
router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateChef = await Chef.findByIdAndUpdate(_id,req.body,{
            new :true
        })

        res.send(updateChef);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteChef = await Chef.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteChef);

    }catch(err){
        res.send(err);
    }

})


module.exports = router;