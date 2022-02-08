import React, { createContext, useContext, useReducer } from "react";

const initial = { dark: false };

interface ITheme {
  dark: boolean;
}

export const DARK = "DARK";
export const LIGHT = "LIGHT";

interface Action {
  type: typeof DARK | typeof LIGHT;
}

interface IThemeContext extends ITheme {
  dispatch?(action: Action): void;
}

const ThemeContext = createContext<IThemeContext>({
  ...initial,
});

function themeReducer(state: ITheme, action: Action) {
  // eslint-disable-next-line eqeqeq
  return { dark: action.type == DARK };
}

export function useThemeContext() {
  return useContext<IThemeContext>(ThemeContext);
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, initial);
  return (
    <ThemeContext.Provider value={{ dark: theme.dark, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
