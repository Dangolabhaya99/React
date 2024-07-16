import React, { Component } from 'react';
class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="text-center">
        <h1 className="bg-blue-500 text-white text-lg p-2 text-center" >Count: {this.state.count}</h1>
        <button className="bg-blue-500 text-white text-md p-2 my-2 rounded-r " onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
export default LifecycleComponent;