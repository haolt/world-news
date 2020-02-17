import React from 'react';
import { Helmet } from 'react-helmet';
import Introduction from '../Introduction';
import Section from '../../components/Section';
import TrendingNews from '../TrendingNews';
import HappeningNowNews from '../HappeningNowNews';
import NewsItemNomal from '../../components/NewsItem';

const HomePage = () => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="WorldNews Home"
      />
    </Helmet>
    <Introduction />
    <section className="bg-gray">
      <div className="container">
        <Section title="Trending">
          <TrendingNews />
        </Section>
        <Section title="Happening now">
          <HappeningNowNews />
        </Section>
      </div>
    </section>
    <NewsItemNomal />
  </React.Fragment>
);

export default HomePage;