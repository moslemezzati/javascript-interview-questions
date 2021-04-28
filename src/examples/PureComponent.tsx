import React from 'react';
interface PureComponentProps {}
interface PureComponentState {
  address: { city: string };
  name: string;
}

let UserDetail: React.FC<PureComponentState> = ({ name, address }) => {
  console.log('AddressMemo has rendered');
  return (
    <>
      <h5>AddressMemo Component</h5>
      <h5>Name: {name}</h5>
      <h5>City: {address.city}</h5>
    </>
  );
};

UserDetail = React.memo(UserDetail, (prevProps, nextProps) => {
  return (
    prevProps.address.city === nextProps.address.city &&
    prevProps.name === nextProps.name
  );
});
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
    console.log('Pure Component has rendered');
    const { name, address } = this.state;
    return (
      <div>
        <h1>Pure Component</h1>
        <UserDetail name={name} address={address} />
        <button onClick={this.handleSetAddress}>Set Address</button>
        <button onClick={this.handleSetName}>Set Name</button>
      </div>
    );
  }
}

export default PureComponent;
