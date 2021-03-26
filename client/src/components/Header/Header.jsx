import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Avi from "../../assets/logos/avi.png";
import './Header.scss';
import logo from '../../assets/logos/virus.svg';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
      <Link to="/"className="header__logo"alt="Health Logo">  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4113 6.42416C24.4113 2.87619 21.5351 0 17.9871 0C14.4392 0 11.563 2.87619 11.563 6.42416L11.563 13.901C13.227 12.2947 15.4917 11.3065 17.9872 11.3065C20.4827 11.3065 22.7473 12.2946 24.4113 13.9008L24.4113 6.42416Z" fill="#FAB12B"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5633 29.5758C11.5633 33.1238 14.4395 36 17.9875 36C21.5354 36 24.4116 33.1238 24.4116 29.5758L24.4116 22.0986C22.7476 23.7052 20.4827 24.6935 17.9869 24.6935C15.4917 24.6935 13.2273 23.7056 11.5633 22.0996L11.5633 29.5758Z" fill="#329D4F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5758 24.4117C33.1238 24.4117 36 21.5355 36 17.9876C36 14.4396 33.1238 11.5634 29.5759 11.5634L22.0994 11.5634C23.7057 13.2274 24.6938 15.4921 24.6938 17.9876C24.6938 20.483 23.7056 22.7477 22.0993 24.4117L29.5758 24.4117Z" fill="#3375E0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.42416 11.5635C2.87619 11.5635 1.18916e-07 14.4397 7.66073e-08 17.9876C3.42983e-08 21.5356 2.87619 24.4118 6.42416 24.4118L13.9006 24.4118C12.2943 22.7478 11.3062 20.4832 11.3062 17.9877C11.3062 15.4922 12.2944 13.2275 13.9007 11.5635L6.42416 11.5635Z" fill="#E53932"/>
<ellipse cx="17.9873" cy="17.9877" rx="7.70899" ry="12.0774" fill="white"/>
<ellipse cx="17.988" cy="17.9877" rx="7.70899" ry="12.0774" transform="rotate(90 17.988 17.9877)" fill="white"/>
</svg> </Link>
          <div className='header__company'>Clinic</div>
        <div className="header__partition-input">
        <input className="header__search-input" placeholder="Search"></input>
        </div>
        <ul className="header__nav-list">
          <li>
            <NavLink to="/home" exact className="header__nav-item" activeClassName="header__nav-item--active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/home/profile" className="header__nav-item" activeClassName="header__nav-item--active">Appointments</NavLink>
          </li>
          <li>
            <NavLink to="/survey" className="header__nav-item" activeClassName="header__nav-item--active">Reports</NavLink>
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