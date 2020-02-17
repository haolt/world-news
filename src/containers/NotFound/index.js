import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { basePath } from '../../constants/basePath';
import './styles.scss';

export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>NotFound Page</title>
          <meta
            name="description"
            content="NotFound Page"
          />
        </Helmet>
        <section className="notfound">
          <h2 className="notfound__notice">Page was not found.
            Return <Link to={`${ basePath }/`}>Home Page</Link>.
          </h2>
        </section>
      </React.Fragment>
    );
  }
}
