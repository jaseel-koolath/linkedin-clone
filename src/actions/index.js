import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => {
  //console.log(payload);
  return {
    type: SET_USER,
    user: payload,
  };
};
export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        //console.log(payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}
