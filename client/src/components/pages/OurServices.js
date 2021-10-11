import React from 'react';
import { pageHeader } from '../data/ourServicesData';

import './OurServices.css';

const OurServices = () => {
  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12">
          <img
            className=" figure-img img-fluid border-bottom border-dark"
            src={pageHeader.img}
            alt={pageHeader.text}
          />
          <h3 class="img-caption">"{pageHeader.text}"</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Our Services</h1>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
