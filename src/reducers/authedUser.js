import {
  SET_AUTHED_USER_SUCCESS,
  UNSET_AUTHED_USER_SUCCESS,
} from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER_SUCCESS:
      return action.id;
    case UNSET_AUTHED_USER_SUCCESS:
      return null;
    default:
      return state;
  }
}
