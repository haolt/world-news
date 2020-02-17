import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { basePath } from '../../constants/basePath';
import './styles.scss';

const NewsItemCustom = ({
  title,
  category,
  img,
  excerpt,
  time
}) => {
  return (
    <Link to={`${ basePath }/>`}>
      <article className="news-item--custom">
        { img && (
          <div className="news-item--custom__img">
            <img alt="lanscape" src={ img } />
          </div>
        )}
        <span className="news-item--custom__category">{ category }</span>
        <div className="news-item--custom__content">
          <h3 className="news-item--custom__title">{ title }</h3>
          <p className="news-item--custom__excerpt">{ excerpt }</p>
          <span className="news-item--custom__time">
            <FontAwesomeIcon icon={ faClock } />
            { time }
          </span>
        </div>
      </article>

    </Link>
  );
}

export default NewsItemCustom;