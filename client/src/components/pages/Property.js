import React from 'react';
import { connect } from 'react-redux';

const Property = ({ current }) => {
  console.log(current);
  return (
    <div className="container-fluid mx-0 p-0">
      {current && (
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center bg-olive p-2">{current.address}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.properties.currentProperty,
});

export default connect(mapStateToProps)(Property);
