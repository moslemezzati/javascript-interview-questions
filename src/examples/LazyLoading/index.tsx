import React, { Component } from 'react';

const OddComponent = React.lazy(() => import('./Odd'));
const EvenComponent = React.lazy(() => import('./Even'));
interface LLState {
  counter: number;
  hasError: boolean;
}
export default class LazyLoading extends Component<{}, LLState> {
  constructor(props: LLState) {
    super(props);
    this.state = { counter: 0, hasError: false };
  }

  update = (operator: string) => {
    const { counter } = this.state;
    this.setState({ counter: operator === '-' ? counter - 1 : counter + 1 });
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { counter, hasError } = this.state;
    console.log('the error is', hasError);
    return (
      <>
        <h1>Counter: {counter}</h1>
        <div>
          {hasError ? (
            <h1>An error occured</h1>
          ) : (
            <React.Suspense fallback={<div>Loading...</div>}>
              {counter % 2 === 0 ? <EvenComponent /> : <OddComponent />}
            </React.Suspense>
          )}
        </div>
        <button
          onClick={() => {
            this.update('+');
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.update('-');
          }}
        >
          Subtract
        </button>
      </>
    );
  }
}
