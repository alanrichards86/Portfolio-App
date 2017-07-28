import React, { Component } from 'react';
import '../styles/Contacts.css';

export default class Contacts extends Component{

  render(){
    let legendStyle={
      fontSize: 14
    }
    let inputInfo={
      textAlign: 'center'
    }
    return (
      <div className='mainDiv'>
        <br/>
        <div className='contactInfo'>
          <div className='formDiv'>
            <form className='form'>
              <fieldset className='fieldSet'>
                <legend style={legendStyle}>Contact Us</legend>
                <input type='text' className='input1' placeholder='Name' style={inputInfo} />
                <input type='text' className='input2' placeholder='Email' style={inputInfo} />
                <textarea type='text' className='commentInput' placeholder='What would you like to ask us?'/>
                <button className='submitButton' type='submit'> Click It ! </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
