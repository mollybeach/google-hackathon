import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import Home from './components/Home/Home';
import PageB from './components/PageB/PageB';

import PageA from './components/PageA/PageA';
import Header from './components/Header/Header';

class App extends Component {
  state = {
    homeList: null,
    contactList: null,
    profileList: null
  }

  componentDidMount() {
    axios.get('http://localhost:8080/home')
      .then(res => {
        this.setState({
          homeList: res.data
        })
        axios.get('http://localhost:8080/contact')
          .then(res => {
            this.setState({
              conrtactList: res.data
            })
          })
      }
      )
  }
  render() {
    const { homeList, profileList, contactList } = this.state;

    return (
      <div className='app'>
        <BrowserRouter>
          <Header />
          <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/pagea' component={PageA} />
             <Route path='/pageb' exact component={PageB} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


/*     if(homeList===null ) {
      return <p className = "Home__loading">Loading...</p>
    }
    if( contactList===null ) {
      return <p className = "Contact__loading">Loading...</p>
    }*/