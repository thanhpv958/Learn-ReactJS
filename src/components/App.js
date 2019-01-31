import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import User from './User/User';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Search></Search>

                <User></User>   
            </div>
        );
    }
}

export default App;
