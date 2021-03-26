import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import PageB from './components/PageB/PageB';
import Header from './components/Header/Header'

class App extends Component {
  state = {
    homeList : null,
    contactList: null,
    profileList: null
}

componentDidMount(){
axios.get('http://localhost:8080/home')
  .then(res=>{
  this.setState({
  homeList :res.data
  })
  axios.get('http://localhost:8080/contact')
  .then(res=>{
  this.setState({
  conrtactList :res.data
})
})
}
)  
}
  render() {
    const {homeList, profileList, contactList} = this.state;

    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
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