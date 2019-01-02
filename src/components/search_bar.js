import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            term: 'hello world',
            darkmdoe: false
        };
    }

    render() {
        return (
            <div className="row">
                <div className="search-bar col-sm-10">
                    <input 
                        className="form-control vidTitle"
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event.target.value)} />
                    <p>
                        <span className="bold">Current state:</span> <span className="vidState">{this.state.term}</span>
                    </p>
                </div>
                <div className="col-sm-2">
                    <span className="input-group">
                        <span className="input-group-addon">
                            <input
                                name="toggleDark"
                                type="checkbox"
                                value={this.state.darkmode}
                                onChange={() => this.onDarkModeToggle()} />
                        </span>
                    </span>
                </div>
            </div>
        );
    }    

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    onDarkModeToggle() {
        this.props.onDarkModeToggle();
    }
};

export default SearchBar; 