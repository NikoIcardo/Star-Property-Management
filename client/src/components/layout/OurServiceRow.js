import React, { Fragment } from 'react';

const OurServiceRow = ({ row }) => {
  return (
    <Fragment>
      <div className="row p-4">
        <div className={`col-12 ${row.alignment === 'right' && 'text-right'}`}>
          <h3>{row.header}</h3>
        </div>
      </div>
      <div className="row">
        <div className={`col-4 ${row.alignment === 'right' && 'order-last'}`}>
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
    </Fragment>
  );
};

export default OurServiceRow;
