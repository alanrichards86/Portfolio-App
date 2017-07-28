import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <header className='jumbotron header-tag'>

        <ul className='nav flex-column'>

          <li className='nav-item'>
              <div><NavLink className="nav-link active" exact to='/'>Home Page</NavLink></div>
          </li>

          <li className='nav-item'>
            <div><NavLink className="nav-link" to='/about'>About</NavLink></div>
          </li>

          <li className='nav-item'>
            <div><NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink></div>
          </li>

          <li className='nav-item'>
            <div><NavLink className="nav-link" to='/base'>For Fun Click Here...</NavLink></div>
          </li>

          <li className='nav-item'>
            <div><NavLink className="nav-link" to='/contact'>Contact Us</NavLink></div>
          </li>

          <li className='nav-item'>
              <div><NavLink className="nav-link active" to='/references'>References</NavLink></div>
          </li>

        </ul>


        </header>

        {this.props.children}

      </div>
    );
  }
}
