import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: { message: "", stack: "" },
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h2>Something went wrong.</h2>
          <h4>error message: {error.message}</h4>
          <h4>error stack: {error.stack}</h4>
          <hr />
          <h4>{info.componentStack}</h4>
        </>
      );
    }

    return this.props.children;
  }
}

const Context = () => {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

const BuggyComponent = () => {
  throw new Error("this is a foul play!");
};

export default Context;
