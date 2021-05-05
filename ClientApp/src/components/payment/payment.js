import React, {} from 'react';
import {useStateValue} from "../../StateProvider";
import CheckoutProducts from "../checkout-products/checkout-products";
import {Link} from "react-router-dom";

import './payment.css'

const Payment = (props) => {
    const [{basket, user}, dispatch] = useStateValue()
    
    return (
        <>
            <div className='payment'>
                <div className='payment_container'>
                    <h1>
                        Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                    </h1>
                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Delivery Address</h3>
                        </div>
                        <div className='payment_address'>
                            <p>{user?.email}</p>
                            <p>123 Road</p>
                            <p>South Africa</p>
                        </div>
                    </div>
                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className='payment_items'>
                            {/*this will load what is in the basket*/}
                            {basket.map(item => (
                                <CheckoutProducts
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment_details'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Payment;