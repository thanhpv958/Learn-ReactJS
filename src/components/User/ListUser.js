import React, { Component } from 'react';

class ListUser extends Component {
    render() {
        return (
            <div className="col-9">
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
                        <tr>
                            <td>1</td>
                            <td>Phan Van Thanh</td>
                            <td>5345345435</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                                    <button className="btn btn-danger"><i className="fa fa-trash" /> Xoá</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Phan Van Thanh</td>
                            <td>5345345435</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                                    <button className="btn btn-danger"><i className="fa fa-trash" /> Xoá</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Phan Van Thanh</td>
                            <td>5345345435</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                                    <button className="btn btn-danger"><i className="fa fa-trash" /> Xoá</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Phan Van Thanh</td>
                            <td>5345345435</td>
                            <td>Admin</td>
                            <td>
                                <div className="btn-group">
                                    <button className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                                    <button className="btn btn-danger"><i className="fa fa-trash" /> Xoá</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUser;
