import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" name="search" placeholder="Nhập từ khoá" />
                            <div className="btn btn-info">Tìm kiếm</div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <hr />
                </div>
            </div>
        );
    }
}

export default Search;
