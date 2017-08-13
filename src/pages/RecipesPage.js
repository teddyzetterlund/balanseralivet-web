import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const recipes = require('../data/recipes.json');

const RecipesPage = () =>
  <article>
    <Helmet title="Blogg - Balansera Livet" />

    <ul>
      {recipes.map(({title, path}, index) =>
        <li key={`recipe-${index}`}>
          <Link to={`/recept/${path}`}>{title}</Link>
        </li>
      )}
    </ul>
  </article>

export default RecipesPage;
