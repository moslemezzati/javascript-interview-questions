import React, { createContext, useContext, useReducer } from "react";

const user = {
  firstName: "Aco",
  lastName: "Ezati",
  isAuthenticated: false,
};

const UserContext = createContext();
const ThemContext = createContext();

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

const DARK = "DARK";
const LIGHT = "LIGHT";

function themeReducer(state, action) {
  if (action.type == DARK) {
    return true;
  } else if (action.type == LIGHT) {
    return false;
  }
  return state;
}

function ParentCom() {
  const [state, dispatch] = useReducer(reducer, user);
  const [theme, dispatchTheme] = useReducer(themeReducer, true);
  return (
    <ThemContext.Provider value={{ theme, dispatchTheme }}>
      <UserContext.Provider value={{ state, dispatch }}>
        <ChildCom />
      </UserContext.Provider>
    </ThemContext.Provider>
  );
}

function ChildCom() {
  return <GrandChildCom />;
}

function GrandChildCom() {
  const { state, dispatch } = useContext(UserContext);
  const { firstName, lastName, isAuthenticated } = state;
  const { theme, dispatchTheme } = useContext(ThemContext);
  return (
    <div style={{ background: theme ? "gray" : "white" }}>
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
          dispatchTheme({ type: theme ? LIGHT : DARK });
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}

export default ParentCom;
