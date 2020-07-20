import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form-input-Component/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';



const SignIn=({googleSignInStart,emailSignInStart})=>{
    const[userCredentials, setUserCredentials]=useState({email:'',password:''});
    const {email,password}=userCredentials;
       const handleSubmit= event=>{
            event.preventDefault();
            emailSignInStart(email,password);

        };
       const handleChange=event=>{
            const {value,name}=event.target;
            setUserCredentials({...userCredentials,[name]:value})
        }
        const handleGoogleClick=()=>{
            googleSignInStart();
        }
 
            return(
                <div className='sign-in'>
                    <h2 className='title'>I already have an account </h2>
                    <span>Sign in with your email & password</span>
                    <form onSubmit={handleSubmit}>
                        <FormInput name="email" type="email" onChange={handleChange} value={email} label="Email" required/>   
                        <FormInput name="password" type="password" onChange={handleChange} value={password} label="Password" required/>
                        <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' isGoogleSignIn onClick={handleGoogleClick}>Sign In with Google</CustomButton>
                        </div>
                       
                    </form>
                </div>
            );
    
    }

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})


export default connect(null,mapDispatchToProps)(SignIn);

