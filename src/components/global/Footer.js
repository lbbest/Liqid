import React from 'react'

// Import SVG Assets
import { ReactComponent as Liqid } from "../../assets/liqid.svg"

const Footer = () => {
    return (
        <div className="footer">
            {/* LIQID Logo */}
            <Liqid className="footer__liqid" />
        </div>
    )
}

export default Footer