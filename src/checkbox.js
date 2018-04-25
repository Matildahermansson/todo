import React, { Component } from "react";
class checkbox extends React.Component {
    constructor(props) {
        super(props);
        /* set the initial checkboxState to true */
        this.state = {
            checkboxState: true
        }
    }
    /* prevent form submission from reloading the page */
    onSubmit(event) {
        event.preventDefault();
    }
    /* callback to change the checkboxState to false when the checkbox is checked */
    toggle(event) {
        this.setState({
            checkboxState: !this.state.checkboxState
        });
    }
    render() {
        const checkedOrNot = [];
        checkedOrNot.push(
            <p>{this.state.checkboxState ? 'Unchecked' : 'Checked'}</p>
        );
        const checkbox = (
            <span>
        <input
            type="checkbox"
            onClick={this.toggle.bind(this)}
        />
        <label>Checkbox</label>
      </span>
        );

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {checkbox}
                    <button type="submit">Submit</button>
                </form>
                {checkedOrNot}
            </div>
        );
    }
}
// ReactDOM.render(<checkbox />, document.getElementById("container"));