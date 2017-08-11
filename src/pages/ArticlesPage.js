import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const articles = require('../data/articles.json');

const ArticlesPage = () =>
  <article>
    <Helmet title="Blogg - Balansera Livet" />

    <ul>
      {articles.map(({title, path}, index) =>
        <li key={`article-${index}`}>
          <Link to={path}>{title}</Link>
        </li>
      )}
    </ul>
  </article>

export default ArticlesPage;
