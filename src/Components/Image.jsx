import React from 'react'
import '../style.css'

function Image({url}) {
    return (
            <div className="left-container" > 
            <img src={url} /> 
            </div>
      
    )
}

export default Image;
