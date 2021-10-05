import React from 'react';
import InputField from './InputField'
import Caption from './Caption';
import PasswordField from './PasswordField';
import SignUpButton from './SignUpButton';

const Vendor = () => {
    return (
        <div>
            <Caption left="Become a Vendor" leftUrl="vendor" rightUrl="forgotpassword" />
            <InputField label="Shop name"/>
            <InputField label="Email"/>
            <InputField label="Username"/>
            <PasswordField label="Password"/>
            <PasswordField label="Confirm Password"/>
            <SignUpButton action="Sign Up"/>
        </div>
    );
}

export default Vendor;
