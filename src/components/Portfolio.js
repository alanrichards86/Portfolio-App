import React, { Component } from 'react';
import FakeBodyBuilder from '../imgs/FakeBodyBuilder.png';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <br/>
        <h2> Get Huge ! Do Push Ups !</h2>

        <img src={FakeBodyBuilder}/>

        <br/>
        <br/>

        <h3>Mic Drop</h3>
        
      </div>
    );
  }
}
