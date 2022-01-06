import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { color: 'red' }
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
        this.setState({ color: 'green' })
        console.log(' componentDidMount')
    }

    render() {
        console.log(' render', this.state)
        return (<p>Heloo {this.state.color}</p>);
    }
}

export default App;