

import React from 'react'
import team3 from './team-3.jpg'
const Chef = () => {
    return (
        <div>
            <div className="col-lg-3 col-md-6">
                <div className="team-item">
                    <div className="team-img">
                        <img src={team3} alt="Image" />
                        <div className="team-social">
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-facebook-f"></i></a>
                            <a href=""><i className="fab fa-linkedin-in"></i></a>
                            <a href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="team-text">
                        <h2>Adam Phillips</h2>
                        <p>CEO, Co Founder</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Chef;







