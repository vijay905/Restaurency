

import React from 'react'
import team3 from './team-3.jpg'
import {FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";


const Chef = () => {
    return (
        <>





<div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/team-1.jpg" alt="Image" />
                  <div className="team-social">
                    <a href><i class="fab fa-twitter"></i></a>
                    <a href><FaFacebookSquare /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>CEO, Co Founder</p>
                </div>
              </div>
            </div>

        </>
    )
}



export default Chef;







