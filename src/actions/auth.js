import { LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../actionTypes";
import axios from "axios";

export function logIn(email, password) {
  return async dispatch => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password
      });

      const data = { email: email, accessToken: response.data.access_token };

      dispatch({ type: LOG_IN_SUCCESS, payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: LOG_IN_FAILURE });
    }
  };
}

export async function signUp(name, email, password) {
  return;
}
