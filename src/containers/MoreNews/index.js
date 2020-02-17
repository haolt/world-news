import React from 'react';
import NewsItem from '../../components/NewsItem';
import { moreNews } from './news.data';
import './styles.scss';

const MoreNews = () => (
  moreNews.map(news => (
    <NewsItem
      key={news.id}
      title={ news.title }
      img={ news.img }
      category={ news.category }
      excerpt={ news.excerpt }
      time={ news.time }
    />
  ))
);

export default MoreNews;
