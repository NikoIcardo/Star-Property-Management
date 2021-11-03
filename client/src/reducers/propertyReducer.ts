import {
  GET_PROPERTIES,
  FILTER_PROPERTIES,
  LOADING,
  SET_CURRENT,
  PropertyActionTypes
} from '../actions/types';

import { Property } from '../actions/types'; 

import { Reducer, Action } from 'redux'; 

interface Properties {
  properties: Array<Property> | null, 
  loading: boolean,
  filtered: Array<Property> | null, 
  currentProperty: Property | undefined
}

const initialState = {
  properties: null,
  loading: false,
  filtered: null,
  currentProperty: undefined,
};

//eslint-disable-next-line
export const propertyReducer: Reducer<Properties, Action> = (state = initialState, action: PropertyActionTypes) => {
  const nextState = {
    properties: state.properties,
    loading: state.loading,
    filtered: state.filtered,
    currentProperty: state.currentProperty,
  }


  switch (action.type) {
    case GET_PROPERTIES:
      console.log(action.payload);

      nextState.properties = action.payload;
      nextState.loading = false;
      return nextState;

    case FILTER_PROPERTIES:
      nextState.filtered = 
        action.payload.text !== ''
          ? action.payload.properties.filter((property: Property) => {
              const regex = new RegExp(`${action.payload.text}`, 'gi');
              return (
                property.address.match(regex) ||
                property.description.match(regex) ||
                property.title.match(regex)
              );
            })
          : null; 
      return nextState;
    case SET_CURRENT:
      nextState.currentProperty = state.properties ? state.properties.find(
        (property: Property) => property.id === action.payload): undefined; 

      return nextState; 
    case LOADING:
      nextState.loading = true;
      return nextState; 
    default:
      return state;
  }
};

