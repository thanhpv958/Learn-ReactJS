import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import firebaseConnect from './firebaseConnect';

class App extends Component {
    render() {
        console.log(firebaseConnect);
        return (
            <div className="App">
                <header>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>

                { this.props.product }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.product
    }
}

export default connect(mapStateToProps)(App)
