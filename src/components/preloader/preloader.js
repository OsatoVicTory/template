import React from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import "../../assets/css/style.css";
import "../../assets/scss/style.scss";

const Preloader = () => {

    var cites = [];
    cites[0] = 'We design Landpagy for the readers, optimizing not for page views or engagement';
    cites[1] = 'Landpagy turns out that context is a key part of learning.';
    cites[2] = 'You can create any type of product documentation with Landpagy';
    cites[3] = 'Advanced visual search system powered by Ajax';
    var cite = cites[Math.floor(Math.random() * cites.length)];
    $('#preloader p').text(cite);
    $('#preloader').addClass('loading');

    $(window).on('load', function () {
        setTimeout(function () {
        $('#preloader').fadeOut(500, function () {
            $('#preloader').removeClass('loading');
        });
        }, 500);
    });
    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="round_spinner">
                <div className="spinner"></div>
                <div className="text">
                    <img className="mx-auto" src="assets/images/spinner_logo.svg" alt="" />
                    <h4><span>Landpagy</span></h4>
                </div>
                </div>
                <h2 className="head">Did You Know?</h2>
                <p></p>
            </div>
        </div>
    )
}

export default Preloader;