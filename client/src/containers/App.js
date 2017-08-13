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
    const drawerSize = this.props.auth.id
      ? 300
      : window.innerWidth >= 960
        ? 300
        : window.innerWidth;
    this.setState({drawerWidth: drawerSize, width: window.innerWidth, height: window.innerHeight});
  }

  handleToggle = () => this.setState({
    drawerOpen: !this.state.open
  });

  render() {
    const {auth, authLoader, isFetching, logout, me} = this.props;
    const isEmpty = auth == null;
    return (
      <MuiThemeProvider>
        <div className="App-wrapper">
        {/* Mobile*/}
        <MediaQuery maxWidth={959}>
          <div className="App">
            <AppHeader {...auth} {...me}/>
            <main className="App-content">
              {auth.id
                ? <Profile/>
                : <PageWelcome/>}
            </main>
          </div>
        </MediaQuery>
        {/* Desktop */}
        <MediaQuery minWidth={960}>
          <div className="App">

            <Drawer
              open={this.state.drawerOpen}
              width={this.state.drawerWidth}
              className="App-drawer">
              <AppHeader {...auth} {...me}/> 
                {auth.id
                  ? (<div>
                      <MenuItem>Menu Item</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                    </div>)
                  : <PageWelcome/>
                  }
            </Drawer>

            <div className="App-header">
              <h2>Welcome to Résumé</h2>
            </div>
            <main className="App-content">
              {auth.id
                ? <Profile/>
                : <PageWelcome/>}
            </main>
          </div>
        </MediaQuery>
        </div>
      </MuiThemeProvider>

    );
  }
}

const reduxStateToProps = state => {
  const {auth, isFetching, me} = state;

  return {auth, isFetching, me}
}

export default connect(reduxStateToProps, {authLoader, logout})(App)
