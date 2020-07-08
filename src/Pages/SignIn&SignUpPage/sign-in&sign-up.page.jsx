import React from 'react';
import './sign-in&sign-up.styles.scss'
import SignIn from '../../Components/Sign-in/sign-in.component'
import SignUp from '../../Components/Sign-up/signup.component'

const SignInAndSignUpPage=()=>(
    <div className='sign-in-and-sign-up'>
         <SignIn/>
         <SignUp/>
    </div>
);

export default SignInAndSignUpPage;