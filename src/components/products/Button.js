import React from 'react'

// Import SVG Assets
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg"

const Button = () => {
    return (
        <button className="product-button">
            Explore <RightArrow className="product-button__icon" />
        </button>
    )
}

export default Button