export const SET_AUTHED_USER_SUCCESS = "SET_AUTHED_USER_SUCCESS";
export const UNSET_AUTHED_USER_SUCCESS = "UNSET_AUTHED_USER_SUCCESS";

export const setAuthedUser = (id) => {
  return {
    type: SET_AUTHED_USER_SUCCESS,
    id,
  };
};

export const unsetAuthedUser = () => {
  return {
    type: UNSET_AUTHED_USER_SUCCESS,
  };
};
