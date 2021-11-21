import Axios from "axios";
import React from "react";

const BookingDetails = (props)=>{

    const CancelBooking = (event)=>{
        event.preventDefault();
        alert("Booking will be cancelled");
        Axios.delete(`http://localhost:7000/Booking/delete/${props.id}`).then((result)=>{
            alert("Booking Canceled");
            window.location.reload(false);
        })

    }
    
    return(
        <>

<div className="card mb-3 content">
              
              
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5> Booking id </h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.id}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-9">
                    <h5>Booking Date</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.date}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">
                    <h5>Booking Time</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                   {props.time}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-3">
                    <h5>Guests</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {props.guests}
                  </div>
                  <hr />
                  <br />
        
                  <div>
                  <button className="btn btn-danger" onClick = {CancelBooking}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>

        </>
    )
}

export default BookingDetails;