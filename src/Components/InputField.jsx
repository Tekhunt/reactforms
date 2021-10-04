import React from "react";
import '../style.css'
// import Toggle from './Toggle'


function InputField({label}){
    return (
        <form className="form-field">
        <div className="labels">
            <p className="name">{label}:</p>
        </div>
       
        <input></input>
        </form>
    )
}

export default InputField;