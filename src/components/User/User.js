import React, { Component } from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser';

class User extends Component {
    render() {
        return (
            <div className="row">
                <ListUser
                    showFormAddUser={ this.props.showFormAddUser }
                    dataUser={ this.props.dataUser }
                />
                
                <AddUser showFormAddUser={ this.props.showFormAddUser }/>
            </div>
        );
    }
}

export default User;
