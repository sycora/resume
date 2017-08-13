import {profileLoader} from '../actions/profileLoader';
import React, {Component} from 'react';
import {connect} from 'react-redux';

const styleMain = {
  height: 160,
  overflow: 'hidden',
  'background': 'rgba(41,52,106,1)',
  'background': '-moz-linear-gradient(-23.6deg, rgba(41,52,106,1) 0%, rgba(41,52,106,1) 164px, rg' + 'ba(41,52,105,0) 165px, rgba(44,42,92,0) 100%)',
  /* FF3.6-15 */
  'background': '-webkit-linear-gradient(-23.6deg, rgba(41,52,106,1) 0%,rgba(41,52,106,1) 164px,r' + 'gba(41,52,105,0) 165px,rgba(44,42,92,0) 100%)',
  /* Chrome10-25,Safari5.1-6 */
  'background': 'linear-gradient(156.4deg, rgba(41,52,106,1) 0%,rgba(41,52,106,1) 164px,rgba(41,5' + '2,105,0) 165px,rgba(44,42,92,0) 100%)',
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#002c2a5c',GradientType=1 )`/* IE6-9 fallback on horizontal gradient */
};

const styleContainer = {
    'backgroundColor': '#3F435E',
    'boxSizing': 'border-box',
    width: '120%',
    height: '100%',
    'WebkitTransformOrigin': '0 100%',
    'transformOrigin': '0 100%',
    transform: 'rotate(-23.6deg) translate(42px, 16px)',
    color: '#FFF'
};

const styleImage = {
  background: '#AA3C2D',
  'borderRadius': '50%',
  bottom: -20,
  height: 60,
  left: 160,
  position: 'absolute',
  width: 60
}

const styleTitle = {
  color: 'white',
  'fontFamily': `'Racing Sans One', cursive`,
  'fontSize': 36,
  margin: '0 8px'

}

class AppHeader extends Component {
  render() {
    const {auth, me} = this.props;

    return (
      <main style={styleMain}>
        <div style={styleContainer}>
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0
          }}>
            <h3 style={styleTitle}>Résumé</h3>
            {me && me.profile && me.profile.smallPictureUrl
              ? (<img style={styleImage} src={me.profile.smallPictureUrl}/>)
              : (<img style={styleImage} src="" alt=""/>)}
          </div>
        </div>
      </main>
    )
  }
}

export default AppHeader;
