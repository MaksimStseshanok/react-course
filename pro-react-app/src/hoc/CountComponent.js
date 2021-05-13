import React, { Component } from 'react';
import './CountComponent.css';

export default class CountComponent extends Component {
  state = {
    count: 0,
  };

  onClickDecrement = () => this.setState(({ count }) => ({ count: count - 1 }));
  onClickIncrement = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <button onClick={this.onClickDecrement} className="counter__btn">
          -
        </button>
        <div className="counter__count">{count}</div>
        <button onClick={this.onClickIncrement} className="counter__btn">
          +
        </button>
      </div>
    );
  }
}
