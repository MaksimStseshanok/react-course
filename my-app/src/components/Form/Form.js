import React, { Component } from 'react';
import './Form.css';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      class: 'off',
      label: 'Нажми',
    };

    this.press = this.press.bind(this);
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);

    console.clear();
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps()');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate()');
    return null;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  press() {
    const className = this.state.class === 'off' ? 'on' : 'off';
    this.setState({ class: className });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  focusTextInput(event) {
    event.preventDefault();
    this.textInput.current.focus();
  }
  render() {
    console.log('render()');
    const { value } = this.state;
    return (
      <>
        <form>
          <label>
            Имя:
            <input
              ref={this.textInput}
              onChange={this.handleChange}
              type="text"
              name="name"
              value={value}
            />
          </label>
          <button disabled={value === 'реакт'} type="submit">
            Отправить
          </button>
          <button onClick={this.focusTextInput}>Фокус</button>
        </form>
        <button onClick={this.press} className={this.state.class}>
          {this.state.label}
        </button>
      </>
    );
  }
}
