import { Helmet } from 'react-helmet';

import React from 'react';

const HeadTag = () => (
  <Helmet>
    <title>Pan Od Chemii</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;600&family=Fredericka+the+Great&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
);

export default HeadTag;
