import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Baselayout from './components/Baselayout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contacts';
import References from './components/References';




ReactDOM.render(
  <BrowserRouter>
    <App>

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/base' component={Baselayout}/>
        <Route path='/portfolio' component={Portfolio}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contacts}/>
        <Route path='/references' component={References}/>
      </Switch>

    </App>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
