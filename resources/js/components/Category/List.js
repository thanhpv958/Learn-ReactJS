import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {

    constructor() 
    {
        super();
        this.state = {
            categories: []
        }
    }

    /**
     * Life cycle method
     */
    componentDidMount()
    {
        this.fetchCategories().then(response => {
            this.setState({ categories: response.data.data });
        });
    }

    /**
     * Fetch categories
     */
    fetchCategories()
    {
        return axios.get('http://127.0.0.1:8001/api/categories');
    }

    /**
     * Append categories
     */
    appendCategories()
    {
        return this.state.categories.map((category, key) => {
            return (
                <tr key={ key + 1 }>
                    <th scope="row">{ key + 1 }</th>
                    <td>{ category.name }</td>
                    <td>Active</td>
                    <td>{ category.created_at }</td>
                    <td>{ category.updated_at }</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.appendCategories() }
                    </tbody>
                </table>
            </div>
        );
    }
}
