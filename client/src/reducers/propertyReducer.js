import { GET_PROPERTIES, FILTER_PROPERTIES, LOADING } from '../actions/types';

const initialState = {
  properties: null,
  loading: false,
  filtered: null,
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
        filtered:
          action.payload.text !== ''
            ? action.payload.properties.filter((property) => {
                const regex = new RegExp(`${action.payload.text}`, 'gi');
                return (
                  property.address.match(regex) ||
                  property.description.match(regex) ||
                  property.title.match(regex)
                );
              })
            : null,
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
