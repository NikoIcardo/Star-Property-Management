import { GET_PROPERTIES, FILTER_PROPERTIES } from '.types';

// temp properties
const properties = [];

// Get Properties
export const getProperties = () => (dispatch) => {
  dispatch({
    type: GET_PROPERTIES,
    payload: properties,
  });
};

// Filter Properties
export const filterProperties = () => (dispatch) => {
  dispatch({
    type: FILTER_PROPERTIES,
    payload: properties,
  });
};
