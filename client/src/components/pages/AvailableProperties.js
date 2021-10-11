import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import SearchProperties from '../layout/SearchProperties';
import PropertyCard from '../layout/PropertyCard';

const AvailableProperties = ({ properties, loading, getProperties }) => {
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
      <div className="row">
        <div className="col-6 m-4">
          <p className="text-left">
            Browse our available properties below or use the search bar to find
            something specific!
          </p>
        </div>
      </div>
      <SearchProperties />
      <hr />
      <div className="row m-5">
        {!loading && properties !== null ? (
          properties.map((property) => (
            <PropertyCard
              property={property}
              key={properties.indexOf(property)}
            />
          ))
        ) : (
          <h3>There Are Currently No Properties Available</h3>
        )}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  properties: state.properties.properties,
  loading: state.properties.loading,
});

export default connect(mapStatetoProps, { getProperties })(AvailableProperties);
