import { Component } from 'react';
import CountComponent from './CountComponent';

const clickCount = (InputComponent) => {
  class OutputComponent extends Component {
    state = {
      count: 0,
    };

    onClickCountComponent = () =>
      this.setState(({ count }) => ({ count: count + 1 }));

    render() {
      const { count } = this.state;
      return (
        <div className="output-component" onClick={this.onClickCountComponent}>
          <h1>HOC</h1>
          <div className="output-component__click-count">
            Количество нажатий компонента: {count}
          </div>
          <InputComponent />
        </div>
      );
    }
  }

  return OutputComponent;
};

const MyHoc = clickCount(CountComponent);

export default MyHoc;
