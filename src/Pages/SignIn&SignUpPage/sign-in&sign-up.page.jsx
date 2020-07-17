import React from 'react';
import './sign-in&sign-up.styles.scss'
import SignIn from '../../Components/Sign-in/sign-in.component'
import SignUp from '../../Components/Sign-up/signup.component'
import {SignInSignUpContainer} from './sign-in&sign-up.styles'
const SignInAndSignUpPage=()=>(
    <SignInSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInSignUpContainer>
   
);

export default SignInAndSignUpPage;