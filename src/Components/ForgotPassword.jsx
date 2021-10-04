import React from "react";
import Caption from './Caption';
import InputField from './InputField';
import SignUpButton from './SignUpButton';

function ForgotPassword(){
    return (
        <div>
        <Caption left="Forgot Password"/>
        <InputField label="Username"/>
        <SignUpButton action="Submit"/>

    </div>

    )
}

export default ForgotPassword;