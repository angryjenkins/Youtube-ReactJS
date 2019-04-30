import React, { Component } from "react"

class Toggle extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            darkmode: false
        };
    }

    render (){
        return (
            <div className="col-sm-2">
                <span className="input-group">
                    <span className="input-group-addon">
                        <label htmlFor="toggleDark">Darkmode:</label>
                        <input
                            name="toggleDark"
                            type="checkbox"
                            value={this.state.darkmode}
                            onChange={() => this.onDarkModeToggle()} />
                    
                    </span>
                </span>
            </div>
        )
    }

    onDarkModeToggle() {
        this.props.onDarkModeToggle();
    }
}

export default Toggle