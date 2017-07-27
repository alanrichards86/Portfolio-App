import React, { Component } from 'react';
import SkinnyStrong from '../imgs/SkinnyStrong.jpeg'
import Giphy from '../imgs/giphy.gif'
import '../styles/About.css';

export default class About extends Component {
  render() {
    return (
      <div className="aboutDiv">
        <h1>About</h1>

        <div className='paraDiv'>
          <p>Do you want to be huge ?!?</p>
          <div className='img1_Div'>
            <img src={SkinnyStrong} className='img1'/>
          </div>
            <br/>
          <p>
            Well that is why I am here! I started doing pushups when I was 10 and I did not stop for 3 years.
            <br/>
            <br/>
            <br/>

            Thats all it takes.... Pushups!
           </p>

           <br/>

           <div className='img2_Div'>
             <img src={Giphy} className='img2'/>
           </div>
        </div>
      </div>
    );
  }
}
