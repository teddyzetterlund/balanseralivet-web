import React from 'react';
import Helmet from 'react-helmet';
import HeroImg from '../components/HeroImg';

import showdown from 'showdown';

const converter = new showdown.Converter();
const recipes = require('../data/recipes.json');

const RecipePage = ({ match }) => {
  const recipe = recipes.find(r => r.path === match.params.path);
  const html = converter.makeHtml(recipe.text);

  const heroImg = require(`../assets/recipes/${match.params.path}.jpg`);

  return (
    <div>
      <Helmet>
        <title>{`${recipe.title} - Recept - Balansera Livet`}</title>
        <meta name="description" content={recipe.description} />
      </Helmet>

      <HeroImg imgPath={heroImg} />
      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export default RecipePage;
