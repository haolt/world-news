import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/images/avatar2.png';
import './styles.scss';

const StoryIntro = () => (
  <section className="story-intro-wrap">
    <div className="story-intro">
      <Link to="/story">
        <h2 className="story-intro__title">
            Amazing place to America to visit
        </h2>
      </Link>
      <ul className="story-intro__categories">
        <li>
          <Link to="/category">
            <FontAwesomeIcon icon={ faGlobeAmericas } />
            <span>Travel Guidelines</span>
          </Link>
        </li>
        <li>
          <Link to="/story/world-news">
            <FontAwesomeIcon icon={ faBook } />
            <span>World News</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="story-intro__author">
      <Link to="/author" className="story-author">
        <img src={ Avatar } alt="avatar" />
        by Steven Voorhees
      </Link>
    </div>
    <Link to="/story" className="story-intro__next next-story">
      <h3 className="next-story__title">
        Next story
        <FontAwesomeIcon icon={ faAngleRight } />
      </h3>
      <p className="next-story__description">
        Lorem ipsum dolor dipisicing elit.
        <br/>
        Doloribus delectus ullam qui, quia nesciunt
        <br/>
        Neque ipsa nos
      </p>
    </Link>
  </section>
);

export default StoryIntro;
