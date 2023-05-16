import React from "react"
import './style.css';
const Button = ({ children, styles, colors }) => {
    return (<>
        <button style={{ backgroundColor: styles, color: colors }} className="btn">{children}</button>
    </>)
}

export default Button