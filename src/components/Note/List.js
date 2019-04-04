import React, { Component } from 'react';
import {connect} from 'react-redux';
import noteConnect from '../../firebase/noteConnect';
import NoteItem from './NoteItem';
class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }
    
    componentDidMount() {
        this.getDataFromFirebase();
    }

    /**
     * Get data from firebase
     */
    getDataFromFirebase = () => {
        noteConnect.on('value', (notes) => {
            let noteArray = [];
            console.log(noteArray);
            notes.forEach(note => {
                let key = note.key;
                let title = note.val().title;
                let content = note.val().content;

                noteArray.push({
                    id: key,
                    title: title,
                    content: content
                });
            });
            this.setState({
                notes: noteArray
            });

        });
    };

    /**
     * Display a listing of the resource.
     */
    index = () => {
        if (this.state.notes != null) {
            return this.state.notes.map((value, key) => {
                return (
                    <NoteItem
                        key = { key }
                        index = { key }
                        title = { value.title }
                        content = { value.content }
                    />
                );
            });
        }
    };

    render() {
        return (
            <div id="accordianId" role="tablist" aria-multiselectable="true">
                { this.index() }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNote)
