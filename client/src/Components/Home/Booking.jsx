import React, { useState } from "react";
import './Home.css'
import Popup from '../login_registeration/Popup'
import SignIn from "../login_registeration/SignIn";
import SignUp from "../login_registeration/SignUp";
import Axios from "axios";


const Booking = ()=>{

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [vdate,setVdate] = useState("");
  const [vtime,setVtime] = useState("");
  const [guests,setGuest] = useState("");
  const [status,setStatus] = useState({});
  const [ltrigger,setltrigger] = useState(false);
  const [rtrigger,setrtrigger] = useState(false);
 


  const onBooking = (event)=>{
    event.preventDefault();
    
    const token = localStorage.getItem('Token');
    console.log(token);
    
    if(!token){ 
      setltrigger(true);
    }
    else{

        const userId = localStorage.getItem("UserId");

        if(!userId){
          setltrigger(true);
        }
        else{

        Axios.post("http://localhost:7000/Booking/insert",{
          name:name,
          email:email,
          mobile:mobile,
          user_Id:userId,
          date:date,
          time:time,
          guests:guests

          }).then((result)=>{
            if(result.data == "NA"){
              alert("Sorry! Booking full. Book another time slot");
            }
            else{
              alert("Booking successful");
            }
            
          }).catch((err)=>{
            console.log(err);
          })
        }
        }   
    
  }

  const selectData = (event)=>{
    setGuest(event.target.value);
  }

  const onStatus = (event)=>{
    event.preventDefault();

    Axios.get(`http://localhost:7000/Booking/status/${vdate}/${vtime}`).then((result)=>{
        setStatus(result.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

    return(
        <>

<div class="page-header mb-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Booking Table</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">Booking</a>
                    </div>
                </div>
            </div>
        </div>




         <div className="booking">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="booking-content">
                <div className="section-header">
                  <p>Book A Table</p>
                  <h2>Book Your Table For Private Dinners &amp; Happy Hours</h2>
                </div>
                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                  </p>
                  
                  
                </div>

                <h3>View Status </h3>
      <input type = "date" value = {vdate} onChange = {(event)=>{
        setVdate(event.target.value);
      }}></input>
      <br/>
      <input type = "time" value = {vtime} onChange = {(event)=>{
        setVtime(event.target.value);
      }}></input>
      <br/>
      <button onClick = {onStatus}>View</button>
      <br/>
      seats: {status.seats}
      <br/>
      tables: {status.tables}

              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-form">
                <form>
                  <div className="control-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Name" required="required"  value = {name} 
                        value = {name}
                        onChange = {(event)=>{
                          setName(event.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text"><i className="far fa-user" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="Email" required="required" 
                        value = {email}
                        onChange = {(event)=>{
                          setEmail(event.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text"><i className="far fa-envelope" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Mobile" required="required" 
                        value = {mobile}
                        onChange = {(event)=>{
                          setMobile(event.target.value);
                        }}
                      />
                      <div className="input-group-append">
                        <div className="input-group-text"><i className="fa fa-mobile-alt" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="input-group date unstyled" id="date" data-target-input="nearest">
                      <input type="date" className="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{textDecoration : 'none'}}
                      value = {date}
                      onChange = {(event)=>{
                          setDate(event.target.value);
                      }} />
                      <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                        <div className="input-group-text"><i className="far fa-calendar-alt" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="input-group time" id="time" data-target-input="nearest">
                      <input type="time" className="form-control datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" 
                     value = {time}   onChange = {(event)=>{
                          setTime(event.target.value);
                        }}
                      />
                      <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                        <div className="input-group-text"><i className="far fa-clock" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="input-group">
                      <select value = {guests} onChange = {selectData} className="custom-select form-control">
                        <option selected>Guest</option>
                        <option value={1} >Guest</option>
                        <option value={2}>2 Guest</option>
                        <option value={3}>3 Guest</option>
                        <option value={4}>4 Guest</option>
                        <option value={5}>5 Guest</option>
                        <option value={6}>6 Guest</option>
                        <option value={7}>7 Guest</option>
                        <option value={8}>8 Guest</option>
                        <option value={9}>9 Guest</option>
                        <option value={10}>10 Guest</option>
                      </select>
                      <div className="input-group-append">
                        <div className="input-group-text"><i className="fa fa-chevron-down" /></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn custom-btn" type="submit" onClick = {onBooking}>Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Popup trigger = {ltrigger} text = "Sign In" setTrigger = {setltrigger}>
              <SignIn  setlogin = {setltrigger} setregister = {setrtrigger}></SignIn>
          </Popup>

          <Popup trigger = {rtrigger} text = "Sign Up" setTrigger = {setrtrigger}>
              <SignUp  setlogin = {setltrigger} setregister = {setrtrigger}></SignUp>
          </Popup>

      </div>


        </>
    )
}

export default Booking;