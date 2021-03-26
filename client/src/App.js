import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

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
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home homeList = {homeList} contactList={contactList} profileList = {profileList}{...props} />} />
          <Route exact path={[`/`, `home/profile`]} render = {(props)=> <Profile homeList = {homeList} contactList={contactList} profileList = {profileList}{...props} />} />
            <Route exact path = '/contact'    render = {(props)=> <Contact homeList = {homeList}  contactList={contactList} {...props} />} />
        </Switch>
        <Footer/>
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