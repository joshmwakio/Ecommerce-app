import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../Form-input-Component/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'

import {auth, signInWithGoogle, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super();
            this.state={
                email:'',
                password:''
            }
        }
        handleSubmit= async event=>{
            event.preventDefault();
            const {email, password}=this.state;
            try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({email:'',password:''})
            }
            catch(error)
            {

            }
           
        };
        handleChange=event=>{
            const {value,name}=event.target;
            this.setState({[name]:value})
        }
        handleGoogleClick=async event=>{
            await signInWithGoogle();
            const userAuth=auth.currentUser;

            console.log(userAuth);
            await createUserProfileDocument(userAuth);
        }
        render(){
            return(
                <div className='sign-in'>
                    <h2 className='title'>I already have an account </h2>
                    <span>Sign in with your email & password</span>
                    <form onSubmit={this.handleSubmit}>
                        <FormInput name="email" type="email" onChange={this.handleChange} value={this.state.email} label="Email" required/>   
                        <FormInput name="password" type="password" onChange={this.handleChange} value={this.state.password} label="Password" required/>
                        <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton  isGoogleSignIn onClick={this.handleGoogleClick}>Sign In with Google</CustomButton>
                        </div>
                       
                    </form>
                </div>
            );
    
        }
}
export default SignIn;

