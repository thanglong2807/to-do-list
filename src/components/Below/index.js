import React from "react"
import './style.css';
import Button from "../Button";
const Below = () => {
    return (<div className="below">
        <div className="container">
            <div className="below_content">
                <h2 className="below_title">The buttons below are impossible to resist...</h2>
                <div className="below_list">
                    <Button colors={"#000"} styles={'#fff'} >Click me</Button>
                    <Button styles={'#000'}>Lock At Me</Button>
                </div>
            </div>
        </div>
    </div >)
}

export default Below