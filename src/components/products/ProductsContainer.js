import React, { useState } from 'react'

// Import Components
import Product from "./Product"

// Import SVG Assets
import { ReactComponent as UpArrow } from "../../assets/up-arrow.svg"
import { ReactComponent as DownArrow } from "../../assets/down-arrow.svg"

const ProductsContainer = () => {

    // Component State (play around with values to change how things render!, e.g. growth: false)
    const [products, setProducts] = useState([
        {
            name: "Wealth",
            value: 500000,
            growth: true,
            percentage: 25.3,
        },
        {
            name: "Cash",
            value: 260000,
            growth: true,
            percentage: 15.3,
        },
        {
            name: "Venture",
            value: 928000,
            growth: false,
            percentage: 0.13,
        },
        {
            name: "Private Equity",
            value: 850000,
            growth: true,
            percentage: 50.8,
        },
        {
            name: "Real State",
            value: 799000,
            growth: true,
            percentage: 25.6,
        },
    ])

    // Component Functions
    // Sort products by highest value
    const sortHigh = () => {
        const sorted = products.sort((a, b) => {
        return b.value - a.value;
        });
        setProducts([...sorted]);
    };

    // Sort products by lowest value
    const sortLow = () => {
        const sorted = products.sort((a, b) => {
        return a.value - b.value;
        });
        setProducts([...sorted]);
    };

    return (
        <div className="products-container">
            <h2 className="products-container__title"><em>Your products</em></h2>
            {/* List sorting buttons */}
            <div className="product-sort">
                <p className="product-sort__name"><em>Sort:</em></p>
                <div className="product-sort__sort">
                    {/* Calls sorting functions onChange */}
                    <input className="product-sort__sort__radio" type="radio" name="sort" id="high" onChange={sortHigh}></input>
                    <label className="product-sort__sort__button" htmlFor="high">
                        highest values first
                        <UpArrow className="product-sort__sort__button__icon" />
                    </label>
                    <input className="product-sort__sort__radio" type="radio" name="sort" id="low" onChange={sortLow}></input>
                    <label className="product-sort__sort__button" htmlFor="low">
                        highest values last
                        <DownArrow className="product-sort__sort__button__icon" />
                    </label>
                </div>
            </div>
            {/* Map through state object and return Product component with props passed down */}
            {products.map((product, index) => {
                return (
                    <Product key={index} id={index} name={product.name} value={product.value.toLocaleString()} growth={product.growth} percentage={product.percentage} />   
                )
            })}
        </div>
    )
}

export default ProductsContainer
