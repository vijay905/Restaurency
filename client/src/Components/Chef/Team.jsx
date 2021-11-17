import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


import Chef from './Chef'

const Team = () => {
    return (
        <>
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Team</p>
                        <h3>Our Master Chef</h3>
                    </div>
                    <div className="row">
                        <Chef />
                        <Chef />

                    </div>
                </div>
            </div>

        </>
    )
}


export default Team;
