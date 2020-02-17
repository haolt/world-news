import React from 'react';
import NewsItem from '../../components/NewsItem';
import { trendingNews } from './news.data';
import './styles.scss';

const TrendingNews = () => (
  <div className="row">
    {
      trendingNews.map(news => (
        <div className="col-md-4" key={ news.id }>
          <NewsItem
            key={news.id}
            title={ news.title }
            img={ news.img }
            category={ news.category }
            excerpt={ news.excerpt }
            time={ news.time }
            isTrending= { true }
          />
        </div>
      ))
    }
  </div>
);

export default TrendingNews;