import cartActionTypes from './cart.action_types'
import {addItemToCart,clearItemFromCart,reduceItemFromCart} from './cart.utils'
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}
const cartReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state, hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state, cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,cartItems:clearItemFromCart(state.cartItems,action.payload)
            }
        case cartActionTypes.CLEAR_ALL_ITEMS:
            return{
                ...state,cartItems:[]
            }
        case cartActionTypes.REDUCE_ITEM_FROM_CART:
            return{
                ...state,cartItems:reduceItemFromCart(state.cartItems,action.payload)
            }
            default:
                return state;
    }
}

export default cartReducer;