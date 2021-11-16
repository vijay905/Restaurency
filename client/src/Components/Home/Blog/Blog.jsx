import React from "react";
import BlogCard from "./BlogCard";

const Blog = ()=>{
    return(
        <>
                  <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Food Blog</p>
            <h2>Latest From Food Blog</h2>
          </div>
          <div className="row">
           
           <BlogCard/>
           <BlogCard/>
         
          </div>
        </div>
      </div>
        </>
    )
}

export default Blog;