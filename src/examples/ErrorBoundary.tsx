import React, { ErrorInfo } from 'react';

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error;
  info: { componentStack: string };
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: '' },
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
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
          <h4>error message: </h4>
          <div>{error.message}</div>
          <h4>error stack:</h4>
          <small>{error.stack}</small>
          <hr />
          <small>{info.componentStack}</small>
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
  throw new Error('this is a foul play!');
};

export default Context;
