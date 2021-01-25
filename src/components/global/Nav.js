import React from 'react'

// Import SVG Assets
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Logout } from "../../assets/exit.svg"
import { ReactComponent as Home } from "../../assets/home.svg"
import { ReactComponent as Profile } from "../../assets/user.svg"
import { ReactComponent as Settings } from "../../assets/settings.svg"

const Nav = (props) => {
    return (
        <div className="nav">
            {/* Logo/logout area */}
            <div className="nav__left">
                <div className="logo">
                    <Logo className="logo__svg" />
                </div>
                <div className="nav__left__user">
                    <em><p className="nav__left__user__hello">Hallo, <span>{props.user}</span>!</p></em>
                    <a href="/logout" className="nav-item"><Logout className="nav-item__icon" />Logout</a>
                </div>
            </div>
            {/* Links area */}
            <div className="nav__right">
                <a href="/" className="nav-item active-page">
                    <Home className="nav-item__icon active-page" />
                    Home
                </a>
                <a href="/profile" className="nav-item ">
                    <Profile className="nav-item__icon" />
                    Profile
                </a>
                <a href="/settings" className="nav-item">
                    <Settings className="nav-item__icon" />
                    Settings
                </a>
            </div>
        </div>
    )
}

export default Nav