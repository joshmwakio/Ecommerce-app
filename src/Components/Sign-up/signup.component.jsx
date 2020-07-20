import React, {useState} from 'react'
import FormInput from '../Form-input-Component/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'
import {connect} from 'react-redux'
import {emailSignUpStart} from '../../redux/user/user.actions'


import './signup.styles.scss';




const SignUp=({signUpWithEmailAndPassword})=>{
    const [userCredentials,setUserCredentials]=useState({ 
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
        })
    

    const {displayName,email,password,confirmPassword}=userCredentials
    const handleSubmit=async event=>{
        event.preventDefault();

        if(password!==confirmPassword){
            alert('passwords dont match');
            
            return
        }

        signUpWithEmailAndPassword({email,password,displayName})
       
         setUserCredentials({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })        
    }
    const handleChange=event=>{
        const {name,value}=event.target;
        setUserCredentials({...userCredentials,[name]:value})
    }
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>

                    <FormInput type='text' name='displayName' value={displayName} handleChange={handleChange}
                    label='User name' required />
                    <FormInput type='email' name='email' value={email} handleChange={handleChange}
                    label='Email' required />
                    <FormInput type='password' name='password' value={password} handleChange={handleChange}
                    label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={handleChange}
                    label='Confirm password' required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>

        );
    }

const mapDispatchToProps=(dispatch)=>({
    signUpWithEmailAndPassword:(userAuth)=>dispatch(emailSignUpStart(userAuth))
})

export default connect(null,mapDispatchToProps)(SignUp);