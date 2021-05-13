import React from 'react';

const ProductList = ({ products }) => {
  const styles = {
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
  };
  return (
    <React.Fragment>
      <h2>List</h2>
      <ul>
        {products.map((product) => {
          return (
            <li style={styles} key={product.name}>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProductList;
