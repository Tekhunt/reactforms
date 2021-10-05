import React from 'react';
import InputField from './InputField';
import Caption from './Caption';
import PasswordField from './PasswordField';
import SignUpButton from './SignUpButton';

function Login(){
    return (
    <div>
        <Caption left="Sign in" leftUrl="login" right="Register" rightUrl="register" />
        <InputField label="Username"/>
        <PasswordField label="Password"/>
        <SignUpButton action="Login"/>
        <Caption left="Become a vendor" leftUrl="vendor" right="Forgot password" rightUrl="forgotpassword" />

    </div>
    )
}

export default Login;