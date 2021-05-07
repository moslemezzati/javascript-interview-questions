import React, { Component } from 'react';

interface WrapperComponentProps {
  click: number;
}

interface PostOwnerProps {
  owner: string;
}
type PostComponentProps = PostOwnerProps & WrapperComponentProps;

const PostComponent: React.FC<PostComponentProps> = ({ owner, click }) => {
  return (
    <>
      <h1>Post component</h1>
      <h2>Clicks: {click}</h2>
      <h2>Owner: {owner}</h2>
    </>
  );
};

interface NewsComponentProps {
  click: number;
}

const NewsComponent: React.FC<NewsComponentProps> = ({ click }) => {
  return (
    <>
      <h1>News component</h1>
      <h2>Clicks: {click}</h2>
    </>
  );
};

interface withTrackProps {}
interface withTrackState {
  click: number;
}

const withTrackClick = <T extends unknown>(
  WrapperComponent: React.FC<WrapperComponentProps & T>
) => {
  return class extends React.Component<withTrackProps & T, withTrackState> {
    constructor(props: withTrackProps & T) {
      super(props);
      this.state = { click: 0 };
    }

    handleClick = () => {
      this.setState({ click: this.state.click + 1 });
    };

    render() {
      const { click } = this.state;
      return (
        <div onClick={this.handleClick}>
          <WrapperComponent {...this.props} click={click} />
        </div>
      );
    }
  };
};

const WrappedPostComponent = withTrackClick<PostOwnerProps>(PostComponent);
const WrappedNewsComponent = withTrackClick(NewsComponent);

export class HOC extends Component {
  render() {
    return (
      <div>
        <h1>Render Props with HOC</h1>
        <WrappedPostComponent owner="React" />
        <WrappedNewsComponent />
      </div>
    );
  }
}

export default HOC;
