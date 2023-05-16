import React from "react"
import './style.css';
import Button from "../Button";
const Website = () => {
    return (<div className="website">
        <div className="container">
            <div className="website_content">
                <h2 className="website_title">Welcome to your next website!</h2>
                <Button>Dowload Now!</Button>
            </div>
        </div>
    </div>)
}

export default Website