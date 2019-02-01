import React, { Component } from 'react';

class TbodyListUser extends Component {
    render() {
        return (
            <tr>
                <td>{ this.props.num }</td>
                <td>{ this.props.name }</td>
                <td>{ this.props.phone }</td>
                <td>{ this.props.role }</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-warning"><i className="fa fa-edit" /> Sửa</button>
                        <button className="btn btn-danger"><i className="fa fa-trash" /> Xoá</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TbodyListUser;
