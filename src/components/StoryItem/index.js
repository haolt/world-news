import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/images/avatar.png';
import PaddyFieldImg from '../../assets/images/paddy-field.jpg';
import './styles.scss';

export default class StoryItem extends Component {
  render() {
    return (
      <article className="story">
        <div className="story__author">
          <img src={ Avatar } alt="avatar" />
          <span>Jonathan Walker</span>
        </div>
        <p className="story__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi delectus expedita harum suscipit? Optio amet consectetur adipisicing elit. Praesentium scipit? Optio tenetur modi officia ipsum aut, blanditiis sint iste, aspernatur quod, eligendi maxime odio ea autem.</p>
        <p className="news-item__time">
          <FontAwesomeIcon icon={ faClock } />
          <span className="highlight__time">3 hours</span>ago
        </p>
        <div className="story__img">
          <img alt="lanscape" src={ PaddyFieldImg } />
        </div>
      </article>
    );
  }
}
