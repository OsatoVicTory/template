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
import integrate1 from "../assets/images/home_3/app-integrate-1.png";
import integrate2 from "../assets/images/home_3/app-integrate-2.png";
import integrate4 from "../assets/images/home_3/app-integrate-4.png";
import integrate5 from "../assets/images/home_3/app-integrate-5.png";
import integrate6 from "../assets/images/home_3/app-integrate-6.png";
import integrate7 from "../assets/images/home_3/app-integrate-7.png";
import integrate8 from "../assets/images/home_3/app-integrate-8.png";
import integrate9 from "../assets/images/home_3/app-integrate-9.png";
import integrate3 from "../assets/images/home_3/app-integrate-3.png";
import test_shape from "../assets/images/home_3/testimonial-shape.svg";
import test1 from "../assets/images/home_3/testimonial-1.png";
import test2 from "../assets/images/home_3/testimonial-2.jpg";
import test3 from "../assets/images/home_3/testimonial-3.jpg"

const AppIntegration = () => {

    return (
        <>
            <section className="app-itegretion-area">
                <div className="container">
                <div className="row align-items-center gy-lg-0 gy-4">
                    <div className="col-lg-6 order-2 order-lg-1">
                    <h2>Easily integrate with your favorite apps</h2>
                    <p>
                        Nullam lacinia suscipit metus, metus ut dictum tincidunt condimentum et. Proin diam sed consectetur interdum. Donec lobortis turpis ut quam
                        congue magna
                    </p>
                    <ul className="supported">
                        <li><i className="icon_check"></i> Semper vel egestas</li>
                        <li><i className="icon_check"></i> Orci lacus velit augue</li>
                    </ul>
                    <a href="#" className="btn">Start your free trial</a>
                    </div>
                    <div className="col-lg-5 offset-xl-1 order-1 order-lg-2">
                    <div className="integreted-app mx-auto">
                        <div className="app">
                        <img src={integrate1} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate2} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate3} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate4} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate5} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate6} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate7} alt="app" />
                        </div>
                        <div className="app">
                        <img src={integrate8} alt="app" />
                        </div>
                        <div className="main app">
                        <img src={integrate9} alt="app" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            {/* pricing-area */}
            <section className="pricing-area-two pt-135 pb-150">
                <div className="container">
                <div className="section-title-center">
                    <h2 className="wow fadeInUp">Choose Your Plan</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">Choose the right plan for your organization to establish and manage your program</p>
                </div>
                <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
                    <ul className="nav nav-tabs pricing-tabs-two" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        >
                        Monthly
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        >
                        Quaterly
                        </button>
                    </li>
                    </ul>
                </div>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row align-items-end gy-4 gy-lg-0">
                        <div className="col-lg-4 col-md-6 order-lg-1 pe-28">
                        <div className="pricing-item-3 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Free</h5>
                            <div className="price-body">
                            <div className="price">$0<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li>
                                <span><i className="icon_close"></i></span>See dashboard analytics
                                </li>
                                <li>
                                <span><i className="icon_close"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-2 order-3 px-sm-0 px-3 mx-auto">
                        <div className="pricing-item-3 wow fadeInUp middle" data-wow-delay="0.3s">
                            <h5>Business</h5>
                            <div className="price-body">
                            <div className="price">$15<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>See dashboard analytics
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-3 order-2 ps-28">
                        <div className="pricing-item-3 wow fadeInUp" data-wow-delay="0.5s">
                            <h5>Entreprise</h5>
                            <div className="price-body">
                            <div className="price">$30<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>See dashboard analytics
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row align-items-end gy-4 gy-lg-0">
                        <div className="col-lg-4 col-md-6 order-lg-1 pe-28">
                        <div className="pricing-item-3">
                            <h5>Free</h5>
                            <div className="price-body">
                            <div className="price">$0<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li>
                                <span><i className="icon_close"></i></span>See dashboard analytics
                                </li>
                                <li>
                                <span><i className="icon_close"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-2 order-3 px-0 mx-auto">
                        <div className="pricing-item-3 middle">
                            <h5>Business</h5>
                            <div className="price-body">
                            <div className="price">$15<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>See dashboard analytics
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 order-lg-3 order-2 ps-28">
                        <div className="pricing-item-3">
                            <h5>Entreprise</h5>
                            <div className="price-body">
                            <div className="price">$30<span>/</span><span>m</span></div>
                            <ul>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Choose 20 language
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>See dashboard analytics
                                </li>
                                <li className="checked">
                                <span><i className="icon_check"></i></span>Unlimitied Chat
                                </li>
                            </ul>
                            <a href="" className="btn">Buy Plan</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
            {/* testimonial-area-six */}
            <section className="testimonial-area-six pt-140 pb-150">
                <div className="container position-relative">
                <div className="shape">
                    <img data-parallax='{ "rotateZ":90}' src={test_shape} alt="" />
                </div>
                <div className="section-title-center wow fadeInUp">
                    <h2>
                    Why 15,000+ businesses choose <br />
                    Landpagy to grow
                    </h2>
                </div>
                <div className="testimonial-slider-six position-relative wow fadeInUp">
                    <div className="single-slide">
                    <div className="row align-items-center">
                        <div className="col-sm-8 col-lg-5">
                        <div className="author-img">
                            <img className="main-img" src={test1} alt="man" />
                        </div>
                        </div>
                        <div className="col-lg-7 pl-lg-35">
                        <p>‘’I really like using landpagy, solution to all problems about coustomer data analysis. So, I don’t need to think about it anymore.’’</p>
                        <div className="author-info">
                            <span className="name">Ariful Haque</span>
                            <span className="pos">UI Designer, Spider Themes</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-slide">
                    <div className="row align-items-center">
                        <div className="col-sm-8 col-lg-5">
                        <div className="author-img">
                            <img className="main-img" src={test2} alt="man" />
                        </div>
                        </div>
                        <div className="col-lg-7 pl-lg-35">
                        <p>‘’I really like using landpagy, solution to all problems about coustomer data analysis. So, I don’t need to think about it anymore.’’</p>
                        <div className="author-info">
                            <span className="name">Kianna Curtis</span>
                            <span className="pos">UI Designer, Spider Themes</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="single-slide">
                    <div className="row align-items-center">
                        <div className="col-sm-8 col-lg-5">
                        <div className="author-img">
                            <img className="main-img" src={test3} alt="man" />
                        </div>
                        </div>
                        <div className="col-lg-7 pl-lg-35">
                        <p>‘’I really like using landpagy, solution to all problems about coustomer data analysis. So, I don’t need to think about it anymore.’’</p>
                        <div className="author-info">
                            <span className="name">Eh Jewel</span>
                            <span className="pos">CEO, Spider Themes</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        </>
    )
}

export default AppIntegration;