import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMobilePhone } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import ServicesList from "../ServicesList";
const Services = () => {
    return (<div className="services">
        <div className="container">
            <div className="services-content">
                <span className="services_a">SERVICES</span>
                <h2 className="services_title">What We Offer</h2>
                <div className="services_list">

                    <ServicesList icon={faMobilePhone} servicesTitle={"Responsive"} servicesDescription={"Looks great on any screen size!"} />
                    <ServicesList icon={faMobilePhone} servicesTitle={"Redesigned"} servicesDescription={"Freshly redesigned for Bootstrap 5."} />
                    <ServicesList icon={faMobilePhone} servicesTitle={"Favorited"} servicesDescription={"Millions of users  Start Bootstrap!"} />
                    <ServicesList icon={faMobilePhone} servicesTitle={"Question"} servicesDescription={"I mustache you a question..."} />
                </div>
            </div>
        </div>
    </div>)
}

export default Services