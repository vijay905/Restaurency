const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    designer:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    link:{
        type: String,
        required:true
    }
})

const Blog = new mongoose.model("Blog",BlogSchema);

module.exports = Blog;