import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'hello world' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    className="form-control vidTitle"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />
                <p><span className="bold">Current state:</span> <span className="vidState">{this.state.term}</span></p>
            </div>
        );
    }    

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar; 