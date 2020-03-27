/* eslint linebreak-style: ["error","windows"] */
import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.Name}</td>
      <td>
        $
        {product.Price}
      </td>
      <td>{product.Category}</td>
      <td><a href={product.Image} target="blank">View</a></td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  const productRows = products.map(product => <ProductRow key={product.id} product={product} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}
