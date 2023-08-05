import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import BookingDetails from './BookingDetails';

const Profile = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [bookings,setBookings] = useState([]);
  

  useEffect(()=>{

    const userId = localStorage.getItem("UserId");


      Axios.get(`https://restaurency-app-1meh.onrender.com/User/get/${userId}`).then((result)=>{
        setName(result.data.name);
        setEmail(result.data.email);
      }).catch((err)=>{
        console.log(err);
      })

      Axios.get(`https://restaurency-app-1meh.onrender.com/Booking/user/get/${userId}`).then((result)=>{
        setBookings(result.data);
      }).catch((err)=>{
        console.log(err);
      })
  },[])

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
                  <h3>{name}</h3>
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
                   {name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-mod-9 text-secondary">
                    {email}
                  </div>
                </div>

           
              </div>
            </div>
            <h2 className="m-3">Booking details </h2>
           {bookings.map((val)=>{
             return(
               <>
               
               <BookingDetails id ={val._id} date = {val.date.slice(0,10)} time = {val.time} guests = {val.guests}/>
               </>
             )
           })}
              
            


          </div> 
        </div>
      </div>
        </div>
    )
}


export default Profile;
