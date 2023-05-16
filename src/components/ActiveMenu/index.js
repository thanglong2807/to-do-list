import React, { useState } from "react"

import './style.css';
const ActiveMenu = () => {
    const [active, setActive] = useState(true)
    const openMenu = () => {
        document.querySelector('.header').classList.toggle('active')

        setActive(false)
    }
    const closeMenu = () => {
        document.querySelector('.header').classList.toggle('active')

        setActive(true)
    }
    return (<>
        {active ? (<div onClick={openMenu} className="active_menu" >
            <img width={10} style={{ filter: "invert(1)" }} src="./assets/icons/open.svg" />
        </div>)
            : (<div onClick={closeMenu} className="active_menu" >
                <img width={10} style={{ filter: "invert(1)" }} src="./assets/icons/close.svg" />
            </div>)}
    </>)
}

export default ActiveMenu