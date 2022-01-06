import React, { Component } from 'react';
class user extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>users</div>
        );
    }
}
export default user;