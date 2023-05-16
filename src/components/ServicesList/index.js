import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons'

import './style.css';
const ServicesList = ({ icon, servicesTitle, servicesDescription }) => {
    return (
        <div className="services_list-item">
            <div className="services_logo">
                <FontAwesomeIcon className="services_logo-icon" style={{ height: "38px" }} icon={icon} />
            </div>
            <h3 className="services_list-title"><b>{servicesTitle}</b></h3>
            <p className="services_list-description">{servicesDescription}</p>
        </div>
    )
}

export default ServicesList