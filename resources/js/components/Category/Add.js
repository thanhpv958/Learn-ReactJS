import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {

    constructor()
    {
        super();
        this.state = {
        };
    }

    /**
     * Request server to post data
     * @param {object} data 
     */
    storeCategory(data)
    {
        return axios.post('http://127.0.0.1:8001/api/categories', data);
    }

    /**
     * Get data store
     * @param {*} event 
     */
    getDataStore(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    /**
     * Submit data
     * @param {object} event 
     */
    onSubmit(event)
    {
        event.preventDefault();
       
        let category = {
            name: this.state.name
        };

        return this.storeCategory(category);
    }

    render() {
        return (
            <div>
                <form onSubmit={ () => this.onSubmit(event) }>
                    <div className="form-group">
                        <input type="text" name="name" onChange={ () => this.getDataStore(event) } className="form-control" placeholder="Category name" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
