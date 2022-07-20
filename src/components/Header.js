import React from "react";
// import "../assets/css/style.css";
require("../assets/scss/style.scss");
import "../assets/css/style.css";
import "../assets/css/style.css.map";
import "../assets/css/responsive.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/elegant-icons.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/slick.css"
import "../assets/css/slick-theme.css" ;
import "../assets/css/nice-select.css";
import "../assets/css/jquery.fancybox.min.css"
import $ from "jquery";

import logo from "../assets/images/logo-4.svg";
import proto from "../assets/images/home_9/desktop3.png";
import pos from "../assets/images/home_9/desktop3.png";
import hrm from "../assets/images/home_9/desktop3.png";
import project from "../assets/images/home_9/desktop3.png";
import software from "../assets/images/home_9/desktop3.png";
import software2 from "../assets/images/home_9/desktop3.png";
import payment from "../assets/images/home_9/desktop3.png";
import billing from "../assets/images/home_9/desktop3.png";
import cloud from "../assets/images/home_9/desktop3.png";
import app from "../assets/images/home_9/desktop3.png";
import help from "../assets/images/home_9/desktop3.png";

const Header = () => {

    return (
      <header className="header-area">
        <nav className="navbar navbar-expand-lg menu_two sticky-nav">
            <div className="container-fluid">
            <a className="navbar-brand header_logo" href="index.html">
                <img className="main_logo" src={logo} alt="logo" />
            </a>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="menu_toggle">
                <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                </span>
                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul className="navbar-nav menu mx-auto">
                <li className="nav-item dropdown submenu mega-home active">
                    <a href="index.html" className="nav-link dropdown-toggle active">Home</a>
                    <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a href="index.html" className="nav-link">
                        <img src={project} alt="Demo" />
                        <span>Project Management</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-software.html" className="nav-link">
                        <img src={software} alt="Demo" />
                        <span>Software Company</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-software2.html" className="nav-link">
                        <img src={software2} alt="Demo" />
                        <span>Software Demo Landing</span>
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a href="index-payment.html" className="nav-link">
                        <img src={payment} alt="Demo" />
                        <span>Payment Processing</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-billing.html" className="nav-link">
                        <img src={billing} alt="Demo" />
                        <span>Account Billing Software</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-cloud.html" className="nav-link">
                        <img src={cloud} alt="Demo" />
                        <span>Cloud Saas</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-app.html" className="nav-link">
                        <img src={app} alt="Demo" />
                        <span>Mobile App Landing</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-hrm.html" className="nav-link">
                        <img src={hrm} alt="Demo" />
                        <span>HRM Software</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-pos.html" className="nav-link">
                        <img src={pos} alt="Demo" />
                        <span>POS Software</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="index-proto.html" className="nav-link">
                        <img src={proto} alt="Demo" />
                        <span>Prototype</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="help-center.html" className="nav-link">
                        <img src={help} alt="Demo" />
                        <span>Help Center</span>
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item dropdown submenu active">
                    <a href="#" className="nav-link dropdown-toggle">Pages</a>
                    <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a href="product.html" className="nav-link">Product</a>
                    </li>
                    <li className="nav-item">
                        <a href="services.html" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="404.html" className="nav-link">404</a>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <a href="about.html" className="nav-link">About</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item">
                            <a href="about.html" className="nav-link">About One</a>
                        </li>
                        <li className="nav-item">
                            <a href="about-2.html" className="nav-link">About Two</a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <a href="contact.html" className="nav-link">Contact</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">Contact One</a>
                        </li>
                        <li className="nav-item">
                            <a href="contact-2.html" className="nav-link">Contact Two</a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <a href="comming-soon.html" className="nav-link">Comming Soon</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item">
                            <a href="comming-soon.html" className="nav-link">Comming Soon One</a>
                        </li>
                        <li className="nav-item">
                            <a href="comming-soon-2.html" className="nav-link">Comming Soon Two</a>
                        </li>
                        <li className="nav-item">
                            <a href="comming-soon-3.html" className="nav-link">Comming Soon Three</a>
                        </li>
                        <li className="nav-item">
                            <a href="comming-soon-4.html" className="nav-link">Comming Soon Four</a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>

                <li className="nav-item dropdown submenu mega-menu active">
                    <a href="#" className="nav-link dropdown-toggle">Elements</a>
                    <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu container">
                    <li className="nav-item">
                        <a className="nav-link">Elements 01</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item"><a href="accordion.html" className="nav-link">Accordions</a></li>
                        <li className="nav-item"><a href="team.html" className="nav-link">Team</a></li>
                        <li className="nav-item"><a href="integration.html" className="nav-link">Integration</a></li>
                        <li className="nav-item"><a href="client.html" className="nav-link">Clients</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Elements 02</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item"><a href="testimonial.html" className="nav-link">Testimonials</a></li>
                        <li className="nav-item"><a href="video.html" className="nav-link">Video</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact Form</a></li>
                        <li className="nav-item"><a href="process.html" className="nav-link">Process</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Elements 03</a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing Table</a></li>
                        <li className="nav-item"><a href="pricing-2.html" className="nav-link">Pricing Table 2</a></li>
                        <li className="nav-item"><a href="subscribe.html" className="nav-link">subscribe</a></li>
                        <li className="nav-item"><a href="tab.html" className="nav-link">tab</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> Elements 04 </a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item"><a href="stories.html" className="nav-link">Timeline Stories</a></li>
                        <li className="nav-item"><a href="get-app.html" className="nav-link">Get App</a></li>
                        <li className="nav-item"><a href="google-map.html" className="nav-link">Google Map</a></li>
                        <li className="nav-item"><a href="comming-soon-4.html" className="nav-link">Countdown Timer</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"> Elements 05 </a>
                        <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                        <ul className="dropdown-menu">
                        <li className="nav-item"><a href="fun-fact.html" className="nav-link">Fun Fact</a></li>
                        <li className="nav-item"><a href="faq.html" className="nav-link">FAQ's</a></li>
                        <li className="nav-item"><a href="features.html" className="nav-link">Features</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>

                <li className="nav-item dropdown submenu active">
                    <a href="career.html" className="nav-link dropdown-toggle">Jobs</a>
                    <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a href="career.html" className="nav-link">Career</a>
                    </li>
                    <li className="nav-item">
                        <a href="job-post.html" className="nav-link">Jobs</a>
                    </li>
                    <li className="nav-item">
                        <a href="job-application.html" className="nav-link">Job Application</a>
                    </li>
                    </ul>
                </li>
                <li className="nav-item dropdown submenu active">
                    <a href="blog.html" className="nav-link dropdown-toggle">Blog</a>
                    <i className="arrow_carrot-right mobile_dropdown_icon" aria-hidden="false" data-bs-toggle="dropdown"></i>
                    <ul className="dropdown-menu">
                    <li className="nav-item">
                        <a href="blog.html" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="blog-single.html" className="nav-link">Blog Single</a>
                    </li>
                    <li className="nav-item">
                        <a href="blog-grid.html" className="nav-link">Extended Grid</a>
                    </li>
                    </ul>
                </li>
                </ul>
                <div className="right-nav">
                <a href="#" className="language-bar"><span className="active">En.</span> <span>Ru</span></a>
                <a href="#">Login</a>
                <a className="btn" href="signup.html">Sign Up</a>
                </div>
            </div>
            </div>
        </nav>
      </header>
    )
}

export default Header;