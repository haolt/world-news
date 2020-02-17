import React from 'react';
import NewsItem from '../../components/NewsItem';
import NewsItemCustom from '../../components/NewsItemCustom';
import { happeningNowNews } from './news.data';
import './styles.scss';

const HappeningNowNews = () => (
  <div className="news-happening">
    {
      happeningNowNews.map((news, index) => (
        <div key={news.id} className={`item item${index + 1}`}>
          {
            index < 2 ? (
              <NewsItemCustom
                title={ news.title }
                img={ news.img }
                category={ news.category }
                excerpt={ news.excerpt }
                time={ news.time }
              />
            ) : (
              <NewsItem
                title={ news.title }
                img={ news.img }
                time={ news.time }
                author= { news.author }
              />
            )
          }
        </div>
      ))
    }
  </div>
);

export default HappeningNowNews;

