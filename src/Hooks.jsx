import React, { useState, useEffect, useReducer } from "react";
const countReducer = (state, action) => {
  switch (action) {
    case "inc":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
};

const Hooks = (props) => {
  const [value, lksjdf] = useState(0);
  const [state, dispatchVlaue] = useReducer(countReducer, { count: 0 });
  useEffect(() => {
    console.log("the value is:", value);
    return () => {
      console.log("Before destroying the component the value is:", value);
    };
  }, [value]);
  return (
    <>
      <div  style={{ textAlign: "center" }}>
        {state.count}

        <button onClick={() => dispatchVlaue("inc")}>Increate count</button>
      </div>
      <hr/>
      <div style={{ textAlign: "center" }}>
        Increase the value:
        <div>
          <button onClick={() => lksjdf(value + 1)}>Inc</button>
        </div>
        {value}
      </div>
    </>
  );
};

export default Hooks;
