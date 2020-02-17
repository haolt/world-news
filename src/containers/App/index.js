import React from 'react';
import { Switch, Route } from "react-router-dom";
import { basePath } from '../../constants/basePath';
import './styles.scss';
import Header from '../../components/Header';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import Footer from '../../components/Footer';
import StoryPage from '../StoryPage';
import WorldNewsPage from '../WorldNewsPage';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path={`${ basePath }/`}>
        <HomePage/>
      </Route>
      <Route exact path={`${ basePath }/story`}>
        <StoryPage />
      </Route>
      <Route path={`${ basePath }/story/world-news`}>
        <WorldNewsPage />
      </Route>
      <NotFound />
    </Switch>
    <Footer />
  </React.Fragment>
)

export default App;
