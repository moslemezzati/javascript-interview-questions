import React, { useState } from "react";

interface IClickableProps {
  click: number;
}

interface PostOwnerProps {
  owner: string;
}

type ClickablePostOwnerProps = PostOwnerProps & IClickableProps;

const PostComponent: React.FC<ClickablePostOwnerProps> = ({ owner, click }) => {
  return (
    <>
      <h1>Post component</h1>
      <span>Clicks: {click}</span> <span>Owner: {owner}</span>
    </>
  );
};

const NewsComponent: React.FC<IClickableProps> = ({ click }) => {
  return (
    <>
      <h1>News component</h1>
      <span>Clicks: {click}</span>
    </>
  );
};

const withTrackClick = <T extends unknown>(
  WrapperComponent: React.FC<IClickableProps & T>
) => {
  return (props: IClickableProps & T) => {
    const [clickCounter, setClickCounter] = useState(0);
    const handleClick = () => {
      setClickCounter((prev) => prev + 1);
    };

    return (
      <div onClick={handleClick}>
        <WrapperComponent {...props} click={clickCounter} />
      </div>
    );
  };
};

const WrappedPostComponent =
  withTrackClick<ClickablePostOwnerProps>(PostComponent);
const WrappedNewsComponent = withTrackClick<IClickableProps>(NewsComponent);

const HOC = (props: ClickablePostOwnerProps) => {
  return (
    <div>
      <h1>Render Props with HOC</h1>
      <WrappedPostComponent {...props} owner="React" />
      <WrappedNewsComponent {...props} />
    </div>
  );
};

export default HOC;
