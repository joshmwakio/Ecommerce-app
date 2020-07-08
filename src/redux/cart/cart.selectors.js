import {createSelector} from 'reselect';
const selectCartState=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCartState], (cart)=>cart.cartItems
);

export const selectCartHidden=createSelector(
    [selectCartState], (cart)=>cart.hidden
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],(cartItems)=>cartItems.reduce(
        (accumulatedQuantity,cartItem)=>(
            accumulatedQuantity+cartItem.quantity
    ),0)
    
)

export const selectCartTotal=createSelector(
    [selectCartItems],cartItems=>cartItems.reduce(
        (accumulatedQuantity,cartItem)=>(
            accumulatedQuantity+cartItem.quantity*cartItem.price
        ),0
    )
)

