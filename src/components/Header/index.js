import React from "react"
import './style.css';
const Header = () => {
    return (<nav className="header active_close">
        <div className="container">
            <div className="header-content">
                <h1 className="header-logo" style={{ width: "100%" }}>
                    <a className="logo" href="#" >Start Bootstrap</a>

                </h1>
                <ul className="header_list">
                    <li className="heder_list-link"><a className="header_list-item" href="#home">Home</a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#about">About </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#services">Services </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#portfolio">Portfolio </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#contact">Contact </a></li>

                </ul>
            </div>
        </div>
    </nav>)
}

export default Header