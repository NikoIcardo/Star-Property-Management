import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppState } from '../../../store';
import { Property as PropertyType} from '../../../actions/types'; 

interface Props {
  current: PropertyType | undefined
}

class Property extends Component<Props, AppState> {
  
  render = () => (
    <div className="container-fluid mx-0 p-0">
      {this.props.current !== null && (
        <Fragment>
          <div className="row">
            <div className="col-12">
              <h1 className="mt-2 text-center bg-olive p-2">
                {this.props.current?.address}
              </h1>
            </div>
          </div>
          <div className="row">
            {this.props.current?.img.map((photo: {
              path: string, 
              alt: string
            }) => (
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
                <li>{this.props.current?.title}</li>
                <li>Owner: {this.props.current?.owner}</li>
                <li>Monthly Rent: {this.props.current?.price}</li>
              </ul>
              <p>{this.props.current?.description}</p>
            </div>
            <div className="col-6 m-2">
              <h2>Interested in Renting this Property?</h2>
              <hr />
              <p>
                All properties are available in 6 and 12 month leases. If you
                want to submit a rental application, please contact us in one of
                the listed ways on our contact page and let us know your name,
                your phone number, and the address of the property you are
                interested in and we will send you a rental application. Thank
                you!
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

const mapStateToProps = (state: AppState) => ({
  current: state.properties.currentProperty,
});

export default connect(mapStateToProps)(Property);
