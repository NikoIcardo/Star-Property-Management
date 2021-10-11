import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card text-center">
        <img
          className="card-img-top"
          src={property.img[0].path}
          alt={property.img[0].alt}
          style={{ height: '320px' }}
        />
        <div className="card-body mb-0 bg-olive">
          <h4 className="card-title mt-2 mb-0">{property.address}</h4>
        </div>
        <div className="card-body mt-0">
          <p className="card-text">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
