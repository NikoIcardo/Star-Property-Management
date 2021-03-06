import React from 'react';

const CarouselItem = ({ home }) => {
  return (
    <div className={`carousel-item ${home.id === 1 && 'active'}`} key={home.id}>
      <img
        className="d-block w-100 img-fluid"
        src={'./img/' + home.image}
        alt={home.description}
      />
      <div className=" d-none d-sm-block img-caption mb-4 mx-auto">
        <h3>{home.description}</h3>
      </div>
    </div>
  );
};

export default CarouselItem;
