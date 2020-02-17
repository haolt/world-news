import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Social2 from '../../assets/images/social2.png';
import Social3 from '../../assets/images/social3.png';
import Social4 from '../../assets/images/social4.png';
import Social1 from '../../assets/images/social1.png';
import { routes1, routes2, routes3 } from './routes';
import './styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-1 d-flex">
              <Link to="/" className="logo footer-logo">Logo</Link>
            </div>
            <div className="col-md-5 d-flex">
              
              <ul className="routes">
                { routes1.map( route => <li key={ route.id }><Link className="routes__item" to={ route.path }>{ route.name }</Link></li>) }
              </ul>
              <ul className="routes">
                { routes2.map( route => <li key={ route.id }><Link className="routes__item" to={ route.path }>{ route.name }</Link></li>) }
              </ul>
              <ul className="routes">
                { routes3.map( route => <li key={ route.id }><Link className="routes__item" to={ route.path }>{ route.name }</Link></li>) }
              </ul>
            </div>
            <div className="col-md-3">
              <div className="subscribe-letter">
                <input type="email" className="form-control mb-2" aria-describedby="emailHelp" placeholder="Email" />
                <FontAwesomeIcon icon={ faPaperPlane } />
                <small id="emailHelp" className="form-text">We'll never share your email with anyon!</small>
              </div>
            </div>
            <div className="col-md-3">
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
          </div>
        </div>
      </footer>
    );
  }
}
