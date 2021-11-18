import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';


const Chef=(props) => {
  
  return (
        <>

<div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src={props.img} style = {{width: "22rem",height: "15rem"}} alt="Image" />
                  <div className="team-social">
                    <Link to = "#"><i className="fab fa-twitter" style={{color:'#fff'}}></i></Link>
                    <Link to = "#"><i className="fab fa-facebook" style={{color:'#fff'}}></i></Link>
                    <Link to = "#"><i className="fab fa-instagram" style={{color:'#fff'}}/></Link>
                  </div>
                </div>
                <div className="team-text">
                  <h2>{props.name}</h2>
                  <p>{props.desig}</p>
                </div>
              </div>
            </div>

        </>
    )
}



export default Chef;







