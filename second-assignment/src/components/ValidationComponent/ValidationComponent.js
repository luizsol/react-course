import React from 'react';

import './ValidationComponent.css';

const validationComponent = (props) => {
    let message = (
        <p style={{ color: 'green' }}>The text is ok.</p>
    )

    if (props.value.length < 5) {
        message = (
            <p style={{ color: 'red' }}>The text is too short!</p>
        );
    }
    if (props.value.length > 10) {
        message = (
            <p style={{ color: 'red' }}>The text is too long!</p>
        );
    }

    return (
        <div className='ValidationComponent' >
            {message}
        </div>
    );
};

export default validationComponent;

