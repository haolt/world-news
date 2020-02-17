import React, { Component } from 'react';
import './styles.scss';

export default class WorldNewsFilter extends Component {
  render() {
    return (
      <section className="world-news-filter-wrap">
        <div className="world-news-filter">
          <div className="form-group world-news-filter__group">
            <label htmlFor="inputGroupSelect02">Select a group</label>
            <select defaultValue={''} className="custom-select" id="inputGroupSelect02">
              <option value="">Select...</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
          <div className="form-group world-news-filter__group">
            <label htmlFor="exampleInputPassword1">Enter the first keywords</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn world-news-filter__btn">Search</button>
        </div>
      </section>
    );
  }
}
