import React, { createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
};
if (process.browser) {
  if (localStorage.getItem("jwtToken")) {
    const decodedToken: any = jwtDecode(localStorage.getItem("jwtToken"));

    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("jwtToken");
    } else {
      initialState.user = decodedToken;
      console.log(initialState.user);
    }
  }
}

const AuthContext = createContext({
  user: null,
  login: (userData) => undefined,
  logout: () => undefined,
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  function login(userData) {
    if (process.browser) localStorage.setItem("jwtToken", userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  }

  function logout() {
    if (process.browser) localStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
