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

      <p>
        Jag heter Helen Zetterlund och är licensierad Livsstilsrådgivare (kostrådgivare och hälso&shy;inspiratör)
        med en förkärlek för hälsa och en hälsosam livsstil. Under hösten 2017 och våren 2018 kommer
        jag att bygga vidare på min utbildning för att bli Lic. Hälsocoach.
      </p>

      <p>
        För mig är hälsa mer än att bara äta bra och att röra på sig, även om man kommer långt på vägen
        med dessa två. Hälsa för mig handlar om att må bra både i kroppen och i själen. Det handlar om
        att orka mer i vardagen, att känna sig utvilad, att inte stressa, att vara smärtfri och sjukdomsfri
        och att stanna upp och njuta av livet.
      </p>
    </article>
  </div>

export default AboutPage;
