import React, { Component } from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser';

class User extends Component {
    render() {
        return (
            <div className="row">
                <ListUser></ListUser>
                
                <AddUser showFormAddUser={ this.props.showFormAddUser }></AddUser>
            </div>
        );
    }
}

export default User;
