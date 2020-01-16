import React, { Component } from 'react';

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    console.log('tick removed');
    clearInterval(this.interval);
  }
  tick = () => {
    console.log('tick');
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <div>{this.state.count}</div>;
  }
}
export default IntervalClassCounter