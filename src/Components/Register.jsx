import React from 'react';
import InputField from './InputField'
import Caption from './Caption';
import PasswordField from './PasswordField';
import SignUpButton from './SignUpButton';

const Register = () => {
    return (
        <div>
            <Caption left="Sign in" leftUrl="login" right="Register" rightUrl='register' />
            {/* <Caption left="Sign in" right="Register" /> */}
            <InputField label="First name"/>
            <InputField label="Last name"/>
            <InputField label="Username"/>
            <InputField label="Email"/>
            <PasswordField label="Password"/>
            <PasswordField label="Confirm Password"/>
            <SignUpButton action="Sign Up"/>
            <Caption left="Become a vendor" leftUrl="vendor" right="Forgot password" rightUrl="forgotpassword" />
        </div>
    );
}

export default Register;
