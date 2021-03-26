import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import PageC from './components/PageC/PageC';
import PageB from './components/PageB/PageB';
import PageA from './components/PageA/PageA';
import PageE from './components/PageE/PageE';




export default function App() {
  return(
      <div className='app'>
        <BrowserRouter>
          <Header />
          <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/pagea' component={PageA} />
             <Route path='/pageb' exact component={PageB} />
             <Route path='/pagee' exact component={PageE} />
            <Route path='/pagec' component={PageC} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  
}




/*     if(homeList===null ) {
      return <p className = "Home__loading">Loading...</p>
    }
    if( appointmentsList===null ) {
      return <p className = "appointments__loading">Loading...</p>
    }*/