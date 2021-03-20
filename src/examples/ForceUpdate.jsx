import React from "react";
import SourceLink from "../components/SourceLink";

class App extends React.Component {
  reRender = () => {
    // calling the forceUpdate() method
    this.forceUpdate();
  };
  render() {
    console.log("Component is re-rendered");
    return (
      <div>
        <h2>GeeksForGeeks</h2>
        <button onClick={this.reRender}>Click To Re-Render</button>
        <div>
          <SourceLink
            title="geeksforgeeks"
            link="https://www.geeksforgeeks.org/reactjs-forceupdate-method/"
          />
        </div>
      </div>
    );
  }
}
export default App;
