import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export default class HighlightStory extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="highlight">
          <h3 className="highlight__question">
            Quisque lo or dipisicing elit esn.
          </h3>
          <q className="highlight__quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem ipsum non, minima quis necessitatibus deserunt laborum ab doloribus, nemo ipsa ratione in officiis reiciendis accusantium quibusdam repellendus iste excepturi?
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem ipsum non, minima quis necessitatibus deserunt laborum ab doloribus, nemo ipsa ratione in officiis reiciendis.
          </q>
        </div>
        <h3 className="highlight__title">
          Title - Subtitle
        </h3>
        <p className="highlight__info news-item__time">
          <FontAwesomeIcon icon={ faClock } />
          <span className="highlight__time">3 hours</span>
          ago by 
          <span className="highlight__author">Worldnews</span>
        </p>
      </React.Fragment>
    );
  }
}
