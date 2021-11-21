import React from "react";
import { Link } from "react-router-dom";

const About = ()=>{
    return(
        <>
        <div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>About Us</h2>
                    </div>
                    <div class="col-12">
                        <Link to = "/"><a href="#" >Home</a></Link>
                        <Link to = "/about"><a href="#" >About</a></Link>
                    </div>
                </div>
            </div>
        </div>
            <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Image" />
                <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/GlrxcuEDyF8" data-target="#videoModal">
                  <span />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header">
                  <p>About Us</p>
                  <h2>Cooking Since 1990</h2>
                </div>
                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                  </p>
                <Link to = "/booking">  <a className="btn custom-btn" href>Book A Table</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default About;