import React, { Component } from 'react';
import './App.css';
import IndexNote from './components/Note/Index';

class App extends Component {
    render() {
        return (
            <div className="App">
                <IndexNote />
            </div>
        );
    }
}

export default App;
