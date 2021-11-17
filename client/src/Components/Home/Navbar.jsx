import React from "react";
import "./Home.css"
import {Link} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Navbar = ()=>{
    return(
        <>
       <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">Restau<span>rancy</span></a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse" >
            <div className="navbar-nav ml-auto" >
            <span style = {{width: "32vw"}}></span>
             <Link to = "/"> <a href="#" className="nav-item nav-link">Home</a></Link>
              <Link to = "/about"><a href="#" className="nav-item nav-link">About</a></Link>
              <Link to = "/chef"><a href="#" className="nav-item nav-link">Chef</a></Link>
              <Link to = "/menu"><a href="#" className="nav-item nav-link">Menu</a></Link>
              <a href="booking.html" className="nav-item nav-link">Booking</a>
              <div className="nav-item dropdown">
               
                <div className="dropdown-menu">
                  <a href="blog.html" className="dropdown-item">Blog Grid</a>
                  <a href="single.html" className="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <Link to = "/contact"><a href="#" className="nav-item nav-link">Contact</a></Link>
              <Link to = "/signup"><a href="#" className="nav-item nav-link">Sign up</a></Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Navbar;