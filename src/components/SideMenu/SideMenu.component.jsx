import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidemenu.css'
import { SideMenuData } from './SideMenuData';

const SideMenu = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <i className="fa fa-bars" aria-hidden="true" onClick={showSidebar}></i>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </Link>
                    </li>
                    { SideMenuData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <i className={item.icon} aria-hidden="true"></i>
                                    <span> {item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default SideMenu
