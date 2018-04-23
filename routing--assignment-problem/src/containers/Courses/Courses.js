import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../../containers/Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' },
        ]
    }

    courseClickedHandler = (id) => {
        this.props.history.push({
            pathname: '/courses/' + id,
            search: '?title=' + this.state.courses[id - 1].title,
        });
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <article 
                                    className="Course" 
                                    onClick={() => this.courseClickedHandler(course.id)}
                                    key={course.id}
                                >
                                    {course.title}
                                </article>);
                        } )
                    }
                </section>
                <Route path="/courses/:id" component={Course} />                
            </div>
        );
    }
}

export default Courses;