import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, addItem,reduceItemFromCart} from '../../redux/cart/cart.actions.js'


const CheckoutItem=({cartItem,itemToRemove, itemToAdd,itemToDecrease})=>{
   
    const{name,quantity,price,imageUrl}=cartItem;
   
    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>  
        <span className='name'>{name}</span>

        <span className='quantity'>
            <div className='arrow' onClick={()=>itemToDecrease(cartItem)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=>itemToAdd(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={()=>itemToRemove(cartItem)}>&#10005;</span>
    </div>
    )
    };
const mapDispatchToProps=(dispatch)=>({
    itemToRemove:item=>dispatch(clearItemFromCart(item)),
    itemToAdd:item=>dispatch(addItem(item)),
    itemToDecrease:item=>dispatch(reduceItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);