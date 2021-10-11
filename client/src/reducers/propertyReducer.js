import { GET_PROPERTIES, FILTER_PROPERTIES, LOADING } from '../actions/types';

const initialState = {
  properties: null,
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
    case FILTER_PROPERTIES:
      return {
        ...state,
        properties:
          action.payload !== ''
            ? state.properties.filter((property) => {
                const regex = new RegExp(`${action.payload}`, 'gi');
                return (
                  property.address.match(regex) ||
                  property.description.match(regex) ||
                  property.title.match(regex)
                );
              })
            : state.properties,
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
