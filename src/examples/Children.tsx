import React, { Component, ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components';

interface ButtonProps {
  type?: string;
  onClick?(): void;
  className?: string;
}

const GlobalStyles = createGlobalStyle`
  .button-primary {
    background-color: skyblue;
    padding: 5px;
    cursor: pointer;
  }
  .button-group-btn {
    background-color: green;
    padding: 5px;
    cursor: pointer;
  }
  .button-default {
    padding: 5px;
    cursor: pointer;
  }
`;
const Button: React.FC<ButtonProps> = ({
  type,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button-${type || 'default'} ${className || ''}`}
    >
      {children}
    </button>
  );
};

const ButtonGroup: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {React.Children.map(
        children as ReactElement<ButtonProps>[],
        (child, index) => {
          return React.isValidElement(child)
            ? React.cloneElement(child, {
                className: 'button-group-btn',
                onClick: () => console.log(index),
              })
            : child;
        }
      )}
    </>
  );
};

export default class Children extends Component {
  render() {
    return (
      <div>
        <h1>Children, cloneElement and isValidElement</h1>
        <ButtonGroup>
          <Button type="primary">Primary</Button>
          <Button>default</Button>
          text
        </ButtonGroup>
      </div>
    );
  }
}
