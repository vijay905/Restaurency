import React from 'react'
import './Popup.css'
import CloseIcon from "@material-ui/icons/Close";


const Popup = (props)=>{



    return(props.trigger) ? (

            <div className="popup">
                <div className="popup-inner">
                    <div style = {{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className = "title" ><h1><b>{props.text}</b></h1></div>
                    </div>
                   
                    <button className="close-btn" onClick = {(event)=>{
                     props.setTrigger(false);
                    }}><CloseIcon fontSize = "large"/></button>
                    {props.children}
                </div>
            </div>
        
    ) : "";
}

export default Popup;

