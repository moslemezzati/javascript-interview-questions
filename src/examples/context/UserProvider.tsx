import React, { createContext, useContext, useReducer } from "react";

const initialUser = {
  firstName: "Aco",
  lastName: "Ezati",
  age: 36,
  isAuthenticated: false,
};

const UserContext = createContext<IUserContext>({
  user: initialUser,
  dispatch: () => {},
});

interface IUserContext {
  user: User;
  dispatch: React.Dispatch<Action>;
}

export function useUserContext() {
  return useContext<IUserContext>(UserContext);
}

export const EDIT = "EDIT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface User {
  firstName?: string;
  lastName?: string;
  age?: number;
  isAuthenticated: boolean;
}

interface Action {
  type: typeof EDIT | typeof LOGIN | typeof LOGOUT;
  payload?: object;
}

function userReducer(state: User, action: Action) {
  switch (action.type) {
    case EDIT:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    case LOGIN:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = useReducer(userReducer, initialUser);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
