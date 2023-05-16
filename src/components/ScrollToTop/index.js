import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div onClick={handleClick} className="scroll_to_top">
            <FontAwesomeIcon icon={faChevronUp} />
        </div>
    );
}

export default ScrollToTop;
