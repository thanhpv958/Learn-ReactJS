import React, { Component } from 'react';

import AddNote from './Add';
import ListNote from './List';

class IndexNote extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-left">
                    <div className="col-8">
                        <ListNote />
                    </div>

                    <div className="col-4">
                        <AddNote />
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexNote;
