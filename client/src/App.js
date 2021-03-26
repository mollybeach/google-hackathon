import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home/Home';
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    homeList : null,
    contactList: null
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
    const {homeList,contactList} = this.state;

    return (
      <div className = 'app'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={[`/`, `/home`]} render = {(props)=> <Home homeList = {homeList} contactList={contactList}{...props} />} />
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