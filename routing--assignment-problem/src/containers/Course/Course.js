import React, { Component } from 'react';

class Course extends Component {
    render () {
        const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);

        return (
            <div>
                <h1>{parsed.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;