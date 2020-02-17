import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

const Pagination= ({pageTotal}) => (
  <ul className="pagination mb-5 pb-5">
    <li>
      <Link to={`/story/world-news?page=${1}`} className="active">
        01
      </Link>
      <Link to={`/story/world-news?page=${2}`}>
        02
      </Link>
      <Link to={`/story/world-news?page=${3}`}>
        03
      </Link>
      <Link to={`/story/world-news?page=${4}`}>
        04
      </Link>
      <Link to={`/story/world-news?page=${5}`}>
        05
      </Link>
      <Link to={`/story/world-news?page=${6}`}>
        06
      </Link>
      <Link to={`/story/world-news?page=${'more'}`}>
        ...
      </Link>
    </li>
  </ul>
);

export default Pagination;
