
import cartActionTypes from './cart.action_types'

export const toggleCartHidden=()=>({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem=(item)=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
});

export const clearItemFromCart=(item)=>({
    type:cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const reduceItemFromCart=(item)=>({
    type:cartActionTypes.REDUCE_ITEM_FROM_CART,
    payload:item
})


