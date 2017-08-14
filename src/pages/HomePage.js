import React from 'react';
import Product from '../components/Product';
import HeroImg from '../components/HeroImg';

const heroImg = require('../assets/hero-img.jpeg');
const products = require('../data/products.json');

const HomePage = () =>
  <div>
    <HeroImg imgPath={heroImg} />

    <main>
      <div className="Products">
        {products.map(({title, path, description}, index) =>
          <Product title={title} path={path} key={`product-${index}`}>
            <p>{description}</p>
          </Product>
        )}
      </div>
    </main>
  </div>

export default HomePage;
