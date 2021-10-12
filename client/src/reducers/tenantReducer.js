import { TENANT_LOGIN, ADD_TENANT } from "../actions/types";

import { tenants } from "../components/data/tenants";

const initialState = {
  tenant: null,
};

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case TENANT_LOGIN:
      return {
        ...state,
        tenant: tenants.find(
          (tenant) =>
            tenant.email === action.payload.email &&
            tenant.password === action.payload.password
        ),
      };

    default:
      return state;
  }
};
