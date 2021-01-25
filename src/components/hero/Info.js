import React from 'react'

// Import SVG Assets
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg"

const Info = () => {
    return (
        <div className="info">
            {/* Investments card */}
            <div className="info__card" id="investments">
                <h2 className="info__card__title">
                    <em>Investments</em>
                </h2>
                <p className="info__card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis. Aenean feugiat commodo quam, vulputate viverra lorem iaculis in. Curabitur varius commodo lacus eget vestibulum. Curabitur vitae risus nec justo faucibus vulputate.
                </p>
            </div>
            {/* Stocks card */}
            <div className="info__card" id="stocks">
                <h2 className="info__card__title">
                    <em>Stocks</em>
                </h2>
                <p className="info__card__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum elit id auctor mollis.
                </p>
                <button className="info__card__button">
                    Explore
                    <RightArrow className="info__card__button__icon" />
                </button>
            </div>
        </div>
    )
}

export default Info
