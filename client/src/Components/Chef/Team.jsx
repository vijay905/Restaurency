import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Chef from './Chef'
import { Link } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const Team = () => {

    const [chefData,setChefData] = useState([]);

  useEffect(() => {
    Axios.get("https://restaurency-app-1meh.onrender.com/Chef/get").then((result)=>{
      setChefData(result.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);

    return (
        <>


<div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Chef</h2>
                    </div>
                    <div class="col-12">
                        <Link to = "/"><a href="#" >Home</a></Link>
                        <Link to = "/about"><a href="#" >Chef</a></Link>
                        
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

            {chefData.map((val)=>{
                return(
                    <Chef name = {val.name} desig = {val.designation}  img = {val.photo}/>
                )
            })}
                
          </div>
        </div>
      </div>

        </>
    )
}


export default Team;
