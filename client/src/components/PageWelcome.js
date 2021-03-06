import './PageWelcome.css'
import SignInButton from '../components/SignInButton';
import {authLoader, logout} from '../actions/authLoader';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const styleMain = {
    overflow: 'hidden'
};

const styleContainer = {};

class PageWelcome extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.id) {
            this
                .props
                .profileLoader();
        }
    }

    render() {
        const {auth, authLoader, isFetching, logout} = this.props;
        const isEmpty = auth == null;
        return (
            <main style={styleMain}>
                <div style={styleContainer}>
                    <p className="App-intro">
                        Welcome to résumé.<br/>
                        no more papér<br/>
                        no more pain<br/>
                        just you,<br/>
                        your éxperiencé<br/>
                        &<br/>
                        the futuré.

                    </p>
                    <h4>Begin<br/>with</h4>
                    {!isFetching && <SignInButton id={auth.id} signInClick={authLoader} signOutClick={logout}/>}
                    {isEmpty
                        ? (isFetching
                            ? <h2>Logging in...</h2>
                            : <h2>Empty.</h2>)
                        : <div
                            style={{
                            opacity: isFetching
                                ? 0.5
                                : 1
                        }}></div>
}
                </div>
                <div
                    style={{
                    backgroundColor: '#2C2A5C',
                    height: 3,
                    width: '100%'
                }}/>
            </main>
        )
    }
}

const reduxStateToProps = state => {
    const {auth, isFetching} = state;

    return {auth, isFetching}
}

export default connect(reduxStateToProps, {authLoader, logout})(PageWelcome)