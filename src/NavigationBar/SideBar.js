import React from 'react'
import ReactDOM from 'react-dom'

import './SideBar.css'

const SideBar = (props) => {
    const content=<aside className="side-bar" onClick={props.onClick}>{props.children}</aside>
    return (
       ReactDOM.createPortal(content, document.getElementById("side-hook"))
    )
}

export default SideBar
