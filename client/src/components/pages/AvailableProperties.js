import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchProperties from '../layout/SearchProperties';
import { getProperties } from '../../actions/propertyActions';

const AvailableProperties = ({ properties, getProperties }) => {
  useEffect(() => {
    getProperties();
  }, [getProperties]);
  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12 bg-olive mt-2">
          <h1 className="text-center">Available Properties</h1>
        </div>
      </div>
      <hr />
      <div>
        <div className="col-6 m-4">
          <p className="text-left">
            Browse our available properties below or use the search bar to find
            something specific!
          </p>
        </div>
      </div>
      <SearchProperties />
      <hr />
    </div>
  );
};

const mapStatetoProps = (state) => ({
  properties: state.properties,
});

export default connect(mapStatetoProps, { getProperties })(AvailableProperties);
