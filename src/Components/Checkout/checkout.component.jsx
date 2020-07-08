import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../Checkout-item/checkout-item.component'
import StripeCheckoutButton from '../Stripe-button/stripe-button.component'

const Checkout=({cartItems,total})=>(
    <div className='checkout'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map( cartItem=>(
                <CheckoutItem id={cartItem.id}  cartItem={cartItem}/>
            ))
        }
        <div className='total'>
            <span> TOTAL:${total}</span>
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(Checkout);