import React, {useState} from "react";
import {connect} from "react-redux";
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";
import {emailSignInStart, googleSignInStart} from "../../redux/user/userActions";
import './SignIn.scss'

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart({email, password})
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email & password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    handleChange={handleChange}/>
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                    handleChange={handleChange}/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: userCredentials => dispatch(emailSignInStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignIn)
