import React from "react";
import UserComponent from "./UserComponent";
import UserProvider from "./UserProvider";
import ThemeProvider from "./ThemeProvider";
import Context from "./Context";

const ContextComponent = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <UserComponent />
        <Context />
      </UserProvider>
    </ThemeProvider>
  );
};

export default ContextComponent;
