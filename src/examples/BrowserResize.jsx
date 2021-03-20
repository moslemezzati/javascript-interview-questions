import React from "react";
import SourceLink from "../components/SourceLink";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function MyComponent() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <div>
      Rendered at {dimensions.width} x {dimensions.height}
    </div>
  );
}

class WindowDimensions extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <>
        <div>
          <h3>By class</h3>
          {this.state.width} x {this.state.height}
          <SourceLink
            title="Reactjs Interview Questions"
            link="https://github.com/sudheerj/reactjs-interview-questions#how-to-re-render-the-view-when-the-browser-is-resized"
          />
        </div>
        <div>
          <h3>By Hooks</h3>
          <MyComponent />
          <SourceLink
            title="pluralsight"
            link="https://www.pluralsight.com/guides/re-render-react-component-on-window-resize"
          />
        </div>
      </>
    );
  }
}

export default WindowDimensions;
