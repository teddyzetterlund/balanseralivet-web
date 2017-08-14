import React from 'react';
import Helmet from 'react-helmet';
import Product from '../components/Product';

const products = require('../data/products.json');

const ProductsPage = () =>
  <main>
    <Helmet title="Tjänster - Balansera Livet" />

    <div className="Products">
      {products.map(({title, path, description}, index) =>
        <Product title={title} path={path} key={`product-${index}`}>
          <p>{description}</p>
        </Product>
      )}
    </div>
  </main>

export default ProductsPage;
