import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
    render() {
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
