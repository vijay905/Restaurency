import React from "react";

const MenuItem = (props)=>{
    return(
        <>
            <div className="menu-item">
                        <div className="menu-img" style = {{width:"80px"}}>
                          <img src={props.img} alt="Image" style = {{height:"80px"}}/>
                        </div>
                        <div className="menu-text">
                          <h3><span>{props.dish}</span> <strong>Rs {props.price}</strong></h3>
                          <p>{props.desc}</p>
                        </div>
            </div>
        </>
    )
}

export default MenuItem;