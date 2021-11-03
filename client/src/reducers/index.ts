import { combineReducers } from 'redux';
import { propertyReducer }from './propertyReducer';
import tenantReducer from './tenantReducer';

export const rootReducer = combineReducers({
  properties: propertyReducer,
  tenants: tenantReducer,
});
