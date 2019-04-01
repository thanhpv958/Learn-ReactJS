import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddNote extends Component {
    render() {
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" />
                    </div>

                    <button type="reset" onClick={ () => this.props.addData() } className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        note: state.note
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: () => {
            dispatch({'type': 'NOTE_ADD'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
