const router = require('express').Router()
const mongo = require('mongoose')
const Menu = require('../Models/Menu')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/get",async (req,res)=>{
    try{

        const menuData = await Menu.find();
        res.send(menuData);

    }catch(err){
        res.send(err);
    }
});

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const menuData = await Menu.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(menuData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async (req,res)=>{

    try{
        const newmenu = new Menu(req.body);

        const saveMenu = await newmenu.save();

        res.send(saveMenu);

    }catch(err){
        res.send(err);
    }
    

})
router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateMenu = await Menu.findByIdAndUpdate(_id,req.body,{
            new :true
        })

        res.send(updateMenu);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteMenu = await Menu.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteMenu);

    }catch(err){
        res.send(err);
    }

})


module.exports = router;