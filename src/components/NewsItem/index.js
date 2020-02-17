import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { basePath } from '../../constants/basePath';
import './styles.scss';

const NewsItem = ({
  title,
  category,
  img,
  excerpt,
  time,
  author,
  isTrending
}) => {
  return (
    <Link to={`${ basePath }/`}>
      <article className={`news-item ${ isTrending ? 'trending' : '' }`}>
        { img && (
          <div className="news-items__img">
            <img alt="lanscape" src={ img } />
          </div>
        )}
        { category && <span className="news-item__category">{ category }</span> }
        { title && <h3 className={`news-item__title ${ isTrending ? 'trending' : '' }`}>{ title }</h3> }
        { excerpt && <p className={`news-item__excerpt ${ isTrending ? 'trending' : '' }`}>{ excerpt }</p>}
        { time && (
            <span className={`news-item__time ${ isTrending ? 'trending' : '' }`}>
              <FontAwesomeIcon icon={ faClock } />
              &nbsp;
              { `${time} ago ` }{ author && `by ${ author }` }
            </span>
          )
        }
      </article>

    </Link>
  );
}

export default NewsItem;