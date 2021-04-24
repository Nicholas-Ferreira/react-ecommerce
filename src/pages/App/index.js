import React from 'react';

import Shelf from '../../components/Shelf';
import Filter from '../../components/Shelf/Filter';
import GithubCorner from '../../components/github/Corner';
import FloatCart from '../../components/FloatCart';

const App = () => (
  <React.Fragment>
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
