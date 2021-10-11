import React from 'react';

const OurServiceRow = ({ row }) => {
  return (
    <div className="row p-4">
      <div className={`col-4 ${row.alignment === 'right' && 'order-last'}`}>
        <h3>{row.header}</h3>
        <img
          className="img-fluid"
          src={row.img.path}
          alt={row.img.alt}
          style={{ borderRadius: '4px' }}
        />
      </div>
      <div className={`col-8 text-center mt-5`}>
        <p>{row.text}</p>
      </div>
      <hr />
    </div>
  );
};

export default OurServiceRow;
