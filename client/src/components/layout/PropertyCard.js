import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex align-items-stretch propertyCard">
      <div className="card text-center">
        <img
          className="card-img-top img propertyPhoto"
          src={property.img[0].path}
          alt={property.img[0].alt}
        />
        <div className="card-body mb-0 p-1 bg-olive">
          <h4 className="card-title mt-2 mb-0">{property.address}</h4>
        </div>
        <div className="card-body mt-0" style={{ height: '220px' }}>
          <p className="card-text">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
