import React from 'react';
import './App.css';

import {Route,Redirect} from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.page'
import ShopPage from './Pages/Shoppage/shoppage.page'
import Header from './Components/Header/header.component.jsx'
import SignInAndSignUpPage from './Pages/SignIn&SignUpPage/sign-in&sign-up.page';
import CheckoutPage from './Pages/Checkout/checkout.page.jsx'
import {auth,firestore} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
import {setCurrentUser} from './redux/user/user.actions'
class App extends React.Component{


unsubscribeFromAuth=null;


componentDidMount()
{
//an open subscription
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
  const {setCurrentUser}=this.props;
    if(userAuth){
      try{
        const userRef= firestore.doc(`users/${userAuth.uid}`);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
      }
      catch(error){
        console.log(error);
      }
  
    }
    else{
      setCurrentUser(null)
    }
    

   
  });

}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}



render(){

  return (
    <div>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signIn'  render={()=>this.props.currentUser?(< Redirect to='/'/>):(<SignInAndSignUpPage/>)} />
      <Route exact path='/checkout' component={CheckoutPage}/>
      </div>
  );
}
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})


const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
