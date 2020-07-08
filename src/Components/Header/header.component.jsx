import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import {connect} from 'react-redux';
import CartIcon from '../Cart-icon/cart-icon.component'
import CartDropDown from '../Cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'

const Header=({currentUser,hidden})=>(
    
    <div className= 'header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>

    <div className='options'>
        <Link className='option' to="/shop">
            SHOP
        </Link>

        <Link className='option' to="/contact">
            CONTACT
        </Link>
        {
            currentUser ? (
            
            <Link className='option' onClick={()=>auth.signOut() } to="/">
            SIGN OUT
            </Link>

        ):
        (  <Link className='option' to="/signIn">
            SIGN IN
        </Link>)
        
    }
    <Link className='option'>
        <CartIcon/>
    </Link>
    </div>
    {
        hidden?null:<CartDropDown/>
    }
    </div>
);

const mapStateToProp=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
})


export default connect(mapStateToProp)(Header);