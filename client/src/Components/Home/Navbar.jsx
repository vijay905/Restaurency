import React, { useEffect, useState} from "react";
import "./Home.css"
import {Link} from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Popup from "../login_registeration/Popup";
import SignIn from "../login_registeration/SignIn";
import SignUp from "../login_registeration/SignUp";
import { useNavigate } from 'react-router-dom';

 

const Navbar = ()=>{

  const [log,setLog] = useState(false);
  const [ltrigger,setltrigger] = useState(false);
  const [rtrigger,setrtrigger] = useState(false);
  const [ham,setHam] = useState(false);
 
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem('Token');

    if(token){
      setLog(true);
    }

  },[])

  const onHam = (event)=>{
    event.preventDefault();
    setHam(!ham);
  }

    return(
        <>
       <div className="navbar navbar-expand-lg bg-light navbar-light" style = {{position:"sticky",top:"0"}}>
        <div className="container-fluid" style={{display:"flex"}}>
        <div style={{flexGrow:"8"}}>
        <a href="index.html" className="navbar-brand">Restau<span>rancy</span></a>
          
        </div>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" onClick={onHam}>
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse"  style={{flexGrow:'1'}}>
            
            <div className="navbar-nav ml-auto" >
            
             <Link to = "/" style = {{textDecoration:"none"}}> <a href="#" className="nav-item nav-link">Home</a></Link>
              <Link to = "/about" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">About</a></Link>
              <Link to = "/chef" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Chef</a></Link>
              <Link to = "/menu" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Menu</a></Link>
              <Link to = "/booking" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Booking</a></Link>

              <Link to = "/contact" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Contact</a></Link>   
              {log ? 
              <>
                <Link to = "/profile" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Profile</a></Link>
                <Link to = "/" style = {{textDecoration:"none"}} onClick = {()=>{
                  localStorage.removeItem("Token");
                  localStorage.removeItem("UserId");
                  alert("Logout Successful");
                  navigate('/');
                  window.location.reload(false);
                }}><a href="#" className="nav-item nav-link">Logout</a></Link>
                </>
                : 
                <>
                <Link to = "#" onClick = {()=>{
                   setltrigger(true);
                }}
                style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link">Profile</a></Link>
                
                <Link to = "#"  onClick = {()=>{
                  setltrigger(true);
                }} style = {{textDecoration:"none"}} ><a href="#" className="nav-item nav-link">Login</a></Link>
                </>
              }
              


              
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

      {ham ?  <>
     <div style={{position:"sticky",top:"50px",backgroundColor:"white",zIndex:"10"}} >
      <Link to = "/" style = {{textDecoration:"none",color:"black"}}> <a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Home</span></a></Link>
              <Link to = "/about" style = {{textDecoration:"none",color:"black"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>About</span></a></Link>
              <Link to = "/chef" style = {{textDecoration:"none",color:"black"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Chef</span></a></Link>
              <Link to = "/menu" style = {{textDecoration:"none",color:"black"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Menu</span></a></Link>
              <Link to = "/booking" style = {{textDecoration:"none",color:"black"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Booking</span></a></Link>

              <Link to = "/contact" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Contact</span></a></Link>   
              {log ? 
              <>
                <Link to = "/profile" style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Profile</span></a></Link>
                <Link to = "/" style = {{textDecoration:"none"}} onClick = {()=>{
                  localStorage.removeItem("Token");
                  localStorage.removeItem("UserId");
                  alert("Logout Successful");
                  navigate('/');
                  window.location.reload(false);
                }}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Logout</span></a></Link>
                </>
                : 
                <>
                <Link to = "#" onClick = {()=>{
                   setltrigger(true);
                }}
                style = {{textDecoration:"none"}}><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Profile</span></a></Link>
                
                <Link to = "#"  onClick = {()=>{
                  setltrigger(true);
                }} style = {{textDecoration:"none"}} ><a href="#" className="nav-item nav-link"><span style={{color:"black"}}>Login</span></a></Link>
             
                </>
               
              }</div></>:
      <></>
      }

      

    </>
    )
}

export default Navbar;