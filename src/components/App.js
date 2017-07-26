import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <header className='jumbotron header-tag'>

        <ul className='nav flex-column'>

          <li className='nav-item'>
              <div><Link className="nav-link active" to='/'>Home Page</Link></div>
          </li>

          <li className='nav-item'>
            <div><Link className="nav-link" to='/about'>About</Link></div>
          </li>

          <li className='nav-item'>
            <div><Link className="nav-link" to='/portfolio'>Portfolio</Link></div>
          </li>

          <li className='nav-item'>
            <div><Link className="nav-link" to='/base'>For Fun Click Here...</Link></div>
          </li>

        </ul>


        </header>

        {this.props.children}

      </div>
    );
  }
}
