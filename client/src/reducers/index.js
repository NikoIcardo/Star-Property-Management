import { combineReducers } from 'redux';
import propertyReducer from './propertyReducer';
import tenantReducer from './tenantReducer';

export default combineReducers({
  properties: propertyReducer,
  tenants: tenantReducer,
});
