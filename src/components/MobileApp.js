import React from "react";
// import "../assets/css/style.css";
// import "../assets/scss/style.scss";
import "../assets/css/fontawesome.min.css";
import "../assets/css/elegant-icons.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css"
import "../assets/css/slick-theme.css" ;
import "../assets/css/nice-select.css";
import "../assets/css/jquery.fancybox.min.css"
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import all_app1 from "../assets/images/home_3/all-in-app.png";

const MobileApp = () => {

    return (
        <section className="mobile-app-area">
        <div className="container">
          <div className="row align-items-center gy-4 gy-lg-0">
            <div className="col-md-6 mx-auto wow fadeInLeft">
              <img src={all_app1} alt="" />
            </div>
            <div className="col-lg-6 ps-lg-5 wow fadeInRight">
              <h2>All-in-one mobile app</h2>
              <p className="content">
                No more juggling between various apps. Increase your produc -tivity and boost your client relationship by managing your Customers, Finances, and
                Support right from your pocket.
              </p>
              <a href="#" className="app-store-link wow fadeInRight" style={{textDecoration:"none"}} data-wow-delay="0.4s">
                <i className="fab fa-apple"></i>
                <p><span>Available on the</span>Apple Store</p>
              </a>
              <a href="#" className="app-store-link ml-25 wow fadeInLeft" style={{textDecoration:"none"}} data-wow-delay="0.4s">
                <i className="fab fa-google-play"></i>
                <p><span>Android App On</span>Google Play</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default MobileApp;