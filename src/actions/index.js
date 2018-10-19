import { LOGIN } from "./types";

export const login = (payload) => async dispatch => {
  dispatch({
    type: LOGIN,
    payload: payload ? payload : {}
  });
};
