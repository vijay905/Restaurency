import React from "react";
import './Home.css'

import homepage from './homepage.jpg'
import {Link} from 'react-router-dom'


const Carosouel = ()=>{

    return(
        <>
           <div className="carousel">
        <div className="container-fluid">
          <div className="owl-carousel">
            <div className="carousel-item">
              <div className="carousel-img">
                <img src={homepage} alt="Image" />
              </div>
              <div className="carousel-text">
                <h1>Best <span>Quality</span> Ingredients</h1>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                </p>
                <div className="carousel-btn">
                  <a className="btn custom-btn" href><Link to = "/menu"><a href="#" className="nav-item nav-link">View Menu</a></Link></a>
                  <a className="btn custom-btn" href><Link to = "/menu"><a href="#" className="nav-item nav-link">Book Table</a></Link></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> 
        </>
    )
}
export default Carosouel;