import React from "react";
import '../style.css'

const [name, setName] = useState();

const handleClick = () => {
    name = 'luigi';
    setName()
}

function Toggle(){

    return (
            <p className="favicon"> <i class="fa fa-eye-slash" aria-hidden="true"></i> </p>
            
            <p> {name }</p>
            <button onClick="{handleClick}"> click </button>
    )
}

export default Toggle;