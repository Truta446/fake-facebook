import React, { Component } from 'react';

import Facebook from '../../assets/facebook.png';

import './style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={Facebook} />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;