import React from "react";
import Navbar from './Components/Home/Navbar'
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import { Route, Switch, Routes} from "react-router"
import Team from "./Components/Chef/Team";
import Menu from "./Components/Menu/Menu";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Booking from "./Components/Home/Booking";

import Footer from "./Components/Home/Footer";


const App = ()=>{
    return(
        <>
        <Navbar/>

    <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/chef" element = {<Team />}/>
        <Route path = "/menu" element = {<Menu />}/>
        <Route path = "/booking" element = {<Booking />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/signin" element = {<SignIn />}/>
        
    </Routes>
    <Footer></Footer>
        
        </>
    )
}

export default App;