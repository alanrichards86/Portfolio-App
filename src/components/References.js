import React, { Component } from 'react';
import ShoulderPressCat from '../imgs/ShoulderPressCat.jpeg';
import BabyLifting from '../imgs/BabyLifting.jpeg';
import PerfectPushups from '../imgs/PerfectPushups.jpeg'

import '../styles/Reference.css';

export default class References extends Component {

  render(){
    return(
      <div className='mainDiv'>
        <div className='referenceDiv-1 reference'>
          <img className='img' src={ShoulderPressCat}/>
          <h3>Johnny B</h3>
          <blockquote>
            <p>Shoulder pressing cats is what I do but I did not get this way without push ups !
              <br/>
              Do Push Ups!!!
            </p>
          </blockquote>
        </div>

        <div className='referenceDiv-2 reference'>
          <img className='img' src={BabyLifting}/>
          <h3>Baby G</h3>
          <blockquote>
            <p>Deadlifing is not easy but as a baby I could not have done it with out push ups!
              <br/>
              Do Push Ups!!!
            </p>
          </blockquote>
        </div>

        <div className='referenceDiv-3 reference'>
          <img className='img' src={PerfectPushups}/>
          <h3>Perfect P</h3>
          <blockquote>
            <p>Perfect Pushups get it ! You should to !
              <br/>
              Do Push Ups!!!
            </p>
          </blockquote>
        </div>

      </div>
    );
  }
}
