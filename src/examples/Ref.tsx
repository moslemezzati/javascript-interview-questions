import React, { Component } from 'react';

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ inputRef }) => {
  return <input ref={inputRef} />;
};

const InputB = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} />;
});

export class RefComponent extends Component {
  inputRef: React.RefObject<HTMLInputElement>;
  childRef: React.RefObject<ChildComponent>;
  componentInputRef: React.RefObject<HTMLInputElement>;
  componentInputBRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputRef = React.createRef();
    this.childRef = React.createRef();
    this.componentInputRef = React.createRef();
    this.componentInputBRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef?.current?.focus();
    this.childRef?.current?.showAlert();
    setTimeout(() => {
      this.componentInputRef?.current?.focus();
    }, 1000);
    setTimeout(() => {
      this.componentInputBRef?.current?.focus();
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>Access to an input</h1>
        <input type="text" ref={this.inputRef} />
        <h1>Access to a child input</h1>
        <ChildComponent ref={this.childRef} />
        <h1>Access to the child component by props</h1>
        <Input inputRef={this.componentInputRef} />
        <h1>Access to the child component by forwardRef</h1>
        <InputB ref={this.componentInputBRef} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  showAlert() {
    alert('alert from child component');
  }
  render() {
    return <h1>Child component</h1>;
  }
}

export default RefComponent;
