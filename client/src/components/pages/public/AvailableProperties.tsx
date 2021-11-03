import React, { Component, PropsWithChildren } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux'; 
import { AppState } from '../../../store';
import { getProperties } from '../../../actions/propertyActions';
import { Property } from '../../../actions/types'; 
import { Properties } from '../../../reducers/propertyReducer';

import SearchProperties from '../../layout/SearchProperties';
import PropertyCard from '../../layout/PropertyCard';

interface DispatchProps {
  getProperties: () => void
}

type Props = DispatchProps & Properties; 

class AvailableProperties extends Component<Props, AppState> {

  componentDidMount = () => {
    this.props.getProperties(); 
  }

  render = () => { 
    const {loading, properties, filtered} = this.props as Props; 
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
          {!loading &&
            filtered !== null &&
            filtered?.map((prop: Property) => (
              <PropertyCard property={prop} key={properties?.indexOf(prop)} />
            ))}

          {!loading && filtered === null && properties
            ? properties.map((prop: Property) => (
                <PropertyCard property={prop} key={properties.indexOf(prop)} />
              ))
            : !filtered && (
                <h2>
                  There are currently no available properties. Please contact our
                  office if interested on being put on a wait list!
                  <br /> Thank You!
                </h2>
              )}
        </div>
      </div>
    )
  };
};

const mapStatetoProps = (state: AppState) => ({
  properties: state.properties.properties,
  filtered: state.properties.filtered,
  loading: state.properties.loading,
});

const mapDispatchtoProps = (dispatch: Dispatch): DispatchProps => ({
  getProperties: () => dispatch(getProperties()) 
}); 


export default connect(mapStatetoProps, mapDispatchtoProps)(AvailableProperties);
