import React from 'react';
import Product from '../components/Product';

const products = require('../data/products.json');

const ProductsPage = () =>
  <main>
    {products.map(({title, path, description}, index) =>
      <Product title={title} path={path} key={`product-${index}`}>
        <p>{description}</p>
      </Product>
    )}
  </main>

export default ProductsPage;
