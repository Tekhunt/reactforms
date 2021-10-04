import React from 'react';
import InputField from './InputField';
import Caption from './Caption';
import PasswordField from './PasswordField';
import SignUpButton from './SignUpButton';

function Login(){
    return (
    <div>
        <Caption left="Sign in" right="Register" />
        <InputField label="Email"/>
        <PasswordField label="Password"/>
        <SignUpButton action="Login"/>
        <Caption left="Become a vendor" right="Forgot password" />

    </div>
    )
}

export default Login;