import React, { useState } from "react";
import './Home.css'
import Popup from '../login_registeration/Popup'
import SignIn from "../login_registeration/SignIn";
import SignUp from "../login_registeration/SignUp";

const Booking = ()=>{

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [guest,setGuest] = useState("");
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

        // const userId = localStorage.getItem("UserId");

        // if(!userId){
        //   setltrigger(true);
        // }
        // else{

        //   Axios.get(`http://localhost:7000/User/course/get/${userId}/${url.slice(16,url.length)}`).then((result)=>{
             
        //       let course;
              
        //       course =  result.data.user.courses.map((val)=>{
                
        //        if(val.course == `${url.slice(16,url.length)}`){
        //          return true;
        //        }
        //      })

        //      for(let i = 0;i<course.length;i++){
        //        if(course[i] == true){
        //          setCourseEnroll(true);
        //          break;
        //        }
        //      }

             

        //     if(!courseEnroll){
        //       Axios.post("http://localhost:7000/User/course/insert",{
        //         userId:userId,
        //         courseId:url.slice(16,url.length)
        //       }).then((result)=>{
        //          setCourseEnroll(true);
        //       }).catch((err)=>{
        //         console.log(err);
        //       })
        //     }
           
        //     }).catch((err)=>{
        //       console.log(err);
        //     })


          

        }   
    
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="booking-form">
                <form>
                  <div className="control-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Name" required="required"  value = {name} 
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
                        onChang = {(event)=>{
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
                      <select className="custom-select form-control">
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