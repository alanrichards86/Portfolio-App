import React, { Component } from 'react';
import StrangeDude from '../imgs/StrangeDude.jpeg';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
        <h1>Home</h1>
        <div>
          <img src={StrangeDude} alt='Strange Guy'/>
        </div>

        <div className='paraDiv'>
          <p>Is this you ? Don't be this guy !!</p>
        </div>

      </div>
    );
  }
}
