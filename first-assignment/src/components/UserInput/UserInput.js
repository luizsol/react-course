import React from 'react'

const userInput = (props) => {
    const style = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
        backgroundColor: 'gray',
    };

    return(
        <div className="UserInput" style={ style }>
            <p>Insert the user name:</p>
            <input 
                type="text" 
                onChange={ props.change } 
                value={ props.value } 
                placeholder="username" 
            />
        </div>
    );
}; 

export default userInput;