import React from "react";
import Navbar from './Components/Home/Navbar'
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import { Route, Switch, Routes} from "react-router"
import Team from "./Components/Chef/Team";
import Menu from "./Components/Menu/Menu";
import SignUp from "./Components/login_registeration/SignUp";
import SignIn from "./Components/login_registeration/SignIn";
import Booking from "./Components/Home/Booking";
import Item from "./Components/Menu/Item";
import Footer from "./Components/Home/Footer";
import  Profile from "./Components/Profile/Profile";


const App = ()=>{
    return(
        <>
        <Navbar/>

    <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/chef" element = {<Team />}/>
        <Route path = "/booking" element = {<Booking />}/>
        {/* <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/signin" element = {<SignIn />}/> */}
        <Route path = "/profile" element = {<Profile />}/>
        <Route exact path = "/menu" element = {<Menu Item = {<Item type = "south"/>}/>}/>
        <Route path = "/menu/punjabi" element = {<Menu Item = {<Item type = "punjabi"/>}/>}></Route>
        <Route path = "/menu/chinise" element = {<Menu Item = {<Item type = "chinise"/>}/>}></Route>
    </Routes>
    <Footer></Footer>
        
        </>
    )
}

export default App;