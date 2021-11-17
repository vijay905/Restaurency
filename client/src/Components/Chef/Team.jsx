import React from 'react'
import Chef from './Chef'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Team = () => {
    return (
        <>
    <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Team</p>
            <h2>Our Master Chef</h2>
          </div>
          <div className="row">
                <Chef/>
                <Chef/>
                <Chef/>
                <Chef/>
                <Chef/>
                <Chef/>
                <Chef/>
                <Chef/>
          </div>
        </div>
      </div>

        </>
    )
}


export default Team;
