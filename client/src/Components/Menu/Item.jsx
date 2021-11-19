import React, { useEffect,useState } from "react";
import Axios from 'axios'
import MenuItem from "./MenuItem";

const Item = (props)=>{

  const [menuData,setMenuData] = useState([]);
  const [img,setImg] = useState(["a"]);
    
    useEffect(()=>{
        Axios.get("http://localhost:7000/Menu/get").then((result)=>{
            setMenuData(result.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <>
         <div className="tab-content">
              <div id="burgers" className="container tab-pane active">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="menu-item">
                      <div className="menu-img">
                        <img src="img/menu-burger.jpg" alt="Image" />
                      </div>

                      {img.map((val)=>{
  if(props.type === "south"){
                          
                            return(
                              <>
                              <div className="menu-text">
                        <h3><span>Kadala Curry</span> <strong>Rs 75</strong></h3>
                        <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                      </div>
                              </>
                            )
                        }
    else if(props.type === "punjabi"){
      return(
                              <>
                              <div className="menu-text">
                        <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
                        <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                      </div>
                       </>
                            )
    }
    else if(props.type === "chinise"){
      return(
                              <>
                              <div className="menu-text">
                        <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
                        <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                      </div>
                              </>
                            )
    }
})}
                    </div>
                    <menu>

                    {
                      menuData.map((val)=>{
                        if(props.type === "south" && val.type == "South Indian"){
                          {/* setImg("https://media.istockphoto.com/photos/group-of-south-indian-food-like-masala-dosa-uttapam-idliidly-wadavada-picture-id1024558340?k=20&m=1024558340&s=612x612&w=0&h=30XScxXJ-EPLeNh9orcsKa4En-WZnWdsh9hrFpHVaXQ="); */}
                            return(

                              <>
                                <MenuItem dish = {val.dish} desc = {val.desc} price = {val.price} img = {val.img}/>
                               
                              </>
                            )
                        }

                        else if(props.type === "punjabi" && val.type == "Punjabi"){
                          return(
                              <>
                              <MenuItem dish = {val.dish} desc = {val.desc} price = {val.price} img = {val.img}/>

                              </>
                            )
                        }
                        else if(props.type === "chinise" && val.type == "Chinese"){
                          return(
                              <>
                              <MenuItem dish = {val.dish} desc = {val.desc} price = {val.price} img = {val.img}/>

                              </>
                            )
                        }
                      })
                    }

                      
                    </menu></div>
                  
                  
{img.map((val)=>{
  if(props.type === "south"){
                          
                            return(
                              <>
                              <div className="col-lg-5 d-none d-lg-block">
                    <img src="https://media.istockphoto.com/photos/group-of-south-indian-food-like-masala-dosa-uttapam-idliidly-wadavada-picture-id1024558340?k=20&m=1024558340&s=612x612&w=0&h=30XScxXJ-EPLeNh9orcsKa4En-WZnWdsh9hrFpHVaXQ=" alt="Image" />
                  </div>
                              </>
                            )
                        }
    else if(props.type === "punjabi"){
      return(
                              <>
                              <div className="col-lg-5 d-none d-lg-block">
                    <img src="https://media.istockphoto.com/photos/assorted-indian-food-for-lunch-or-dinner-rice-chicken-paneer-naan-picture-id1271562212?k=20&m=1271562212&s=612x612&w=0&h=8vmGRhrJ3AQfPRPuJc-_c-HxXK2lf3otCFKd1hTUVuE=" alt="Image" />
                  </div>
                              </>
                            )
    }
    else if(props.type === "chinise"){
      return(
                              <>
                              <div className="col-lg-5 d-none d-lg-block">
                    <img src="https://media.istockphoto.com/photos/chef-in-restaurant-kitchen-at-stove-with-high-burning-flames-picture-id913931820?k=20&m=913931820&s=612x612&w=0&h=aXMBgIOeKjohiSWwIUm1Fcnydu1f204dxfvT1A5z5E8=" alt="Image" />
                  </div>
                              </>
                            )
    }
})}
                </div>
              </div>
              </div>
        </>
    )
}

export default Item;