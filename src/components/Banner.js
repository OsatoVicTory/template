import React from "react";
// import "../../assets/css/style.css";
// import "../../assets/scss/style.scss";
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
import bird from "../assets/images/home_3/bird.png";
import banner1 from "../assets/images/home_3/banner-bg-shape-1.png";
import banner2 from "../assets/images/home_3/banner-bg-shape-2.png";
import leaf from "../assets/images/home_3/leaf.svg";
import tree_field from "../assets/images/home_3/tree-field.png";
import tree1 from "../assets/images/home_3/tree-1.png";
import tree2 from "../assets/images/home_3/tree-2.png";
import tree_dollar from "../assets/images/home_3/tree-dollar.png";
import tree3 from "../assets/images/home_3/tree-3.png";
import tree4 from "../assets/images/home_3/tree-4.png";
import tree_water from "../assets/images/home_3/tree-water.png";
import cloud1 from "../assets/images/home_3/cloud-1.png";
import cloud2 from "../assets/images/home_3/cloud-2.png";
import cloud3 from "../assets/images/home_3/cloud-3.png";

const Banner = () => {

    return (
      <section className="banner-area-3" id="banner_animation">
        <div className="banner-shape">
          <div className="shape">
            <img className="wow slideInRight" data-wow-delay="0.4s" src={tree_water} alt="" />
          </div>
          <div
            data-paroller-factor="0.1"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            data-paroller-transition="transform .2s linear"
            className="shape object-element"
          >
            <img data-depth="0.9" className="wow slideInRight layer" data-wow-delay="0.1s" src={cloud1} alt="" />
          </div>
          <div
            data-paroller-factor="0.2"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            data-paroller-transition="transform .2s linear"
            className="shape object-element"
          >
            <img data-depth="0.5" className="wow slideInRight layer" data-wow-delay="0.25s" src={cloud2} alt="" />
          </div>
          <div
            data-paroller-factor="-0.15"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            data-paroller-transition="transform .2s linear"
            className="shape object-element"
          >
            <img data-depth="0.7" className="wow slideInRight layer" data-wow-delay="0.4s" src={cloud3} alt="" />
          </div>
          <div data-parallax='{"x":200, "y": -100, "rotateY":0}' className="shape">
            <img src={bird} alt="" />
          </div>
          <div className="shape">
            <img src={banner1} alt="" />
          </div>
          <div className="shape">
            <img src={banner2} alt="" />
          </div>
          <div className="shape">
            <img src={leaf} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-7 col-lg-8">
              <div className="banner-left">
                <h1>Grow your business with landpagy</h1>
                <p className="banner-para">
                  We provide all the best features so you can stop focusing on your project management and get back to your life’s work.
                </p>
                <form className="form-group">
                  <input type="email" placeholder="Enter your email to book demo" />
                  <button type="submit" className="btn btn-red">Book A Demo</button>
                </form>
                <span className="sub-content">Free 14 days trial. <strong>No credit</strong> card required</span>
              </div>
            </div>
            <div className="col-xl-5 text-center text-xl-start">
              <div className="banner-right">
                <img className="tree-field" src={tree_field} alt="tree" />
                <div className="tree">
                  <img className="wow zoomIn" src={tree1} alt="tree" />

                  <div className="tree-top wow zoomIn" data-wow-delay="0.55s">
                    <img src={tree2} alt="tree" />

                    <div className="dollar wow zoomIn" data-wow-delay="0.55s">
                      <img className="wow flip" data-wow-delay="1.5s" src={tree_dollar} alt="tree" />
                    </div>
                  </div>
                </div>
                <div className="tree">
                  <img className="wow zoomIn" data-wow-delay="0.3s" src={tree3} alt="tree" />
                </div>
                <div className="tree">
                  <img className="wow zoomIn" data-wow-delay="0.5s" src={tree4} alt="tree" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner;