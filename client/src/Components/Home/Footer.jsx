import React from "react";


const Footer = ()=>{
    return(
        <>
         <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer-contact">
                    <h2>Our Address</h2>
                    <p><i className="fa fa-map-marker-alt" />Rajendra Nagar,Borivili, Mumbai</p>
                    <p><i className="fa fa-phone-alt" />+91 1234567890</p>
                    <p><i className="fa fa-envelope" />demo@gmail.com</p>
                    <div className="footer-social">
                      <a href><i className="fab fa-youtube" /></a>
                      <a href><i className="fab fa-youtube" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                      <a href><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-link">
                    <h2>Quick Links</h2>
                    <a href>Terms of use</a>
                    <a href>Privacy policy</a>
                    <a href>Cookies</a>
                    <a href>Help</a>
                    <a href>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer-newsletter">
                <h2>Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                </p>
                <div className="form">
                  <input className="form-control" placeholder="Email goes here" />
                  <button className="btn custom-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>Copyright © <a href="#"></a>www.restaurancy.com, All Right Reserved.</p>
            {/* <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p> */}
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer;