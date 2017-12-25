import React from 'react';
import Helmet from 'react-helmet';

const AboutPage = () =>
  <div>
    <Helmet>
      <title>Om mig - Balansera Livet</title>
      <meta name="description" content="Jag heter Helen Zetterlund och är licensierad Livsstilsrådgivare (kostrådgivare och hälsoinspiratör) med en förkärlek för hälsa och en hälsosam livsstil." />
    </Helmet>

    <article>
      <h1>Om mig</h1>

      <ul>
        <li>Certifierad ICC-coach</li>
        <li>Certifierad Livsstilsrådgivare</li>
        <li>Certifierad Kostrådgivare</li>
      </ul>
    </article>
  </div>

export default AboutPage;
