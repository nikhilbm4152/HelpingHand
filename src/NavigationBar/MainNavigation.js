import React, { useState } from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'

import './MainNavigaton.css'
import SideBar from './SideBar'
import Backdrop from '../UIElements/Backdrop'

const MainNavigation = (props) => {
    const [drawerIsOpen,setDrawerIsOpen]=useState(false);

    const openDrawer=()=>{
        setDrawerIsOpen(true);
    }
    const closeDrawer=()=>{
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
           {drawerIsOpen && <Backdrop onClick={closeDrawer}/>} 
           {drawerIsOpen &&
            <SideBar  onClick={closeDrawer}>
                <nav className="navigation-drawer-nav">
                    <NavLinks/>
                </nav> 
            </SideBar>
                }
            <MainHeader>
                <button className="side-drawer"  onClick={openDrawer}>
                    <div />
                    <div />
                    <div />
                </button>
                <h1 className="navigation-title">
                    <Link to="/">HELPING-HAND
                    </Link>
                </h1>
                <nav className="navigation-header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>

        </React.Fragment>
    )
}

export default MainNavigation
