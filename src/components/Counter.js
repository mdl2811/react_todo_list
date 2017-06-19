import React from 'react';

class Counter extends React.Component {
  state = { value: 0, id: 0, foo: 'bar' }

  inc = () => {
    this.setState({ value: this.state.value + 1 });
  }

  dec = () => {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;
