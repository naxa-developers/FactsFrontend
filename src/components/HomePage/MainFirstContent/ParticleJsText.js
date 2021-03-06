import React, { Component } from 'react';
import Fade from "react-reveal/Fade";


const ParticleJsText = ({siteapi}) => (

    <div className="banner-wrap">
        <div className="title-block">
            {/* <div className="circle orange-gradient sphere1"></div>
            <div className="circle red-gradient sphere2"></div>
            <div className="circle pink-gradient sphere3"></div> */}
            <div className="title-wrap">
                <Fade bottom duration={1500} distance={"20px"}>
                    <h1 className="headline1">Offering total research solutions for your business requirements.</h1>
                </Fade>
                <Fade bottom duration={1600} distance={"20px"}>
                    <p className="headline5">Collecting, processing and analysing data</p>
                </Fade>
            </div>
        </div>
        <Fade bottom duration={1700} distance={"20px"}>
            {/* <img src="./img/HomePage_AI.png" alt="banner-img" /> */}
        </Fade>
    </div>

);

export default ParticleJsText;