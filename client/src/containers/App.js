import './App.css';
import Profile from './Profile';
import AppHeader from '../components/AppHeader';
import PageWelcome from '../components/PageWelcome';
import SignInButton from '../components/SignInButton';
import {authLoader, logout} from '../actions/authLoader';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true,
      drawerWidth: '100%',
      width: '0',
      height: '0'
    };
    this.updateWindowDimensions = this
      .updateWindowDimensions
      .bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log()
    const drawerSize = window.innerWidth >= 960 ? 300 : '100%';
    this.setState({drawerWidth: drawerSize, width: window.innerWidth, height: window.innerHeight});
  }

  handleToggle = () => this.setState({
    drawerOpen: !this.state.open
  });

  render() {
    const {auth, authLoader, isFetching, logout} = this.props;
    const isEmpty = auth == null;
    return (
      <MuiThemeProvider>
        <div className="App">
          <Drawer open={this.state.drawerOpen} width={this.state.drawerWidth}>
            <AppHeader/>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>

          <div className="App-header">
            <h2>Welcome to Résumé</h2>
          </div>
          <main className="App-content">
            <p className="App-intro">
              {!isFetching && <SignInButton id={auth.id} signInClick={authLoader} signOutClick={logout}/>
}
            </p>
            {isEmpty
              ? (isFetching
                ? <h2>Logging in...</h2>
                : <h2>Empty.</h2>)
              : <div
                style={{
                opacity: isFetching
                  ? 0.5
                  : 1
              }}>
                <Profile/>
              </div>
}
          </main>
        </div>
      </MuiThemeProvider>

    );
  }
}

const reduxStateToProps = state => {
  const {auth, isFetching} = state;

  return {auth, isFetching}
}

export default connect(reduxStateToProps, {authLoader, logout})(App)
