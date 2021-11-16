const router = require('express').Router()
const mongo = require('mongoose')
const Blog = require('../Models/Blog')

mongo.connect(process.env.mongo_conn,{useNewUrlParser: true,useUnifiedTopology: true })

router.get("/get",async (req,res)=>{
    try{

        const blogData = await Blog.find();
        res.send(blogData);

    }catch(err){
        res.send(err);
    }
});

router.get("/get/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const blogData = await Blog.findById(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(blogData);

    }catch(err){
        res.send(err);
    }
})

router.post("/insert",async (req,res)=>{

    try{
        const newblog = new Blog(req.body);

        const saveBlog = await newblog.save();

        res.send(saveBlog);

    }catch(err){
        res.send(err);
    }
    

})
router.patch("/update/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateBlog = await Blog.findByIdAndUpdate(_id,req.body,{
            new :true
        })

        res.send(updateBlog);
    }
    catch(err){
        res.status(400).send(err);
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const _id  = req.params.id;
        const deleteBlog = await Blog.findByIdAndDelete(_id);
        
        if(!_id){
            return res.status(400).send();
        }
        
        res.send(deleteBlog);

    }catch(err){
        res.send(err);
    }

})


module.exports = router;