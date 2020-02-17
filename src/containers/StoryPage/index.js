import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import StoryIntro from '../StoryIntro';
import HighlightStory from '../HighlightStory';
import StoryItem from '../../components/StoryItem';
import './styles.scss';

export default class StoryPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Discover Story</title>
          <meta
            name="description"
            content="WorldNews Story"
          />
        </Helmet>
        <StoryIntro />
        <section className="container py-5">
          <div className="row">
            <div className="col-md-4 pr-4">
              <HighlightStory />
            </div>
            <div className="col-md-8 col-rule pl-4">
              <StoryItem />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
