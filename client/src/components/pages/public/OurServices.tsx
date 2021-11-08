import React, { Component, Fragment } from 'react';
import { pageHeader, rows } from '../../data/ourServicesData';
import OurServiceRow from '../../layout/OurServiceRow';

class OurServices extends Component {
  render = () => (
    <Fragment>
      <div className="container-fluid mx-0 p-0">
        <div className="row">
          <div className="col-12">
            <img
              className=" figure-img img-fluid border-bottom border-dark"
              src={pageHeader.img}
              alt={pageHeader.text}
            />
            <h3 className="d-none d-md-block img-caption">"{pageHeader.text}"</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center bg-olive p-2">Our Services</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container-fluid mx-0 p-0">
        {rows.map((row) => (
          <OurServiceRow row={row} key={rows.indexOf(row)} />
        ))}
      </div>
    </Fragment>
  );
}

export default OurServices;
