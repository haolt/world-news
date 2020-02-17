import React, { Component } from 'react';
import WorldNewsHeading from '../../components/WorldNewsHeading';
import WorldNewsIntro from '../../components/WorldNewsIntro';
import WorldNewsFilter from '../../components/WorldNewsFilter';
import WorldNewsHighlight from '../../components/WorldNewsHighlight';
import Pagination from '../../components/Pagination';

export default class WorldNewsPage extends Component {
  render() {
    return (
      <div className="container container-fluid-sm">
        <WorldNewsHeading />
        <section>
          <div className="row py-3">
            <div className="col-md-6 pr-md-0">
              <WorldNewsIntro />
            </div>
            <div className="col-md-6 pl-md-0">
              <WorldNewsFilter />
            </div>
          </div>
        </section>
        <WorldNewsHighlight />
        <Pagination pageTotal={ 6 }  />
      </div>
    );
  }
}
