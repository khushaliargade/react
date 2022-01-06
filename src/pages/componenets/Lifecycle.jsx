import React, { Component } from 'react';
class Lifecycle extends Component {
    state = {
        name: "peter"
    }
    constructor() {
        super();
        this.state = {
            name: "john"
        }
        console.log('constructor');
    }
    render() {
        return (
            <div>
                className="app"
                {this.state.name}
            </div>
        );
    }
}
export default Lifecycle;