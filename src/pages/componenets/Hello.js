import React, { Component } from 'react';

class Hello extends Component {
    constructor() {
        super();
        this.state = { color: 'blue' }
        console.log(' constructor')

    }
    static getDerivedStateFromProps() {
        console.log(' getDerivedStateFromProps')
        return {};
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate ')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevState.color)
        return {};
    }

    componentDidUpdate() {
        console.log('shouldComponentUpdate ')

    }

    componentDidMount() {
        this.setState({ color: 'black' })
        console.log(' componentDidMount')
    }

    render() {
        console.log(' render', this.state)
        return (<p>Lifecycle {this.state.color}</p>);
    }
}

export default Hello;