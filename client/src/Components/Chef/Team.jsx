import React from 'react'
import Chef from './Chef'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Team = () => {
    return (
        <>


<div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Chef</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Chef</a>
                    </div>
                </div>
            </div>
        </div>




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
