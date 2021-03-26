import React, { Component } from 'react';
import './Home.scss';
//import hero from '../../assets/logos/vaccination.jpg'


class Home extends Component {
    
    render() {
        return (
            <div className = 'home'> Discover a healthier you.
            <div className="home__info">With options including phone, video, online chat and more, it’s easy to get care when and where it works for you.*
*If you travel out of state, virtual care may be limited due to state laws that may prevent doctors from providing care across state lines. Laws differ by state</div>
            <div className="home__hero"> </div>
            </div>
     
            
        );
    }
}

export default Home;