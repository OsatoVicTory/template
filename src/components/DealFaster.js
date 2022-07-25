import React, { useState } from "react";
// import "../assets/css/style.css";
import "../assets/scss/style.scss";
import "../assets/css/fontawesome.min.css";
import "../assets/css/elegant-icons.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css"
import "../assets/css/slick-theme.css" ;
import "../assets/css/nice-select.css";
import "../assets/css/jquery.fancybox.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
// import tab4 from "../assets/images/home_3/fast-deal-4.png";
// import tab5 from "../assets/images/home_3/fast-deal-5.png";
import deal1 from "../assets/images/home_3/fast-deal-1.svg";
import deal2 from "../assets/images/home_3/fast-deal-2.svg";
import deal3 from "../assets/images/home_3/fast-deal-3.svg";
// import deal4 from "../assets/images/home_3/fast-deal-4.svg";
// import deal5 from "../assets/images/home_3/fast-deal-5.svg";
import dl4 from "../assets/images/home_3/fast-deal-4.png";
import dl5 from "../assets/images/home_3/fast-deal-5.png";
import dl6 from "../assets/images/home_3/fast-deal-6.png";
import dl7 from "../assets/images/home_3/fast-deal-7.png";
import { useEffect } from "react";

const DealFaster = () => {

    const [tab, setTab] = useState(0);
    const [pictoggle, setPictoggle] = useState(0);

    useEffect(() => {
      setInterval(() => {
        setTab(val => (val+1)%3);
        setPictoggle(val => (val+1)%3)
      }, 5000);
    }, [])
    

    

    return (
        <section className="deal-fast-area pt-140 pb-140">
        <div className="container">
          <div className="section-title-center">
            <h2 className="wow fadeInUp">Make more deals faster</h2>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.
            </p>
          </div>
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-5">
              <div className="info-card me-lg-5 nav-tabs nav automated-tab" role="tablist">
                <a className={tab==0?"nav-link active":"nav-link"} aria-selected={tab==0?"true":"false"} role="tab" data-bs-toggle="tab" data-bs-target="#payment-track-one" data-wow-delay="0.1s">
                  <div className="icon">
                    <img src={deal1} alt="icon" />
                  </div>
                  <div className="info-txt">
                    <h6>Track key events</h6>
                    <p>Set up key event to track onboarding are maintains here</p>
                  </div>
                  <div className="progress-bar"></div>
                </a>
                <a className={tab==1?"nav-link active":"nav-link"} aria-selected={tab==0?"true":"false"} role="tab" data-bs-toggle="tab" data-bs-target="#payment-track-two" data-wow-delay="0.3s">
                  <div className="icon">
                    <img src={deal2} alt="icon" />
                  </div>
                  <div className="info-txt">
                    <h6>Track key events</h6>
                    <p>Set up key event to track onboarding are maintains here</p>
                  </div>
                  <div className="progress-bar"></div>
                </a>
                <a aria-selected={tab==2?"true":"false"} role="tab" data-bs-toggle="tab" data-bs-target="#payment-track-three" className={tab==2?"nav-link active":"nav-link"} data-wow-delay="0.5s">
                  <div className="icon">
                    <img src={deal3} alt="icon" />
                  </div>
                  <div className="info-txt">
                    <h6>Track key events</h6>
                    <p>Set up key event to track onboarding are maintains here</p>
                  </div>
                  <div className="progress-bar"></div>
                </a>
              </div>
            </div>
            <div className="col-lg-7 ps-lg-0">
              <div className="tab-content">
                {/* <div className="tab-pane fade active show" id="payment-track-one" role="tabpanel">
                  <div className="main-img" data-wow-delay="0.1s">
                    <img src={(tab==0 || tab==2) ? dl4 : dl6} alt="" />
                    <img src={(tab==0 || tab==2) ? dl5 : dl7} alt="" />
                  </div>
                </div> */}
                <div className={pictoggle==0?"tab-pane fade active show":"tab-pane fade"} id="payment-track-one" role="tabpanel">
                  <div className="main-img" data-wow-delay="0.1s">
                    <img src={dl4} alt="" />
                    <img src={dl5} alt="" />
                  </div>
                </div>
                <div className={pictoggle==1?"tab-pane fade active show":"tab-pane fade"} id="payment-track-two" role="tabpanel">
                  <div className="main-img" data-wow-delay="0.1s">
                    <img src={dl6} alt="" />
                    <img src={dl7} alt="" />
                  </div>
                </div>
                <div className={pictoggle==2?"tab-pane fade active show":"tab-pane fade"} id="payment-track-three" role="tabpanel">
                  <div className="main-img" data-wow-delay="0.1s">
                    <img src={dl4} alt="" />
                    <img src={dl5} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default DealFaster;