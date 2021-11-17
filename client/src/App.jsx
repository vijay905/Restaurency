import React from "react";
import Navbar from './Components/Home/Navbar'
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Contact from "./Components/Contact/Contact";
import { Route, Switch, Routes} from "react-router"
import Team from "./Components/Chef/Team";


const App = ()=>{
    return(
        <>
        <Navbar/>

    <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/chef" element = {<Team />}/>
        
    </Routes>
        
        </>
    )
}

export default App;