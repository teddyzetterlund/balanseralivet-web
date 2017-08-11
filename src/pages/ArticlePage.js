import React from 'react';
import Helmet from 'react-helmet';

import showdown from 'showdown';

const converter = new showdown.Converter();
const articles = require('../data/articles.json');

const ArticlePage = ({ match }) => {
  const article = articles.find(a => a.path === `/blogg/${match.params.path}`);
  const html = converter.makeHtml(article.text);

  return (
    <div>
      <Helmet>
        <title>{`${article.title} - Blogg - Balansera Livet`}</title>
        <meta name="description" content={article.description} />
      </Helmet>

      <article dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
};

export default ArticlePage;
