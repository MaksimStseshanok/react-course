import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <React.Fragment>
      <h2>Table</h2>
      <table
        style={{
          border: '1px solid grey',
          width: '600px',
          marginBottom: '20px',
        }}
      >
        <thead style={{ background: 'red' }}>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr style={{ textAlign: 'center' }} key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProductTable;
