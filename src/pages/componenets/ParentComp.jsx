import React, { Component } from 'react';
import PureCompo from './PureComponent';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state={
            name: 'vishwas'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'vishwas'
            })
        }, 2000)
    }
    render() {
        console.log('******parent component render******');
        return (
            <div>
                Parent components
                <RegComp name={this.state.name}/>
                <PureCompo name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;