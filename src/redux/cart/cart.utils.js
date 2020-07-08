export const addItemToCart=(cartItems, cartItemToAdd)=>{

    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);
    console.log(existingCartItem);
    if(existingCartItem){

        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id ? {
                ...cartItem, quantity:cartItem.quantity+1}
             : cartItem
        )
    }
    else{
        return [...cartItems,{...cartItemToAdd, quantity:1}]
    }
}

export const clearItemFromCart=(cartItems,cartItemToClear)=>{
    console.log(cartItems);
    return cartItems.filter(cartItem=>(
        cartItem.id!==cartItemToClear.id
    ))

}
export const reduceItemFromCart=(cartItems,cartItemToReduce)=>{

const existingCartItem=cartItems.find(
    cartItem=>cartItem.id===cartItemToReduce.id
)
if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=>cartItem.id!==cartItemToReduce.id)
}
else{
  return  cartItems.map(cartItem=>cartItem.id===cartItemToReduce.id ? {
            ...cartItem,quantity:cartItem.quantity-1
        }
        :
        cartItem
    )
}


//   return cartItems.map(
//         cartItem=>cartItem.id===cartItemToReduce.id? cartItem.quantity===1 ?
//         clearItemFromCart(cartItem,cartItemToReduce): {
//            ...cartItem, quantity:cartItem.quantity-1
//        }
//        :
//        cartItem
            
//    )
}