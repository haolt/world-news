import React, { Component } from 'react';
import Section from '../../components/Section';
import './styles.scss';
import MoreNews from '../MoreNews';

export default class Introduction extends Component {
  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-8 p-3 banner-wrap">
            <div className="banner">
              <h2 className="banner__title">World News</h2>
              <h3 className="banner__subtitle">Amazing places in America to visit</h3>
              <p className="banner__description">
                For some reason - this country, this city, this neighborhood, this particular street - is the place you are living a majority of our life in.
              </p>
              <button className="btn banner__btn">Learn more</button>
            </div>
          </div>
          <div className="col-md-4 more-news-wrap">
            <Section title="More news"
              hasBorderBtm={ true }
            >
              <MoreNews />
            </Section>
          </div>
        </div>
      </section>
    );
  }
}
