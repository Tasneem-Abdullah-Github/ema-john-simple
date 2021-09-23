import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart){
        total += product.price
        shipping = 15;
    }
    const tax = (total + shipping) / 10;
    const grandTotal = (total + shipping + tax)
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand-Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;