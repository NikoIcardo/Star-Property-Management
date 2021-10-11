import { GET_PROPERTIES, FILTER_PROPERTIES, LOADING } from '../actions/types';

const initialState = {
  properties: null,
  filtered: null,
  loading: false,
};

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      console.log(action.payload);
      return {
        ...state,
        properties: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
