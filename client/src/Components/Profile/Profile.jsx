import React from 'react'

const Profile = () => {
    return (
        <div>
             <div className="container">
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                {/* <img src="C:\Users\shree\Downloads\profile image.png" className="rounded-circle" width={150} /> */}
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-circle" width={150} />

                <div className="mt-3">
                  <h3>Pranav Shirke</h3>
                  <br />
                  <br />
                  <br />
                  <br />
              {/* <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Name</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    XYZ
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    abc@gmail.com
                  </div>
                </div>

           
              </div> */}
        
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h2 className="m-3 pt-3">Profile</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Name</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    Pranav Shirke
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    pranavshirke@gmail.com
                  </div>
                </div>

           
              </div>
            </div>
            <div className="card mb-3 content">
              <h2 className="m-3">Booking details</h2>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5> Booking id </h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    201
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-9">
                    <h5>Booking Date</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    23-11-2021
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">
                    <h5>Booking Time</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    08:30 pm
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
        </div>
    )
}


export default Profile;
