import React from 'react'

import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{ props.children }</p>
            <p>{ props.value }</p>
        </div>
    );
}; 

export default userOutput;