import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
// import Course from './containers/Course/Course';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink
                  to="/courses"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}>Courses</NavLink></li>
                <li><NavLink
                  to="/users"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}>Users</NavLink></li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from='/all-courses' to='/courses' />
            <Route render={() => <h1>404 - Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
