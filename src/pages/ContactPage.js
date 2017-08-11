import React from 'react';
import Helmet from 'react-helmet';

const ContactPage = () => {
  const emailLink = <a href="mailto:helen@balanseralivet.se">helen@balanseralivet.se</a>;

  return (
    <div>
      <Helmet>
        <title>Kontakta mig - Balansera Livet</title>
      </Helmet>

      <article>
        <h1>Kontakta mig</h1>

        <p>
          Kontakta mig på {emailLink}.
        </p>
      </article>
    </div>
  )
}

export default ContactPage;
