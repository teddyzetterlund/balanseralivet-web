import React from 'react';
import Helmet from 'react-helmet';

import showdown from 'showdown';

const converter = new showdown.Converter();
const recipes = require('../data/recipes.json');

const RecipePage = ({ match }) => {
  const recipe = recipes.find(r => r.path === `/recept/${match.params.path}`);
  const html = converter.makeHtml(recipe.text);

  return (
    <div>
      <Helmet>
        <title>{`${recipe.title} - Recept - Balansera Livet`}</title>
        <meta name="description" content={recipe.description} />
      </Helmet>

      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export default RecipePage;
