import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import List from './List';
import Add from './Add';

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div class='mb-2'>
                    <Link to='/category' class='btn btn-primary'>List</Link>
                    <Link to='category/add' class='btn btn-primary ml-2'>Add</Link>
                </div>

                <Route exact path='/category' component={ List } />
                <Route exact path='/category/add' component={ Add } />
            </Router>
        );
    }
}
