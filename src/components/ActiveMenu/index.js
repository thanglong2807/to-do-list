import React, { useState } from "react"

import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from '@fortawesome/free-solid-svg-icons'

const ActiveMenu = () => {
    const [active, setActive] = useState(true)
    const openMenu = () => {
        document.querySelector('.header').classList.remove('active_close')
        document.querySelector('.header').classList.add('active')

        setActive(false)
    }
    const closeMenu = () => {
        document.querySelector('.header').classList.remove('active')

        document.querySelector('.header').classList.add('active_close')

        setActive(true)
    }
    return (<>
        {active ? (<div onClick={openMenu} className="active_menu" >
            <FontAwesomeIcon style={{ color: '#fff' }} icon={faList} />
        </div>)
            : (<div onClick={closeMenu} className="active_menu" >
                <FontAwesomeIcon style={{ color: '#fff' }} icon={faXmark} />
            </div>)}
    </>)
}

export default ActiveMenu