import React from "react"
import './style.css';

import Button from "../Button";
const About = () => {
    return (<div id="about" className="about">
        <div className="container">
            <div className="">
                <h2 className="about_title">Stylish Portfolio is the perfect theme for your next project!</h2>
                <p className="about_description">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at Unsplash !</p>
                <Button styles={'#212529'}>That We Offer</Button>
            </div>
        </div>
    </div>)
}

export default About