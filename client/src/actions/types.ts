export const GET_PROPERTIES = 'GET_PROPERTIES';
export const FILTER_PROPERTIES = 'FILTER_PROPERTIES';
export const LOADING = 'LOADING';
export const SET_CURRENT = 'SET_CURRENT';


export interface Property {
  id: number, 
  title: string, 
  description: string, 
  address: string, 
  img: {
    path: string, 
    alt: string
  },
  renter: string, 
  owner: string, 
  price: number
}

interface getPropertyAction {
  type: typeof GET_PROPERTIES;
  payload: Array<Property>
}

interface FilterPropertiesAction {
  type: typeof FILTER_PROPERTIES,
  payload: {
    text: string, 
    properties: Array<Property>
  }
}

interface LoadingAction {
  type: typeof LOADING
}

interface SetCurrentAction {
  type: typeof SET_CURRENT, 
  payload: number
}



export type PropertyActionTypes = getPropertyAction | FilterPropertiesAction | LoadingAction | SetCurrentAction;

export const TENANT_LOGIN = 'TENANT_LOGIN';
export const ADD_TENANT = 'ADD_TENANT';
