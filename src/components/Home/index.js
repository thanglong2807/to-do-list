import React from "react"
import './style.css';
import Button from "../Button";

const Home = () => {
    return (<div id="home" className="home">
        <div className="container">
            <div className="home_content">
                <h1 className="home_title">Stylish Portfolio</h1>
                <p className="home_description">
                    <i>A Free Bootstrap Theme by Start Bootstrap</i>
                </p>
                <Button className="home_btn">Find Out More</Button>
            </div>
        </div>
    </div>)
}

export default Home