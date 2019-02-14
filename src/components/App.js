import React, { Component } from 'react';
import './App.css';
import Search from './Search/Search';
import User from './User/User';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFormAddUser: true,
        };
    }

    changeStateFormAddUser = () => {
        this.setState({
            showFormAddUser: !this.state.showFormAddUser,
        });
    };

    render() {
        return (
            <div className="container">
                <Search
                    showFormAddUser = { this.state.showFormAddUser }
                    changeStateFormAddUser = { () => this.changeStateFormAddUser() }>
                </Search>
                
                <User showFormAddUser = { this.state.showFormAddUser } />
            </div>
        );
    }
}

export default App;
