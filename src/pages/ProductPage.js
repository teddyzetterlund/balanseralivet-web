import React from 'react';
import Helmet from 'react-helmet';

import showdown from 'showdown';

const converter = new showdown.Converter();
const products = require('../data/products.json');

const ProductPage = ({ match }) => {
  const product = products.find(p => p.path === `/tjanster/${match.params.path}`);
  const html = converter.makeHtml(product.text);

  return (
    <div>
      <Helmet>
        <title>{`${product.title} - Tjänster - Balansera Livet`}</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export default ProductPage;
