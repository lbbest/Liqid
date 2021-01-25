import React from 'react'

// Import components
import Button from "./Button"

// Import SVG Assets
import { ReactComponent as UpArrow } from "../../assets/up-arrow.svg"
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg"

const Product = (props) => {
    return (
        // If product is in 5th position, add border radius class
        <div className={ props.id === 4 ? "product product-curve" : "product" }>
            <div className="product__info">
                <p className="product__info__name">
                    <em>LIQID {props.name}</em>
                </p>
                {/* Change colours/arrows/font colour conditionally based on positive or negative growth */}
                <div className="product__info__details" style={props.growth ? {backgroundColor: "#E5FFC7"} : {backgroundColor: "#FFC7C7"}}>
                    <p className={props.growth ? "product__info__details__value positive" : "product__info__details__value negative"}>{
                        props.value} €
                    </p>
                    {props.growth ? <UpArrow className="product__info__details__icon positive" /> : <DownArrow className="product__info__details__icon negative" />}
                    <p className={props.growth ? "product__info__details__percent positive" : "product__info__details__percent negative"}>
                        {props.percentage}%
                    </p>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Product