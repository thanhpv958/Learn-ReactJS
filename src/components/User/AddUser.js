import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card border-primary">
                    <div className="card-header">
                        Thêm mới user
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option defaultValue value={0} >Choose role</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;
