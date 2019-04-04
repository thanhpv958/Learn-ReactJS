import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#accordianId" href={ '#section' + this.props.index } aria-expanded="true" aria-controls="section1ContentId">
                            { this.props.title }
                        </a>
                    </h5>
                </div>
                <div id={ 'section' + this.props.index } className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        { this.props.content }
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;
