import React, { Component } from 'react';
import TbodyListUser from './TbodyListUser';

class ListUser extends Component {

    classFormListUser = () => {
        if (this.props.showFormAddUser) {
            return 'col-9';
        }

        return 'col-12';
    };

    showTbodyListUser = () => this.props.dataUser.map((value, key) => (
        <TbodyListUser
            key = { key }
            num = { key + 1 }
            name = { value.name }
            phone = { value.phone }
            role = { value.role }
        />
    ));

    render() {
        return (
            <div className={ this.classFormListUser() }>
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Num</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.showTbodyListUser() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUser;
