import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{

    const priceForStripe=price*100;
    const publishableKey='pk_test_51H2ZmmB1RU2OqDXwgvJk6L5zLRDsAMFtFhUAz1F57wPY9OTiUH0QZTRYx0ZR8uu3usq2QvRdWRQMktfwWRx7Gpnv00bPgUGOg2';


    return(
        <StripeCheckout label='Pay Now' name='Josh Crwn Clothings' billingAddress shippingAddress 
        description={`Your Total price is $${price}`} 
        stripeKey={publishableKey} amount={priceForStripe}
        token={onToken} panelLabel='Pay Now'/>
    )

}

const onToken=token=>{
    console.log(token);
    alert('Payment success')
}

export default StripeCheckoutButton