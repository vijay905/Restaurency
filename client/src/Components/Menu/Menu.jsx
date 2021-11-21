import React from 'react'
import {Link} from 'react-router-dom'
import Tab from './Tab';
import Item from './Item'
import {Routes,Route} from 'react-router'




const Menu = (props) => {
  return (
    <div>


<div class="page-header mb-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>Menu</h2>
                    </div>
                    <div class="col-12">
                    <Link to = "/" > <a href="#" >Home</a></Link>
                        <a href="">Menu</a>
                    </div>
                </div>
            </div>
        </div>




        <div className="menu">
        <div className="container">
          <div className="section-header text-center">
            <p>Food Menu</p>
            <h2>Delicious Food Menu</h2>
          </div>
          <div className="menu-tab">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <Link to = "/menu" style = {{textDecoration:"none"}}><a className="nav-link " data-toggle="pill" href="#burgers">South Indian</a></Link>
              </li>
              <li className="nav-item">
              <Link to = "/menu/punjabi" style = {{textDecoration:"none"}}><a className="nav-link" data-toggle="pill" href="#snacks">Punjabi</a></Link>
              </li>
              <li className="nav-item">
              <Link to = "/menu/chinise" style = {{textDecoration:"none"}}><a className="nav-link" data-toggle="pill" href="#beverages">Chinise</a></Link>
              </li>
            </ul>

            {props.Item}
            

            

              



</div>
</div>
</div>


    </div>
  )
}


export default Menu;
