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
import {HeaderContainer,OptionLink,OptionsContainer,LogoContainer,OptionDiv}from './header.styles'

const Header=({currentUser,hidden})=>(
    
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>

    <OptionsContainer>
        <OptionLink to="/shop">
            SHOP
        </OptionLink>

        <OptionLink to="/contact">
            CONTACT
        </OptionLink>
        {
            currentUser ? (
            
            <OptionDiv onClick={()=>auth.signOut() }>
            SIGN OUT
            </OptionDiv>
        ):
        (  <OptionLink to="/signIn">
            SIGN IN
          </OptionLink>)
        
    }
    <OptionDiv>
        <CartIcon/>
    </OptionDiv>
    </OptionsContainer>
    {
        hidden?null:<CartDropDown/>
    }
    </HeaderContainer>
);

const mapStateToProp=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
})


export default connect(mapStateToProp)(Header);