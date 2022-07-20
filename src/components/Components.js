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
import comp1 from "../assets/images/home_3/component-1.svg";
import comp2 from "../assets/images/home_3/component-2.svg";
import comp3 from "../assets/images/home_3/component-3.svg";
import comp4 from "../assets/images/home_3/component-4.svg";
import comp5 from "../assets/images/home_3/component-5.svg";
import comp6 from "../assets/images/home_3/component-6.svg";

const Component = () => {

    return (
      <section className="components-area pt-105 pb-150">
        <div className="container">
          <div className="section-title-center">
            <h2 className="wow fadeInUp">Endless components</h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.
            </p>
          </div>
          <div className="row gy-4 pt-20">
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="0.1s">
                <div className="icon">
                  <img src={comp1} alt="component" />
                </div>
                <h4>Manage leads</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="0.3s">
                <div className="icon">
                  <img src={comp2} alt="component" />
                </div>
                <h4>Daily Reports</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon">
                  <img src={comp3} alt="component" />
                </div>
                <h4>Track chat</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="0.7s">
                <div className="icon">
                  <img src={comp4} alt="component" />
                </div>
                <h4>Optimized platforms</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="0.9s">
                <div className="icon">
                  <img src={comp5} alt="component" />
                </div>
                <h4>Data analysis</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-component-widget wow fadeInUp" data-wow-delay="1.1s">
                <div className="icon">
                  <img src={comp6} alt="component" />
                </div>
                <h4>Mobile apps</h4>
                <p>Access Landpagy from your mobile device and integrate with your favorite sales-boosting apps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Component;