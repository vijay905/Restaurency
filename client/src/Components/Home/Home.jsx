import React from "react";
import Carosouel from "./Carosouel";
import Booking from "./Booking";
import Blog from "./Blog/Blog";
import Footer from "./Footer";

const Home = ()=>{
    return(
        <>
        <Carosouel></Carosouel>
        {/* <Booking></Booking> */}
        <Blog></Blog>
        {/* <Footer></Footer> */}
        </>
    )
}

export default Home;