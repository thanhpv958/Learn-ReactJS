import React, { Component } from 'react';

class Search extends Component {

    showBtnAddUser = () => {
        if (this.props.showFormAddUser) {
            return <div className="btn btn-danger" onClick={ () => this.props.changeStateFormAddUser() }>Đóng lại</div>
        }

        return <div className="btn btn-info" onClick={ () => this.props.changeStateFormAddUser() }>Thêm mới user</div>
    };
    
    render() {
        return (
            <div className="row">
                <div className="col-9">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" name="search" placeholder="Nhập từ khoá" />
                            <div className="btn btn-info">Tìm kiếm</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    { this.showBtnAddUser() }
                </div>

                <div className="col-12">
                    <hr />
                </div>
            </div>
        );
    }
}

export default Search;
