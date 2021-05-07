import React, { Component } from 'react';

interface TrackClickProps {
  renderProps(click: number): React.ReactElement;
}

interface TrackClickState {
  click: number;
}

class TrackClick extends React.PureComponent<TrackClickProps, TrackClickState> {
  constructor(props: TrackClickProps) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  handleClick = () => {
    this.setState({ click: this.state.click + 1 });
  };
  render() {
    console.log('TrackClick PureComponent');
    return (
      <>
        <div onClick={this.handleClick}>
          {this.props.renderProps(this.state.click)}
        </div>
      </>
    );
  }
}

export interface PostComponentProps {
  click: number;
  owner: string;
}
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

export class RenderProps extends Component {
  render() {
    return (
      <div>
        <h1>Render Props with PureComponent</h1>
        <TrackClick
          renderProps={(click) => <PostComponent owner="React" click={click} />}
        />
        <TrackClick renderProps={(click) => <NewsComponent click={click} />} />
      </div>
    );
  }
}

export default RenderProps;
