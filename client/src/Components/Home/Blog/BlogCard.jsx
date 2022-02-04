import React from "react";



const BlogCard = (props)=>{
    
  return(
        <>
         <div className="col-md-6">
              <div className="blog-item">
                <div className="blog-img" style = {{maxWidth:"540px",maxHeight:"360px"}}>
                  <img src={props.img}  alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">{props.title}</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-user" />{props.designer}</p>
                    <p><i className="far fa-list-alt" />{props.type}</p>
                    <p><i className="far fa-calendar-alt" />{props.date}</p>
                    <p><i className="far fa-comments" />10</p>
                  </div>
                  <div className="blog-text">
                    <p>
                     {props.desc}
                    </p>
                    <a className="btn custom-btn" href = {props.link} target = "_blank">Read More</a>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BlogCard;