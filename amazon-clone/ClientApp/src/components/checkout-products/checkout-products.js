﻿import React, {} from 'react';
import StarRateIcon from "@material-ui/icons/StarRate";

import './checkout-products.css'
import {useStateValue} from "../../StateProvider";

//make sure its an object
const CheckoutProducts = ({id, image, alt, title, price, rating}) => {
    
    const[{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <>
            <div className='checkout-products'>
                <img src={image} alt={alt} className='checkout-products__image'/>
                
                <div className='checkout-products__info'>
                    <p className='checkout-products__title'>{title}</p>
                    <p className='checkout-products__price'>
                        <small>R</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkout-products__rating'>
                        {Array(rating)
                            .fill()
                            .map((_,i) => (
                              <p><StarRateIcon /></p>  
                            ))}
                    </div>
                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
            </div>
        </>
    );
}
export default CheckoutProducts;