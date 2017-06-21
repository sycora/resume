import {profileLoader} from '../actions/profileLoader';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const styleMain = {
    overflow: 'hidden'
};

const styleContainer = {};

class AppHeader extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.id) {
            this
                .props
                .profileLoader();
        }
    }
    
    render() {
        const {me, isFetching} = this.props;
        const profile = me.profile;
        return (
            <main style={styleMain}>
                <div style={styleContainer}></div>
            </main>
        )
    }
}

const reduxStateToProps = state => {
    const {auth, me} = state;

    const {isFetching} = me;

    return {auth, me, isFetching}
}

export default connect(reduxStateToProps, {profileLoader})(AppHeader)