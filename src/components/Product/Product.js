import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


const Product = props => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className = "product-name">{name}</h4>
                <p>By: <small>{seller}</small></p>
                <p>Price: {price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick = {() =>{props.handleAddToCart(props.product)}}className = "btn-regular"> {cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;