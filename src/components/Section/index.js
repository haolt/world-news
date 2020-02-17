import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { Link } from 'react-router-dom';

const Section = ({ title, children, hasBorderBtm }) => (
  <section className="section">
    <div className="section__heading"
      style={
        hasBorderBtm ? { borderBottom: '1px solid #0000000a' } : { borderBottom : 'none'}
      }
    >
      <h2 className="section__title">{ title }</h2>
      <div className="section__navigate">
        <Link to="/">
          <FontAwesomeIcon icon={ faAngleLeft } />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={ faAngleRight } className="active" />
        </Link>
      </div>
    </div>
    { children }
  </section>
);

export default Section;