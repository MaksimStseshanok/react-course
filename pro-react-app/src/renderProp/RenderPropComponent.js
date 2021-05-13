import { Component } from 'react';
import products from '../productsData';

export default class RenderPropComponent extends Component {
  state = {
    products: [],
  };

  // как-будто обращаемся к серверу для получения товаров)
  componentDidMount() {
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return this.props.render({
      products,
    });
  }
}
