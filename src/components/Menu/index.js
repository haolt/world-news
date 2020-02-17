import React from 'react';
import { NavLink } from "react-router-dom";
import Avatar from '../../assets/images/avatar.png';
import { routes } from './routes';
import './styles.scss';

const Menu = () => (
  <ul className="navigations">
    {
      routes.map(route => (
        <li key={ route.id }>
          <NavLink exact to={ route.path } className="navigations__route">
            { route.name && route.name }
            { route.img && <img src={ Avatar } alt="avatar" /> }
          </NavLink>
        </li>
      ))
    }
  </ul>
);
export default Menu;