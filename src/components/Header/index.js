import React from "react"
import './style.css';
const Header = () => {
    return (<nav className="header">
        <div className="container">
            <div className="header-content">
                <h1 className="header-logo" style={{ width: "100%" }}>
                    <a className="logo" href="#" >Start Bootstrap</a>

                </h1>
                <ul className="header_list">
                    <li className="heder_list-link"><a className="header_list-item" href="#">Home</a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#">About </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#">Services </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#">Portfolio </a></li>
                    <li className="heder_list-link"><a className="header_list-item" href="#">Contact </a></li>

                </ul>
            </div>
        </div>
    </nav>)
}

export default Header