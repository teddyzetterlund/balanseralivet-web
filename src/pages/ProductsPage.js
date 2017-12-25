import React from 'react';
import Helmet from 'react-helmet';
import Product from '../components/Product';

const products = require('../data/products.json');

const ProductsPage = () =>
  <div>
    <Helmet title="Tjänster - Balansera Livet" />

    <article>
      <h1>Tjänster</h1>

      <ul>
        <li>Livscoaching</li>
        <li>Hälsocoaching</li>
        <li>Karriärscoaching</li>
      </ul>

      <h2>Coaching hjälper dig i din resa</h2>

      <ul>
        <li>Vad är det du hoppas på och drömmer om?</li>
        <li>Vad är viktigt för dig?</li>
        <li>Har du allt som du förtjänar?</li>
        <li>Vad är möjligt för dig?</li>
      </ul>

      <p>Föreställ dig ett sätt att utforska dessa frågor tillsammans med någon som hjälper dig att förverkliga dina bästa drömmar så att du blir mer av den personen du alltid velat vara. Detta är coaching.</p>

      <p>Det är inte så konstigt att coaching har blivit så populärt. Vi lever i en spännande tid. Vi har fantastiska möjligheter och vill göra det mesta av dem. Vi känner att vi förtjänar lycka. Vi är villiga att investera tid, ansträngningar och pengar i att förbättra oss själva och få mer tillfredsställelse i allt det vi gör. </p>

      <p>En coach är din guide på vägen till det bästa du kan vara.</p>
    </article>
  </div>

export default ProductsPage;
