import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { basePath } from '../../constants/basePath';
import Avatar from '../../assets/images/avatar.png';
import './styles.scss';
import Sidebar from '../Sidebar';
import Menu from '../Menu';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <label htmlFor="sidebar-toggle" className="label-toggle">
          <FontAwesomeIcon icon={ faBars } />
        </label>
        <input type="checkbox" id="sidebar-toggle" />
        <Sidebar />
        <h1>
          <Link to={`${basePath}/`} className="logo">Logo</Link>
        </h1>
        <Menu />
        <Link to={`${basePath}/profile`} className="profile-wrap">
          <img alt="avatar" src={ Avatar } className="profile"/>
        </Link>
      </header>
    );
  }
}
