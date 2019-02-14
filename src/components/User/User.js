import React, { Component } from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser';
import dataUser from '../DataUser.json';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataUser: dataUser
        }
    }
    
    getNewUser = (name, phone, role) => {
        let user = {};
        user.id = "";
        user.name = name;
        user.phone = phone;
        user.role = role;

        let users = this.state.dataUser;
        users.push(user);
        this.setState({
            dataUser: users
        });
    };

    render() {
        return (
            <div className="row">
                <ListUser
                    showFormAddUser={ this.props.showFormAddUser }
                    dataUser={ this.state.dataUser }
                />
                
                <AddUser
                    showFormAddUser={ this.props.showFormAddUser }
                    getNewUser={ (name, phone, role) => this.getNewUser(name, phone, role) } />
            </div>
        );
    }
}

export default User;
