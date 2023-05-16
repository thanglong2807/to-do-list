import React from "react"
import './style.css';
const Portfolio = () => {
    return (<div className="portfolio">
        <div className="container">
            <div className="portfolio-content">
                <span className="portfolio_a">portfolio</span>
                <h2 className="portfolio_title">Recent Projects</h2>
                <div className="portfolio_list">
                    <div className="portfolio_list-item">
                        <h3 className="portfolio_list-title">Stationary</h3>
                        <p className="portfolio_list-description">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <div className="portfolio_list-item">
                        <h3 className="portfolio_list-title">Stationary</h3>
                        <p className="portfolio_list-description">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <div className="portfolio_list-item">
                        <h3 className="portfolio_list-title">Stationary</h3>
                        <p className="portfolio_list-description">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                    <div className="portfolio_list-item">
                        <h3 className="portfolio_list-title">Stationary</h3>
                        <p className="portfolio_list-description">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Portfolio