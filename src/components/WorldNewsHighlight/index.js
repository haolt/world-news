import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/images/avatar2.png';
import Elephen from '../../assets/images/elephen.jpg';
import './styles.scss';

export default class WorldNewsHighlight extends Component {
  render() {
    return (
      <section className="world-news-highlight">
        <div className="row">
          <div className="col-md-4">
            <Link to="/author" className="world-news-highlight__author">
              <img src={ Avatar } alt="avatar" />
            </Link>
            <h3 className="world-news-highlight__title">
              Phasellus eu nulla malesuada, luctus diam.
            </h3>
          </div>
          <div className="col-md-8">
            <p className="world-news-highlight__quote world-news-highlight__quote--custom">
              Lorem ipsum dolor sit amet consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic electetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elititt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elit
              <br/>
              <span className="news-item__time world-news-highlight__time">
                <FontAwesomeIcon icon={ faClock } />
                3 hoursago
              </span>
            </p>
          </div>
        </div>
        <img src={ Elephen } alt="avatar" className="my-3" />
        <div className="row">
          <div className="col-md-8">
            <p className="world-news-highlight__quote">
              Lorem ipsum dolor sit amet consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipisic electetur adipisicingsectetur adipisic elitt consectetur adipisicingsectetur adipis.
            </p>
          </div>
          <div className="col-md-4">
            <p className="world-news-highlight__quote--bold">
              Lorem ipsum dolor sit amet consectetur adipisicingsectetur adipisic elitt consectetur
            </p>
          </div>
        </div>
      </section>
    );
  }
}
