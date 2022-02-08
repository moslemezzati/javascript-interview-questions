import React from "react";
import { LOGIN, LOGOUT, useUserContext } from "./UserProvider";
import { DARK, LIGHT, useThemeContext } from "./ThemeProvider";

function UserComponent() {
  const { user, dispatch } = useUserContext();
  const { firstName, lastName, isAuthenticated } = user;
  const { dark, dispatch: dispatchTheme } = useThemeContext();
  return (
    <div style={{ background: dark ? "gray" : "white" }}>
      <div>First name: {firstName}</div>
      <div>last name: {lastName}</div>
      <div>Is authenticated: {isAuthenticated ? "Yes" : "No"}</div>
      <button
        onClick={() => {
          dispatch({ type: LOGIN });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch({ type: LOGOUT });
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          dispatchTheme({ type: dark ? LIGHT : DARK });
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}

export default UserComponent;
