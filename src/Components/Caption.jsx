import React from "react";
import '../style.css'
// import Register from "./Register";
// import $ from "jquery";
// import Login from "./Login";


function Caption({left, right}){

    return (
        <div >
            <div className="caption">
            <p className="cap1"> {left}</p>
            <p className="cap2">{right}</p>
            </div>
           
            {/* {!toggle ? <Register/> : <Login/>} */}
        </div>
    )
}

export default Caption;