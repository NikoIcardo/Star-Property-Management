import React from 'react';

import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch propertyCard overlay">
      <div className="card text-center">
        <img
          className="img-fluid card-img-top propertyPhoto"
          src={property.img[0].path}
          alt={property.img[0].alt}
        />
        <div className="card-body mb-0 p-1 bg-olive">
          <h4 className="card-title mt-2 mb-0">{property.address}</h4>
        </div>
        <div className="card-body mt-0" style={{ height: '220px' }}>
          <p className="card-text">{property.description}</p>
        </div>

        <div className="hidden">
          <h2 className="align-middle mt-5">
            Interested in this Property? Click for More Info!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
