import React from 'react'
import FormInput from '../Form-input-Component/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'

import{auth,createUserProfileDocument}from '../../firebase/firebase.utils'

import './signup.styles.scss';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword){
            alert('passwords dont match');
            
            return
        }
        try{
            await auth.createUserWithEmailAndPassword(email,password).then(
                ()=>{
                    createUserProfileDocument(auth.currentUser,{displayName});
                }
            );
            
        }
        catch(error){
            console.log(error);
        }
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const{displayName,email,password,confirmPassword}=this.state
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange}
                    label='User name' required />
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange}
                    label='Email' required />
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange}
                    label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange}
                    label='Confirm password' required />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>

        );
    }
}
export default SignUp;