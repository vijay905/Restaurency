import React from "react";

const BlogCard = ()=>{
    return(
        <>
         <div className="col-md-6">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-1.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <p><i className="far fa-user" />Admin</p>
                    <p><i className="far fa-list-alt" />Food</p>
                    <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                    <p><i className="far fa-comments" />10</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                    </p>
                    <a className="btn custom-btn" href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BlogCard;