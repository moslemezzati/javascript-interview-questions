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
      <div style={{ textAlign: "center" }}>
        <div>
          <button style={{margin: '10px'}} onClick={() => dispatchVlaue("inc")}>
            Increate count by useReducer
          </button>
          {state.count}
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        Increase the value:
        <div>
          <button style={{margin: '10px'}} onClick={() => lksjdf(value + 1)}>
            Inc value by useState
          </button>
          {value}
        </div>
      </div>
    </>
  );
};

export default Hooks;
