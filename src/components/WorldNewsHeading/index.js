import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { basePath } from '../../constants/basePath';
import './styles.scss';

export default class WorldNewsHeading extends Component {
  render() {
    return (
      <section className="world-news-heading d-flex">
        <ul className="breadcrumb">
          <li>
            <Link to={`${ basePath }/`}>
              <FontAwesomeIcon icon={ faHome } />
              &nbsp;
              Home
            </Link>
          </li>
          &gt;
          <li>
            <Link to={`${ basePath }//story/world-news`} className="active">
              World news
            </Link>  
          </li>
        </ul>
        <button type="button" className="btn btn-bars">
          <FontAwesomeIcon icon={ faBars } />
        </button>
      </section>
    );
  }
}
