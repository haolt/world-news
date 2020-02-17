import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Avatar from '../../assets/images/avatar2.png';
import './styles.scss';

export default class WorldNewsIntro extends Component {
  render() {
    return (
      <section className="world-news-intro-wrap">
        <div className="world-news-intro">
          <h2 className="world-news-intro__title">World News</h2>
          <hr className="world-news-intro__line"/>
          <p className="world-news-intro__description">
            Lorem ipsum dolor sit amet consectetur adipisicingsectetur adipisic elit
          </p>
          <Link to="/author" className="world-news-intro__author">
            <img src={ Avatar } alt="avatar" />
          </Link>
        </div>
      </section>
    );
  }
}
