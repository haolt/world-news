import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/images/avatar.png';
import Social2 from '../../assets/images/social2.png';
import Social3 from '../../assets/images/social3.png';
import Social4 from '../../assets/images/social4.png';
import Social1 from '../../assets/images/social1.png';
import { routes2, routes3 } from '../Footer/routes';
import './styles.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="navigation-mobile">
        <label htmlFor="sidebar-toggle" className="label-toggle label-toggle-logo">
          Logo
        </label>
        <ul className="routes routes-sb">
          <li>
            <NavLink className="routes__item--sb" to="/">
              <FontAwesomeIcon icon={ faHome } />
              &nbsp;
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="routes__item--sb" to="/story/world-news">
              <FontAwesomeIcon icon={ faCompass } />
              &nbsp;
              World News
            </NavLink>
          </li>
          <li>
            <NavLink className="routes__item--sb" to="/contact">
              <FontAwesomeIcon icon={ faEnvelope } />
              &nbsp;
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="routes__item--sb" to="/profile">
              <img src={ Avatar } alt="avatar" />
              &nbsp;
              Profile
            </NavLink>
          </li>
        </ul>
        
        <footer className="footer-sidebar">
          <div className="footer-sidebar__btw">
            <ul className="routes--ft">
              { routes2.map( route => <li key={ route.id }><NavLink className="routes__item--ft" to={ route.path }>{ route.name }</NavLink></li>) }
            </ul>
            <ul className="routes--ft">
              { routes3.map( route => <li key={ route.id }><NavLink className="routes__item--ft" to={ route.path }>{ route.name }</NavLink></li>) }
            </ul>
          </div>
          <div className="footer-sidebar__btm">
            <ul className="routes social-media d-flex">
              <li>
                <Link to="/">
                  <img alt="social" src={ Social2 } />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="social" src={ Social3 } />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="social" src={ Social4 } />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img alt="social" src={ Social1 } />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
