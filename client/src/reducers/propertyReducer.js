import { GET_PROPERTIES, FILTER_PROPERTIES } from '../actions/types';

const initialState = {
  properties: null,
  filtered: null,
};

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    default:
      return state;
  }
};
