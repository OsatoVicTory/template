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
import slider1 from "../assets/images/home_3/user-slider-1.png";
import brand6 from "../assets/images/brand/brand-6.svg";
import brand7 from "../assets/images/brand/brand-7.svg";
import brand8 from "../assets/images/brand/brand-8.svg";
import brand9 from "../assets/images/brand/brand-9.svg";
import brand10 from "../assets/images/brand/brand-10.svg";
import brand11 from "../assets/images/brand/brand-11.svg";
import user_shape from "../assets/images/home_3/user-shape-1.svg";

const User = () => {

    return (
        <section className="user-area-two pt-150">
        <div className="container">
          <div className="section-title-center">
            <h2 className="wow fadeInUp">Over 15,000+ companies across 89 countries use landpagy</h2>
          </div>
          <div className="row pt-20 pb-lg-70 pb-40">
            <div className="col-md-6">
              <div className="customer-feed wow fadeInRight">
                <p>
                  “After a comprehensive vetting process with a number of globally recognized vendors, Exponea stood out as the clear best choice for optimizing
                  our team’s performance.’’
                </p>
                <div className="customer-info">
                  <span className="name">Ariful Haque</span>
                  <span className="pos">UI Designer, Spider Themes</span>
                </div>
                <a href="#">See all customer stories <i className="arrow_right"></i></a>
              </div>
            </div>
            <div className="col-md-6 text-end mt-md-0 mt-4">
              <div className="customer-img wow fadeInLeft">
                <img src={slider1} alt="customer-img" />
                <img data-parallax='{ "rotateZ":90}' className="shape" src={user_shape} alt="shape" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="0.1s">
                <img src={brand6} alt="brand" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="0.3s">
                <img src={brand7} alt="brand" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="0.5s">
                <img src={brand8} alt="brand" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="0.7s">
                <img src={brand9} alt="brand" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="0.9s">
                <img src={brand10} alt="brand" />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="client-image wow fadeInRight" data-wow-delay="1.1s">
                <img src={brand11} alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default User;