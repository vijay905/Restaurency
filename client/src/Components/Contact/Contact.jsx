import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Contact = ()=>{

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");

  const onSend = (event)=>{
    event.preventDefault();

    Axios.post("https://formsubmit.co/el/yewuwu",{
      name:name,
      email:email,
      subject:subject,
      message:message
    }).then((result)=>{
      alert("message sent successfully")
    }).catch((err)=>{
      console.log(err);
    })

  }


    return(
        <>


<div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Contact Us</h2>
                    </div>
                    <div class="col-12">
                    <Link to = "/"> <a href="" className="">Home</a></Link>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>



             <div className="contact">
        <div className="container">
          <div className="section-header text-center">
            <p>Contact Us</p>
            <h2>Contact For Any Query</h2>
          </div>
          <div className="row align-items-center contact-information">
            <div className="col-md-6 col-lg-3">
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="fa fa-map-marker-alt" />
                </div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>123 Street, NY, USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="fa fa-phone-alt" />
                </div>
                <div className="contact-text">
                  <h3>Call Us</h3>
                  <p>+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="contact-text">
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="fa fa-share" />
                </div>
                <div className="contact-text">
                  <h3>Follow Us</h3>
                  <div className="contact-social">
                    <a href><i className="fab fa-twitter" /></a>
                    <a href><i className="fab fa-facebook-f" /></a>
                    <a href><i className="fab fa-youtube" /></a>
                    <a href><i className="fab fa-instagram" /></a>
                    <a href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact-form">
            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            <div className="col-md-6">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate" action = "https://formsubmit.co/el/yewuwu" method = "POST" >
                <div className="control-group">
                  <input type="text" className="form-control" id="name" value = {name}  onChange={(event)=>{
                    setName(event.target.value);
                  }} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="email" className="form-control"
                  value = {email}  onChange={(event)=>{
                    setEmail(event.target.value);
                  }}  
                   id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" 
                  value = {subject}  onChange={(event)=>{
                    setSubject(event.target.value);
                  }}
                  id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea className="form-control" id="message" 

                  value = {message}  onChange={(event)=>{
                    setMessage(event.target.value);
                  }}

                   placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn custom-btn"  type="submit" id="sendMessageButton"   >Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Contact;