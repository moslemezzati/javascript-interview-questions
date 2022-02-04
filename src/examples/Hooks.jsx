import React, { useEffect, useReducer, useState } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

const Hooks = (props) => {
  const [value, setValue] = useState(0);
  const [state, dispatchValue] = useReducer(countReducer, { count: 0 });
  const [counter, setCounter] = useReducer((number, newNumber) => {
    console.log({ number, newNumber });
    return number + newNumber;
  }, 0);

  useEffect(() => {
    console.log("the value is:", value);
    return () => {
      console.log("Before destroying the component the value is:", value);
    };
  }, [value]);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{ margin: "10px" }}
            onClick={() => dispatchValue({ type: "inc" })}
          >
            Increase count by useReducer and dispatch
          </button>
          {state.count}
          <button
            style={{ margin: "10px" }}
            onClick={() => dispatchValue({ type: "dec" })}
          >
            Decrease count by useReducer and dispatch
          </button>
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        Increase the value:
        <div>
          <button style={{ margin: "10px" }} onClick={() => setCounter(1)}>
            Inc value by reducer and function callback
          </button>
          {counter}
        </div>
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        Increase the value:
        <div>
          <button
            style={{ margin: "10px" }}
            onClick={() => setValue(value + 1)}
          >
            Inc value by useState
          </button>
          {value}
        </div>
      </div>
    </>
  );
};

export default Hooks;
