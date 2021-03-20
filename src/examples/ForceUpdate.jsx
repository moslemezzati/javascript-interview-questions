import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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
      </div>
    );
  }
}
export default App;
