import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    showFormAddUser = () => {
        if (this.props.showFormAddUser) {
            return (
                <div className="card border-primary">
                    <div className="card-header">
                        Thêm mới user
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <input name="name" onChange={ (event) => this.getDataUserCreate(event) } type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input name="phone" onChange={ (event) => this.getDataUserCreate(event) } type="text" className="form-control"  placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <select name="role" onChange={ (event) => this.getDataUserCreate(event) } className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option defaultValue value={0} >Choose role</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>User</option>
                                </select>
                            </div>
                            <button type="reset" className="btn btn-primary btn-block"
                                onClick={ () => this.props.getNewUser(this.state.name, this.state.phone, this.state.role) } 
                            >Submit</button>
                        </div>
                    </form>
                </div>
            );
        }
    };

    getDataUserCreate = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="col-3">
                { this.showFormAddUser() }
            </div>
        );
    }
}

export default AddUser;
