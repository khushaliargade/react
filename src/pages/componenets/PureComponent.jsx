import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class PureCompo extends PureComponent {
    render() {
        console.log('*******pure component render****')
        return (
            <div>Pure Component{this.props.name}</div>

        );
    }
}
PureComponent.propTypes = {
};
export default PureCompo;