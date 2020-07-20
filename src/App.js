import React, {useEffect} from 'react';
import './App.css';

import {Route,Redirect} from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.page'
import ShopPage from './Pages/Shoppage/shoppage.page'
import Header from './Components/Header/header.component.jsx'
import SignInAndSignUpPage from './Pages/SignIn&SignUpPage/sign-in&sign-up.page';
import CheckoutPage from './Pages/Checkout/checkout.page.jsx'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCurrentUser} from './redux/user/user.selector'
import {CheckUserSession} from './redux/user/user.actions'

const App=({checkUserSession,currentUser})=>{

useEffect(()=>{
  checkUserSession()
},[checkUserSession])
  return (
    <div>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signIn'  render={()=>currentUser?(< Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
      <Route exact path='/checkout' component={CheckoutPage}/>
      </div>
  );
}


const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps=(dispatch)=>({
  checkUserSession:()=>dispatch(CheckUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
