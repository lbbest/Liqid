import React, { useState } from 'react'

// Import SVG Assets
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Logout } from "../../assets/exit.svg"
import { ReactComponent as Home } from "../../assets/home.svg"
import { ReactComponent as Profile } from "../../assets/user.svg"
import { ReactComponent as Settings } from "../../assets/settings.svg"
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg"
import { ReactComponent as CloseMenu } from "../../assets/closemenu.svg"
import { ReactComponent as Liqid } from "../../assets/liqid.svg"


const Nav = (props) => {

    // Component State
    const [dropdown, setDropdown] = useState(false)
    const [click, setClick] = useState(false);

    // Component Functions
    // Click hamburger/cross to toggle dropdown
    const handleClick = () => {
        setClick(!click)
        setDropdown(!dropdown)
    };

    // Click link to close dropdown
    const closeMobileMenu = () => {
        setClick(false)
        setDropdown(false)
    };

    return (
        <>
            {/* Conditionally render nav */}
            {dropdown ? (
                // Conditionally render dropdown nav
                <div className="mobilenav mobilenav-red">
                    <div className="mobilenav__hello">
                        <div className="logo mobilenav-red__logo">
                            <Logo className="logo__svg mobilenav-red__logo__svg" />
                        </div>
                        <em><p className="mobilenav-red__user">Hallo, <span>{props.user}</span>!</p></em>
                    </div>
                    <div className="mobile-menu" onClick={handleClick}>
                        {/* Switch between hamburger/close icon */}
                        {click ? (
                        <CloseMenu className="menu-icon" />
                        ) : (
                        <Hamburger className="menu-icon" />
                        )}
                    </div>
                </div>)
                :
                // Conditionally render standard nav
                (<div className="mobilenav">
                    <div className="mobilenav__hello">
                        <div className="logo">
                            <Logo className="logo__svg" />
                        </div>
                        <em><p className="mobilenav__hello__user">Hallo, <span>{props.user}</span>!</p></em>
                    </div>
                    <div className="mobile-menu" onClick={handleClick}>
                        {/* Switch between hamburger/close icon */}
                        {click ? (
                        <CloseMenu className="mobile-menu__close" />
                        ) : (
                        <Hamburger className="mobile-menu__hamburger" />
                        )}
                    </div>
                </div>)}
            {/* Dropdown menu */}
            <div className={click ? "dropdown-menu active" : "dropdown-menu"}>
                <a className="nav-item dropdown-item" href="/logout" onClick={closeMobileMenu}>
                    <Logout className="nav-item__icon dropsoqn-item__icon" />
                    Logout
                </a>
                <a className="nav-item dropdown-item" href="/" onClick={closeMobileMenu}>
                    <Home className="nav-item__icon" />
                    Home
                </a>
                <a className="nav-item dropdown-item" href="/profile" onClick={closeMobileMenu}>
                    <Profile className="nav-item__icon" />
                    Profile
                </a>
                <a className="nav-item dropdown-item" href="/settings" onClick={closeMobileMenu}>
                    <Settings className="nav-item__icon" />
                    Settings
                </a>
                <Liqid className="dropdown-menu__liqid" />
            </div>
        </>
    )
}

export default Nav