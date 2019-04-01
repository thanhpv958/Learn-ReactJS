import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    getInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    getNewNote = () => {
        let data = {};
        data.title = this.state.title;
        data.content = this.state.content;

        this.props.storeData(data);
    };


    render() {
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Note title</label>
                        <input onChange={ (event) => this.getInput(event) } name="title" type="text" className="form-control" id="title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd">Note content</label>
                        <input onChange={ (event) => this.getInput(event) } name="content" type="text" className="form-control" id="content" />
                    </div>

                    <button type="reset" onClick={ () => this.getNewNote() } className="btn btn-primary">Submit</button>
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
        storeData: (data) => {
            dispatch({
                type: 'NOTE_ADD',
                data: data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
