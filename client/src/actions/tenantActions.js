import { TENANT_LOGIN, ADD_TENANT } from "../actions/types";

export const tenantLogin = (email, password) => (dispatch) => {
  dispatch({
    type: TENANT_LOGIN,
    payload: {
      email,
      password,
    },
  });
};
