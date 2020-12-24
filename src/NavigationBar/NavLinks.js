import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = () => {
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to ="/SignIn">SignIn</NavLink>
            </li>
            <li>
                <NavLink to ="/place/upload">Upload</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
