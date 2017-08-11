import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

const Product = ({title, path, children}) =>
  <article className="Product">
    <h2 className="Product-title">
      {path ? <Link to={path}>{title}</Link> : title}
    </h2>

    {children}

    {path ? "" : <div className="Product-forthcoming">(Kommer 2018)</div>}
  </article>

export default Product;
