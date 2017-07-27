import React, { Component } from 'react';
import DanceGif from '../imgs/DanceGif.gif';

export default class Baselayout extends Component {
  render() {
    return (
      <div className="baseDiv">

        <img src={DanceGif}/>

      </div>
    );
  }
}
