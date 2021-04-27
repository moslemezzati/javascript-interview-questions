import React, { Component } from 'react';
interface PureComponentProps {}
interface PureComponentState {
  address: { city: string };
  name: string;
}
export class PureComponent extends React.PureComponent<
  PureComponentProps,
  PureComponentState
> {
  constructor(props: PureComponentProps) {
    super(props);
    this.state = { name: 'Marry', address: { city: 'old city' } };
  }
  handleSetAddress = () => {
    this.setState({ address: { city: 'new city' } });
  };
  handleSetName = () => {
    this.setState({ name: 'Emma' });
  };
  render() {
    console.log('render');
    return (
      <div>
        <h1>Pure Component</h1>
        <button onClick={this.handleSetAddress}>Set Address</button>
        <button onClick={this.handleSetName}>Set Name</button>
      </div>
    );
  }
}

export default PureComponent;
