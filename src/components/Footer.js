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

const Footer = () => {

    return (
        <>
            <section className="cta-area-four pt-105 pb-105 wow fadeInUp animate__fast">
                <div className="bg-shape">
                <div className="shape" data-parallax='{"x": 0, "y": 40, "rotateY": 0}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateX": 0}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateZ": 200}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateZ": 100}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateY": 200}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": -40, "rotateY":0}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateZ": 100}'></div>
                <div className="shape" data-parallax='{"x": 0, "y": 0, "rotateY": 0}'></div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                    <div className="section-title-center">
                        <h2 className="mt-n3 mt-md-n4">Get free for 14 Days</h2>
                        <p>Aenean amet netus aliquam elit eu, sagittis id natoque id. Purus augue fermentum dui aliquam dui vel.</p>
                    </div>
                    <form className="form-group mx-auto mt-0">
                        <input type="email" placeholder="Enter your email to book demo" />
                        <button type="submit" className="btn btn-red">Book A Demo</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            {/* </main> */}

            {/* // Footer */}
            <footer className="footer-payment bg-burst">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 wow fadeInLeft">
                    <div className="footer-content flex-column justify-content-start align-items-start">
                        <img src="assets/images/logo-5.svg" alt="Footer Logo" />
                        <p className="mt-3">Start working with Landpagy that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        <select className="nice-select-common">
                        <option data-font-icon="<i className='icon_globe-2 '></i>" value="english">English</option>
                        <option data-font-icon="<i className='icon_globe-2 '></i>" value="english">English</option>
                        <option data-font-icon="<i className='icon_globe-2 '></i>" value="english">English</option>
                        <option data-font-icon="<i className='icon_globe-2 '></i>" value="english">English</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-lg-8">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 wow fadeInUp col-md-4" data-wow-delay="0.1s">
                        <div className="footer-menu">
                            <h4>Features</h4>
                            <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Develop</a></li>
                            <li><a href="#">Design</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp col-md-3" data-wow-delay="0.3s">
                        <div className="footer-menu">
                            <h4>Support</h4>
                            <ul>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Develop</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Social media</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-sm-6 wow fadeInUp col-md-5" data-wow-delay="0.5s">
                        <div className="footer-menu ps-md-4">
                            <h4>Newsletter</h4>
                            <p>Sign up and receive the latest tips via email.</p>
                            <div className="newsletter-box mt-25">
                            <h6>Write you email*</h6>
                            <form action="#">
                                <div className="form-group">
                                <i className="icon_mail_alt"></i>
                                <input type="text" className="form-control" placeholder="Your email" />
                                </div>
                                <button type="submit" className="btn">Subscribe</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                    <ul>
                        <li>
                        <span className="copyright px-0">Copyright 2021, All Rights Reserved</span>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <div className="footer-bottom-menu">
                        <ul className="justify-content-lg-center">
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Legal Notice</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 text-center text-lg-end mt-2 mt-lg-0">
                    <ul className="social-link-bg-2 justify-content-lg-end justify-content-center flex-row">
                        <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <span className="footer-shape"></span>
            </footer>
        </>
    )
}

export default Footer;