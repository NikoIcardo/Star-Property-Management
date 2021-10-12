import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Property = ({ current }) => {
  console.log(current);
  return (
    <div className="container-fluid mx-0 p-0">
      {current !== null && (
        <Fragment>
          <div className="row">
            <div className="col-12">
              <h1 className="mt-2 text-center bg-olive p-2">
                {current.address}
              </h1>
            </div>
          </div>
          <div className="row">
            {current.img.map((photo) => (
              <div className="col-4 mt-5 mx-0">
                <img
                  className="img-fluid mx-0"
                  src={photo.path}
                  alt={photo.alt}
                />
              </div>
            ))}
          </div>
          <hr />
          <div className="row">
            <div className="col-4 m-2">
              <h2>Description</h2>
              <hr />
              <ul>
                <li>{current.title}</li>
                <li>Owner: {current.owner}</li>
                <li>Monthly Rent: {current.price}</li>
              </ul>
              <p>{current.description}</p>
            </div>
            <div className="col-6 m-2">
              <h2>Interested in Renting this Property?</h2>
              <hr />
              <p>
                All properties are available in 6 and 12 month leases. If you
                want to submit a rental application, please contact us in one of
                the listed ways on our contact page and let us know your name,
                your phone number, and the property address you are interested
                in and we will send you a rental application.
              </p>
              <Link to="/ContactUs" className="btn btn-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.properties.currentProperty,
});

export default connect(mapStateToProps)(Property);
