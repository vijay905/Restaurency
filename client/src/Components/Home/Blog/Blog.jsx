import React,{useState,useEffect} from "react";
import Axios from "axios";
import BlogCard from "./BlogCard";


const Blog = ()=>{

  const [blogData,setBlogData] = useState([]);

  useEffect(()=>{

    Axios.get("http://localhost:7000/Blog/get").then((result)=>{
        setBlogData(result.data);
        console.log(result.data);
    }).catch((err)=>{
      console.log(err);
    })

  },[])

    return(
        <>
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Food Blog</p>
            <h2>Latest From Food Blog</h2>
          </div>
          <div className="row">
           
           {blogData.map((val)=>{
              return(
                <>
                <BlogCard title = {val.title} designer = {val.designer} date = {val.date.slice(0,10)} type = {val.type}
                  desc = {val.desc} img = {val.img} link = {val.link}
                />
                </>
              )
           })}

         
          </div>
        </div>
      </div>
        </>
    )
}

export default Blog;