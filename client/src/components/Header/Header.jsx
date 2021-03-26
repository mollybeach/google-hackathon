import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avi from "../../assets/logos/avi.png";
import './Header.scss';
import logo from '../../assets/logos/virus.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
          <div className='header__company'>Clinic</div>
        <Link to="/"><img src={logo} className="header__logo"alt="Health Logo"/></Link>
        <div className="header__partition-input">
        <input className="header__search-input" placeholder="Search"></input>
        </div>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/home" exact className="header__nav-item" activeClassName="header__nav-item--active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/home/profile" className="header__nav-item" activeClassName="header__nav-item--active">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/survey" className="header__nav-item" activeClassName="header__nav-item--active">Survey</NavLink>
          </li>
          <li>
          <img className="header__avi" src={Avi} alt=""></img>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;