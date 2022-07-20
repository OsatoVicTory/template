import React from "react";
// import "../../assets/css/style.css";
// import "../../assets/scss/style.scss";

require("../../assets/scss/style.scss");
import "../../assets/css/style.css";
import "../../assets/css/style.css.map";
import "../../assets/css/fontawesome.min.css";
import "../../assets/css/elegant-icons.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/slick.css"
import "../../assets/css/slick-theme.css" ;
import "../../assets/css/nice-select.css";
import "../../assets/css/jquery.fancybox.min.css";
import "../../assets/css/responsive.css";
import $ from "jquery";

// import "../../assets/js/plugin/jquery-3.5.0.min.js"
// import "../../assets/js/plugin/popper.min.js"
// import "../../assets/js/plugin/bootstrap.min.js"
// import "../../assets/js/plugin/ScrollMagic.js"
// import "../../assets/js/plugin/debug.addIndicators.min.js"
// import "../../assets/js/plugin/squareCountDownClock.js"
// import "../../assets/js/plugin/wow.min.js"
// import "../../assets/js/plugin/jquery.nice-select.min.js"
// import "../../assets/js/plugin/slick.min.js"
// import "../../assets/js/plugin/parallax.js"
// import "../../assets/js/plugin/jquery.parallax-scroll.js"
// import "../../assets/js/plugin/jquery.paroller.js"
import "../../assets/js/script.js";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import User from "../../components/User";
import Component from "../../components/Components";
import DealFaster from "../../components/DealFaster";
import MobileApp from "../../components/MobileApp";
import AppIntegration from "../../components/Integration";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import ScrollMagic from "../../assets/js/plugin/ScrollMagic";

const Home = () => {

    window.addEventListener('scroll', function () {
        const stickyNav = document.querySelector('.sticky-nav');
        stickyNav.classList.toggle('navbar_fixed', window.scrollY > 0);
    });
    
    if ($('#scroll-container').length) {
        // init controller
        var controller = new ScrollMagic.Controller();

        // define movement of panels
        var wipeAnimation = new TimelineMax().to('#scroll-container', 1, {
            x: '-55%',
        });

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: '#fixedWrapper',
            triggerHook: 'onLeave',
            duration: '350%',
        })
            .setPin('#fixedWrapper')
            .setTween(wipeAnimation)
            .addIndicators()
            .addTo(controller);

        var horizontal = new ScrollMagic.Scene({
            offset: 50,
            duration: 300,
            // reverse: false
        })

        // .addIndicators()
        .addTo(controller);
    }


    return (
        <>
            <Header />
            <Banner />
            <User />
            <Component />
            <DealFaster />
            <MobileApp />
            <AppIntegration />
            <Faq />
            <Footer />
        </>
    )
}

export default Home;