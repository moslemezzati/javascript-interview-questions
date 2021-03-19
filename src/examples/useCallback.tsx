import React, { useState, useCallback } from "react";

// Generates random colours any time it's called
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// The type of the props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// A memoized button with a random background colour
const Button = React.memo((props: ButtonProps) => (
  <button onClick={props.onClick} style={{ background: randomColour() }}>
    {props.children}
  </button>
));

const functions: Set<any> = new Set();

const App = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
  const increment = useCallback(() => setC(c => c + delta), [delta]);

  functions.add(incrementDelta);
  functions.add(increment);

  return (<div>
    <div> Delta is {delta} </div>
    <div> Counter is {c} </div>
    <br/>
    <div>
      <Button onClick={incrementDelta}>Increment Delta</Button>
      <Button onClick={increment}>Increment Counter</Button>
    </div>
    <br/>
    <div> Newly Created Functions: {functions.size - 2} </div>
  </div>)
}

export default App;
